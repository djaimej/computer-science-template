import {
  afterNextRender, ChangeDetectionStrategy, Component, computed,
  ElementRef, inject, Injector, input, signal, viewChild,
} from '@angular/core';
import { EAlign, EPosition } from '@template/models/enums';
import { IIcon } from '@template/models/interfaces';
import { ARROWS } from '@template/models/icon-library';
import { ButtonIcon } from '@template/components/buttons';
import { Variant, Size } from '@template/models/types';

@Component({
  selector: 'app-drop',
  imports: [ButtonIcon],
  templateUrl: './drop.html',
  styleUrl: './drop.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.disabled]': 'disabled()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Drop {
  readonly position = input<EPosition>(EPosition.DOWN);
  readonly align = input<EAlign>(EAlign.CENTER);
  readonly variant = input<Variant>('solid');
  readonly size = input<Size>('md');
  readonly disabled = input(false);
  readonly hideOnLeave = input(true);
  readonly icon = input<IIcon>();
  readonly label = input<string>();

  // read: ElementRef → nodo del <app-button-icon>, no la instancia del componente.
  private readonly dropButton = viewChild('dropButton', { read: ElementRef });
  private readonly dropContent = viewChild<ElementRef<HTMLDialogElement>>('dropContent');

  private readonly injector = inject(Injector);

  readonly left = signal(0);
  readonly top = signal(0);
  readonly show = signal(false);
  readonly render = signal(false);

  private readonly chevronByPosition = computed<IIcon>(() => {
    switch (this.position()) {
      case EPosition.LEFT: return ARROWS.chevronLeft;
      case EPosition.RIGHT: return ARROWS.chevronRight;
      case EPosition.UP: return ARROWS.chevronUp;
      default: return ARROWS.chevronDown;
    }
  });

  /** Icono explícito si se pasa; si no, chevron según la posición (afordancia de dropdown). */
  protected readonly effectiveIcon = computed<IIcon>(() => this.icon() ?? this.chevronByPosition());

  public open(): void {
    const willOpen = !this.render();
    this.render.set(willOpen);
    if (!willOpen) {
      this.show.set(false);
      return;
    }
    // Corre una sola vez tras el próximo render, con el <dialog> ya medible. Zoneless-safe.
    afterNextRender(
      () => {
        this.getPositions();
        this.show.set(true);
      },
      { injector: this.injector },
    );
  }

  protected onMouseLeave(): void {
    if (this.hideOnLeave()) {
      this.show.set(false);
      this.render.set(false);
    }
  }

  private getPositions(): void {
    const buttonElement = this.dropButton()?.nativeElement as HTMLElement | undefined;
    const contentElement = this.dropContent()?.nativeElement;
    if (!buttonElement || !contentElement) return;

    const buttonWidth = buttonElement.offsetWidth || 0;
    const buttonHeight = buttonElement.offsetHeight || 0;
    const contentWidth = contentElement.offsetWidth || 0;
    const contentHeight = contentElement.offsetHeight || 0;
    const buttonRect = buttonElement.getBoundingClientRect();

    const halfContentW = Math.round(contentWidth / 2);
    const halfContentH = Math.round(contentHeight / 2);
    const halfButtonW = Math.round(buttonWidth / 2);
    const halfButtonH = Math.round(buttonHeight / 2);

    const leftPositions = new Map<EPosition, Map<EAlign, number>>([
      [EPosition.DOWN, new Map([[EAlign.START, -(contentWidth - buttonWidth)], [EAlign.CENTER, -(halfContentW - halfButtonW)], [EAlign.END, 0]])],
      [EPosition.LEFT, new Map([[EAlign.START, -contentWidth], [EAlign.CENTER, -contentWidth], [EAlign.END, -contentWidth]])],
      [EPosition.RIGHT, new Map([[EAlign.START, buttonWidth], [EAlign.CENTER, buttonWidth], [EAlign.END, buttonWidth]])],
      [EPosition.UP, new Map([[EAlign.START, -(contentWidth - buttonWidth)], [EAlign.CENTER, -(halfContentW - halfButtonW)], [EAlign.END, 0]])],
    ]);

    const topPositions = new Map<EPosition, Map<EAlign, number>>([
      [EPosition.DOWN, new Map([[EAlign.START, buttonHeight], [EAlign.CENTER, buttonHeight], [EAlign.END, buttonHeight]])],
      [EPosition.LEFT, new Map([[EAlign.START, -(contentHeight - buttonHeight)], [EAlign.CENTER, -(halfContentH - halfButtonH)], [EAlign.END, 0]])],
      [EPosition.RIGHT, new Map([[EAlign.START, -(contentHeight - buttonHeight)], [EAlign.CENTER, -(halfContentH - halfButtonH)], [EAlign.END, 0]])],
      [EPosition.UP, new Map([[EAlign.START, -contentHeight], [EAlign.CENTER, -contentHeight], [EAlign.END, -contentHeight]])],
    ]);

    let calculatedLeft = leftPositions.get(this.position())?.get(this.align()) ?? 0;
    let calculatedTop = topPositions.get(this.position())?.get(this.align()) ?? 0;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const dropdownLeft = buttonRect.left + calculatedLeft;
    const dropdownRight = dropdownLeft + contentWidth;
    const dropdownTop = buttonRect.top + calculatedTop;
    const dropdownBottom = dropdownTop + contentHeight;

    if (dropdownRight > viewportWidth) calculatedLeft -= (dropdownRight - viewportWidth) + 8;
    if (dropdownLeft < 0) calculatedLeft += Math.abs(dropdownLeft) + 8;
    if (dropdownBottom > viewportHeight) calculatedTop -= (dropdownBottom - viewportHeight) + 8;
    if (dropdownTop < 0) calculatedTop += Math.abs(dropdownTop) + 8;

    this.left.set(calculatedLeft);
    this.top.set(calculatedTop);
  }
}
