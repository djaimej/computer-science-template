import { computed, effect, Injectable, signal } from '@angular/core';
import { ETheme, EAccentColor } from '@template/models/enums';
import { IContext } from '@template/models/interfaces';

const STORAGE_KEY = 'context';
const DEFAULT_CONTEXT: IContext = {
  theme: ETheme.NEUTRAL,
  accentColor: EAccentColor.NEUTRO,
};

@Injectable({ providedIn: 'root' })
export class ContextService {
  private readonly _context = signal<IContext>(this.initialContext());

  /** Estado de solo lectura para las vistas. */
  readonly context = this._context.asReadonly();
  readonly theme = computed(() => this._context().theme);
  readonly accentColor = computed(() => this._context().accentColor);
  readonly isDark = computed(() => this._context().theme === ETheme.DARK);

  constructor() {
    // Persistencia reactiva en cada cambio.
    effect(() => {
      const context = this._context();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(context));
      } catch {
        /* almacenamiento no disponible (SSR, modo privado) */
      }
    });
  }

  toggleTheme(): void {
    this._context.update((c) => ({
      ...c,
      theme: c.theme === ETheme.DARK ? ETheme.NEUTRAL : ETheme.DARK,
    }));
  }

  setTheme(theme: ETheme): void {
    this._context.update((c) => ({ ...c, theme }));
  }

  setAccentColor(accentColor: EAccentColor): void {
    this._context.update((c) => ({ ...c, accentColor }));
  }

  private initialContext(): IContext {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<IContext>;
        return {
          theme: parsed.theme ?? DEFAULT_CONTEXT.theme,
          accentColor: parsed.accentColor ?? DEFAULT_CONTEXT.accentColor,
        };
      }
    } catch {
      /* almacenamiento no disponible o JSON inválido */
    }
    return DEFAULT_CONTEXT;
  }
}
