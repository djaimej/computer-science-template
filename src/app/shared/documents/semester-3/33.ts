import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_33: IRawSubject = {
    name: 'Modelado y Programación',
    topics: [
        {
            name: 'Lenguajes de programación',
            subtopics: [
                'Programación imperativa.',
                'Programación declarativa.',
                'Programación estructurada.',
                'Programación orientada a objetos.',
                'Programación funcional.',
                'Programación lógica.',
                'Tecnologías de compiladores e intérpretes.',
            ]
        },
        {
            name: 'Estructuras de datos avanzadas',
            subtopics: [
                'Tablas de dispersión.',
                'Árboles B.',
                'Árboles black/red.',
            ]
        },
        {
            name: 'Buenas prácticas de programación',
            subtopics: [
                'Definición de patrones de diseño.',
                'Patrones de diseño de uso común: Factory method, Singleton, Adapter, Composite.',
                'Pruebas unitarias (Junit).',
                'Estrategia de desarrollo: desarrollo guiado por pruebas.',
                'Programación en pares.',
            ]
        },
        {
            name: 'Interfaces hombre/máquina',
            subtopics: ['Eventos']
        },
        {
            name: 'Programación concurrente',
            subtopics: [
                'Introducción y contexto.',
                'Conceptos básicos y Ley de Amdahl.',
                'Candados.',
                'Primitivas de sincronización por hardware.',
                'Semáforos.',
                'Monitores.',
                'Problemas de sincronización',
            ]
        },
        {
            name: 'Graficación por computadora',
            subtopics: [
                'Descripción.',
                'Arquitectura.',
                'El algoritmo de ray-tracing.',
                'Elementos soportados en el proyecto.',
                'Construcción del sistema de álgebra lineal.',
                'Construcción del módulo de lectura.',
                'Implementación del algoritmo.',
                'Sombras, reflexión y refracción.',
                'Posición de la cámara y relación de aspecto.',
                'Multimuestreo y sombras suaves.',
            ]
        },
        {
            name: 'Emulación de máquinas virtuales',
            subtopics: [
                'Descripción de una máquina virtual.',
                'Arquitectura.',
                'Construcción de la máquina virtual.',
                'Definición del lenguaje ensamblador.',
                'Construcción del analizador léxico.',
                'Construcción del analizador sintáctico.',
                'Construcción del back End.',
            ]
        },
    ]
}