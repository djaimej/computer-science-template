import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { IIcon } from '@template/models/interfaces';
import { INTERFACE_INTERACTION } from '@template/models/icon-library';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.check);
  readonly type = input<'default' | 'white' | 'black'>('default');
  readonly text = input('');

  protected readonly visible = signal(true);
  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
  protected readonly srcClose =
    `icons/${INTERFACE_INTERACTION.clearXSolid.library}/${INTERFACE_INTERACTION.clearXSolid.file}`;

  close(): void {
    this.visible.set(false);
  }
}
