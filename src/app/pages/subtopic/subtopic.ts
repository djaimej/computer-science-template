import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';

import { ContextService } from '@template/services/context';
import { MarkdownAssetsLoader } from '@template/services/markdown-assets';
import { MathDefinition } from '@template/directives/math-definition';

@Component({
  selector: 'app-subtopic',
  imports: [MarkdownComponent, MathDefinition],
  templateUrl: './subtopic.html',
  styleUrl: './subtopic.scss',
  changeDetection: ChangeDetectionStrategy.Eager, // sin cambios (pendiente de la nota del informe)
  encapsulation: ViewEncapsulation.None,
})
export class Subtopic implements OnInit {
  private readonly contextService = inject(ContextService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly assets = inject(MarkdownAssetsLoader);
  readonly libsReady = signal(false);

  readonly src = signal('');
  readonly error = signal('');
  readonly context = this.contextService.context;
  readonly subject = signal(1);
  readonly semester = signal(1);

  constructor() {
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
}
