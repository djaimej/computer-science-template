import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-row-message',
  templateUrl: './row-message.html',
  styleUrl: './row-message.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowMessage {
  readonly imageSrc = input('');
  readonly label = input('');
  readonly description = input('');
  readonly date = input('');
  readonly onAction = output<void>();
}
