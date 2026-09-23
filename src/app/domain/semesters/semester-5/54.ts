import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_54: IRawSubject = {
    name: 'Lenguajes de Programación',
    topics: [
        {
            name: 'Introducción',
            subtopics: [
                'Historia de los lenguajes de programación.',
                'Breve discusión de los paradigmas clásicos (imperativo, orientado a objetos, funcional, lógico).',
                'Programación en pequeña y gran escala.',
            ]
        },
        {
            name: 'Fundamentos',
            subtopics: [
                'Herramientas matemáticas: definiciones inductivas; inducción estructural; reglas de inferencia; sistemas de transición.',
                'Sintaxis: niveles de sintaxis (concreta y abstracta); manejo de variables (ligado y alcance); análisis sintáctico (parsing).',
                'Semántica: estilos de semántica (denotacional, operacional, axiomática); semántica estática y dinámica; sistemas de tipos.',
                'Expresiones aritméticas y booleanas; expresiones let.',
            ]
        },
        {
            name: 'Paradigma funcional',
            subtopics: [
                'Funciones anónimas, abstracción lambda y aplicación de funciones.',
                'Orden y estrategias de evaluación; evaluación ansiosa (eager) y perezosa (lazy).',
                'Tipos función (cálculo lambda con tipos simples).',
                'Estilos de tipado: tipado dinámico vs. tipado estático.',
                'Recursion: funciones con nombre, puntos fijos, definiciones con letrec o fix.',
                'Tipos de datos finitos e infinitos: registros (productos), variantes (sumas), tipos recursivos.',
                'Polimorfismo.',
            ]
        },
        {
            name: 'Paradigma imperativo',
            subtopics: [
                'Máquinas abstractas.',
                'Procedimientos y bloques de programa.',
                'El enunciado de asignación.',
                'Registros de activación; manejo de memoria; recolección de basura.',
                'Mecanismos de paso de parámetros (por valor, por nombre, por referencia, por necesidad).',
                'Continuaciones.',
                'Estructuras de control simples; iteradores.',
                'Manejo de excepciones.',
            ]
        },
        {
            name: 'Paradigma orientado a objetos',
            subtopics: [
                'Fundamentos: representaciones múltiples, encapsulamiento, subtipado, herencia, recursion abierta.',
                'Polimorfismo de subtipos.',
                'Modelado y representación de objetos.',
                'Despacho dinámico y reemplazo de métodos (overriding).',
                'Formalismos: Java Peso Pluma (Featherweight Java), SOOL.',
            ]
        },
    ]
}
