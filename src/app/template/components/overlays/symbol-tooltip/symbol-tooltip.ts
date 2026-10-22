import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ISymbolDefinition } from '@domain/interfaces';
import { ContextService } from '@template/services/context';

@Component({
  selector: 'app-symbol-tooltip',
  templateUrl: './symbol-tooltip.html',
  styleUrl: './symbol-tooltip.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SymbolTooltip {
  public readonly definitions = input.required<ISymbolDefinition[]>();
  private readonly contextService = inject(ContextService);
  protected readonly context = this.contextService.context;
}
