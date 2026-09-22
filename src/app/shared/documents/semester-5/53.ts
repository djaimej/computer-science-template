import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_53: IRawSubject = {
    name: 'Fundamentos de Bases de Datos',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Desarrollo histórico de los sistemas manejadores de bases de datos.',
                'Conceptos básicos de las bases de datos.',
                'Arquitectura de tres niveles (físico, conceptual y externo).',
            ]
        },
        {
            name: 'Modelos de datos',
            subtopics: [
                'Modelo orientado a objetos.',
                'Modelo relacional.',
                'Modelo de datos semiestructurados.',
            ]
        },
        {
            name: 'Modelado de bases de datos usando el modelo entidad/relación',
            subtopics: [
                'Elementos del modelo E/R.',
                'Convensiones y aspectos de diseño.',
                'Especificación de restricciones.',
            ]
        },
        {
            name: 'Modelo Relacional ',
            subtopics: [
                'Estructura de los datos.',
                'Mapeo del esquema conceptual al esquema relacional.',
                'Álgebra relacional.',
                'Cálculo relacional.',
                'Reglas de Codd.',
            ]
        },
        {
            name: 'Diseño de bases de datos',
            subtopics: [
                'Dependencias Funcionales.',
                'Formas normales (1NF, 2NF, 3NF, BCNF).',
                'Dependencias Multivaluadas.',
                'Cuarta forma normal (4NF).',

            ]
        },
        {
            name: 'Lenguaje de consulta SQL',
            subtopics: [
                'Estructura.',
                'Consultas.',
                'Subconsultas.',
                'Actualizaciones.',
                'Definición de esquemas.',
                'Optimización.',
            ]
        },
        {
            name: 'Vistas',
            subtopics: [
                'Declaración.',
                'Consulta.',
                'Actualización',
            ]
        },
        {
            name: 'Integridad',
            subtopics: [
                'Integridad de Entidad.',
                'Integridad de Dominio.',
                'Integridad de Referencial.',
                'Integridad del Usuario.',
            ]
        },
        {
            name: 'Procesamiento de transacciones',
            subtopics: [
                'Concepto, problemas.',
                'Propiedades de una transacción.',
                'Control de concurrencia.',
                'Manejo de transacciones en SQL.',
            ]
        },
    ]
}