import {
  ChangeDetectionStrategy, Component, DestroyRef, OnInit, ViewEncapsulation,
  inject, signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';

import { ContextualSelection } from '@template/directives/contextual-selection';
import { ContextualSelectionService } from '@template/services/contextual-selection';
import { ESelectionAction } from '@template/models/enums';
import { ISelectedTextContext } from '@template/models/interfaces';
import { ContextService } from '@template/services/context';

@Component({
  selector: 'app-subtopic',
  imports: [MarkdownComponent, ContextualSelection],
  templateUrl: './subtopic.html',
  styleUrl: './subtopic.scss',
  changeDetection: ChangeDetectionStrategy.Eager, // sin cambios (pendiente de la nota del informe)
  encapsulation: ViewEncapsulation.None,
})
export class Subtopic implements OnInit {
  private readonly contextService = inject(ContextService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly selectionService = inject(ContextualSelectionService);
  private readonly destroyRef = inject(DestroyRef);

  readonly subjectId = '2213';
  readonly src = signal('');
  readonly error = signal('');
  readonly context = this.contextService.context;

  constructor() {
    this.selectionService.getAction()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ type, context }) => {
        if (type === ESelectionAction.LOOKUP) this.lookupInGlossary(context);
      });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const semester = params.get('semester')!;
        const subject = params.get('subject')!;
        const file = params.get('file')!;
        this.src.set(`documents/semester-${semester}/${subject}/${file}.md`);
      });
  }

  public onError(error: string | Error): void {
    const httpError = error as HttpErrorResponse;
    this.error.set(
      httpError.status === 404
        ? 'Error 404 - No se encuentra el recurso solicitado'
        : `Error ${httpError.status} - ${httpError.statusText}`,
    );
  }

  /** Punto de extensión: aquí consultarás el glosario / base de conocimiento. */
  private lookupInGlossary(context: ISelectedTextContext): void {
    console.log('Glosario:', context.text, '· subtema', context.subjectId);
  }
}
