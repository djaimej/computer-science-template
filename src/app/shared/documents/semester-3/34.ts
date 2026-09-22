import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_34: IRawSubject = {
    name: 'Probabilidad I',
    topics: [
        {
            name: 'Espacio de Probabilidad',
            subtopics: [
                'Espacio muestral, eventos y su interpretación.',
                'Panorama histórico de la probabilidad, interpretación frecuentista, definición clásica, probabilidad geométrica.',
                'Definición axiomática de probabilidad (sin énfasis en sigma-álgebras).',
                'Propiedades de la probabilidad.',
                'Probabilidad condicional e independencia.',
                'Fórmulas de la probabilidad total y de Bayes.',
                'Teorema de continuidad de la probabilidad.',
                'Simulación de ejemplos elementales para ilustrar la interpretación  ',
                'frecuentista.',
            ]
        },
        {
            name: 'Variables Aleatorias y Funciones de Distribución',
            subtopics: [
                'Definición de variable aleatoria.',
                'Función de distribución y sus propiedades.',
                `Variables aleatorias discretas como familias paramétricas y su interpretación; funciones de masa o densidad, incluyendo los ejemplos: 
                    Bernoulli, Binomial, Poisson, Uniforme, Geométrica, Binomial 
                    negativa, Hipergeométrica y modelos donde éstas aparecen. 
                    Familias paramétricas discretas y su interpretación.`,
                `Variables aleatorias continuas (o absolutamente continuas) y funciones de densidad. Familias paramétricas, incluyendo los ejemplos: 
                    Uniforme, Normal, Exponencial, Gamma, Cauchy, Beta, 
                    Weibul, Pareto, Frechet, Gumbel, Logística, Gausiana inversa y 
                    modelos donde éstas aparecen.`,
                'Función de distribución de funciones de variables aleatorias.',
                'Simulación de variables aleatorias.',
            ]
        },
        {
            name: 'Momentos de Variables Aleatorias',
            subtopics: [
                'Esperanza, varianza y propiedades. La esperanza minimiza la distancia cuadrática.',
                'Momentos de variables aleatorias.',
                'Esperanza de funciones de una variable aleatoria.',
                'Desigualdades, incluyendo las de Tchebyshev, Jensen, Markov, Chernoff.',
                `Funciones Generadoras: 
                    Función generadora de momentos, función generadora de 
                    momentos factoriales (para variables aleatorias con valores
                    en los naturales) y aplicaciones. `
            ]
        },
        {
            name: 'Teoremas límite para sucesiones de variables aleatorias discretas',
            subtopics: [
                'Aproximación Poisson a la Binomial.',
                'Vectores aleatorios, funciones de densidad y de distribución; conjunta y marginales.',
                'Sumas de variables aleatorias independientes.',
                'Enunciado de algunos teoremas límite: Leyes de los Grandes Números, Teorema de Límite Central.',
                'Demostración de la ley débil de los grandes números.',
                'Teorema de Límite Central para la distribución Bernoulli (Teorema de De Movire-Laplace).',
                'Contrastar los resultados teóricos con los obtenidos por simulación.',
            ]
        },
    ]
}