import { IRawSubject } from "@models/interfaces/general";

export const SUBJECT_44: IRawSubject = {
    name: 'Organización y Arquitectura de Computadoras',
    topics: [
        {
            name: 'Principios cuantitativos del diseño de arquitecturas',
            subtopics: [
                'Tendencias tecnológicas y de uso.',
                'Medidas de desempeño de equipo de cómputo.',
            ]
        },
        {
            name: 'Representación de datos en una computadora digital',
            subtopics: [
                'Sistemas numéricos posicionales.',
                'Sistemas numéricos bases 2, 8 y 16.',
                'Representación de enteros con signo en una computadora digital',
                'Representación de enteros con signo en una computadora digital',
            ]
        },
        {
            name: 'Álgebra booleana',
            subtopics: [
                'Postulados del álgebra booleana',
                'Formas normales conjuntivas y disjuntivas',
                'Minimización de funciones',
            ]
        },
        {
            name: 'Circuitos combinacionales y secuenciales',
            subtopics: [
                'Circuitos combinacionales elementales: sumadores, comparadores, decodificadores y multiplexores',
                'Cerrojos (latches) SR, JK, D, maestro-esclavo',
                'Diagramas de estado, diseño de circuitos secuenciales',
            ]
        },
        {
            name: 'Diseño del conjunto de instrucciones',
            subtopics: [
                'Tipos de arquitectura del conjunto de instrucciones',
                'Arquitecturas load-store y su relación costo-beneficio',
                'Tipos y tamaño de operandos',
                'Modos de direccionamiento',
                'Formatos de instrucción y su proceso de ejecución',
            ]
        },
        {
            name: 'Unidad de control',
            subtopics: [
                'El diagrama de flujo de datos (datapath).',
                'Señales de control.',
                'Unidades de control microprogramadas y alambradas (hardwired)',
            ]
        },
        {
            name: 'Cause segmentado de ejecución (pipeline)',
            subtopics: [
                'Paralelismo a nivel de instrucción (ILP)',
                'Diseño de un procesador con cause segmentado',
                'Conictos (hazards) de control y de datos',
                'Esquemas de predicción de salto, salto retardado (delayed branch)',
            ]
        },
        {
            name: 'La relación hardware-software',
            subtopics: [
                'El papel del compilador en el desempeño del sistema',
                'La relación entre el sistema operativo y el hardware',
            ]
        },
        {
            name: 'La jerarquía de memoria',
            subtopics: [
                'Principio de localidad espacial y temporal',
                'Esquemas de colocación de bloques en un cache',
                'Políticas de reemplazo de bloque en los caches',
                'Manejo de escrituras en el cache',
                'Coherencia, conceptos y protocolos',
                'Memoria virtual',
            ]
        },
        {
            name: 'Entrada/Salida y canales',
            subtopics: [
                'Canales, conceptos y sincronización',
                'Esquemas de arbitraje de canal',
                'Dispositivos de almacenamiento secundario, medidas de desempeño',
            ]
        },
        {
            name: 'Sistemas multiprocesador',
            subtopics: [
                'Clasificación de Flynn',
                'Arquitecturas paralelas con memoria distribuida',
                'Arquitecturas paralelas con memoria centralizada',
                'Factores limitantes de la ley de Moore',
                'Paralelismo a nivel de hilo de ejecución (Thread Level Parallelism)',
                'Arquitecturas multi-núcleo',
            ]
        },
        {
            name: 'Arquitecturas de vanguardia',
            subtopics: [
                'Ejecución fuera de orden, despacho dinámico',
                'Arquitecturas VLIW y EPIC',
                'Especulación, predicación, soporte para software pipeline',
            ]
        },
    ]
}