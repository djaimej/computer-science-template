import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ETheme } from '@models/enums';

const STORAGE_KEY = 'paper-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly theme = signal<ETheme>(this.initialTheme());

  readonly current = this.theme.asReadonly();
  readonly isDark = computed(() => this.theme() === ETheme.DARK);

  constructor() {
    // Persistir en cada cambio.
    effect(() => {
      try {
        this.document.documentElement.classList.toggle('dark', this.theme() === ETheme.DARK);
        localStorage.setItem(STORAGE_KEY, this.theme());
      } catch {
        /* almacenamiento no disponible */
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === ETheme.DARK ? ETheme.NEUTRAL : ETheme.DARK));
  }

  set(theme: ETheme): void {
    this.theme.set(theme);
  }

  setDark(isDark: boolean): void {
    this.theme.set(isDark ? ETheme.DARK : ETheme.NEUTRAL);
  }

  private initialTheme(): ETheme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === ETheme.DARK || stored === ETheme.NEUTRAL) {
        return stored as ETheme;
      }
    } catch {
      /* almacenamiento no disponible */
    }
    const prefersDark =
      this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    return prefersDark ? ETheme.DARK : ETheme.NEUTRAL;
  }
}
