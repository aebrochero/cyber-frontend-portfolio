/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from './types';

export type StyleThemeKey = 'cyber' | 'cozy' | 'vaporwave' | 'minimal';

export interface TourStepContent {
  title: string;
  description: string;
}

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
    specsList?: { label: string; value: string }[];
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
    filters: {
      all: string;
      active: string;
      completed: string;
    };
    statusActive: string;
    statusCompleted: string;
    privateBadge: string;
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
    categoryLabels: Record<string, string>;
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
  tourUi: {
    progress: string;
    next: string;
    prev: string;
    done: string;
  };
  tourSteps: {
    heroIdentity: TourStepContent;
    heroSpecs: TourStepContent;
    navSections: TourStepContent;
    specialties: TourStepContent;
    projects: TourStepContent;
    timeline: TourStepContent;
    stack: TourStepContent;
    contact: TourStepContent;
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
        tourBtn: 'Recorrido del Espacio',
      },
      hero: {
        badge: 'Disponible para Proyectos · Presencial / Híbrido / Remoto',
        startTour: 'Comenzar Recorrido del Espacio',
        specsTitle: 'Detalles del Desarrollador',
        locationNote: 'Pereira, Risaralda · Colombia',
        specsList: [
          { label: 'Desarrollador', value: 'Andrés Brochero' },
          { label: 'Ubicación', value: 'Pereira / Dosquebradas (Colombia)' },
          { label: 'Stack Principal', value: 'Next.js 15 · React 19 · TypeScript' },
          { label: 'Testing & Calidad', value: 'Playwright E2E · Vitest' },
          { label: 'Experiencia', value: '+4 Años en Desarrollo Web' },
          { label: 'Modalidad', value: 'Presencial · Híbrido · Remoto' },
        ],
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
        filters: {
          all: 'Todos',
          active: 'En Producción',
          completed: 'Completados',
        },
        statusActive: 'En Producción',
        statusCompleted: 'Completado',
        privateBadge: 'Privado / SENA',
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
        categoryLabels: {
          FE_ARCH: 'Arquitectura Frontend & UI',
          BE_DATA: 'Backend & Bases de Datos',
          QA_CLOUD: 'Testing Automatizado & Cloud',
        },
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
      tourUi: {
        progress: 'Paso {{current}} de {{total}}',
        next: 'Siguiente →',
        prev: '← Anterior',
        done: 'Finalizar Recorrido ✓',
      },
      tourSteps: {
        heroIdentity: {
          title: 'Estudio de Andrés Brochero',
          description:
            'Desarrollador Frontend & Ingeniero Full Stack con más de 4 años de experiencia creando aplicaciones web modernas, rápidas y accesibles con Next.js y React 19.',
        },
        heroSpecs: {
          title: 'Ubicación y Entorno de Trabajo',
          description:
            'Trabajando desde Pereira, Risaralda (Colombia). Disponible para modalidades presenciales, híbridas o remotas colaborando con equipos ágiles.',
        },
        navSections: {
          title: 'Navegación del Espacio',
          description:
            'Explora las 5 áreas principales: Especialidades de enfoque, Proyectos reales, Trayectoria profesional, Stack de herramientas y Contacto directo.',
        },
        specialties: {
          title: 'Áreas de Especialización',
          description:
            'Conoce mis 3 pilares de trabajo: Arquitectura Frontend con React y Next.js, Integración Backend con Node.js y PostgreSQL, y Pruebas continuas con Playwright.',
        },
        projects: {
          title: 'Proyectos & Casos de Estudio',
          description:
            'Aplicaciones de alta concurrencia construidas para el SENA (Oferta Sofia Plus, Admin Betowa, Selección Betowa) y herramientas personales de código abierto.',
        },
        timeline: {
          title: 'Trayectoria Profesional',
          description:
            'Mi evolución en ingeniería de software: SENA Betowa (Frontend Developer actual), SENA Zajuna (Backend Developer LMS) y Servitel.',
        },
        stack: {
          title: 'Stack Técnico & Herramientas',
          description:
            'Un vistazo a las tecnologías con las que construyo soluciones modernas, accesibles y de alto rendimiento: Next.js, TypeScript, Tailwind, PostgreSQL y Vitest.',
        },
        contact: {
          title: 'Ponte en Contacto',
          description:
            'Mis canales directos de comunicación: correo personal, email institucional UTP, WhatsApp profesional, perfil de GitHub y LinkedIn.',
        },
      },
    },
    en: {
      nav: {
        specialties: 'Specialties',
        projects: 'Projects & Work',
        timeline: 'Career Journey',
        stack: 'Skills & Stack',
        contact: 'Get in Touch',
        tourBtn: 'Studio Tour',
      },
      hero: {
        badge: 'Available for Roles · On-site / Hybrid / Remote',
        startTour: 'Start Guided Studio Tour',
        specsTitle: 'Developer Overview',
        locationNote: 'Pereira, Risaralda · Colombia',
        specsList: [
          { label: 'Engineer', value: 'Andrés Brochero' },
          { label: 'Location', value: 'Pereira / Dosquebradas (Colombia)' },
          { label: 'Core Stack', value: 'Next.js 15 · React 19 · TypeScript' },
          { label: 'Testing & QA', value: 'Playwright E2E · Vitest' },
          { label: 'Experience', value: '4+ Years in Web Engineering' },
          { label: 'Availability', value: 'On-site · Hybrid · Remote' },
        ],
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
        filters: {
          all: 'All',
          active: 'Live in Production',
          completed: 'Completed',
        },
        statusActive: 'Live in Production',
        statusCompleted: 'Completed',
        privateBadge: 'Private / SENA',
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
        categoryLabels: {
          FE_ARCH: 'Frontend & UI Architecture',
          BE_DATA: 'Backend & Data Integration',
          QA_CLOUD: 'Automated Testing & Cloud',
        },
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
      tourUi: {
        progress: 'Step {{current}} of {{total}}',
        next: 'Next →',
        prev: '← Back',
        done: 'Complete Tour ✓',
      },
      tourSteps: {
        heroIdentity: {
          title: 'Andrés Brochero’s Studio',
          description:
            'Frontend Developer & Full Stack Software Engineer with 4+ years of experience engineering high-performance web applications using Next.js and React 19.',
        },
        heroSpecs: {
          title: 'Studio Location & Setup',
          description:
            'Working from Pereira, Risaralda (Colombia). Open to on-site, hybrid, or remote positions collaborating with agile engineering teams.',
        },
        navSections: {
          title: 'Studio Navigation',
          description:
            'Explore the 5 main sections: Core specialties, Real-world projects, Career history, Technical tools, and Direct contact.',
        },
        specialties: {
          title: 'Core Specialties',
          description:
            'Explore my 3 engineering pillars: Frontend Architecture with Next.js/React, Backend Integration with Node.js/PostgreSQL, and Automated Testing with Playwright.',
        },
        projects: {
          title: 'Featured Projects & Case Studies',
          description:
            'Mission-critical production platforms built for SENA (Oferta, Admin, Selección Betowa) alongside open-source GitHub utilities.',
        },
        timeline: {
          title: 'Career History',
          description:
            'My professional growth over the years: SENA Betowa (current Frontend Developer), SENA Zajuna (Backend LMS Developer), and Servitel.',
        },
        stack: {
          title: 'Technical Skills & Stack',
          description:
            'The modern frameworks and tools I use daily to build fast, accessible, and resilient web applications: Next.js, React 19, TypeScript, and Playwright.',
        },
        contact: {
          title: 'Get in Touch',
          description:
            'Direct communication channels: personal email, UTP institutional email, WhatsApp, GitHub, and LinkedIn.',
        },
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
        specsTitle: 'Ficha Técnica de Práctica',
        locationNote: 'Pereira / Dosquebradas (UTC-05)',
        specsList: [
          { label: 'Profesional', value: 'Andrés Brochero' },
          { label: 'Ubicación', value: 'Pereira / Dosquebradas (Colombia)' },
          { label: 'Especialidad', value: 'Next.js 15 · React 19 · TypeScript' },
          { label: 'Aseguramiento', value: 'Playwright E2E · Vitest' },
          { label: 'Experiencia', value: '+4 Años · Frontend & Full Stack' },
          { label: 'Disponibilidad', value: 'Presencial · Híbrido · Remoto' },
        ],
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
        filters: {
          all: 'Todos',
          active: 'En Producción',
          completed: 'Completados',
        },
        statusActive: 'En Producción',
        statusCompleted: 'Completado',
        privateBadge: 'Acceso Restringido / SENA',
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
        categoryLabels: {
          FE_ARCH: 'Arquitectura Frontend',
          BE_DATA: 'Integración Backend',
          QA_CLOUD: 'Aseguramiento de Calidad',
        },
      },
      contact: {
        sectionTag: 'Canal de Correspondencia',
        sectionTitle: 'Iniciar Conversación',
        sectionDesc:
          'Canal directo para propuestas laborales, consultorías de arquitectura frontend o colaboraciones técnicas.',
        btnSubmit: 'Despachar Mensaje',
        btnSending: 'Despachando...',
        successTitle: 'Correspondencia Registrada',
        successDesc: 'Su comunicación ha sido recibida satisfactoriamente. Se emitirá una respuesta en breve.',
        btnNew: 'Redactar nueva nota',
      },
      tourUi: {
        progress: 'Página {{current}} / {{total}}',
        next: 'Siguiente ⟶',
        prev: '⟵ Anterior',
        done: 'Cerrar Guía Editorial',
      },
      tourSteps: {
        heroIdentity: {
          title: '01. Ficha del Autor & Perfil',
          description:
            'Andrés Brochero — Desarrollador Frontend e Ingeniero de Software (+4 años). Especialista en React 19, Next.js y tipado estricto con TypeScript.',
        },
        heroSpecs: {
          title: '02. Datos de Práctica Profesional',
          description:
            'Sede en Pereira/Dosquebradas (Colombia) y plena disponibilidad para contratos presenciales, híbridos o remotos.',
        },
        navSections: {
          title: '03. Índice Estructurado',
          description:
            'Navegación del índice: Pilares de Práctica, Selección de Proyectos, Cronología Profesional, Arsenal Técnico y Correspondencia.',
        },
        specialties: {
          title: '04. Pilares de Práctica',
          description:
            'Los tres fundamentos técnicos: Arquitectura Frontend, Integración de Datos Backend y Aseguramiento Continuo de Calidad.',
        },
        projects: {
          title: '05. Selección de Proyectos',
          description:
            'Catálogo de plataformas web de gran escala desarrolladas para el ecosistema SENA junto a proyectos públicos de código abierto.',
        },
        timeline: {
          title: '06. Cronología Histórica',
          description:
            'Registro cronológico de posiciones en ingeniería de software: SENA Betowa, SENA Zajuna y Servitel.',
        },
        stack: {
          title: '07. Arsenal Técnico',
          description:
            'Evaluación de destrezas en Next.js, React 19, TypeScript, Tailwind CSS, PostgreSQL, Playwright y accesibilidad WCAG 2.2.',
        },
        contact: {
          title: '08. Despacho de Correspondencia',
          description:
            'Canal directo para propuestas de empleo, consultorías de arquitectura web o correspondencia técnica directa.',
        },
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
        specsTitle: 'Practice Specification',
        locationNote: 'Pereira / Dosquebradas (UTC-05)',
        specsList: [
          { label: 'Engineer', value: 'Andrés Brochero' },
          { label: 'Location', value: 'Pereira / Dosquebradas (Colombia)' },
          { label: 'Core Stack', value: 'Next.js 15 · React 19 · TypeScript' },
          { label: 'Testing & QA', value: 'Playwright E2E · Vitest' },
          { label: 'Experience', value: '4+ Years · Frontend & Full Stack' },
          { label: 'Availability', value: 'On-site · Hybrid · Remote' },
        ],
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
        filters: {
          all: 'All',
          active: 'In Production',
          completed: 'Completed',
        },
        statusActive: 'In Production',
        statusCompleted: 'Completed',
        privateBadge: 'Restricted Access / SENA',
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
        categoryLabels: {
          FE_ARCH: 'Frontend Architecture',
          BE_DATA: 'Backend Integration',
          QA_CLOUD: 'Quality Assurance',
        },
      },
      contact: {
        sectionTag: 'Correspondence Dispatch',
        sectionTitle: 'Initiate Contact',
        sectionDesc:
          'Direct channel for career opportunities, frontend architecture consultations, or technical collaborations.',
        btnSubmit: 'Dispatch Note',
        btnSending: 'Dispatching...',
        successTitle: 'Correspondence Logged',
        successDesc: 'Your note has been transmitted successfully. A direct reply will follow promptly.',
        btnNew: 'Draft another note',
      },
      tourUi: {
        progress: 'Page {{current}} / {{total}}',
        next: 'Next ⟶',
        prev: '⟵ Previous',
        done: 'Close Editorial Guide',
      },
      tourSteps: {
        heroIdentity: {
          title: '01. Author Profile & Practice',
          description:
            'Andrés Brochero — Frontend Developer & Software Engineer (4+ yrs). Specializing in React 19, Next.js, and strict TypeScript.',
        },
        heroSpecs: {
          title: '02. Practice Specifications',
          description:
            'Professional practice based in Pereira/Dosquebradas (Colombia) open to on-site, hybrid, or remote contracts.',
        },
        navSections: {
          title: '03. Table of Contents',
          description:
            'Structured index: Pillars of Practice, Selected Works, Career Chronology, Technical Repertoire, and Correspondence.',
        },
        specialties: {
          title: '04. Pillars of Practice',
          description:
            'Three technical cornerstones: Modern Frontend Architecture, Backend & Data Integration, and Continuous Quality Testing.',
        },
        projects: {
          title: '05. Selected Works',
          description:
            'Catalog of high-concurrency educational platforms built for SENA alongside open-source GitHub software.',
        },
        timeline: {
          title: '06. Career Chronology',
          description:
            'An audited timeline of professional software engineering positions: SENA Betowa, SENA Zajuna, and Servitel.',
        },
        stack: {
          title: '07. Technical Repertoire',
          description:
            'Assessed proficiencies in Next.js, React 19, strict TypeScript, Tailwind CSS, PostgreSQL, and Playwright.',
        },
        contact: {
          title: '08. Direct Correspondence',
          description:
            'Direct contact points for recruitment, architectural consultations, and technical inquiries.',
        },
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
        specsList: [
          { label: 'PLAYER 1', value: 'ANDRÉS BROCHERO' },
          { label: 'BASE STAGE', value: 'Pereira / Risaralda (UTC-05)' },
          { label: 'CORE WEAPON', value: 'Next.js 15 / React 19 / TypeScript' },
          { label: 'SPECIAL MOVE', value: 'Playwright E2E Suite' },
          { label: 'RANK LEVEL', value: 'STAGE 04 / FULL PRODUCTION' },
          { label: 'STATUS', value: 'READY // INSERT COIN' },
        ],
      },
      specialties: {
        rosterTitle: 'SELECT YOUR CHARACTER',
        selectRolePrompt: 'Elige tu clase de combate',
        capabilitiesTitle: 'Habilidades Especiales',
        statsTitle: 'Power & Stamina Stats',
      },
      projects: {
        sectionTag: 'STAGE 2 // QUEST LOG',
        sectionTitle: 'Misiones & Operaciones',
        outcomesTitle: 'Métricas & XP Conseguido',
        collapseBtn: 'Minimizar Log [-]',
        expandBtn: 'Inspeccionar Quest [+]',
        repoBtn: 'Source Code / Git',
        filters: {
          all: 'ALL STAGES',
          active: 'ACTIVE QUESTS',
          completed: 'CLEARED',
        },
        statusActive: 'ACTIVE QUEST',
        statusCompleted: 'STAGE CLEARED',
        privateBadge: 'RESTRICTED / SENA',
      },
      timeline: {
        sectionTag: 'HISTORIA DEL HÉROE',
        sectionTitle: 'Registro de Campaña & Nivel',
        achievementsTitle: 'Logros Desbloqueados',
      },
      stack: {
        sectionTag: 'STAGE 4 // INVENTARIO',
        sectionTitle: 'Equipamiento & Armas',
        summaryTitle: 'Inventario General',
        categoryLabels: {
          FE_ARCH: 'ARMAS FRONTEND & UI',
          BE_DATA: 'MAGIAS BACKEND & DATA',
          QA_CLOUD: 'ESCUDOS QA & CLOUD',
        },
      },
      contact: {
        sectionTag: 'SEÑAL RADIAL COMMS',
        sectionTitle: 'Transmitir Frecuencia',
        sectionDesc:
          'Establece contacto directo por radio, transfiere propuestas o abre enlace para consultorías.',
        btnSubmit: 'Transmitir Señal [ENTER]',
        btnSending: 'Transmitiendo datos...',
        successTitle: 'Transmisión Enviada ★',
        successDesc: 'Señal recibida en la base con éxito. Esperando respuesta en el canal principal.',
        btnNew: 'Nueva Transmisión',
      },
      tourUi: {
        progress: 'STAGE {{current}} / {{total}}',
        next: 'NEXT LEVEL ❯',
        prev: '❮ PREV',
        done: 'STAGE CLEAR ★',
      },
      tourSteps: {
        heroIdentity: {
          title: '★ STAGE 0: PLAYER 1 READY ★',
          description:
            'Andrés Brochero — Full Stack Engineer Nivel 4+ listo para la acción. Armado con Next.js, React 19 y Playwright.',
        },
        heroSpecs: {
          title: '★ HIGH SCORE SPECS ★',
          description:
            'Telemetría del jugador: Servidor en Pereira/Dosquebradas (Colombia) con conectividad para juego remoto, híbrido o presencial.',
        },
        navSections: {
          title: '★ SELECT MISSION LEVEL ★',
          description:
            'Tablero arcade para saltar entre las 5 etapas: Especialidades, Misiones, Cronología de Campaña, Arsenal y Señal Comms.',
        },
        specialties: {
          title: '★ STAGE 1: CLASES DE COMBATE ★',
          description:
            'Frontend Architecture, Backend & Data Integration, y E2E Testing listos para despliegue.',
        },
        projects: {
          title: '★ STAGE 2: MISIONES DE PRODUCCIÓN ★',
          description:
            'Plataformas completadas para el SENA (Oferta, Admin y Selección Betowa) junto a minijuegos en GitHub.',
        },
        timeline: {
          title: '★ STAGE 3: CAMPAÑA DEL JUGADOR ★',
          description:
            'Años ganando experiencia y subiendo de nivel en desarrollo Frontend, Backend y Full-Stack.',
        },
        stack: {
          title: '★ STAGE 4: ARSENAL TÉCNICO ★',
          description:
            'El combo definitivo: Next.js + React 19 + TypeScript + Tailwind + PostgreSQL + Playwright.',
        },
        contact: {
          title: '★ STAGE 5: FRECUENCIA ABIERTA ★',
          description:
            'Envía tus misiones y ofertas de trabajo por correo, WhatsApp, GitHub o LinkedIn.',
        },
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
        specsList: [
          { label: 'PLAYER 1', value: 'ANDRÉS BROCHERO' },
          { label: 'BASE STAGE', value: 'Pereira / Risaralda (UTC-05)' },
          { label: 'CORE WEAPON', value: 'Next.js 15 / React 19 / TypeScript' },
          { label: 'SPECIAL MOVE', value: 'Playwright E2E Suite' },
          { label: 'RANK LEVEL', value: 'STAGE 04 / FULL PRODUCTION' },
          { label: 'STATUS', value: 'READY // INSERT COIN' },
        ],
      },
      specialties: {
        rosterTitle: 'SELECT YOUR CHARACTER',
        selectRolePrompt: 'Select your combat class',
        capabilitiesTitle: 'Special Moves & Capabilities',
        statsTitle: 'Power & Stamina Stats',
      },
      projects: {
        sectionTag: 'STAGE 2 // QUEST LOG',
        sectionTitle: 'Missions & Ops',
        outcomesTitle: 'Metrics & Earned XP',
        collapseBtn: 'Collapse Log [-]',
        expandBtn: 'Inspect Quest [+]',
        repoBtn: 'Source Code / Git',
        filters: {
          all: 'ALL STAGES',
          active: 'ACTIVE QUESTS',
          completed: 'CLEARED',
        },
        statusActive: 'ACTIVE QUEST',
        statusCompleted: 'STAGE CLEARED',
        privateBadge: 'RESTRICTED / SENA',
      },
      timeline: {
        sectionTag: 'HERO LORE & CAMPAIGN',
        sectionTitle: 'Campaign & Level History',
        achievementsTitle: 'Unlocked Achievements',
      },
      stack: {
        sectionTag: 'STAGE 4 // INVENTORY',
        sectionTitle: 'Weapons & Equipment',
        summaryTitle: 'Full Inventory',
        categoryLabels: {
          FE_ARCH: 'FRONTEND & UI WEAPONS',
          BE_DATA: 'BACKEND & DATA SPELLS',
          QA_CLOUD: 'QA & CLOUD SHIELDS',
        },
      },
      contact: {
        sectionTag: 'COMMS FREQUENCY 433 MHZ',
        sectionTitle: 'Transmit Frequency',
        sectionDesc:
          'Open a direct frequency to Andrés’ station for engineering quests, role offers, and collaborations.',
        btnSubmit: 'Transmit Signal [ENTER]',
        btnSending: 'Compiling burst...',
        successTitle: 'SIGNAL RECEIVED ★',
        successDesc: 'Burst received at base. Andrés will acknowledge on local terminal shortly.',
        btnNew: 'Transmit New Burst',
      },
      tourUi: {
        progress: 'STAGE {{current}} / {{total}}',
        next: 'NEXT LEVEL ❯',
        prev: '❮ PREV',
        done: 'STAGE CLEAR ★',
      },
      tourSteps: {
        heroIdentity: {
          title: '★ STAGE 0: PLAYER 1 READY ★',
          description:
            'Andrés Brochero — Level 4+ Full Stack Engineer ready for battle. Equipped with Next.js, React 19, and Playwright.',
        },
        heroSpecs: {
          title: '★ HIGH SCORE SPECS ★',
          description:
            'Player telemetry: Server base in Pereira/Dosquebradas (Colombia) ready for remote, hybrid, or on-site co-op.',
        },
        navSections: {
          title: '★ SELECT MISSION LEVEL ★',
          description:
            'Arcade dashboard to jump across 5 stages: Character Classes, Quests, Campaign Lore, Inventory, and Comms.',
        },
        specialties: {
          title: '★ STAGE 1: COMBAT CLASSES ★',
          description:
            'Frontend Architecture, Backend & Data Integration, and E2E Testing ready for deployment.',
        },
        projects: {
          title: '★ STAGE 2: PRODUCTION MISSIONS ★',
          description:
            'Cleared stages: Betowa nationwide platforms for SENA and open-source GitHub games.',
        },
        timeline: {
          title: '★ STAGE 3: PLAYER TIMELINE ★',
          description:
            'Years logged leveling up across frontend, backend, and full-stack software development.',
        },
        stack: {
          title: '★ STAGE 4: TECH ARSENAL ★',
          description:
            'The ultimate combo: Next.js + React 19 + TypeScript + Tailwind + Playwright.',
        },
        contact: {
          title: '★ STAGE 5: OPEN FREQUENCY ★',
          description:
            'Drop your quest invitations via email, WhatsApp, GitHub, or LinkedIn.',
        },
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
        specsList: [
          { label: 'CODENAME', value: 'ANDRÉS_DEV' },
          { label: 'LOCATION_NODE', value: 'Pereira / Dosquebradas (UTC-05)' },
          { label: 'STACK_CORE', value: 'Next.js 15 / React 19 / TypeScript' },
          { label: 'E2E_SUITE', value: 'Playwright (Betowa System Tests)' },
          { label: 'SECURITY_CLR', value: 'LEVEL_04 / FULL PRODUCTION' },
          { label: 'AVAILABILITY', value: 'Presencial / Híbrido / Remoto' },
        ],
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
        filters: {
          all: 'TODOS',
          active: 'ACTIVOS',
          completed: 'COMPLETADOS',
        },
        statusActive: 'ACTIVE',
        statusCompleted: 'COMPLETED',
        privateBadge: 'CLASSIFIED',
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
        categoryLabels: {
          FE_ARCH: 'FRONTEND ARCHITECTURE',
          BE_DATA: 'BACKEND & DATA INTEGRATION',
          QA_CLOUD: 'TESTING, QUALITY & CLOUD',
        },
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
      tourUi: {
        progress: 'NODO {{current}} / {{total}}',
        next: 'SIGUIENTE ❯',
        prev: '❮ ANTERIOR',
        done: 'FINALIZAR TOUR ✓',
      },
      tourSteps: {
        heroIdentity: {
          title: 'SYS_ID // ANDRÉS BROCHERO',
          description:
            'Andrés Brochero — Frontend Developer & Full Stack Software Engineer (+4 años de experiencia). Especialista en Next.js, React 19, TypeScript, Tailwind CSS y pruebas automatizadas con Playwright.',
        },
        heroSpecs: {
          title: 'TELEMETRÍA // STACK Y LOCALIZACIÓN',
          description:
            'Parámetros activos del desarrollador: base en Pereira/Dosquebradas (Colombia), stack híbrido Next.js/PostgreSQL y disponibilidad para trabajo presencial, híbrido o remoto.',
        },
        navSections: {
          title: 'CONSOLA HUD // MÓDULOS DE NAVEGACIÓN',
          description:
            'Navega por las 5 áreas clave del portafolio: Especialidades de ingeniería, Misiones de producción, Trayectoria técnica, Equipamiento diagnosticado y Terminal de enlace directo.',
        },
        specialties: {
          title: '01 // ESPECIALIDADES DE INGENIERÍA',
          description:
            '3 pilares técnicos: Arquitectura Frontend & UI (Next.js/React), Backend & Integración de Datos (Node.js/PostgreSQL) y Testing & Cloud (Playwright, AWS/GCP, CI/CD).',
        },
        projects: {
          title: '02 // MISIONES (PROYECTOS REALES)',
          description:
            'Proyectos de producción a gran escala: Ecosistema Betowa para el SENA (Oferta Sofia Plus, Admin Betowa, Selección Betowa) junto a desarrollos interactivos de código abierto en GitHub.',
        },
        timeline: {
          title: '03 // CRONOLOGÍA DE EXPERIENCIA',
          description:
            'Historial técnico auditado: SENA Betowa (Frontend Developer actual), SENA Zajuna (Backend Developer LMS) y Servitel (Desarrollador de Software integral).',
        },
        stack: {
          title: '04 // EQUIPAMIENTO & AUDITORÍA TÉCNICA',
          description:
            'Inventario técnico con niveles de sincronía: Next.js, React 19, TypeScript estricto, Tailwind v4, PostgreSQL, Playwright, Vitest y accesibilidad universal WCAG 2.2.',
        },
        contact: {
          title: '05 // CANAL DE COMUNICACIÓN & CONTACTO',
          description:
            'Puntos de enlace directo verificados: correo personal, email institucional UTP, teléfono/WhatsApp (+57 312 508 6035), GitHub y LinkedIn.',
        },
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
        specsList: [
          { label: 'CODENAME', value: 'ANDRÉS_DEV' },
          { label: 'LOCATION_NODE', value: 'Pereira / Dosquebradas (UTC-05)' },
          { label: 'STACK_CORE', value: 'Next.js 15 / React 19 / TypeScript' },
          { label: 'E2E_SUITE', value: 'Playwright (Betowa System Tests)' },
          { label: 'SECURITY_CLR', value: 'LEVEL_04 / FULL PRODUCTION' },
          { label: 'AVAILABILITY', value: 'On-site / Hybrid / Remote' },
        ],
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
        filters: {
          all: 'ALL',
          active: 'ACTIVE',
          completed: 'COMPLETED',
        },
        statusActive: 'ACTIVE',
        statusCompleted: 'COMPLETED',
        privateBadge: 'CLASSIFIED',
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
        categoryLabels: {
          FE_ARCH: 'FRONTEND ARCHITECTURE',
          BE_DATA: 'BACKEND & DATA INTEGRATION',
          QA_CLOUD: 'TESTING, QUALITY & CLOUD',
        },
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
      tourUi: {
        progress: 'NODE {{current}} / {{total}}',
        next: 'NEXT ❯',
        prev: '❮ PREVIOUS',
        done: 'FINISH TOUR ✓',
      },
      tourSteps: {
        heroIdentity: {
          title: 'SYS_ID // ANDRÉS BROCHERO',
          description:
            'Andrés Brochero — Frontend Developer & Full Stack Software Engineer (4+ years of experience). Specialized in Next.js, React 19, TypeScript, Tailwind CSS, and E2E testing with Playwright.',
        },
        heroSpecs: {
          title: 'TELEMETRY // STACK & LOCATION',
          description:
            'Active telemetry specs: based in Pereira/Dosquebradas (Colombia), hybrid Next.js/PostgreSQL stack, and open to on-site, hybrid, or remote roles.',
        },
        navSections: {
          title: 'HUD CONSOLE // NAVIGATION ROUTES',
          description:
            'Command console split into 5 core modules: Engineering specialties, Production projects, Career timeline, Diagnostic stack, and Direct communications terminal.',
        },
        specialties: {
          title: '01 // ENGINEERING SPECIALTIES',
          description:
            '3 technical pillars: Frontend & UI Architecture (Next.js/React), Backend & Data Integration (Node.js/PostgreSQL), and Testing & Cloud (Playwright, AWS/GCP, CI/CD).',
        },
        projects: {
          title: '02 // MISSIONS (PRODUCTION PROJECTS)',
          description:
            'Large-scale production platforms: Betowa ecosystem for SENA (Oferta Sofia Plus, Admin Betowa, Selección Betowa) alongside open-source interactive web apps on GitHub.',
        },
        timeline: {
          title: '03 // CAREER EXPERIENCE TIMELINE',
          description:
            'Audited engineering history: SENA Betowa (Current Frontend Developer), SENA Zajuna (Backend LMS Developer), and Servitel (Software Developer).',
        },
        stack: {
          title: '04 // EQUIPMENT & TECH AUDIT',
          description:
            'Technical inventory with grid synchronization: Next.js, React 19, strict TypeScript, Tailwind v4, PostgreSQL, Playwright, Vitest, and universal WCAG 2.2 accessibility.',
        },
        contact: {
          title: '05 // COMMS CHANNEL & CONTACT',
          description:
            'Verified direct link points: personal email, UTP institutional email, phone/WhatsApp (+57 312 508 6035), GitHub, and LinkedIn.',
        },
      },
    },
  },
};
