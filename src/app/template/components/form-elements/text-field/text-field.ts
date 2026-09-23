import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValueAccessorBase } from '@template/directives/value-accessor.base';
import { provideValueAccessor } from '@template/providers/provide-value-accessor';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.html',
  styleUrl: './text-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => TextField)],
})
export class TextField extends ValueAccessorBase<string> {
  readonly placeholder = input('');
}
