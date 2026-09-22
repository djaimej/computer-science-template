import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ETheme } from '@models/enums';
import { EAccentColor } from '../models/enums/index';
import { IContext } from '@models/interfaces/context';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private context = new Subject<IContext>();

  /** localStorage puede no existir (SSR, tests, modo privado): acceso tolerante. */
  private get storage(): Storage | null {
    try {
      return typeof localStorage !== 'undefined' ? localStorage : null;
    } catch {
      return null;
    }
  }

  public getCurrentContext(): IContext {
    const stored = this.storage?.getItem('context');
    if (stored != null) {
      return JSON.parse(stored);
    }
    return {
      theme: ETheme.NEUTRAL,
      accentColor: EAccentColor.NEUTRO
    };
  }

  public getContext(): Observable<IContext> {
    return this.context.asObservable();
  }

  public setContext(context: IContext): void {
    this.context.next(context);
    this.storage?.setItem('context', JSON.stringify(context));
  }
}
