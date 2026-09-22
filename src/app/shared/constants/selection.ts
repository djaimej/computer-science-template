export const SELECTION_CONFIG = {
  /** Caracteres mínimos (tras trim) para mostrar la barra. */
  minSelectionLength: 2,
  /** Caracteres de contexto antes/después a capturar. */
  contextChars: 160,
  /** Debounce (ms) para selección por teclado. */
  selectionChangeDebounce: 200,
  /** Cerrar la barra tras ejecutar una acción. */
  closeOnAction: true,
} as const;