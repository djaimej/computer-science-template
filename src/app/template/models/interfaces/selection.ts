import { ESelectionAction } from '@template/models/enums';

export interface IOption {
  label: string;
  value: string;
}

/**
 * Contexto de una selección válida dentro de un <markdown>.
 * `range` se guarda CLONADO (uso transitorio): no debe conservarse a largo
 * plazo porque se invalida si el DOM muta (re-render de ngx-markdown).
 */
export interface ISelectedTextContext {
  text: string;
  rect: DOMRect;
  range: Range;
  hostElement: HTMLElement;
  subjectId?: string;
  contextBefore?: string;
  contextAfter?: string;
}

export interface ISelectionAction {
  type: ESelectionAction;
  context: ISelectedTextContext;
}
