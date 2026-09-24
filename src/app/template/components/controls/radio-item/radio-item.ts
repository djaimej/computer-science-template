import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.html',
  styleUrl: './radio-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioItem {
  readonly id = input('');
  readonly name = input('');
  readonly value = input('');
  readonly label = input('');
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly selected = output<string>();
}
