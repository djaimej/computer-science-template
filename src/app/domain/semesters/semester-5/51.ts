import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_51: IRawSubject = {
    name: 'Análisis de Algoritmos',
    topics: [
        {
            name: 'Conceptos básicos',
            subtopics: [
                'Problemas y algoritmos.',
                'Tipos de problemas.',
                'Complejidad.',
                'Modelos de cómputo.',
            ]
        },
        {
            name: 'Justificación y diseño de algoritmos',
            subtopics: [
                'Notación asintótica.',
                'Algoritmos iterativos.',
                'Algoritmos recursivos.',
                'Diseño de algoritmos.',
            ]
        },
        {
            name: 'Algoritmos que involucran secuencias y conjuntos',
            subtopics: [
                'Diccionarios.',
                'Árboles binarios.',
                'Búsquedas.',
                'Ordenamientos.',
                'Cota mínima de ordenamiento.',
            ]
        },
        {
            name: 'Algoritmos para teoría de gráficas',
            subtopics: [
                'Árboles generadores.',
                'Árboles generadores de peso mínimo.',
                'La ruta más corta.',
                'Teoría de redes.',
            ]
        },
        {
            name: 'Temas selectos',
            subtopics: [
                'Algoritmos deterministas y no-deterministas.',
                'Algoritmos para apareamiento de cadenas.',
                'Geometría computacional.',
                'Algoritmos de aproximación.',
                'Calendarización.',
            ]
        },
    ]
}
