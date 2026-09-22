import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_12: IRawSubject = {
    name: "Estructuras Discretas",
    topics: [
        {
            name: "Introducción",
            subtopics: [
                '¿Qué son las estructuras discretas?',
                'Panorama de las matemáticas discretas.',
                'Introducción a los lenguajes formales: expresiones y mecanismos para su descripción (gramáticas y árboles de derivación).',
            ]
        },
        {
            name: 'Lógica matemática',
            subtopics: [
                'Lógica proposicional: sintaxis, semántica, equivalencia lógica, análisis de argumentos correctos (interpretaciones, derivaciones y/o tableaux semánticos).',
                'Aplicaciones a circuitos digitales. Componentes básicos. Minimización de funciones booleanas. Contadores. Multiplexores.',
                'Introducción a la lógica de predicados: sintaxis, especificación formal, semántica informal en micromundos.',
            ]
        },
        {
            name: 'Inducción y recursion',
            subtopics: [
                'Los números naturales: axiomas de Peano, principios de inducción.',
                'Definiciones recursivas: definición de conjuntos y funciones mediante uso de patrones, ejemplos con estructuras de datos no numéricas (listas, árboles, expresiones lógicas, etc.).',
                'Inducción estructural: principios de inducción estructural, dualidad entre inducción y recursion, ejemplos de demostración en diversas estructuras.',
            ]
        },
        {
            name: 'Relaciones',
            subtopics: [
                'Definiciones básicas, relaciones binarias y n-arias, aplicaciones.',
                'Relaciones binarias: propiedades (reflexividad, simetría, transitividad, etc.), representación mediante matrices y digráficas.',
                'Operaciones con relaciones binarias: operaciones conjuntistas, composición, cerraduras (algoritmo de Warshall).',
                'Relaciones de orden: órdenes parciales y lineales, ordenación topológica, elementos minimales y maximales, retículas.',
            ]
        }
    ]
}