import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IIcon } from '@template/models/interfaces';
import { INTERFACE_INTERACTION } from '@template/models/icon-library';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@template/directives/value-accessor.base';
import { provideValueAccessor } from '@template/providers/provide-value-accessor';

@Component({
  selector: 'app-text-field-icon',
  imports: [AngularSvgIconModule],
  templateUrl: './text-field-icon.html',
  styleUrl: './text-field-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => TextFieldIcon)],
})
export class TextFieldIcon extends ValueAccessorBase<string> {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.search);
  readonly placeholder = input('');
  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
}
