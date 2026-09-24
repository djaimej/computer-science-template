import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Radio {
  readonly id = input('');
  readonly name = input('');
  readonly value = input('');
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly selected = output<string>();
}
