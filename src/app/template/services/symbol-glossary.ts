import { inject, Injectable, InjectionToken } from '@angular/core';
import { ISymbolDefinition } from '@domain/interfaces';

export const SYMBOL_GLOSSARY =
  new InjectionToken<Record<string, ISymbolDefinition>>('SYMBOL_GLOSSARY');

@Injectable({ providedIn: 'root' })
export class SymbolGlossaryService {
  private readonly table = inject(SYMBOL_GLOSSARY, { optional: true }) ?? {};

  /** Comandos LaTeX presentes en la expresión, resueltos a sus definiciones. */
  public resolve(latex: string): ISymbolDefinition[] {
    const commands = [...new Set(latex.match(/\\[a-zA-Z]+/g) ?? [])];
    return commands
      .map((command) => this.table[command])
      .filter((definition): definition is ISymbolDefinition => !!definition);
  }
}
