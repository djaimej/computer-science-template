import {
  DestroyRef, Directive, HostListener, inject, OnDestroy, PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { SymbolGlossaryService } from '@template/services/symbol-glossary';
import { SymbolTooltip } from '@template/components/overlays/symbol-tooltip/symbol-tooltip';
import { ISymbolDefinition } from '@template/models/interfaces';

@Directive({
  selector: '[mathDefinition]',
  standalone: true,
})
export class MathDefinition implements OnDestroy {
  private readonly overlay = inject(Overlay);
  private readonly glossary = inject(SymbolGlossaryService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private overlayRef?: OverlayRef;

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
    });

    const ref = this.overlayRef.attach(new ComponentPortal(SymbolTooltip));
    ref.setInput('definitions', definitions);
    ref.changeDetectorRef.detectChanges(); // pinta sin depender de la zona

    // Cerrar al clic fuera o con Escape. Se completan al disponer el overlay.
    this.overlayRef.outsidePointerEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.close());
    this.overlayRef.keydownEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((e) => { if (e.key === 'Escape') this.close(); });
  }

  private close(): void {
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }

  public ngOnDestroy(): void {
    this.close();
  }
}
