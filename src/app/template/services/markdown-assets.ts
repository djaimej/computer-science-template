import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

/** Carga diferida (una sola vez) de las libs pesadas de markdown. El orden importa. */
@Injectable({ providedIn: 'root' })
export class MarkdownAssetsLoader {
  private readonly document = inject(DOCUMENT);
  private promise?: Promise<void>;

  private readonly scripts: readonly string[] = [
    'vendor/prismjs/prism.js',
    'vendor/prismjs/components/prism-typescript.min.js',
    'vendor/prismjs/components/prism-haskell.min.js',
    'vendor/prismjs/components/prism-python.min.js',
    'vendor/prismjs/components/prism-json.min.js',
    'vendor/prismjs/components/prism-c.min.js',
    'vendor/prismjs/components/prism-cpp.min.js',
    'vendor/prismjs/components/prism-csharp.min.js',
    'vendor/prismjs/components/prism-css.min.js',
    'vendor/prismjs/components/prism-bash.min.js',
    'vendor/prismjs/components/prism-docker.min.js',
    'vendor/prismjs/components/prism-java.min.js',
    'vendor/prismjs/components/prism-xml-doc.min.js',
    'vendor/prismjs/components/prism-mermaid.min.js',
    'vendor/prismjs/components/prism-matlab.min.js',
    'vendor/prismjs/components/prism-prolog.min.js',
    'vendor/prismjs/components/prism-verilog.min.js',
    'vendor/prismjs/components/prism-yaml.min.js',
    'vendor/prismjs/components/prism-glsl.min.js',
    'vendor/prismjs/components/prism-sql.min.js',
    'vendor/prismjs/plugins/line-numbers/prism-line-numbers.js',
    'vendor/prismjs/plugins/line-highlight/prism-line-highlight.js',
    'vendor/katex/katex.min.js',
    'vendor/katex/contrib/auto-render.min.js',
    'vendor/mermaid/mermaid.min.js',
    'vendor/clipboard/clipboard.min.js'
  ];

  load(): Promise<void> {
    return (this.promise ??= this.scripts.reduce(
      (chain, src) => chain.then(() => this.inject(src)),
      Promise.resolve(),
    ));
  }

  private inject(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const el = this.document.createElement('script');
      el.src = src;
      el.async = false; // preserva orden
      el.onload = () => resolve();
      el.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
      this.document.head.appendChild(el);
    });
  }
}
