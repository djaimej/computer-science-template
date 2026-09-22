import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_63: IRawSubject = {
    name: 'Sistemas Operativos',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Funciones de un sistema operativo. Evolución de los sistemas operativos. Factores a considerar al diseñar un sistema operativo.',
                'Máquinas virtuales.',
                'Control de recursos.',
                'Elementos que conforman un sistema operativo; estructuras de los sistemas operativos.',
            ]
        },
        {
            name: 'Programación',
            subtopics: [
                'Uso de los servicios de un sistema operativos; API; creación de procesos; estados de los procesos.'
            ]
        },
        {
            name: 'Procesos',
            subtopics: [
                'Ejecución de procesos; procesos concurrentes; comunicación entre procesos; problemas de manejo de procesos; despacho de procesos.'
            ]
        },
        {
            name: 'Manejo de memoria',
            subtopics: [
                'Utilización de la memoria; intercambio de bloques de memoria; memoria virtual; paginación y segmentación.'
            ]
        },
        {
            name: 'Seguridad',
            subtopics: [
                'Políticas y mecanismos; sistemas seguros; mecanismos de protección.'
            ]
        },
        {
            name: 'Sistemas de archivos',
            subtopics: [
                'Datos y meta-datos; archivos y su organización; directorios; problemas de implantación; seguridad.'
            ]
        },
        {
            name: 'Entrada-salida',
            subtopics: [
                'Problemas de hardware; problemas de software; manejo de discos; manejo de terminales; manejo del reloj.'
            ]
        },
        {
            name: 'Sistemas operativos modernos',
            subtopics: [
                'Sistemas operativos distribuidos: Características generales; problemas de comunicación en sistemas distribuidos; sincronización.',
                'Nuevas arquitecturas para los sistemas operativos'
            ]
        },
    ]
}