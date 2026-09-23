import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IIcon } from '@template/models/interfaces';
import { ESelectionAction } from '@template/models/enums';
import { OBJECTS_THINGS } from '@template/models/icon-library';
import { Icon } from '@template/components/media/icon/icon';
import { ContextualSelectionService } from '@template/services/contextual-selection';
import { ContextService } from '@template/services/context';

interface IToolbarAction {
  type: ESelectionAction;
  label: string;
  icon: IIcon;
}

@Component({
  selector: 'app-selection-toolbar',
  imports: [Icon],
  templateUrl: './selection-toolbar.html',
  styleUrl: './selection-toolbar.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionToolbar {
  private readonly service = inject(ContextualSelectionService);
  private readonly contextService = inject(ContextService);
  protected readonly context = this.contextService.context;

  public readonly actions: IToolbarAction[] = [
    { type: ESelectionAction.LOOKUP, label: 'Explicar concepto', icon: OBJECTS_THINGS.bookOpen },
  ];

  /** Clave UX: evita que el navegador colapse la selección al presionar la barra. */
  public onPointerDown(event: PointerEvent): void {
    event.preventDefault();
  }

  public run(type: ESelectionAction): void {
    this.service.emitAction(type);
  }
}
