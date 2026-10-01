import {
  ChangeDetectionStrategy, Component, DestroyRef, ElementRef, OnInit,
  computed, inject, signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';

import { TextFieldIcon } from '@template/components/form-elements/text-field-icon/text-field-icon';
import { ButtonIcon } from '@template/components/buttons/button-icon/button-icon';
import { ButtonFloatingAction } from '@template/components/buttons/button-floating-action/button-floating-action';
import { Drop } from '@template/components/overlays/drop/drop';
import { RadioItem } from '@template/components/controls/radio-item/radio-item';
import { NATURE_WEATHER, INTERFACE_INTERACTION, ARROWS, OBJECTS_THINGS } from '@template/models/icon-library';
import { IIcon } from '@template/models/interfaces';
import { EAccentColor, EPosition, EAlign } from '@template/models/enums';
import { ComputerScienceService } from '@domain/services/computer-science';
import { ContextService } from '@template/services/context';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet, FormsModule, ButtonIcon, TextFieldIcon,
    ButtonFloatingAction, Drop, RadioItem,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize()',
    '(document:keyup)': 'onDocumentKeyup($event)',
  },
})
export class Layout implements OnInit {
  private readonly computerScienceService = inject(ComputerScienceService);
  private readonly main = viewChild<ElementRef<HTMLElement>>('main');
  private readonly contextService = inject(ContextService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly iconHome: IIcon = OBJECTS_THINGS.home;
  readonly iconColor: IIcon = OBJECTS_THINGS.palette;
  readonly iconPrev: IIcon = ARROWS.arrowLeft;
  readonly iconNext: IIcon = ARROWS.arrowRight;
  readonly iconUp: IIcon = ARROWS.chevronUp;
  readonly iconSearch: IIcon = INTERFACE_INTERACTION.search;

  readonly position = EPosition;
  readonly align = EAlign;
  readonly accentColors: EAccentColor[] = Object.values(EAccentColor);

  readonly context = this.contextService.context;
  readonly iconTheme = computed<IIcon>(() =>
    this.contextService.isDark() ? NATURE_WEATHER.sun : NATURE_WEATHER.moon,
  );

  readonly searchText = signal('');
  readonly isHome = signal(this.router.url === '/');
  readonly isMobile = signal(window.innerWidth < 768);
  readonly scrollButton = signal(false);
  readonly pathFound = signal(false);
  readonly prevPath = signal('');
  readonly nextPath = signal('');

  private paths: string[] = [];
  private searchTimeout?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.computerScienceService.getSearchText()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => { if (value === null) this.searchText.set(''); });

    this.router.events
      .pipe(
        startWith(this.router.url),
        filter((event) => typeof event === 'string' || event instanceof NavigationEnd),
        map(() => this.router.url),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((url) => {
        this.updateNav(url);
        this.scrollToTop('auto');
      });
  }

  private updateNav(url: string): void {
    if (this.isHome()) return;
    this.paths = this.computerScienceService.getAllSubtopicPaths();
    const file = url.split('/')[3];
    const index = this.paths.findIndex((path) => path.includes(`/${file}`));
    this.pathFound.set(index >= 0);
    if (index >= 0) {
      this.prevPath.set(this.paths[index - 1] ?? '');
      this.nextPath.set(index < this.paths.length - 1 ? this.paths[index + 1] : '');
    }
  }

  protected onResize(): void {
    this.isMobile.set(window.innerWidth < 768);
  }

  public toggleTheme(): void {
    this.contextService.toggleTheme();
  }

  public setAccentColor(accentColor: string): void {
    this.contextService.setAccentColor(accentColor as EAccentColor);
  }

  public onSearch(value: string): void {
    this.searchText.set(value);
    clearTimeout(this.searchTimeout);
    if (value.length >= 3) {
      this.searchTimeout = setTimeout(() => this.computerScienceService.search(value), 2000);
    } else if (value.length === 0) {
      this.computerScienceService.clearSearch();
    }
  }

  public prev(): void {
    const path = this.prevPath();
    if (path) this.router.navigate([path]);
  }

  public next(): void {
    const path = this.nextPath();
    if (path) this.router.navigate([path]);
  }

  public scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    this.main()?.nativeElement.scrollTo({ top: 0, behavior });
  }

  public scrollFunction(): void {
    const el = this.main()?.nativeElement;
    this.scrollButton.set((el?.scrollTop ?? 0) > 100);
  }

  public gotToHome(): void {
    this.isHome.set(true);
    this.pathFound.set(false);
    this.router.navigate(['/']);
  }

  protected onDocumentKeyup(event: KeyboardEvent): void {
    if (!this.pathFound()) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const el = event.target as HTMLElement | null;
    if (el?.closest('input, textarea, select, [contenteditable="true"]')) return;

    const target =
      event.key === 'ArrowRight' ? this.nextPath() :
        event.key === 'ArrowLeft' ? this.prevPath() :
          '';

    if (target) this.router.navigate([target]);
  }
}
