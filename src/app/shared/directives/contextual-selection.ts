import { Directive, ElementRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ContextualSelectionService } from '@shared/services/contextual-selection';

@Directive({
  selector: '[contextualSelection]',
  standalone: true,
})
export class ContextualSelection implements OnInit, OnDestroy {
  @Input('contextualSelectionSubjectId') public subjectId?: string;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly service = inject(ContextualSelectionService);

  public ngOnInit(): void {
    // El registro es por referencia al host, independiente del HTML interno;
    // por eso sobrevive a los re-render de ngx-markdown sin re-suscribir nada.
    this.service.register(this.host.nativeElement, this.subjectId);
  }

  public ngOnDestroy(): void {
    this.service.unregister(this.host.nativeElement);
  }
}
