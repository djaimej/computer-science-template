import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_81: IRawSubject = {
    name: 'Computación Concurrente',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Sincronización.',
                'El problema de la exclusión mutua.',
                'Medidas de complejidad.',
            ]
        },
        {
            name: 'Exclusión mutua',
            subtopics: [
                'Algoritmos para dos procesos.',
                'Algoritmos de torneo.',
                'Algoritmos de exclusión mutua.',
                'Algoritmos libres de hambruna.',
                'Algoritmos con espera ocupada (busy waiting).',
                'Algoritmos adaptativos.',
                'Algoritmos tolerantes a fallas.',
                'Algoritmos simétricos.',
            ]
        },
        {
            name: 'Sincronización con y sin bloqueo',
            subtopics: [
                'Primitivas de sincronización.',
                'Bits test-and-set y evitar colisiones.',
                'El algoritmo de incidente.',
                'Otros algoritmos con espera ocupada y primitivas fuertes.',
                'Estructuras de datos concurrentes.',
                'Semáforos.',
                'Monitores.',
                'Justicia y objetos compartidos.',
            ]
        },
        {
            name: 'Recursos múltiples',
            subtopics: [
                'Abrazos mortales.',
                'Prevención de abrazos mortales.',
                'El problema de los filósofos comensales.',
                'Estrategia de obtener y esperar.',
            ]
        },
        {
            name: 'Problemas clásicos de sincronización',
            subtopics: [
                'Productor y consumidor.',
                'Lectores y escritores.',
                'Escritura y lectura de relojes.',
                'El barbero dormilón.',
                'El fumador de cigarrillos.',
            ]
        },
        {
            name: 'Consenso',
            subtopics: [
                'Introducción y algoritmos básicos.',
                'Consenso utilizando una cola compartida.',
                'Imposibilidad de consenso con un proceso falible.',
                'El poder relativo de las primitivas de sincronización.',
                'Universalidad del consenso.',
            ]
        },
        {
            name: 'Temas selectos',
            subtopics: [
                'Tolerancia a fallas benignas y bizantinas.',
                'Transacciones en memoria compartida',
            ]
        },
    ]
}
