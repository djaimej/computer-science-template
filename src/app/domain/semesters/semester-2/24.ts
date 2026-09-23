import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_24: IRawSubject = {
    name: 'Matemáticas para Ciencias Aplicadas II',
    topics: [
        {
            name: 'Espacio Euclidiano de dimensión n',
            subtopics: [
                'Suma de vectores. Producto por escalares.',
                'Producto interno. Distancia.',
                'Producto cruz. Triple producto escalar.',
                'Área de paralelogramos y volumen de paralelepípedos.',
                'Transformación lineal y matrices.',
                'Vector propio. Forma canónica de Jordan en 2 y 3 dimensiones.',
                'Ecuaciones Lineales.',
            ]
        },
        {
            name: 'Sólidos de revolución',
            subtopics: [
                'Volúmenes de sólidos.',
                'Área de superficies de revolución.',
                'Coordenadas polares. Área y Longitud en coordenadas polares.',
            ]
        },
        {
            name: 'Curvas',
            subtopics: [
                'Trayectoria y velocidad.',
                'Longitud de arco.',
                'Geometría de curvas en el espacio.',
            ]
        },
        {
            name: 'Campos escalares',
            subtopics: [
                'Funciones reales de varias variables. Representación gráfica de funciones reales (gráficas y conjuntos de nivel).',
                'Límite y derivada.',
                'Propiedades de la derivada.',
                'Gradiente y derivada direccional.',
            ]
        },
        {
            name: 'Máximos y mínimos',
            subtopics: [
                'Aproximación polinomial.',
                'Puntos críticos de funciones reales.',
                'Máximos y mínimos.',
                'Máximos y mínimos con restricciones.',
            ]
        },
    ]
}
