import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_32: IRawSubject = {
    name: 'Matemáticas para Ciencias Aplicadas III',
    topics: [
        {
            name: 'Integral de Riemann',
            subtopics: [
                'Integral sobre rectángulos. Propiedades de la integral.',
                'La integral sobre regiones más generales.',
                'Integral iterada y el teorema de Fubini.',
                'Geometría de las funciones de R2 en R2.',
                'Teorema del cambio de variable.',
                'Aplicaciones.',
            ]
        },
        {
            name: 'Funciones con valores vectoriales',
            subtopics: [
                'Campos vectoriales. Campos gradientes.',
                'Divergencia y rotacional. Interpretación física.',
                'Diferenciación.',
            ]
        },
        {
            name: 'Integral sobre trayectorias y superficies',
            subtopics: [
                'Curvas. Orientación.',
                'La integral de trayectoria.',
                'Integrales de línea (trabajo, circulación).',
                'Parametrización de superficies. Orientación.',
                'Área de una superficie.',
                'Integral de funciones reales sobre superficies (masa y carga total de una superficie).',
                'Integral de superficie (flujo a través de una superficie).',
                'Aplicaciones.',
            ]
        },
        {
            name: 'Teoremas de Green y Stokes',
            subtopics: [
                'Teorema de Green.',
                'Teorema de Stokes.',
                'Campos conservativos.',
                'Teorema de Gauss.',
                'Aplicaciones.',
            ]
        },
    ]
}