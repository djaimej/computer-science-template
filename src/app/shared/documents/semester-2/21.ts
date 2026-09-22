import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_21: IRawSubject = {
    name: 'Álgebra Superior II',
    topics: [
        {
            name: 'Números enteros',
            subtopics: [
                'El anillo de los números enteros.',
                'ℤ como dominio entero. ',
                'El orden en ℤ.',
                'Principio de inducción. Principio del buen orden.',
                'Unidades en ℤ.',
            ]
        },
        {
            name: 'Divisibilidad',
            subtopics: [
                'Propiedades elementales.',
                'Algoritmo de la división.',
                'Máximo común divisor. Algoritmo de Euclides. Mínimo común múltiplo.',
                'Soluciones enteras de una ecuación lineal.',
                'Números primos. Factorización única.',
                'Congruencias. Congruencias lineales. Teorema chino del residuo.',
            ]
        },
        {
            name: 'Números complejos',
            subtopics: [
                'El campo de los números complejos.',
                'Conjugación. Módulo o norma.',
                'Raíces cuadradas. La ecuación de 2° grado.',
                'Representación polar. Teorema de De Moivre. Raíces 𝑛-ésimas.',
            ]
        },
        {
            name: 'Polinomios y ecuaciones polinomiales',
            subtopics: [
                'Polinomios con coeficientes en un campo K. Operaciones. El dominio entero K[x].',
                'Divisibilidad. Algoritmo de la división.',
                'Máximo común divisor. Algoritmo de Euclides.',
                'Polinomios irreducibles. Factorización única.',
                'Evaluación. Raíces de un polinomio. Teorema del residuo. Teorema del factor. Factorización de polinomios. División sintética.',
                'Raíces múltiples. Derivadas y multiplicidad.',
                'Teorema fundamental del álgebra. Consecuencias.',
            ]
        }
    ]
}