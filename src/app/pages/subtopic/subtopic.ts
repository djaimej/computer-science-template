import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';

import { ContextualSelection } from '@template/directives/contextual-selection';
import { ContextualSelectionService } from '@template/services/contextual-selection';
import { ESelectionAction } from '@template/models/enums';
import { ISelectedTextContext } from '@template/models/interfaces';
import { ContextService } from '@template/services/context';
import { MarkdownAssetsLoader } from '@template/services/markdown-assets';
import { glossary } from '@domain/glossary';
import { MathDefinition } from '@template/directives/math-definition';

@Component({
  selector: 'app-subtopic',
  imports: [MarkdownComponent, ContextualSelection, MathDefinition ],
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
  private readonly assets = inject(MarkdownAssetsLoader);
  readonly libsReady = signal(false);

  readonly src = signal('');
  readonly error = signal('');
  readonly context = this.contextService.context;
  readonly subject = signal(1);
  readonly semester = signal(1);

  constructor() {
    this.selectionService.getAction()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ type, context }) => {
        if (type === ESelectionAction.LOOKUP) this.lookupInGlossary(context);
      });
    this.assets.load()
      .then(() => this.libsReady.set(true))
      .catch(() => this.error.set('No se pudieron cargar los recursos de contenido'));
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const semesterParam = params.get('semester')!;
        const subjectParam = params.get('subject')!;
        const file = params.get('file')!;
        this.src.set(`documents/semester-${semesterParam}/${subjectParam}/${file}.md`);
        this.semester.set(Number.parseInt(semesterParam));
        this.subject.set(Number.parseInt(subjectParam));
      });
  }

  public onError(error: string | Error): void {
    const httpError = error as HttpErrorResponse;
    this.error.set(
      httpError.status === 404
        ? 'Error 404 - No se encuentra el recurso solicitado'
        : `Error ${httpError.status} - ${httpError.message}`,
    );
  }

  /** Punto de extensión: aquí consultarás el glosario / base de conocimiento. */
  private lookupInGlossary(context: ISelectedTextContext): void {
    if (context.latex) {
      console.log('latex', context.latex);
      const commands = [...new Set(context.latex.match(/\\[a-zA-Z]+/g) ?? [])];
      console.log(commands);
      // p. ej. "\overleftarrow{AB}" → ["\overleftarrow"]
      // buscar cada comando en tu glosario de símbolos → "se lee como…"
      console.log(glossary[context.semester][context.subject]);
      return;
    }
  }
}
