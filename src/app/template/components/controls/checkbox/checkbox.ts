import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@template/directives/value-accessor.base';
import { provideValueAccessor } from '@template/providers/provide-value-accessor';

@Component({
  selector: 'app-checkbox',
  imports: [AngularSvgIconModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => Checkbox)],
})
export class Checkbox extends ValueAccessorBase<boolean> { }
