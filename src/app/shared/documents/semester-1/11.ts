import { IRawSubject } from '@models/interfaces/general';

export const SUBJECT_11: IRawSubject = {
    name: 'Álgebra Superior I',
    topics: [
        {
            name: 'Conjuntos',
            subtopics: [
                'Noción intuitiva e igualdad de conjuntos. Subconjuntos. Conjunto vacío, Conjunto Universal.',
                'Operaciones con conjuntos: unión, intersección, complemento y diferencia.',
                'Conjunto potencia. Producto cartesiano. Familias de conjuntos.'
            ]
        },
        {
            name: 'Relaciones y funciones',
            subtopics: [
                'Relaciones (dominio, co-dominio e imagen).',
                'Funciones (imágenes e imágenes inversas).',
                'Composición de funciones. Función inversa.',
                'Funciones inyectias, suprayectivas y biyectivas.',
                'Cardinalidad. Conjuntos finitos e infinitos. Funciones entre conjuntos finitos.',
                'Relaciones de equivalencia y particiones.'
            ]
        },
        {
            name: 'Números naturales y cálculo combinatoria',
            subtopics: [
                'Los números naturales. Principio de inducción.',
                'Cálculo combinatorio: ordenaciones con repetición, ordenaciones, permutaciones y combinaciones.',
                'Teorema del binomio. Relaciones entre coeficientes binomiales.'
            ]
        },
        {
            name: 'Espacios vectoriales',
            subtopics: [
                'Los espacios ℝ2 y ℝ3. Interpretación geométrica.',
                'El espacio vectorial ℝn.',
                'Subespacios. Combinaciones lineales. Subespacio generado por un conjunto de vectores.',
                'Dependencia e independencia lineal.',
                'Bases. Dimensión.'
            ]
        },
        {
            name: 'Matrices y determinantes',
            subtopics: [
                'Matrices, definición y operaciones. Transpuesta de una matriz.',
                'Operaciones elementales: Matrices escalón reducidas. Rango de una matriz.',
                'El determinante de una matriz cuadrada: definición y propiedades.',
                'Cálculo de determinantes.',
                'Caracterización del rango de una matriz por medio del determinante.',
            ]
        },
        {
            name: 'Sistemas de ecuaciones lineales',
            subtopics: [
                'Sistemas, soluciones, matriz y matriz aumentada.',
                'Criterios de existencia de soluciones.',
                'Regla de Cramer.',
                'Espacio de soluciones de un sistema no homogéneo.',
                'Resolución de sistemas (eliminación).',
            ]
        }
    ]
}