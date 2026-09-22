import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withXhr, withInterceptorsFromDi } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideMarkdown, MARKED_OPTIONS, KATEX_OPTIONS, MERMAID_OPTIONS } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    provideAngularSvgIcon(),
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: { gfm: true, breaks: false, pedantic: false }
      },
      katexOptions: {
        provide: KATEX_OPTIONS,
        useValue: {
          displayMode: true,
          throwOnError: false,
          errorColor: '#cc0000',
          macros: { "\\f": "#1f(#2)" },
          strict: true
        },
      },
      mermaidOptions: {
        provide: MERMAID_OPTIONS,
        useValue: {
          fontFamily: 'PatrickHand',
          elk: { mergeEdges: false, nodePlacementStrategy: 'NETWORK_SIMPLEX', cycleBreakingStrategy: 'MODEL_ORDER' }
        }
      }
    }),
  ]
};
