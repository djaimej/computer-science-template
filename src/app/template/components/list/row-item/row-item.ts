import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { IIcon } from '@template/models/interfaces';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-row-item',
  imports: [AngularSvgIconModule],
  templateUrl: './row-item.html',
  styleUrl: './row-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowItem {
  readonly icon = input<IIcon>();
  readonly padding = input(false);
  readonly label = input('');
  readonly description = input('');
  readonly action = input('');
  readonly onAction = output<void>();

  protected readonly src = computed(() => {
    const icon = this.icon();
    return icon?.file ? `icons/${icon.library}/${icon.file}` : '';
  });
}
