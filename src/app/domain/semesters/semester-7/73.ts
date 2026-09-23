import { IRawSubject } from "@domain/interfaces";

export const SUBJECT_73: IRawSubject = {
    name: 'Redes de Computadoras',
    topics: [
        {
            name: 'Conceptos generales',
            subtopics: [
                'Redes de computadoras. Uso de las redes de computadoras.Internet. Conectividad, la influencia de los medios de comunicación Clasificación de las redes de computadoras: por estructura, por espacio geográfico.',
                'Clasificación de las redes de computadoras: por estructura, por espacio geográfico.',
                'Arquitectura de redes. Definición, ejemplos de arquitecturas (cerradas).',
                'Software para redes de computadoras. Protocolos. Especificación y verificación. Interfaces y servicios.',
                'Modelos de referencia: Modelo OSI de ISO. Estándar 802 de IEEE. Arquitectura de Internet. Protocolos TCP/IP.',
            ]
        },
        {
            name: 'Nivel de enlace de datos',
            subtopics: [
                'Creación de paquetes. Detección de errores. Control de flujo. Ejemplos de protocolos a nivel de enlace.'
            ]
        },
        {
            name: 'Redes locales',
            subtopics: [
                'Características generales.',
                'Protocolos de acceso a un medio de comunicación compartido.',
                'Ethernet. Propiedades físicas; protocolo de acceso al medio; servicios de acceso a Ethernet.',
                'Token Ring.',
                'Redes inalámbricas.',
                'Redes de alta velocidad.',
            ]
        },
        {
            name: 'Interconexión de redes de computadoras',
            subtopics: [
                'Retransmisión de información. Circuitos virtuales y datagramas; algoritmos de ruteo; problemas de congestion.',
                'Interconexión de redes locales.  Repetidores, puentes, ruteadores, pasarelas.',
                'Internet.  Características generales; manejo de direcciones (físicas y lógicas); IPv4; redes virtuales y túneles; subredes; características generales.',
            ]
        },
        {
            name: 'Transporte',
            subtopics: [
                'Características generales.',
                'Protocolo TCP.',
                'Protocolo UDP.',
            ]
        },
        {
            name: 'Aplicaciones',
            subtopics: [
                'Problemas de representación de la información (XDR, ASN.1).',
                'Transferencias seguras. Cifrado (DES, RSA, MD5); mecanismos de seguridad (PGP, SSL, HTTPS).',
                'Protocolos para aplicaciones específicas (DNS, SMTP, HTTP, SNMP).',
                'Protocolos para aplicaciones generales (FTAM, ROSE, RPC, RSVP).',
            ]
        },
        {
            name: 'Temas opcionales',
            subtopics: [
                'Sistemas operativos para redes de computadoras.',
                'Sistemas distribuidos.  Características generales; problemas de comunicación en sistemas distribuidos.',
            ]
        },
    ]
}
