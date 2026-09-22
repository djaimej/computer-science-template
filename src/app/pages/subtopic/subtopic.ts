import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MarkdownComponent } from 'ngx-markdown';

import { ContextualSelection } from '@shared/directives/contextual-selection';
import { ContextualSelectionService } from '@services/contextual-selection';
import { ESelectionAction } from '@models/enums';
import { ISelectedTextContext } from '@models/interfaces/selection';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ContextService } from '@services/context';
import { IContext } from '@models/interfaces/context';

@Component({
  selector: 'app-subtopic',
  imports: [MarkdownComponent, ContextualSelection],
  templateUrl: './subtopic.html',
  styleUrl: './subtopic.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Subtopic implements OnInit {
  public src: string = '';
  public error: string = '';
  public context: IContext;

  private readonly selectionService = inject(ContextualSelectionService);
  private readonly destroyRef = inject(DestroyRef);
  public readonly subjectId = '2213';

  constructor(
    private contextService: ContextService,
    private activatedRoute: ActivatedRoute
  ) {
    this.context = this.contextService.getCurrentContext();
    this.selectionService.getAction()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ type, context }) => {
        if (type === ESelectionAction.LOOKUP) this.lookupInGlossary(context);
      });
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const semester: string = params.get('semester')!;
      const subject: string = params.get('subject')!;
      const file: string = params.get('file')!;
      this.src = `documents/semester-${semester}/${subject}/${file}.md`;
    });
    this.contextService.getContext().subscribe(context => { this.context = context; });
  }

  public onError(error: string | Error): void {
    const httpErrorResponse = (error as HttpErrorResponse);
    if (httpErrorResponse.status === 404) {
      this.error = 'Error 404 - No se encuentra el recurso solicitado';
    } else {
      this.error = `Error ${httpErrorResponse.status} - ${httpErrorResponse.statusText}`;
    }
  }

  /** Punto de extensión: aquí consultarás el glosario / base de conocimiento. */
  private lookupInGlossary(context: ISelectedTextContext): void {
    // context.text  → término
    // context.contextBefore / contextAfter → para desambiguar
    // context.subjectId → de qué subtema proviene
    console.log('Glosario:', context.text, '· subtema', context.subjectId);
  }

}
