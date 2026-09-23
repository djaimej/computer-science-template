import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValueAccessorBase } from '@template/directives/value-accessor.base';
import { provideValueAccessor } from '@template/providers/provide-value-accessor';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.html',
  styleUrl: './text-box.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => TextBox)],
})
export class TextBox extends ValueAccessorBase<string> {
  readonly placeholder = input('');
}
