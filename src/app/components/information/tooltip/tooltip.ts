import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EColor, EOverlayPosition } from '@models/enums';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip {
  readonly tooltip = signal('');
  readonly position = signal<EOverlayPosition>(EOverlayPosition.ABOVE);
  readonly color = signal<EColor>(EColor.WHITE);
  readonly left = signal(0);
  readonly top = signal(0);
  readonly visible = signal(true);
}
