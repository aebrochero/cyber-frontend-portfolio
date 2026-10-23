/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from './types';

export type StyleThemeKey = 'cyber' | 'cozy' | 'vaporwave' | 'minimal';

export interface StyleLabels {
  nav: {
    specialties: string;
    projects: string;
    timeline: string;
    stack: string;
    contact: string;
    tourBtn: string;
  };
  hero: {
    badge: string;
    startTour: string;
    specsTitle: string;
    locationNote: string;
  };
  specialties: {
    rosterTitle: string;
    selectRolePrompt: string;
    capabilitiesTitle: string;
    statsTitle: string;
  };
  projects: {
    sectionTag: string;
    sectionTitle: string;
    outcomesTitle: string;
    collapseBtn: string;
    expandBtn: string;
    repoBtn: string;
  };
  timeline: {
    sectionTag: string;
    sectionTitle: string;
    achievementsTitle: string;
  };
  stack: {
    sectionTag: string;
    sectionTitle: string;
    summaryTitle: string;
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    btnSubmit: string;
    btnSending: string;
    successTitle: string;
    successDesc: string;
    btnNew: string;
  };
  tourStepOverrides?: {
    specialtiesTitle: string;
    specialtiesDesc: string;
    projectsTitle: string;
    projectsDesc: string;
    timelineTitle: string;
    timelineDesc: string;
    stackTitle: string;
    stackDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
}

export const STYLE_DICTIONARIES: Record<StyleThemeKey, Record<Language, StyleLabels>> = {
  cozy: {
    es: {
      nav: {
        specialties: 'Especialidades',
        projects: 'Proyectos & Portafolio',
        timeline: 'Trayectoria & Experiencia',
        stack: 'Habilidades & Stack',
        contact: 'Contacto Directo',
        tourBtn: 'Tour Guiado',
      },
      hero: {
        badge: 'Disponible para Proyectos // Presencial · Híbrido · Remoto',
        startTour: 'Comenzar Recorrido del Espacio',
        specsTitle: 'Detalles del Desarrollador',
        locationNote: 'Pereira, Risaralda · Colombia',
      },
      specialties: {
        rosterTitle: 'Áreas de Especialización',
        selectRolePrompt: 'Elige un área de enfoque',
        capabilitiesTitle: 'Habilidades & Entregables Clave',
        statsTitle: 'Métricas de Dominio Técnico',
      },
      projects: {
        sectionTag: 'Casos Reales & Trabajo de Producción',
        sectionTitle: 'Proyectos Destacados',
        outcomesTitle: 'Impacto y Resultados Clave',
        collapseBtn: 'Ver menos detalles [-]',
        expandBtn: 'Ver impacto y entregables [+]',
        repoBtn: 'Ver Repositorio',
      },
      timeline: {
        sectionTag: 'Experiencia Profesional',
        sectionTitle: 'Mi Trayectoria en Ingeniería',
        achievementsTitle: 'Responsabilidades y Logros',
      },
      stack: {
        sectionTag: 'Herramientas y Tecnologías',
        sectionTitle: 'Stack Técnico & Habilidades',
        summaryTitle: 'Resumen de Competencias',
      },
      contact: {
        sectionTag: 'Hablemos de tus proyectos',
        sectionTitle: 'Ponte en Contacto',
        sectionDesc:
          '¿Tienes un proyecto en mente o una propuesta laboral? Envíame un mensaje y te responderé en menos de 24 horas con un café en mano.',
        btnSubmit: 'Enviar Mensaje',
        btnSending: 'Enviando Mensaje...',
        successTitle: '¡Mensaje Enviado con Éxito!',
        successDesc: 'Gracias por escribirme. He recibido tu mensaje y te responderé lo antes posible.',
        btnNew: 'Enviar otro mensaje',
      },
      tourStepOverrides: {
        specialtiesTitle: '01 // Áreas de Especialización',
        specialtiesDesc: 'Conoce mis tres pilares de trabajo: Arquitectura Frontend con React y Next.js, Integración Backend con Node.js y PostgreSQL, y Pruebas con Playwright.',
        projectsTitle: '02 // Proyectos Reales',
        projectsDesc: 'Casos reales de producción nacional en el SENA (Oferta, Admin y Selección Betowa) y herramientas personales de código abierto.',
        timelineTitle: '03 // Trayectoria Profesional',
        timelineDesc: 'Mi evolución técnica a través de los años como desarrollador Frontend, Backend y de Software.',
        stackTitle: '04 // Tecnologías y Herramientas',
        stackDesc: 'Un vistazo a las tecnologías con las que construyo soluciones modernas, accesibles y de alto rendimiento.',
        contactTitle: '05 // Información de Contacto',
        contactDesc: 'Todos mis canales directos: correo personal, email institucional, WhatsApp, GitHub y LinkedIn.',
      },
    },
    en: {
      nav: {
        specialties: 'Specialties',
        projects: 'Projects & Work',
        timeline: 'Career Journey',
        stack: 'Skills & Stack',
        contact: 'Get in Touch',
        tourBtn: 'Guided Tour',
      },
      hero: {
        badge: 'Available for Roles // On-site · Hybrid · Remote',
        startTour: 'Start Guided Studio Tour',
        specsTitle: 'Developer Overview',
        locationNote: 'Pereira, Risaralda · Colombia',
      },
      specialties: {
        rosterTitle: 'Areas of Expertise',
        selectRolePrompt: 'Select a focus area',
        capabilitiesTitle: 'Key Skills & Capabilities',
        statsTitle: 'Technical Proficiency Levels',
      },
      projects: {
        sectionTag: 'Real-World Production Work',
        sectionTitle: 'Featured Projects',
        outcomesTitle: 'Key Outcomes & Impact',
        collapseBtn: 'Show less [-]',
        expandBtn: 'View outcomes & impact [+]',
        repoBtn: 'View Repository',
      },
      timeline: {
        sectionTag: 'Professional Experience',
        sectionTitle: 'Career History',
        achievementsTitle: 'Key Responsibilities & Highlights',
      },
      stack: {
        sectionTag: 'Tools & Technologies',
        sectionTitle: 'Technical Skills & Stack',
        summaryTitle: 'Core Competency Overview',
      },
      contact: {
        sectionTag: 'Let’s build something together',
        sectionTitle: 'Get in Touch',
        sectionDesc:
          'Have an exciting project, role, or collaboration in mind? Drop me a message and I will get back to you within 24 hours.',
        btnSubmit: 'Send Message',
        btnSending: 'Sending Message...',
        successTitle: 'Message Received!',
        successDesc: 'Thank you for reaching out! I have received your note and will reply promptly.',
        btnNew: 'Send another note',
      },
      tourStepOverrides: {
        specialtiesTitle: '01 // Core Specialties',
        specialtiesDesc: 'Explore my three main engineering pillars: Frontend Architecture with Next.js/React, Backend Integration with Node.js/PostgreSQL, and Automated Testing with Playwright.',
        projectsTitle: '02 // Featured Projects',
        projectsDesc: 'Mission-critical production web platforms for SENA (Oferta, Admin, Selección Betowa) alongside open-source GitHub tools.',
        timelineTitle: '03 // Career Timeline',
        timelineDesc: 'My professional growth over the years as a Frontend, Backend, and Full-Stack Software Engineer.',
        stackTitle: '04 // Skills & Equipment',
        stackDesc: 'The modern tools and frameworks I use daily to engineer fast, accessible, and resilient applications.',
        contactTitle: '05 // Contact Channels',
        contactDesc: 'Direct communication channels: personal email, institutional email, WhatsApp, GitHub, and LinkedIn.',
      },
    },
  },
  minimal: {
    es: {
      nav: {
        specialties: 'Especialidades',
        projects: 'Selección de Proyectos',
        timeline: 'Cronología Profesional',
        stack: 'Arsenal Técnico',
        contact: 'Correspondencia',
        tourBtn: 'Guía de Lectura',
      },
      hero: {
        badge: 'Práctica Profesional · Pereira, Colombia',
        startTour: 'Iniciar Guía Editorial',
        specsTitle: 'Ficha Técnica de Ingeniería',
        locationNote: 'Pereira / Dosquebradas (UTC-05)',
      },
      specialties: {
        rosterTitle: 'Pilares de Práctica',
        selectRolePrompt: 'Seleccione un área de estudio',
        capabilitiesTitle: 'Capacidades y Entregables',
        statsTitle: 'Evaluación de Competencias',
      },
      projects: {
        sectionTag: 'Índice de Obras y Aplicaciones',
        sectionTitle: 'Proyectos Seleccionados',
        outcomesTitle: 'Entregables y Métricas de Rendimiento',
        collapseBtn: 'Cerrar registro [-]',
        expandBtn: 'Examinar entregables [+]',
        repoBtn: 'Código Fuente',
      },
      timeline: {
        sectionTag: 'Registro Histórico',
        sectionTitle: 'Trayectoria Profesional',
        achievementsTitle: 'Hitos y Responsabilidades',
      },
      stack: {
        sectionTag: 'Diagnóstico de Capacidades',
        sectionTitle: 'Stack y Herramientas',
        summaryTitle: 'Resumen de Competencias',
      },
      contact: {
        sectionTag: 'Canal de Correspondencia',
        sectionTitle: 'Iniciar Conversación',
        sectionDesc: 'Canal directo para propuestas laborales, consultorías de arquitectura frontend o colaboraciones técnicas.',
        btnSubmit: 'Despachar Mensaje',
        btnSending: 'Despachando...',
        successTitle: 'Correspondencia Registrada',
        successDesc: 'Su comunicación ha sido recibida satisfactoriamente. Se emitirá una respuesta en breve.',
        btnNew: 'Redactar nueva nota',
      },
      tourStepOverrides: {
        specialtiesTitle: '01 // Pilares de Práctica',
        specialtiesDesc: 'Los tres fundamentos técnicos de Andrés Brochero: Arquitectura Frontend, Integración de Datos Backend y Aseguramiento de Calidad.',
        projectsTitle: '02 // Proyectos Seleccionados',
        projectsDesc: 'Aplicaciones web de gran escala desarrolladas para el ecosistema educativo del SENA junto a proyectos de código abierto.',
        timelineTitle: '03 // Trayectoria Histórica',
        timelineDesc: 'Cronología de experiencia profesional auditada en ingeniería de software.',
        stackTitle: '04 // Habilidades y Lenguajes',
        stackDesc: 'Dominio de Next.js, React 19, TypeScript estricto, Tailwind CSS y pruebas automatizadas.',
        contactTitle: '05 // Datos de Correspondencia',
        contactDesc: 'Puntos de contacto directo: correos electrónicos, WhatsApp profesional, perfil de GitHub y LinkedIn.',
      },
    },
    en: {
      nav: {
        specialties: 'Specialties',
        projects: 'Selected Works',
        timeline: 'Career Chronology',
        stack: 'Technical Repertoire',
        contact: 'Correspondence',
        tourBtn: 'Reading Guide',
      },
      hero: {
        badge: 'Professional Practice · Pereira, Colombia',
        startTour: 'Begin Editorial Guide',
        specsTitle: 'Engineering Specification',
        locationNote: 'Pereira / Dosquebradas (UTC-05)',
      },
      specialties: {
        rosterTitle: 'Pillars of Practice',
        selectRolePrompt: 'Select a domain',
        capabilitiesTitle: 'Capabilities & Deliverables',
        statsTitle: 'Competency Assessments',
      },
      projects: {
        sectionTag: 'Catalog of Applications',
        sectionTitle: 'Selected Projects',
        outcomesTitle: 'Deliverables & Performance Metrics',
        collapseBtn: 'Collapse record [-]',
        expandBtn: 'Inspect deliverables [+]',
        repoBtn: 'Source Repository',
      },
      timeline: {
        sectionTag: 'Historical Record',
        sectionTitle: 'Professional Journey',
        achievementsTitle: 'Milestones & Key Contributions',
      },
      stack: {
        sectionTag: 'Capability Diagnostics',
        sectionTitle: 'Stack & Tooling',
        summaryTitle: 'Competency Overview',
      },
      contact: {
        sectionTag: 'Correspondence Dispatch',
        sectionTitle: 'Initiate Contact',
        sectionDesc: 'Direct channel for career opportunities, frontend architecture consultations, or technical collaborations.',
        btnSubmit: 'Dispatch Note',
        btnSending: 'Dispatching...',
        successTitle: 'Correspondence Logged',
        successDesc: 'Your note has been transmitted successfully. A direct reply will follow promptly.',
        btnNew: 'Draft another note',
      },
      tourStepOverrides: {
        specialtiesTitle: '01 // Practice Pillars',
        specialtiesDesc: 'The three technical cornerstones: Modern Frontend Architecture, Backend & Data Integration, and Continuous Quality Testing.',
        projectsTitle: '02 // Selected Works',
        projectsDesc: 'High-concurrency educational platforms built for SENA alongside open-source GitHub software.',
        timelineTitle: '03 // Career Chronology',
        timelineDesc: 'An audited timeline of professional software engineering experience.',
        stackTitle: '04 // Skills & Tooling',
        stackDesc: 'Expertise in Next.js, React 19, strict TypeScript, Tailwind CSS, and automated testing.',
        contactTitle: '05 // Direct Contact',
        contactDesc: 'Direct points of contact: personal email, institutional email, professional WhatsApp, GitHub, and LinkedIn.',
      },
    },
  },
  vaporwave: {
    es: {
      nav: {
        specialties: 'STAGE 1: Especialidades',
        projects: 'STAGE 2: Misiones',
        timeline: 'STAGE 3: Trayectoria',
        stack: 'STAGE 4: Arsenal',
        contact: 'STAGE 5: Señal Comms',
        tourBtn: 'INSERT COIN / TOUR',
      },
      hero: {
        badge: '1P READY // PRESENCIAL · HÍBRIDO · REMOTO',
        startTour: 'START STAGE TOUR // 1984',
        specsTitle: 'HIGH SCORE SPECS',
        locationNote: 'Pereira, Colombia // UTC-05',
      },
      specialties: {
        rosterTitle: 'SELECT YOUR CHARACTER',
        selectRolePrompt: 'Elige tu clase de combate',
        capabilitiesTitle: 'Habilidades Especiales',
        statsTitle: 'Power & Stamina Stats',
      },
      projects: {
        sectionTag: 'LOG DE MISIONES Y NIVELES',
        sectionTitle: 'Proyectos Superados',
        outcomesTitle: 'Bonus & Puntos de Impacto',
        collapseBtn: 'Reducir log [-]',
        expandBtn: 'Ver bonus y stats [+]',
        repoBtn: 'Cartucho / Repo',
      },
      timeline: {
        sectionTag: 'HISTORIAL DE BOSSES Y STAGES',
        sectionTitle: 'Cronología de Partida',
        achievementsTitle: 'Logros Desbloqueados',
      },
      stack: {
        sectionTag: 'EQUIPAMIENTO DE PODER',
        sectionTitle: 'Arsenal Tecnológico',
        summaryTitle: 'Power Level Total',
      },
      contact: {
        sectionTag: 'COMMS FREQUENCY 433 MHZ',
        sectionTitle: 'Transmisor de Señal',
        sectionDesc: 'Establece contacto directo con la cabina de Andrés para nuevas misiones de ingeniería.',
        btnSubmit: 'TRANSMITIR COMUNICADO',
        btnSending: 'CARGANDO SEÑAL...',
        successTitle: '¡SEÑAL TRANSMITIDA!',
        successDesc: 'Transmisión exitosa. Andrés responderá desde su terminal en breve.',
        btnNew: 'NUEVA TRANSMISIÓN',
      },
      tourStepOverrides: {
        specialtiesTitle: 'STAGE 01 // Especialidades',
        specialtiesDesc: 'Arquitectura Frontend, Backend & Datos, y Testing de Alta Calidad listos para la partida.',
        projectsTitle: 'STAGE 02 // Misiones de Producción',
        projectsDesc: 'Niveles completados: Ecosistema Betowa en SENA y proyectos de código abierto.',
        timelineTitle: 'STAGE 03 // Registro de Experiencia',
        timelineDesc: 'Años acumulados superando desafíos en frontend, backend y plataformas web.',
        stackTitle: 'STAGE 04 // Arsenal de Armas',
        stackDesc: 'El combo ganador: Next.js + React 19 + TypeScript + Tailwind + Playwright.',
        contactTitle: 'STAGE 05 // Canal de Enlace',
        contactDesc: 'Comunica tus propuestas por email, WhatsApp, GitHub o LinkedIn.',
      },
    },
    en: {
      nav: {
        specialties: 'STAGE 1: Specialties',
        projects: 'STAGE 2: Missions',
        timeline: 'STAGE 3: Journey',
        stack: 'STAGE 4: Arsenal',
        contact: 'STAGE 5: Comms Signal',
        tourBtn: 'INSERT COIN / TOUR',
      },
      hero: {
        badge: '1P READY // ON-SITE · HYBRID · REMOTE',
        startTour: 'START STAGE TOUR // 1984',
        specsTitle: 'HIGH SCORE SPECS',
        locationNote: 'Pereira, Colombia // UTC-05',
      },
      specialties: {
        rosterTitle: 'SELECT YOUR CHARACTER',
        selectRolePrompt: 'Select your combat class',
        capabilitiesTitle: 'Special Moves & Capabilities',
        statsTitle: 'Power & Stamina Stats',
      },
      projects: {
        sectionTag: 'MISSION ARCHIVES & BOSS LOGS',
        sectionTitle: 'Completed Quests',
        outcomesTitle: 'Bonus Points & Impact',
        collapseBtn: 'Collapse log [-]',
        expandBtn: 'View bonus & stats [+]',
        repoBtn: 'Cartridge / Repo',
      },
      timeline: {
        sectionTag: 'STAGE HISTORY & QUEST RUNS',
        sectionTitle: 'Player Chronology',
        achievementsTitle: 'Unlocked Achievements',
      },
      stack: {
        sectionTag: 'EQUIPMENT POWERUP CELL',
        sectionTitle: 'Technical Arsenal',
        summaryTitle: 'Total Power Level',
      },
      contact: {
        sectionTag: 'COMMS FREQUENCY 433 MHZ',
        sectionTitle: 'Signal Transmitter',
        sectionDesc: 'Open a direct frequency to Andrés’ station for engineering quests and collaborations.',
        btnSubmit: 'TRANSMIT SIGNAL',
        btnSending: 'COMPILING BURST...',
        successTitle: 'SIGNAL RECEIVED!',
        successDesc: 'Burst transmitted successfully. Andrés will acknowledge on local terminal shortly.',
        btnNew: 'TRANSMIT NEW BURST',
      },
      tourStepOverrides: {
        specialtiesTitle: 'STAGE 01 // Combat Classes',
        specialtiesDesc: 'Frontend Architecture, Backend & Data Integration, and E2E Testing ready for deployment.',
        projectsTitle: 'STAGE 02 // Production Missions',
        projectsDesc: 'Cleared stages: Betowa nationwide platforms for SENA and open-source GitHub games.',
        timelineTitle: 'STAGE 03 // Player Timeline',
        timelineDesc: 'Years logged leveling up across frontend, backend, and full-stack software development.',
        stackTitle: 'STAGE 04 // Tech Arsenal',
        stackDesc: 'The ultimate combo: Next.js + React 19 + TypeScript + Tailwind + Playwright.',
        contactTitle: 'STAGE 05 // Open Frequency',
        contactDesc: 'Drop your quest invitations via email, WhatsApp, GitHub, or LinkedIn.',
      },
    },
  },
  cyber: {
    es: {
      nav: {
        specialties: 'ESPECIALIDADES',
        projects: 'MISIONES (PROYECTOS)',
        timeline: 'CRONOLOGÍA REGISTRO',
        stack: 'EQUIPAMIENTO CORE',
        contact: 'SEÑAL COMUNICADOR',
        tourBtn: 'TOUR DEL PERFIL',
      },
      hero: {
        badge: 'DISPONIBLE // PRESENCIAL · HÍBRIDO · REMOTO',
        startTour: 'INICIAR TOUR GUIADO // PROTOCOLO SYS',
        specsTitle: 'PROMPT SYSTEM SPECS',
        locationNote: 'Pereira, Risaralda // UTC-05:00',
      },
      specialties: {
        rosterTitle: 'ROSTER DE ESPECIALISTA',
        selectRolePrompt: 'SELECT_ROLE',
        capabilitiesTitle: 'HABILIDADES ACTIVAS // SKILLS LOG',
        statsTitle: 'PARÁMETROS CAPACIDAD // STATS',
      },
      projects: {
        sectionTag: 'ARCHIVOS DE MISIÓN // PROYECTOS',
        sectionTitle: 'REGISTRO DE PORTFOLIO',
        outcomesTitle: 'IMPACTOS Y ENTREGABLES // COMPONENT_METRICS',
        collapseBtn: 'REDUCIR_REPORTE [-]',
        expandBtn: 'VER_ENTREGABLES [+]',
        repoBtn: 'REPO',
      },
      timeline: {
        sectionTag: 'CRONOLOGÍA PROFESIONAL // EXPERIENCIA TECH',
        sectionTitle: 'REGISTRO DE MEMORIA MESH',
        achievementsTitle: 'MÉTRICAS CLAVE Y LOGROS // RUNTIME_OUTCOMES',
      },
      stack: {
        sectionTag: 'HABILIDADES DE INGENIERÍA // STACK',
        sectionTitle: 'CÉLULAS DIAGNÓSTICAS DE EQUIPAMIENTO',
        summaryTitle: 'ESTADO // ANÁLISIS_NÚCLEO',
      },
      contact: {
        sectionTag: 'ESTADO_ENLACE // CANALES',
        sectionTitle: 'ESTABLECER CANAL DE COMUNICACIÓN',
        sectionDesc: 'Inicia un enlace directo hacia la frecuencia local del desarrollador.',
        btnSubmit: 'TRANSMITIR_SEÑAL // SEND_NOW',
        btnSending: 'COMPILANDO_SEÑAL...',
        successTitle: 'SEÑAL DE COMUNICACIÓN ABIERTA',
        successDesc: 'Tu mensaje ha sido encriptado y transmitido a los terminales locales de Andrés.',
        btnNew: 'TRANSMITIR_NUEVA_SEÑAL',
      },
    },
    en: {
      nav: {
        specialties: 'SPECIALTIES',
        projects: 'MISSIONS (PROJECTS)',
        timeline: 'RECORD TIMELINE',
        stack: 'CORE EQUIPMENT',
        contact: 'SIGNAL COMMS',
        tourBtn: 'PROFILE TOUR',
      },
      hero: {
        badge: 'AVAILABLE // ON-SITE · HYBRID · REMOTE',
        startTour: 'START GUIDED TOUR // PROTOCOL SYS',
        specsTitle: 'PROMPT SYSTEM SPECS',
        locationNote: 'Pereira, Risaralda // UTC-05:00',
      },
      specialties: {
        rosterTitle: 'SPECIALIST ROSTER',
        selectRolePrompt: 'SELECT_ROLE',
        capabilitiesTitle: 'ACTIVE CAPABILITIES // SKILLS LOG',
        statsTitle: 'CAPACITY PARAMETERS // STATS',
      },
      projects: {
        sectionTag: 'MISSION ARCHIVES // PROJECTS',
        sectionTitle: 'PORTFOLIO LOGS',
        outcomesTitle: 'IMPACTS & DELIVERABLES // COMPONENT_METRICS',
        collapseBtn: 'COLLAPSE_REPORT [-]',
        expandBtn: 'VIEW_DELIVERABLES [+]',
        repoBtn: 'REPO',
      },
      timeline: {
        sectionTag: 'CAREER TIMELINE // TECH EXPERIENCE',
        sectionTitle: 'MESH MEMORY REGISTRY',
        achievementsTitle: 'KEY METRICS & ACHIEVEMENTS // RUNTIME_OUTCOMES',
      },
      stack: {
        sectionTag: 'ENGINEERING SKILLS // STACK',
        sectionTitle: 'EQUIPMENT DIAGNOSTIC CELLS',
        summaryTitle: 'STATUS // CORE_ANALYSIS',
      },
      contact: {
        sectionTag: 'LINK_STATUS // CHANNELS',
        sectionTitle: 'ESTABLISH COMMUNICATION CHANNEL',
        sectionDesc: 'Initiate a direct link to the developer’s local frequency.',
        btnSubmit: 'TRANSMIT_SIGNAL // SEND_NOW',
        btnSending: 'COMPILING_SIGNAL...',
        successTitle: 'COMMUNICATION SIGNAL OPEN',
        successDesc: 'Your message has been encrypted and transmitted directly to Andrés’ local terminals.',
        btnNew: 'TRANSMIT_NEW_SIGNAL',
      },
    },
  },
};
