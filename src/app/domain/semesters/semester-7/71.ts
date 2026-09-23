import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_71: IRawSubject = {
    name: 'Compiladores',
    topics: [
        {
            name: 'Introducción a lo que es un compilador',
            subtopics: [
                'Justificación.',
                'Áreas de aplicación.',
                'Principios fundamentales de compiladores.',
                'Estructura de un compilador.',
                'Vista de alto nivel de la compilación.',
                'Propiedades deseables en un compilador.',
                'Resumen y perspectiva.',
            ]
        },
        {
            name: 'Análisis léxico',
            subtopics: [
                'En qué consiste.',
                'Reconocimiento de palabras.',
                'Expresiones regulares.',
                'Construcción del analizador léxico a partir de expresiones regulares.',
                'Implementación de analizadores léxicos.',
                'Herramientas automáticas para la construcción de analizadores léxicos.',
            ]
        },
        {
            name: 'Análisis sintáctico',
            subtopics: [
                'Introducción.',
                'Sintaxis de expresiones.',
                'Reconocimiento descendente.',
                'Reconocimiento ascendente.',
                'Construcción de tablas LR(1).',
                'Aspectos prácticos.',
                'Manipulación de gramáticas (optimización y reducción del tamaño de tablas).',
            ]
        },
        {
            name: 'Análisis dependiente del contexto',
            subtopics: [
                'Introducción.',
                'Sistemas de tipos.',
                'Gramáticas de atributos.',
                'Traducción \emph{ad-hoc} dirigida por la sintaxis.',
                'Temas avanzados (inferencia de tipos y cambio de asociatividad).',
            ]
        },
        {
            name: 'Representaciones intermedias',
            subtopics: [
                'Taxonomía de representaciones intermedias.',
                'Conjuntos de representaciones intermedias gráficas.',
                'Representaciones intermedias lineales.',
                'Forma de asignación simple estática.',
                'Transformación de valores a nombres.',
                'Tablas de símbolos.',
            ]
        },
        {
            name: 'La abstracción de procedimiento',
            subtopics: [
                'Aspectos importantes.',
                'Abstracción de control de flujo.',
                'Espacio de nombres.',
                'Comunicación de valores entre procedimientos.',
                'Establecimiento de la direccionabilidad.',
                'Ligado estandarizado.',
                'Manejo de la memoria.',
            ]
        },
        {
            name: 'Estructura del código generado',
            subtopics: [
                'Importancia del tema.',
                'Asignación de espacios de almacenamiento.',
                'Operadores aritméticos.',
                'Operadores booleanos y relacionales.',
                'Almacenamiento y acceso a arreglos.',
                'Cadenas de caracteres.',
                'Referencias a estructuras.',
                'Construcciones para el control del flujo.',
                'Llamadas a procedimientos.',
                'Implementación en lenguajes orientados a objetos.',
            ]
        },
        {
            name: 'Introducción a optimización de código',
            subtopics: [
                'Aspectos generales.',
                'Antecedentes.',
                'Expresiones redundantes.',
                'Alcance de la optimización: métodos locales, super-locales, por región, globales y de toda la aplicación.',
                'Numeración de valores sobre regiones mayores al bloque básico.',
                'Eliminación global de redundancia.',
                'Temas avanzados: clonación y sustitución en línea.',
            ]
        },
        {
            name: 'Análisis de flujo de datos',
            subtopics: [
                'Aspectos generales.',
                'Análisis de flujo de datos iterativo.',
                'Forma de asignación simple estática.',
            ]
        },
        {
            name: 'Elección de instrucciones',
            subtopics: [
                'Importancia para la portabilidad.',
                'Esquema simple de recorrido de árboles.',
                'Selección de instrucciones mediante apareamiento de árboles.',
                'Selección usando optimización con mirilla (peephole).',
            ]
        },
        {
            name: 'Programación de instrucciones',
            subtopics: [
                'Aspectos importantes.',
                'El problema de la programación de instrucciones.',
                'Programación en listas.',
            ]
        },
        {
            name: 'Asignación de registros',
            subtopics: [
                'Importancia.',
                'Aspectos subyacentes.',
                'Asignación y alojamiento locales de registros.',
                'Alojamiento y asignación cruzando fronteras de bloques básicos.',
                'Alojamiento y asignación globales.',
            ]
        },
    ]
}
