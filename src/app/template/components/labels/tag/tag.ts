import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { INTERFACE_INTERACTION } from '@template/models/icon-library';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tag {
  readonly dismissible = input(false);
  readonly type = input<'white' | 'black'>('white');
  readonly text = input('');
  protected readonly visible = signal(true);

  close(): void {
    this.visible.set(false);
  }
}
