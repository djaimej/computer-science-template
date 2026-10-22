import { ISymbolDefinition } from "@template/models/interfaces";

/**
 * Si `sample` no se define `command` se muestra en su lugar.
 */
export const symbols: Record<string, ISymbolDefinition> = {
  '\\in': {
    command: '\\in',
    reads: 'Pertenece a',
  },
  '\\notin': {
    command: '\\notin',
    reads: 'No pertenece a',
  },
  '\\subset': {
    command: '\\subset',
    reads: 'Conjunto',
  },
  '\\subseteq': {
    command: '\\subseteq',
    reads: 'Subconjunto',
  },
  '\\subsetneq': {
    command: '\\subsetneq',
    reads: 'Subconjunto propio',
  },
};
