import {
  ChangeDetectionStrategy, Component, DestroyRef, OnInit,
  computed, inject, signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';

import { TextFieldIcon } from '@components/form-elements/text-field-icon/text-field-icon';
import { ButtonIcon } from '@components/buttons/button-icon/button-icon';
import { ButtonFloatingAction } from '@components/buttons/button-floating-action/button-floating-action';
import { Drop } from '@components/overlays/drop/drop';
import { RadioItem } from '@components/controls/radio-item/radio-item';
import { NATURE_WEATHER, INTERFACE_INTERACTION, ARROWS, OBJECTS_THINGS } from '@shared/constants/icons';
import { IIcon } from '@models/interfaces/icon';
import { ETheme, EAccentColor, EPosition, EAlign } from '@models/enums';
import { IContext } from '@models/interfaces/context';
import { ComputerScienceService } from '@services/computer-science';
import { ContextService } from '@services/context';

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
  },
})
export class Layout implements OnInit {
  private readonly computerScienceService = inject(ComputerScienceService);
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

  readonly context = signal<IContext>(this.contextService.getCurrentContext());
  readonly iconTheme = computed<IIcon>(() =>
    this.context().theme === ETheme.DARK ? NATURE_WEATHER.sun : NATURE_WEATHER.moon,
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
      .subscribe((url) => this.updateNav(url));
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

  public toggleTheme(theme?: ETheme): void {
    const next = theme ?? (this.context().theme === ETheme.NEUTRAL ? ETheme.DARK : ETheme.NEUTRAL);
    this.updateContext({ theme: next });
  }

  public setAccentColor(accentColor: string): void {
    this.updateContext({ accentColor: accentColor as EAccentColor });
  }

  private updateContext(patch: Partial<IContext>): void {
    const next: IContext = { ...this.context(), ...patch };
    this.context.set(next);
    this.contextService.setContext(next);
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

  public async prev(main: HTMLElement): Promise<void> {
    await this.router.navigate([this.prevPath()]);
    this.scrollToTop(main, 'auto');
  }

  public async next(main: HTMLElement): Promise<void> {
    await this.router.navigate([this.nextPath()]);
    this.scrollToTop(main, 'auto');
  }

  public scrollToTop(main: HTMLElement, behavior: ScrollBehavior): void {
    main.scrollTo({ top: 0, behavior });
  }

  public scrollFunction(main: HTMLElement): void {
    this.scrollButton.set(main.scrollTop > 100);
  }

  public gotToHome(): void {
    this.isHome.set(true);
    this.pathFound.set(false);
    this.router.navigate(['/']);
  }
}
