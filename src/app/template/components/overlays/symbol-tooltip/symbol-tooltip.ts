import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ISymbolDefinition } from '@template/models/interfaces';
import { ContextService } from '@template/services/context';

import katex from 'katex';

interface IRenderedDefinition {
  definition: ISymbolDefinition;
  symbol: SafeHtml | null;
}

@Component({
  selector: 'app-symbol-tooltip',
  templateUrl: './symbol-tooltip.html',
  styleUrl: './symbol-tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SymbolTooltip {
  private readonly sanitizer = inject(DomSanitizer);
  public readonly definitions = input.required<ISymbolDefinition[]>();
  private readonly contextService = inject(ContextService);
  protected readonly context = this.contextService.context;

  protected readonly items = computed<IRenderedDefinition[]>(() =>
    this.definitions().map((definition) => ({
      definition,
      symbol: this.render(definition.sample ?? definition.command),
    })),
  );

  private render(sample: string): SafeHtml | null {
    try {
      // sample es dato de autoría (no input de usuario) → bypass es seguro aquí.
      const html = katex.renderToString(sample, { throwOnError: false, displayMode: false });
      return this.sanitizer.bypassSecurityTrustHtml(html);
    } catch {
      return null;
    }
  }
}
