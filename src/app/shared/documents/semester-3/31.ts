import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_31: IRawSubject = {
    name: 'Álgebra Lineal I',
    topics: [
        {
            name: 'Espacios vectoriales',
            subtopics: [
                'Campos.',
                'Espacios vectoriales.',
                'Subespacios vectoriales.',
                'Dependencia lineal.',
                'Bases y dimensión.',
                'Sumas directas.',
            ]
        },
        {
            name: 'Matrices',
            subtopics: [
                'El espacio de las matrices.',
                'Multiplicación de matrices. Matrices elementales. Matriz inversa.',
                'Sistemas de ecuaciones lineales.',
            ]
        },
        {
            name: 'Transformaciones lineales',
            subtopics: [
                'El espacio de las transformaciones lineales.',
                'Núcleo e imagen de una transformación lineal.',
                'Composición de transformaciones lineales.',
                'La transformación inversa.',
                'Espacios isomorfos.',
            ]
        },
        {
            name: 'Transformaciones lineales y matrices',
            subtopics: [
                'La transformación lineal asociada a una matriz.',
                'La matriz asociada a una transformación lineal.',
                'Isomorfismos entre el espacio de matrices y el de transformaciones lineales.',
                'Cambios de base.',
            ]
        },
        {
            name: 'Producto escalar',
            subtopics: [
                'Productos escalares y hermitianos.',
                'Ortogonalidad.',
                'Productos positivos, normas y ángulos.',
                'Coeficientes de Fourier.',
                'Bases ortogonales (caso positivo).',
                'Complemento ortogonal de un subespacio. Aplicación a los sistemas de ecuaciones.',
                'Bases ortogonales (caso general).',
                'Espacio dual.',
            ]
        },
        {
            name: 'Determinantes',
            subtopics: [
                'Unicidad del determinante.',
                'Determinante de un producto.',
                'Invertibilidad de matrices y determinantes.',
                'Determinante de un operador lineal.',
            ]
        },
        {
            name: 'Transformaciones simétricas',
            subtopics: [
                'Definición y propiedades elementales de valores y vectores propios.',
                'Polinomio característico.',
                'Existencia de valores propios reales de transformaciones simétricas.',
                'Teorema espectral para transformaciones simétricas.',
                'Ejemplos.',
            ]
        },
    ]
}