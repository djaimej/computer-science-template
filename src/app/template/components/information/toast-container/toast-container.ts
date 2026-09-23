import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Toast } from '@template/components/information/toast/toast';
import { ToastService } from '@template/services/toast';

@Component({
  selector: 'app-toast-container',
  imports: [Toast],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainer {
  protected readonly service = inject(ToastService);
}
