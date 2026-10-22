import { ISymbolDefinition } from "./interfaces";

export const symbols: Record<string, ISymbolDefinition> = {
  '\\overleftarrow': {
    command: '\\overleftarrow',
    reads: 'Flecha hacia la izquierda sobre la expresión',
    description: 'Notación de vector o segmento orientado hacia la izquierda.',
  },
  '\\underleftarrow': {
    command: '\\underleftarrow',
    reads: 'Flecha hacia la izquierda debajo de la expresión',
  },
  '\\in': {
    command: '\\in',
    reads: 'Pertenece a',
  },
};
