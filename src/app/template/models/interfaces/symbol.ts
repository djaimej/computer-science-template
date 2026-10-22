export interface ISymbolDefinition {
  command: string;
  reads: string;
  description?: string;
  sample?: string;   // LaTeX renderable que muestra el símbolo, p. ej. '\overleftarrow{AB}'
}
