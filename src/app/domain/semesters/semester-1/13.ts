import { IRawSubject } from '@domain/interfaces';

export const SUBJECT_13: IRawSubject = {
    name: 'Introducción a las Ciencias de la Computación',
    topics: [
        {
            name: 'Conceptos generales de computación',
            subtopics: [
                'Historia de la computación.',
                'Arquitectura de Von-Neumann.',
                'Arquitecturas modernas con multiprocesadores.',
                'Sistema binario y cambios de base.',
                'Representación digital de la información.',
                'Principios de lenguajes de programación.',
                'Ambientes de desarrollo de la programación.',
            ]
        },
        {
            name: 'Vista panorámica de la programación orientada a objetos',
            subtopics: [
                'Definiciones.',
                'Diseño orientado a objetos (tarjetas de responsabilidades).',
                'Organización general de un programa en un lenguaje orientado a objetos.',
                'Entrada y salida: métodos y parámetros/argumentos; archivos de entrada y salida simples.',
                'Uso de bibliotecas.',
            ]
        },
        {
            name: 'Objetos, estados y servicios',
            subtopics: [
                'Variables locales y atributos. Niveles de visibilidad.',
                'Expresiones y cadenas.',
                'Variables y referencias.',
                'Distintos tipos de métodos: constructores, de acceso, de actualización, de implementación y auxiliares.',
            ]
        },
        {
            name: 'Datos estructurados',
            subtopics: [
                'Interfaces.',
                'Objetos y referencias.',
                'Listas simples.',
                'Ciclos y condicionales.',
                'Arreglos.',
                'Funciones y recursion.',
            ]
        },
        {
            name: 'Herencia',
            subtopics: [
                'Extensión de clases.',
                'Aspectos principales de la herencia.',
                'Polimorfismo.',
                'Clases abstractas.',
                'Uso de interfaces.',
            ]
        },
        {
            name: 'Administración de memoria durante ejecución',
            subtopics: [
                'La memoria durante la ejecución de aplicaciones.',
                'El heap y la recolección de basura.',
                'La pila de ejecución y los registros de activación por proceso.',
                'Implementación de la recursividad.',
            ]
        },
        {
            name: 'Manejo de errores en ejecución (excepciones)',
            subtopics: [
                'Tipos de errores (ejecución, entrada y salida o del usuario).',
                'Definición de errores aprovechando la herencia.',
                'Detección y manejo de errores de ejecución.',
                'Recomendaciones generales.',
            ]
        },
        {
            name: 'Entrada y salida estructurada',
            subtopics: [
                'Conceptos generales.',
                'Mecanismos para el uso de archivos de disco.',
                'Manejo de archivos: De texto (bytes y caracteres); de registros; de objetos; de acceso directo: binario.',
            ]
        },
        {
            name: 'Hilos de ejecución y multi-proceso (threads) ',
            subtopics: [
                'Conceptos generales.',
                'Mecanismos del lenguaje para hilos de ejecución.',
                'Sincronización de hilos de ejecución.',
                'Terminación de ejecución.',
                'Depuración en hilos de ejecución.'
            ]
        },
    ]
}
