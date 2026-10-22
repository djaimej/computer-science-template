import { ISymbolDefinition } from "@template/models/interfaces";

export const symbols: Record<string, ISymbolDefinition> = {
  '\\overleftarrow': {
    command: '\\overleftarrow',
    reads: 'Flecha hacia la izquierda sobre la expresión',
    description: 'Vector o segmento orientado hacia la izquierda.',
    sample: '\\overleftarrow{AB}',
  },
  '\\underleftarrow': {
    command: '\\underleftarrow',
    reads: 'Flecha hacia la izquierda debajo de la expresión',
    sample: '\\underleftarrow{AB}',
  },
  '\\in': {
    command: '\\in',
    reads: 'Pertenece a',
  },
};
