import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@template/directives/value-accessor.base';
import { provideValueAccessor } from '@template/providers/provide-value-accessor';

@Component({
  selector: 'app-checkbox-item',
  imports: [AngularSvgIconModule],
  templateUrl: './checkbox-item.html',
  styleUrl: './checkbox-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => CheckboxItem)],
})
export class CheckboxItem extends ValueAccessorBase<boolean> {
  readonly label = input('');
}
