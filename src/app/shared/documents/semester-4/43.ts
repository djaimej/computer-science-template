import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_43: IRawSubject = {
    name: 'Matemáticas para Ciencias Aplicadas IV',
    topics: [
        {
            name: 'Ecuaciones Diferenciales de 1er Orden',
            subtopics: [
                'Definición y significado geométrico.',
                'Ecuaciones lineales (aplicaciones).',
                'Variables separables (aplicaciones)',
                'Ecuaciones diferenciales exactas y factor de integración (aplicaciones).',
            ]
        },
        {
            name: 'Existencia y unicidad de soluciones',
            subtopics: [
                'Teorema de existencia y unicidad (sin demostración).',
                'Introducción a Matlab.',
                'Métodos Numéricos.',
            ]
        },
        {
            name: 'Ecuaciones Diferenciales de 2o Orden',
            subtopics: [
                'Problemas de condiciones iniciales y problemas de condiciones en la frontera.',
                'Ecuaciones lineales de 2o Orden.',
                'Coeficientes constantes.',
                'Transformada de Laplace.',
                'Discontinuidades y funciones de impulso.',
            ]
        },
        {
            name: 'Ecuaciones diferenciales de 2o Orden con coeficientes variables',
            subtopics: [
                'Solución en serie.',
                'Ecuación de Euler.',
                'Puntos singulares regulares y método de Frobenius.',
                'Funciones especiales.',
            ]
        },
        {
            name: 'Sistemas de Ecuaciones',
            subtopics: [
                'Sistemas de ecuaciones lineales homogéneos.',
                'Sistema de ecuaciones lineales no homogéneos.',
                'Interpretación geométrica y aplicaciones.',
                'Introducción a sistemas no lineales.',
            ]
        },
        {
            name: 'Ecuaciones de Tipo Hiperbólico',
            subtopics: [
                'Problemas que conducen a ecuaciones de tipo hiperbólico.',
                'Oscilaciones transversales de una cuerda.',
                'Oscilaciones longitudinales de barras y cuerdas.',
                'Método de propagación de las ondas.',
                'Método de separación de variables.',
            ]
        },
        {
            name: 'Ecuaciones de tipo Parabólico',
            subtopics: [
                'Problemas que conducen a ecuaciones de tipo parabólico.',
                'Propagación del calor.',
                'Ecuación de difusión.',
                'Método de separación de variables.',
            ]
        },
        {
            name: 'Ecuaciones de tipo Elíptico',
            subtopics: [
                'Problemas que se reducen a la ecuación de Laplace.',
                'Campo térmico estacionario.',
                'Problemas de potencial.',
                'Fórmulas de Green.',
                'Resolución de problemas simples por método de separación de variables.',
            ]
        },
    ]
}