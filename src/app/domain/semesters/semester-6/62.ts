import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_62: IRawSubject = {
    name: 'Inteligencia Artificial',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Historia de AI.',
                'Agentes.',
            ]
        },
        {
            name: 'Búsqueda',
            subtopics: [
                'Robótica, búsqueda básica y planificación de movimiento.',
                'Búsqueda heurística A*.',
                'Búsqueda optimizada.',
                'Problemas de satisfacción con restricciones.',
            ]
        },
        {
            name: 'Modelos probabilísticos',
            subtopics: [
                'Redes Bayesianas.',
                'Inferencia en redes Bayesianas.',
                'Aprendizaje en redes Bayesianas.',
                'Modelos probabilísticos sin dirección.',
            ]
        },
        {
            name: 'Aprendizaje automático',
            subtopics: [
                'Aprendizaje supervisado y clasificadores lineales.',
                'Árboles de decisión.',
                'Aprendizaje reforzado.',
            ]
        },
        {
            name: 'Percepción y conocimiento',
            subtopics: [
                'Visión: reconocimiento de objetos.',
                'Visión: geometría.',
                'Percepción (en robótica)',
                'Procesamiento de lenguaje natural (categorizar texto y extracción de información).',
                'Procesamiento de lenguaje natural (habla).',
                'Representación de conocimiento lógico.',
                'Inteligencia artificial y el cerebro.',
            ]
        },
    ]
}
