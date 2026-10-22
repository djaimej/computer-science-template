// @template/directives/math-definition.ts
import { Directive, HostListener, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription, fromEvent } from 'rxjs';

import { SymbolGlossaryService } from '@template/services/symbol-glossary';
import { SymbolTooltip } from '@template/components/overlays/symbol-tooltip/symbol-tooltip';
import { ISymbolDefinition } from '@template/models/interfaces';

@Directive({
  selector: '[mathDefinition]',
  standalone: true,
})
export class MathDefinition implements OnDestroy {
  private readonly overlay = inject(Overlay);
  private readonly document = inject(DOCUMENT);
  private readonly glossary = inject(SymbolGlossaryService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private overlayRef?: OverlayRef;
  private openSub?: Subscription;
  private rafId: number | null = null;

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const katex = (event.target as HTMLElement).closest<HTMLElement>('.katex');
    if (!katex) return this.close();

    const latex = katex
      .querySelector('annotation[encoding="application/x-tex"]')
      ?.textContent?.trim();
    if (!latex) return this.close();

    const definitions = this.glossary.resolve(latex);
    if (!definitions.length) return this.close(); // sin definición → no abrir

    this.open(katex, definitions);
  }

  private open(origin: HTMLElement, definitions: ISymbolDefinition[]): void {
    this.close();

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPush(true)
      .withPositions([
        { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 8 },
        { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -8 },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: false,
      panelClass: 'symbol-tooltip-overlay',
    });

    const ref = this.overlayRef.attach(new ComponentPortal(SymbolTooltip));
    ref.setInput('definitions', definitions);
    ref.changeDetectorRef.detectChanges(); // pinta sin depender de la zona

    // Todo el ciclo de vida de ESTE tooltip cuelga de una sola Subscription.
    this.openSub = new Subscription();
    this.openSub.add(this.overlayRef.outsidePointerEvents().subscribe(() => this.close()));
    this.openSub.add(this.overlayRef.keydownEvents()
      .subscribe((event) => { if (event.key === 'Escape') this.close(); }));

    // Reposición en scroll/resize, igual que el toolbar de selección.
    // capture:true atrapa también contenedores con scroll interno.
    this.openSub.add(fromEvent(this.document, 'scroll', { capture: true, passive: true })
      .subscribe(() => this.scheduleReposition(origin)));
    this.openSub.add(fromEvent(window, 'resize', { passive: true })
      .subscribe(() => this.scheduleReposition(origin)));
  }

  private scheduleReposition(origin: HTMLElement): void {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      if (!this.overlayRef?.hasAttached()) return;

      const rect = origin.getBoundingClientRect();
      const outOfView =
        rect.bottom < 0 || rect.top > window.innerHeight ||
        rect.right < 0 || rect.left > window.innerWidth;
      if (outOfView) return this.close(); // el símbolo salió de pantalla

      this.overlayRef.updatePosition(); // origin real → CDK relee su rect
    });
  }

  private close(): void {
    this.openSub?.unsubscribe();
    this.openSub = undefined;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }

  public ngOnDestroy(): void {
    this.close();
  }
}
