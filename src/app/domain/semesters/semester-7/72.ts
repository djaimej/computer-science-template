import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_72: IRawSubject = {
    name: 'Complejidad Computacional',
    topics: [
        {
            name: 'Introducción y conceptos básicos',
            subtopics: [
                'Motivación para estudiar complejidad computacional.',
                'Problemas, algoritmos y complejidad.',
                'Notación asintótica, codificación y modelos de cómputo.',
            ]
        },
        {
            name: 'La teoría de NP-Completez',
            subtopics: [
                'Máquinas de Turing y la clase P.',
                'La clase NP.',
                'Relación P-NP y transformaciones polinomiales.',
                'Definición de NP-Completez.',
                'Teorema de Cook.',
                'Jerarquía de complejidad.',
            ]
        },
        {
            name: 'Demostraciones de problemas NP-Completos',
            subtopics: [
                'Problemas básicos: 3SAT, apareamientos, cubierta de vértices, circuito hamiltoniano, clan y partición.',
                'Técnicas: restricción, remplazo local y diseño de componentes.',
            ]
        },
        {
            name: 'Temas selectos',
            subtopics: [
                'Problemas no computables y máquinas de Turing universales.',
                'Utilizando NP-Completez para analizar problemas.',
                'Enfrentando problemas NP-Completos: aproximación, heurísticas, etc.',
                'Otras clases de complejidad.',
                'Otros modelos de cómputo: DNA, paralelos, distribuidos, cuánticos, etc.',
            ]
        },
    ]
}
