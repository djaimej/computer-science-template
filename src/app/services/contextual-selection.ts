import { inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BehaviorSubject, Observable, Subject, Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { SELECTION_CONFIG } from '@shared/constants/selection';
import { ESelectionAction } from '@models/enums';
import { ISelectedTextContext, ISelectionAction } from '@models/interfaces/selection';
import { SelectionToolbar } from '@components/overlays/selection-toolbar/selection-toolbar';

interface IHostMeta {
  subjectId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContextualSelectionService {
  private readonly zone = inject(NgZone);
  private readonly document = inject(DOCUMENT);
  private readonly overlay = inject(Overlay);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** <markdown> registrados. Map para O(1) en register/unregister/búsqueda. */
  private readonly hosts = new Map<HTMLElement, IHostMeta>();
  private readonly selection = new BehaviorSubject<ISelectedTextContext | null>(null);
  private readonly action = new Subject<ISelectionAction>();

  private globalListeners?: Subscription;
  private isPointerDown = false;
  private rafId: number | null = null;

  private overlayRef?: OverlayRef;
  private anchor?: HTMLElement;

  constructor() {
    // Vínculo reactivo: el estado de selección abre/cierra/posiciona el overlay.
    // El subscribe vive lo que vive el singleton (no se desuscribe).
    this.selection.subscribe((context) => {
      // Operación de baja frecuencia: la corremos dentro de la zona porque
      // toca el ciclo de vida de un componente Angular (el portal).
      this.zone.run(() => {
        if (context) this.openOverlay(context);
        else this.closeOverlay();
      });
    });
  }

  public getSelection(): Observable<ISelectedTextContext | null> {
    return this.selection.asObservable();
  }

  public getAction(): Observable<ISelectionAction> {
    return this.action.asObservable();
  }

  public getCurrentSelection(): ISelectedTextContext | null {
    return this.selection.getValue();
  }

  public register(host: HTMLElement, subjectId?: string): void {
    if (!this.isBrowser) return;
    this.hosts.set(host, { subjectId });
    this.ensureGlobalListeners();
  }

  public unregister(host: HTMLElement): void {
    this.hosts.delete(host);
    if (this.hosts.size === 0) this.teardown();
  }

  public emitAction(type: ESelectionAction): void {
    const context = this.selection.getValue();
    if (!context) return;
    this.zone.run(() => this.action.next({ type, context }));
    if (SELECTION_CONFIG.closeOnAction) this.clear();
  }

  public clear(): void {
    this.selection.next(null);
  }

  private ensureGlobalListeners(): void {
    if (this.globalListeners || !this.isBrowser) return;

    // Eventos de alta frecuencia fuera de la zona: no deben disparar CD.
    this.zone.runOutsideAngular(() => {
      const sub = new Subscription();

      sub.add(fromEvent<PointerEvent>(this.document, 'pointerdown', { capture: true })
        .subscribe((event) => this.onPointerDown(event)));

      sub.add(fromEvent(this.document, 'pointerup')
        .subscribe(() => { this.isPointerDown = false; this.evaluate(); }));

      // Selección por teclado (Shift+flechas). Debounced para no parpadear.
      sub.add(fromEvent(this.document, 'selectionchange')
        .pipe(debounceTime(SELECTION_CONFIG.selectionChangeDebounce))
        .subscribe(() => { if (!this.isPointerDown) this.evaluate(); }));

      // Re-posicionamos (no ocultamos) en scroll/resize. rAF para throttle.
      sub.add(fromEvent(this.document, 'scroll', { capture: true, passive: true })
        .subscribe(() => this.scheduleReposition()));
      sub.add(fromEvent(window, 'resize', { passive: true })
        .subscribe(() => this.scheduleReposition()));

      this.globalListeners = sub;
    });
  }

  private onPointerDown(event: PointerEvent): void {
    // No cerrar si el click es sobre la propia barra (preserva la selección).
    if (this.overlayRef?.overlayElement.contains(event.target as Node)) return;
    this.isPointerDown = true;
    this.clear(); // click fuera => ocultar
  }

  // Núcleo de evaluación

  private evaluate(): void {
    const selection = this.document.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
      return this.clear();
    }

    const text = selection.toString().trim();
    if (text.length < SELECTION_CONFIG.minSelectionLength) return this.clear();

    const host = this.findHost(selection.anchorNode);
    if (!host) return this.clear(); // selección fuera de cualquier <markdown>

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return this.clear();

    const { contextBefore, contextAfter } = this.extractContext(host.el, range);

    this.selection.next({
      text,
      rect,
      range: range.cloneRange(),
      hostElement: host.el,
      subjectId: host.meta.subjectId,
      contextBefore,
      contextAfter,
    });
  }

  /** Host <markdown> que contiene el nodo, o null. */
  private findHost(node: Node | null): { el: HTMLElement; meta: IHostMeta } | null {
    if (!node) return null;
    for (const [el, meta] of this.hosts) {
      if (el.contains(node)) return { el, meta };
    }
    return null;
  }

  /** Texto contiguo antes/después de la selección, dentro del host. */
  private extractContext(host: HTMLElement, range: Range): {
    contextBefore?: string;
    contextAfter?: string;
  } {
    const { contextChars } = SELECTION_CONFIG;
    try {
      const before = this.document.createRange();
      before.selectNodeContents(host);
      before.setEnd(range.startContainer, range.startOffset);

      const after = this.document.createRange();
      after.selectNodeContents(host);
      after.setStart(range.endContainer, range.endOffset);

      return {
        contextBefore: before.toString().slice(-contextChars),
        contextAfter: after.toString().slice(0, contextChars),
      };
    } catch {
      return {};
    }
  }

  // Overlay (CDK)

  private openOverlay(context: ISelectedTextContext): void {
    this.ensureOverlay();
    this.updateAnchor(context.rect);
    if (!this.overlayRef!.hasAttached()) {
      this.overlayRef!.attach(new ComponentPortal(SelectionToolbar));
    }
    this.overlayRef!.updatePosition();
  }

  private ensureOverlay(): void {
    if (this.overlayRef) return;

    // Ancla virtual (fixed) sobre el rect de la selección: CDK calcula
    // flip arriba/abajo y push dentro del viewport conectado a ella.
    this.anchor = this.document.createElement('div');
    Object.assign(this.anchor.style, {
      position: 'fixed', pointerEvents: 'none', zIndex: '0',
    } as Partial<CSSStyleDeclaration>);
    this.document.body.appendChild(this.anchor);

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.anchor)
      .withPush(true)
      .withFlexibleDimensions(false)
      .withPositions([
        { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -8 },
        { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 8 },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: false,
      panelClass: 'contextual-selection-overlay',
    });
  }

  private updateAnchor(rect: DOMRect): void {
    if (!this.anchor) return;
    Object.assign(this.anchor.style, {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    } as Partial<CSSStyleDeclaration>);
  }

  private closeOverlay(): void {
    this.overlayRef?.detach(); // reutilizamos el OverlayRef entre selecciones
  }

  /** Re-calcula el rect desde el Range vivo y re-posiciona (scroll/resize). */
  private scheduleReposition(): void {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      const context = this.selection.getValue();
      if (!context || !this.overlayRef?.hasAttached()) return;
      const rect = context.range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return this.clear();
      this.updateAnchor(rect);
      this.overlayRef.updatePosition();
    });
  }

  // Teardown

  private teardown(): void {
    this.globalListeners?.unsubscribe();
    this.globalListeners = undefined;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.clear();
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
    this.anchor?.remove();
    this.anchor = undefined;
    // El subscribe a `selection` se conserva: si vuelve a registrarse un host,
    // el estado seguirá manejando el overlay (que se recrea en ensureOverlay).
  }
}
