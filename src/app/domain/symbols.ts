// src/app/domain/symbols.ts
import { ISymbolDefinition } from '@template/models/interfaces';

/**
 * Glosario de símbolos LaTeX para el tooltip de definiciones.
 *
 * - Las claves son el comando tal como lo extrae el resolver (`\comando`,
 *   solo letras). Símbolos escritos como `^*`, `^T`, `_0` o Unicode literal
 *   NO se resuelven y por eso no se listan aquí.
 * - `\mathbb` / `\mathcal` son comandos de fuente: el argumento no se parsea,
 *   así que describen la familia, no un símbolo concreto.
 * - `sample` es LaTeX renderable que se muestra como glifo-etiqueta en el tooltip.
 */
export const symbols: Record<string, ISymbolDefinition> = {

  // ───────────────────────── Lógica ─────────────────────────
  '\\land': { command: '\\land', reads: 'Y lógico (conjunción)', description: 'Verdadero solo si ambos operandos lo son.', sample: 'p \\land q' },
  '\\wedge': { command: '\\wedge', reads: 'Y lógico (conjunción)', description: 'Variante de \\land; también ínfimo en retículas.', sample: 'p \\wedge q' },
  '\\lor': { command: '\\lor', reads: 'O lógico (disyunción)', description: 'Verdadero si al menos un operando lo es.', sample: 'p \\lor q' },
  '\\vee': { command: '\\vee', reads: 'O lógico (disyunción)', description: 'Variante de \\lor; también supremo en retículas.', sample: 'p \\vee q' },
  '\\neg': { command: '\\neg', reads: 'Negación', description: 'Invierte el valor de verdad de la proposición.', sample: '\\neg p' },
  '\\lnot': { command: '\\lnot', reads: 'Negación', description: 'Variante de \\neg.', sample: '\\lnot p' },
  '\\rightarrow': { command: '\\rightarrow', reads: 'Implica (condicional)', description: 'Condicional lógico; también define funciones f: A → B.', sample: 'p \\rightarrow q' },
  '\\to': { command: '\\to', reads: 'Va a / implica', description: 'Funciones (A → B), transiciones de autómatas y límites.', sample: 'f: A \\to B' },
  '\\leftrightarrow': { command: '\\leftrightarrow', reads: 'Si y solo si (bicondicional)', description: 'Equivalencia material entre dos proposiciones.', sample: 'p \\leftrightarrow q' },
  '\\Rightarrow': { command: '\\Rightarrow', reads: 'Implica / deriva', description: 'Implicación; en gramáticas, paso de derivación.', sample: 'p \\Rightarrow q' },
  '\\Leftrightarrow': { command: '\\Leftrightarrow', reads: 'Si y solo si', description: 'Equivalencia lógica.', sample: 'p \\Leftrightarrow q' },
  '\\Longleftrightarrow': { command: '\\Longleftrightarrow', reads: 'Si y solo si', description: 'Equivalencia lógica (forma larga).', sample: 'A \\Longleftrightarrow B' },
  '\\Longrightarrow': { command: '\\Longrightarrow', reads: 'Implica', description: 'Implicación (forma larga).', sample: 'A \\Longrightarrow B' },
  '\\iff': { command: '\\iff', reads: 'Si y solo si', description: 'Abreviatura de "if and only if".', sample: 'A \\iff B' },
  '\\implies': { command: '\\implies', reads: 'Implica', description: 'Implicación lógica.', sample: 'A \\implies B' },
  '\\forall': { command: '\\forall', reads: 'Para todo', description: 'Cuantificador universal.', sample: '\\forall x' },
  '\\exists': { command: '\\exists', reads: 'Existe', description: 'Cuantificador existencial.', sample: '\\exists x' },
  '\\nexists': { command: '\\nexists', reads: 'No existe', description: 'Negación del cuantificador existencial.', sample: '\\nexists x' },
  '\\vdash': { command: '\\vdash', reads: 'Deriva / demuestra', description: 'Consecuencia sintáctica; en autómatas, paso de cómputo.', sample: '\\Gamma \\vdash \\varphi' },
  '\\models': { command: '\\models', reads: 'Satisface / es modelo de', description: 'Consecuencia semántica: la interpretación hace verdadera la fórmula.', sample: 'M \\models \\varphi' },
  '\\equiv': { command: '\\equiv', reads: 'Equivalente / congruente', description: 'Equivalencia lógica; también congruencia modular (mód n).', sample: 'a \\equiv b' },
  '\\oplus': { command: '\\oplus', reads: 'O exclusivo (XOR)', description: 'Suma módulo 2; también suma directa de espacios/estructuras.', sample: 'a \\oplus b' },
  '\\top': { command: '\\top', reads: 'Verdadero (top)', description: 'Constante verdadera; en álgebra lineal, transpuesta (Aᵀ).', sample: '\\top' },
  '\\bot': { command: '\\bot', reads: 'Falso (bottom)', description: 'Constante falsa / contradicción; también valor indefinido.', sample: '\\bot' },
  '\\therefore': { command: '\\therefore', reads: 'Por lo tanto', description: 'Introduce la conclusión de un argumento.', sample: '\\therefore q' },
  '\\because': { command: '\\because', reads: 'Porque / ya que', description: 'Introduce la premisa de un argumento.', sample: '\\because p' },
  '\\Box': { command: '\\Box', reads: 'Necesariamente (modal)', description: 'Operador de necesidad en lógica modal/temporal.', sample: '\\Box p' },
  '\\Diamond': { command: '\\Diamond', reads: 'Posiblemente (modal)', description: 'Operador de posibilidad en lógica modal/temporal.', sample: '\\Diamond p' },

  // ───────────────────────── Conjuntos ─────────────────────────
  '\\in': { command: '\\in', reads: 'Pertenece a', description: 'El elemento es miembro del conjunto.', sample: 'x \\in A' },
  '\\notin': { command: '\\notin', reads: 'No pertenece a', description: 'El elemento no es miembro del conjunto.', sample: 'x \\notin A' },
  '\\ni': { command: '\\ni', reads: 'Contiene como elemento', description: 'Pertenencia escrita al revés: A ∋ x.', sample: 'A \\ni x' },
  '\\subseteq': { command: '\\subseteq', reads: 'Subconjunto (o igual)', description: 'Todo elemento de A está en B.', sample: 'A \\subseteq B' },
  '\\subset': { command: '\\subset', reads: 'Subconjunto', description: 'Según el autor, contención (a veces propia).', sample: 'A \\subset B' },
  '\\subsetneq': { command: '\\subsetneq', reads: 'Subconjunto propio', description: 'A ⊆ B pero A ≠ B.', sample: 'A \\subsetneq B' },
  '\\supseteq': { command: '\\supseteq', reads: 'Superconjunto (o igual)', description: 'B contiene a todo A.', sample: 'B \\supseteq A' },
  '\\supset': { command: '\\supset', reads: 'Superconjunto', description: 'Contención inversa.', sample: 'B \\supset A' },
  '\\cup': { command: '\\cup', reads: 'Unión', description: 'Elementos que están en A o en B.', sample: 'A \\cup B' },
  '\\cap': { command: '\\cap', reads: 'Intersección', description: 'Elementos que están en A y en B.', sample: 'A \\cap B' },
  '\\bigcup': { command: '\\bigcup', reads: 'Unión generalizada', description: 'Unión sobre una familia de conjuntos.', sample: '\\bigcup_{i} A_i' },
  '\\bigcap': { command: '\\bigcap', reads: 'Intersección generalizada', description: 'Intersección sobre una familia de conjuntos.', sample: '\\bigcap_{i} A_i' },
  '\\setminus': { command: '\\setminus', reads: 'Diferencia de conjuntos', description: 'Elementos de A que no están en B.', sample: 'A \\setminus B' },
  '\\times': { command: '\\times', reads: 'Producto cartesiano / por', description: 'Pares ordenados A × B; también multiplicación.', sample: 'A \\times B' },
  '\\varnothing': { command: '\\varnothing', reads: 'Conjunto vacío', description: 'Conjunto sin elementos.', sample: '\\varnothing' },
  '\\emptyset': { command: '\\emptyset', reads: 'Conjunto vacío', description: 'Variante de \\varnothing.', sample: '\\emptyset' },
  '\\complement': { command: '\\complement', reads: 'Complemento', description: 'Elementos del universo que no están en el conjunto.', sample: 'A^\\complement' },
  '\\wp': { command: '\\wp', reads: 'Conjunto potencia', description: 'Conjunto de todos los subconjuntos (también 𝒫(A)).', sample: '\\wp(A)' },
  '\\aleph': { command: '\\aleph', reads: 'Alef (cardinalidad)', description: 'Cardinalidad de conjuntos infinitos (ℵ₀ es numerable).', sample: '\\aleph_0' },
  '\\mid': { command: '\\mid', reads: 'Tal que / divide a', description: 'En conjuntos por comprensión "tal que"; en aritmética, divisibilidad.', sample: '\\{x \\mid x > 0\\}' },
  '\\nmid': { command: '\\nmid', reads: 'No divide a', description: 'Negación de la divisibilidad.', sample: 'a \\nmid b' },

  // ──────────────── Conjuntos numéricos y fuentes ────────────────
  '\\mathbb': { command: '\\mathbb', reads: 'Conjunto numérico (pizarra)', description: 'Familia de números: ℕ naturales, ℤ enteros, ℚ racionales, ℝ reales, ℂ complejos.', sample: '\\mathbb{R}' },
  '\\mathcal': { command: '\\mathcal', reads: 'Letra caligráfica', description: 'Notación para clases/colecciones: 𝒫 potencia, 𝒪 orden asintótico (big-O), ℒ lenguajes.', sample: '\\mathcal{O}(n)' },

  // ──────────────── Relaciones y orden ────────────────
  '\\leq': { command: '\\leq', reads: 'Menor o igual que', description: 'Relación de orden no estricta.', sample: 'a \\leq b' },
  '\\geq': { command: '\\geq', reads: 'Mayor o igual que', description: 'Relación de orden no estricta.', sample: 'a \\geq b' },
  '\\neq': { command: '\\neq', reads: 'Distinto de', description: 'Negación de la igualdad.', sample: 'a \\neq b' },
  '\\approx': { command: '\\approx', reads: 'Aproximadamente igual', description: 'Igualdad aproximada entre valores.', sample: 'a \\approx b' },
  '\\sim': { command: '\\sim', reads: 'Relacionado con / semejante', description: 'Relación genérica; en probabilidad, "se distribuye como".', sample: 'a \\sim b' },
  '\\simeq': { command: '\\simeq', reads: 'Asintóticamente igual / isomorfo', description: 'Equivalencia asintótica o isomorfismo según contexto.', sample: 'a \\simeq b' },
  '\\cong': { command: '\\cong', reads: 'Congruente / isomorfo', description: 'Estructuras isomorfas o figuras congruentes.', sample: 'A \\cong B' },
  '\\propto': { command: '\\propto', reads: 'Proporcional a', description: 'Una cantidad varía en proporción a otra.', sample: 'y \\propto x' },
  '\\preceq': { command: '\\preceq', reads: 'Precede o igual', description: 'Orden parcial genérico (órdenes, retículas).', sample: 'a \\preceq b' },
  '\\succeq': { command: '\\succeq', reads: 'Sucede o igual', description: 'Orden parcial inverso.', sample: 'a \\succeq b' },
  '\\sqsubseteq': { command: '\\sqsubseteq', reads: 'Subsume / orden de información', description: 'Orden parcial usado en retículas y semántica de dominios.', sample: 'a \\sqsubseteq b' },

  // ──────────────── Funciones ────────────────
  '\\circ': { command: '\\circ', reads: 'Composición', description: 'Composición de funciones o relaciones: (f ∘ g)(x).', sample: 'f \\circ g' },
  '\\mapsto': { command: '\\mapsto', reads: 'Se mapea a', description: 'Define la regla de asignación de una función.', sample: 'x \\mapsto x^2' },

  // ──────────────── Combinatoria y sumatorias ────────────────
  '\\binom': { command: '\\binom', reads: 'Coeficiente binomial (combinaciones)', description: 'Formas de elegir k elementos de n sin orden.', sample: '\\binom{n}{k}' },
  '\\sum': { command: '\\sum', reads: 'Sumatoria', description: 'Suma de una secuencia de términos.', sample: '\\sum_{i=1}^{n} a_i' },
  '\\prod': { command: '\\prod', reads: 'Productoria', description: 'Producto de una secuencia de términos.', sample: '\\prod_{i=1}^{n} a_i' },

  // ──────────────── Álgebra lineal ────────────────
  '\\overleftarrow': { command: '\\overleftarrow', reads: 'Flecha hacia la izquierda sobre la expresión', description: 'Vector o segmento orientado hacia la izquierda.', sample: '\\overleftarrow{AB}' },
  '\\underleftarrow': { command: '\\underleftarrow', reads: 'Flecha hacia la izquierda debajo de la expresión', description: 'Anotación orientada bajo la expresión.', sample: '\\underleftarrow{AB}' },
  '\\overrightarrow': { command: '\\overrightarrow', reads: 'Flecha hacia la derecha sobre la expresión', description: 'Notación de vector de A hacia B.', sample: '\\overrightarrow{AB}' },
  '\\vec': { command: '\\vec', reads: 'Vector', description: 'Marca una cantidad como vectorial.', sample: '\\vec{v}' },
  '\\hat': { command: '\\hat', reads: 'Sombrero (unitario / estimador)', description: 'Vector unitario, o estimador en estadística.', sample: '\\hat{v}' },
  '\\langle': { command: '\\langle', reads: 'Producto interior (apertura)', description: 'Abre ⟨u, v⟩: producto punto / tupla ordenada.', sample: '\\langle u, v \\rangle' },
  '\\rangle': { command: '\\rangle', reads: 'Producto interior (cierre)', description: 'Cierra la notación ⟨ , ⟩.', sample: '\\langle u, v \\rangle' },
  '\\cdot': { command: '\\cdot', reads: 'Producto punto / multiplicación', description: 'Producto escalar o multiplicación explícita.', sample: 'u \\cdot v' },
  '\\otimes': { command: '\\otimes', reads: 'Producto tensorial', description: 'Producto de Kronecker/tensorial entre estructuras.', sample: 'A \\otimes B' },
  '\\lVert': { command: '\\lVert', reads: 'Norma', description: 'Magnitud de un vector: ‖v‖ (se escribe entre \\lVert … \\rVert).', sample: '\\lVert v \\rVert' },
  '\\det': { command: '\\det', reads: 'Determinante', description: 'Escalar asociado a una matriz cuadrada.', sample: '\\det(A)' },
  '\\dim': { command: '\\dim', reads: 'Dimensión', description: 'Número de vectores de una base del espacio.', sample: '\\dim(V)' },

  // ──────────────── Cálculo / análisis ────────────────
  '\\infty': { command: '\\infty', reads: 'Infinito', description: 'Cantidad sin cota; límites y complejidad.', sample: '\\infty' },
  '\\lim': { command: '\\lim', reads: 'Límite', description: 'Valor al que tiende una sucesión o función.', sample: '\\lim_{n \\to \\infty}' },
  '\\int': { command: '\\int', reads: 'Integral', description: 'Integral de una función.', sample: '\\int_a^b f(x)\\,dx' },
  '\\partial': { command: '\\partial', reads: 'Derivada parcial', description: 'Derivada respecto a una variable manteniendo las demás.', sample: '\\partial x' },
  '\\nabla': { command: '\\nabla', reads: 'Nabla / gradiente', description: 'Vector de derivadas parciales (gradiente).', sample: '\\nabla f' },
  '\\sqrt': { command: '\\sqrt', reads: 'Raíz cuadrada', description: 'Raíz n-ésima si lleva índice.', sample: '\\sqrt{x}' },
  '\\pm': { command: '\\pm', reads: 'Más o menos', description: 'Dos valores posibles, o margen de error.', sample: 'a \\pm b' },

  // ──────────────── Autómatas y lenguajes formales ────────────────
  '\\Sigma': { command: '\\Sigma', reads: 'Sigma mayúscula (alfabeto)', description: 'Conjunto finito de símbolos de un lenguaje; también sumatoria.', sample: '\\Sigma' },
  '\\varepsilon': { command: '\\varepsilon', reads: 'Épsilon (cadena vacía)', description: 'Cadena de longitud cero; transiciones ε en autómatas.', sample: '\\varepsilon' },
  '\\epsilon': { command: '\\epsilon', reads: 'Épsilon', description: 'Variante de ε: cadena vacía o cantidad pequeña.', sample: '\\epsilon' },
  '\\lambda': { command: '\\lambda', reads: 'Lambda', description: 'Abstracción en cálculo lambda; también cadena vacía o valor propio.', sample: '\\lambda x.\\, x' },
  '\\delta': { command: '\\delta', reads: 'Delta minúscula (transición)', description: 'Función de transición de un autómata: δ(q, a).', sample: '\\delta(q, a)' },
  '\\Delta': { command: '\\Delta', reads: 'Delta mayúscula (incremento)', description: 'Diferencia o cambio; discriminante.', sample: '\\Delta x' },
  '\\ast': { command: '\\ast', reads: 'Estrella de Kleene / asterisco', description: 'Cerradura de Kleene (0 o más). Suele escribirse como superíndice ^*, que el resolver no captura.', sample: 'L^\\ast' },

  // ──────────────── Complejidad asintótica ────────────────
  '\\Theta': { command: '\\Theta', reads: 'Theta mayúscula (cota ajustada)', description: 'Orden de crecimiento exacto de un algoritmo.', sample: '\\Theta(n)' },
  '\\Omega': { command: '\\Omega', reads: 'Omega mayúscula (cota inferior)', description: 'Cota inferior asintótica del costo.', sample: '\\Omega(n)' },
  '\\omega': { command: '\\omega', reads: 'Omega minúscula (cota inferior estricta)', description: 'Crecimiento estrictamente mayor que el comparado.', sample: '\\omega(n)' },
  '\\log': { command: '\\log', reads: 'Logaritmo', description: 'Aparece en costos como O(n log n).', sample: '\\log n' },

  // ──────────────── Letras griegas frecuentes ────────────────
  '\\alpha': { command: '\\alpha', reads: 'Alfa', description: 'Parámetro genérico; regla α en tableaux semánticos.', sample: '\\alpha' },
  '\\beta': { command: '\\beta', reads: 'Beta', description: 'Parámetro genérico; β-reducción en cálculo lambda; regla β.', sample: '\\beta' },
  '\\gamma': { command: '\\gamma', reads: 'Gamma', description: 'Parámetro genérico; regla γ en tableaux.', sample: '\\gamma' },
  '\\mu': { command: '\\mu', reads: 'Mu', description: 'Media poblacional; operador de punto fijo μ.', sample: '\\mu' },
  '\\sigma': { command: '\\sigma', reads: 'Sigma minúscula', description: 'Desviación estándar; en álgebra relacional, selección σ.', sample: '\\sigma' },
  '\\pi': { command: '\\pi', reads: 'Pi', description: 'Constante 3.1416…; en álgebra relacional, proyección π.', sample: '\\pi' },
  '\\rho': { command: '\\rho', reads: 'Rho', description: 'En álgebra relacional, renombrado ρ.', sample: '\\rho' },
  '\\theta': { command: '\\theta', reads: 'Theta minúscula', description: 'Ángulo o parámetro; theta-join en bases de datos.', sample: '\\theta' },
  '\\varphi': { command: '\\varphi', reads: 'Fi (fórmula)', description: 'Fórmula lógica genérica; función φ de Euler.', sample: '\\varphi' },
  '\\Gamma': { command: '\\Gamma', reads: 'Gamma mayúscula (contexto)', description: 'Contexto de hipótesis en sistemas deductivos y de tipos.', sample: '\\Gamma \\vdash e' },
};
