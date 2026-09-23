import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_41: IRawSubject = {
    name: 'Autómatas y Lenguajes Formales',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Motivación.',
                'Cadenas y lenguajes.',
                'Expresiones regulares.',
                'Modelos matemáticos de cadenas.',
                'Gramáticas y lenguajes formales.',
                'Conceptos básicos de gramáticas.',
                'Gramáticas formales.',
                'Clasificación de gramáticas.',
                'Árboles de derivación.',
            ]
        },
        {
            name: 'Máquinas con un número finito de estados y lenguajes tipo 3',
            subtopics: [
                'Definición.',
                'Aplicaciones e instrumentación.',
                'Equivalencia.',
                'Minimización.',
                'Modelos alternativos.',
                'Lenguajes tipo 3.',
                'Propiedades de los lenguajes regulares.',
                'Relación entre autómatas finitos, lenguajes regulares y expresiones regulares.',
            ]
        },
        {
            name: 'Autómatas con pila',
            subtopics: [
                'Formalización.',
                'Traducción con autómatas con pila.',
                'Ciclos en los autómatas con pila.',
                'Autómatas con pila de un solo estado.',
                'Traducción con autómatas de pila.',
                'Ciclos en los autómatas de pila deterministas.',
            ]
        },
        {
            name: 'Lenguajes libres del contexto',
            subtopics: [
                'Recapitulación.',
                'Simplificación de gramáticas libres del contexto.',
                'Formas normales.',
                'Equivalencia entre autómatas de pila y lenguajes libres del contexto.',
                'Propiedades de los lenguajes libres del contexto.',
                'Caracterización de lenguajes que no son libres del contexto.',
                'Lema de Ogden.',
                'Propiedades de cerradura de LLC.',
                'Decidibilidad en lenguajes libres del contexto.',
            ]
        },
        {
            name: 'Máquinas de Turing',
            subtopics: [
                'Motivación.',
                'Definiciones y notación.',
                'Técnicas para la construcción de máquinas de Turing.',
                'La máquina de Turing como un procedimiento.',
                'Distintos tipos de máquinas de Turing.',
                'La máquina universal de Turing.',
                'Autómatas linealmente acotados.',
            ]
        },
        {
            name: 'La Jerarquía de Chomsky',
            subtopics: [
                'Lenguajes recursivos y recursivamente numerables.',
                'Gramáticas sin restricciones.',
                'Lenguajes generales y máquinas de Turing.',
                'Lenguajes dependientes del contexto y autómatas linealmente acotados.',
            ]
        },
        {
            name: 'Introducción a decidibilidad',
            subtopics: [
                'Significado de "indecidibilidad".',
                'El problema de la detención (Halting Problem).',
                'Reducción.',
                'Indecidibilidad en Máquinas de Turing.',
                'Otros problemas de indecidibilidad.',
            ]
        },
    ]
}
