import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_42: IRawSubject = {
    name: 'Lógica Computacional',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Importancia de la lógica para las ciencias computacionales.',
                'Panorama de aplicaciones en distintas áreas de las ciencias de la computación.'
            ]
        },
        {
            name: 'Lógica proposicional',
            subtopics: [
                'Sintaxis: lenguaje formal, recursión e inducción estructural.',
                'Sustitución textual.',
                'Semántica: funciones de interpretación.',
                'Decidibilidad de la lógica proposicional.',
                'Análisis de argumentos lógicos: interpretaciones y/o tableaux semánticos (reglas α y β).',
                'Resolución binaria: formas normales negativa y conjuntiva, resolución binaria proposicional, algoritmos de saturación, el problema SAT.',
            ]
        },
        {
            name: 'Lógica de predicados de primer orden',
            subtopics: [
                'Sintaxis y ejemplos de especificación formal.',
                'Conceptos sintácticos: recursion e inducción estructural en términos y fórmulas, ligado de variables.',
                'Sustitución: el problema de la sustitución textual y la captura de variables libres, definición y α-equivalencia, definición formal de sustitución.',
                'Semántica: introducción; interpretación de términos y fórmulas; definición de satisfacción de Tarski.',
                'Conceptos semánticos: verdad, modelos, validez y equivalencia lógica.',
            ]
        },
        {
            name: 'Análisis de argumentos',
            subtopics: [
                'La noción de consecuencia lógica.',
                'Argumentos incorrectos: construcción de modelos contraejemplo.',
                'El teorema de indecidibilidad de Church.',
            ]
        },
        {
            name: 'Sistemas deductivos',
            subtopics: [
                'Generalidades: reglas de inferencia; correctud, completud y completud refutacional.',
                'Tableaux semánticos: reglas γ y δ',
                'Deducción natural: uso de contextos; lógica minimal, intuicionista y clásica; el teorema de completud de Gödel.',
                'Formas normales: prenex, de Skolem, forma clausular.',
                `Resolución binaria: cláusulas cerradas; unificación: unificadores más generales,
                algoritmo de Martelli-Montanari; algoritmos de saturación; estrategias de derivación
                (resolución lineal, resolución unitaria, conjunto de soporte).`
            ]
        },
        {
            name: 'El paradigma de programación lógica',
            subtopics: [
                'Resolución SLD: cláusulas de Horn y programas lógicos.',
                'Semántica operacional y declarativa; modelos de Herbrand.',
                'El lenguaje de programación Prolog: aritmética, listas, árboles, el operador de corte.',
            ]
        },
        {
            name: 'Extensiones y aplicaciones (opcional)',
            subtopics: [
                'Introducción a los sistemas de tipos; la correspondencia de Curry-Howard.',
                'Lógicas no clásicas: modal, temporal, de Hoare, dinámica, etcétera.',
                'Lógicas de orden superior: lógica de segundo orden, lógicas relacionales',
            ]
        },
    ]
}
