import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IIcon } from '@template/models/interfaces';
import { Size } from '@template/models/types';
import { INTERFACE_INTERACTION } from '@template/models/icon-library';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.star);
  readonly size = input<Size>('md');
  readonly onAccent = input<boolean>(false);
  protected readonly iconUrl = computed(
    () => `url("icons/${this.icon().library}/${this.icon().file}")`,
  );
}
