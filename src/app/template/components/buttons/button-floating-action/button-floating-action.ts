import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { IIcon } from '@template/models/interfaces';
import { FloatingPosition, Variant } from '@template/models/types';
import { ButtonType } from '@template/models/types';
import { INTERFACE_INTERACTION } from '@template/models/icon-library';

@Component({
  selector: 'app-button-floating-action',
  templateUrl: './button-floating-action.html',
  styleUrl: './button-floating-action.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '(click)': 'onClickButton($event)',
  },
})
export class ButtonFloatingAction {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.plus);
  readonly variant = input<Variant>('solid');
  readonly type = input<ButtonType>('button');
  readonly position = input<FloatingPosition>('bottom right');
  readonly disabled = input(false);
  readonly clicked = output<Event>();

  protected readonly iconUrl = computed(() => `url("icons/${this.icon().library}/${this.icon().file}")`);
  protected readonly classes = computed(() => `${this.variant()} ${this.disabled() ? 'disabled' : ''}`);

  onClickButton(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.clicked.emit(event);
  }
}
