import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_22: IRawSubject = {
    name: 'Estructuras de Datos',
    topics: [
        {
            name: 'Tipos de datos abstractos',
            subtopics: [
                'Definición, especificación e instrumentación de tipos de dato abstractos (TDAs).',
                'Conceptos de clase, objeto y estructura de datos y su relación con TDA.',
                'Encapsulación, acoplamiento y cohesión.',
            ]
        },
        {
            name: 'Elementos de complejidad algorítmica',
            subtopics: [
                'Análisis asintótico, notación O().',
                'Recurrencias.',
                'Ejemplos de cálculo de complejidad.',
            ]
        },
        {
            name: 'Elementos de corrección de algoritmos',
            subtopics: [
                'Pruebas basadas en invariantes', 
                'Pruebas basadas en las propiedades de un TDA.',
            ]
        },
        {
            name: 'Arreglos',
            subtopics: [
                'Instrumentación de arreglos: polinomios de direccionamiento vectores de Iliffe.',
                'Arreglos empacados.',
            ]
        },
        {
            name: 'Recursion',
            subtopics: [
                'Estrategia divide y vencerás, solución de problemas mediante recursion.',
                'Búsqueda con retroceso mínimo (backtrack).',
            ]
        },
        {
            name: 'Listas',
            subtopics: [
                'TDA Lista, definición, alternativas de instrumentación.',
                'Inserción, remoción y recuperación de elementos en una Lista.',
                'Variantes de lista: ligadura doble, circular, etc.',
                'Complejidad de operaciones, iterador.',
                'Aplicaciones.',
            ]
        },
        {
            name: 'Pilas',
            subtopics: [
                'TDA Pila, definición, alternativas de instrumentación.',
                'Inserción, remoción y recuperación de elementos en una Pila.',
                'Aplicaciones',
            ]
        },
        {
            name: 'Colas',
            subtopics: [
                'TDA Cola, definición, alternativas de instrumentación.',
                'Inserción, remoción y recuperación de elementos en una Cola.',
                'Aplicaciones.'
            ]
        },
        {
            name: 'Árboles',
            subtopics: [
                'Concepto de Árbol, conceptos relacionados, TDA, instrumentación y aplicaciones.'
            ]
        },
        {
            name: 'Árboles binarios',
            subtopics: [
                'Conceptos y cotas relacionadas con árboles binarios, TDA.',
                'Instrumentaciones de árboles binarios.',
                'Recorridos.',
                'Aplicaciones.'
            ]
        },
        {
            name: 'Árboles binarios de búsqueda',
            subtopics: [
                'Definición, propiedades y TDA.',
                'Algoritmos de inserción, remoción y recuperación de elementos, complejidad.',
                'Aplicaciones.',
            ]
        },
        {
            name: 'Árboles de búsqueda balanceados',
            subtopics: [
                'Motivación, definición, propiedades y TDA. ',
                'Árboles AVL, árboles rojinegros, definición, propiedades y TDA.',
                'Algoritmos de inserción, remoción y recuperación de elementos conservando el balanceo.',
                'Análisis de complejidad.',
                'Aplicaciones.',
            ]
        },
        {
            name: 'Funciones y tablas de dispersión (hash)',
            subtopics: [
                'Motivación, diseño de funciones de dispersión.',
                'Colisiones y su manejo.',
            ]
        },
        {
            name: 'Heaps',
            subtopics: [
                'Definición, propiedades y TDA.',
                'Algoritmos de inserción, remoción y recuperación de elementos.',
                'Análisis de complejidad.',
                'Aplicaciones.',
            ]
        },
        {
            name: ' Algoritmos de ordenamiento',
            subtopics: [
                'Métodos elementales de complejidad cuadrática: inserción, selección, burbuja.',
                'Métodos eficientes: Shellsort, Heapsort, Quicksort y Mergesort.',
                'Análisis de complejidad.',
            ]
        },
        {
            name: 'Algoritmos en gráficas',
            subtopics: [
                'Representación de gráficas, complejidad de espacio.',
                'Recorridos elementales: en amplitud (BFS) y a profundidad (DFS).',
                'Rutas más cortas: algoritmo de Dijkstra y Floyd.',
                'Árbol generador de peso mínimo, algoritmos de Prim y Kruskal.',
            ]
        },
    ]
};