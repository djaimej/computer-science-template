import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValueAccessorBase } from '@template/directives/value-accessor.base';
import { provideValueAccessor } from '@template/providers/provide-value-accessor';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.html',
  styleUrl: './switch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => Switch)],
})
export class Switch extends ValueAccessorBase<boolean> {
  readonly label = input('');
}
