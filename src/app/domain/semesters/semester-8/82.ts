import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_82: IRawSubject = {
    name: 'Criptografía y Seguridad',
    topics: [
        {
            name: 'Conceptos de seguridad y criptografía',
            subtopics: [
                'Esquema general de la comunicación criptográfica.',
                'Servicios y mecanismos de seguridad, ataques.',
                'Principios de Kerckhoffs.',
                'Estándares de seguridad.',
            ]
        },
        {
            name: 'Sistemas de cifrado clásicos, seguridad perfecta',
            subtopics: [
                'Sistemas monoalfabéticos y polialfabéticos.',
                'Análisis de frecuencias, prueba de Kasiski y de Friedman.',
                'Sistemas poligráficos, sistema de Playfair y de Hill.',
                'Cifrado de Vernam, one-time pad y seguridad perfecta.',
                'Registros de desplazamiento de retroalimentación lineal.',
                'Cifrados de rotor: Enigma y Púrpura.',
            ]
        },
        {
            name: 'Redes de Feistel, cifrado de bloques, DES y AES',
            subtopics: [
                'Cifrado y teoría de la información: confusión y difusión.',
                'Redes de Feistel. Lucifer y DES.',
                'Criptoanálisis diferencial.',
                'Criptoanálisis lineal.',
                'Redes de permutación y substitución: AES.',
            ]
        },
        {
            name: 'Elementos de teoría de números y campos finitos',
            subtopics: [
                'Repaso de aritmética modular, divisibilidad, algoritmo de Euclides, MCD Y MCM.',
                'Teoremas de Fermat y de Euler, teorema chino del residuo.',
                'Un poco de estructuras algebraicas: grupos, anillos y campos.',
                'Campos finitos, polinomios.',
            ]
        },
        {
            name: 'Criptosistemas de llave pública',
            subtopics: [
                'Motivación, principios de sistemas de llave pública.',
                'Funciones de un sólo sentido: factorización y logaritmo discreto.',
                'Algoritmo de Diffie Hellman.',
                'Algoritmo de RSA.',
                'Algoritmo de El-Gamal.',
                'Elementos de criptoanálisis de sistemas de llave pública.',
            ]
        },
        {
            name: 'Algoritmos criptográficos de integridad de datos',
            subtopics: [
                'Códigos de autentificación de mensajes.',
                'Generadores de números pseudoaleatorios.',
                'Funciones de dispersión, características, usos para sintetizar mensajes.',
                'Funciones de dispersión basadas en cifrados de bloque.',
                'Análisis de diversos algoritmos de dispersión.',
            ]
        },
        {
            name: 'Autentificación y firma digital',
            subtopics: [
                'Principios fundamentales de autentificación, factores de autentificación.',
                'Distribución de llaves, certificados.',
                'Protocolos de autentificación.',
                'Autentificación basada en sistemas simétricos y de llave pública.',
            ]
        },
        {
            name: 'Protocolos de seguridad en Internet',
            subtopics: [
                'Análisis comparativo de sistemas simétricos y de llave pública.',
                'Sistemas criptográficos mixtos.',
                'Seguridad en la web.',
                'Protocolos de seguridad: IPSec, secure shell, TLS, PGP.',
                'Ataques, herramientas de análisis.',
            ]
        },
        {
            name: 'Seguridad en redes, cortafuegos y políticas',
            subtopics: [
                'Intrusión, detección de intrusos.',
                'Tipos de ataque, tipos de software malicioso.',
                'Planeación de la seguridad, políticas de seguridad.',
                'Aspectos de seguridad en el diseño de sistemas operativos y de manejadores de bases de datos.',
                'Mecanismos de defensa contra intrusión, configuración del sistema, cortafuegos.',
                'Herramientas de análisis de intrusión, análisis forense.',
            ]
        },
    ]
}
