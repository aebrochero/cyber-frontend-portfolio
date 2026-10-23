/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


export const DEVELOPER_IDENTITY = {
  name: "ANDRÉS",
  location: "UTC-05:00 // LATAM-BOG-01",
  status: "ACTIVE_DEVS_AVAILABLE",
  firmware: "VITE-REACT-19.0.2",
  summary: "Frontend Developer con especialización en arquitecturas SPA hiper-reactivas, diseño de movimiento fluido y optimización de rendimiento a bajo nivel. Creador de interfaces que se sienten como software de alta tecnología.",
  systemSpecs: [
    { label: "CODENAME", value: "A-GATEWAYS_09" },
    { label: "IP_ADDRESS", value: "192.168.4.110" },
    { label: "CORE_LOAD", value: "3.5% // IDLE" },
  ]
};

export const SPECIALIZATIONS = [
  {
    id: "spec-01",
    code: "01",
    name: "EL ARQUITECTO DE COMPONENTES",
    role: "Frontend Infrastructure Specialist",
    avatarId: "architect",
    bio: "Especialista en estructurar arquitecturas escalables, monorepos integrados y sistemas de tipos súper estrictos. Aborda el frontend desde el rigor de la ingeniería de software clásica: patrones de diseño limpios, asincronía optimizada e inyección de dependencias modular.",
    stats: [
      { name: "Modularidad de Composición", value: 96, desc: "Estructuras modulares reusables" },
      { name: "Seguridad de Tipos (TypeScript)", value: 98, desc: "Esquemas rigurosos sin 'any'" },
      { name: "Orquestación de Estado", value: 92, desc: "React Context, Zustand, Señales" },
      { name: "Sistemas de Construcción", value: 90, desc: "Vite Pipelines & TurboRepo bundles" }
    ],
    tech: ["React 19", "TypeScript", "Vite ESM", "Node.js", "Zustand", "TailwindCSS"],
    capabilities: [
      "Diseño de componentes desacoplados con contratos estrictos de TypeScript.",
      "Optimización de ruteo dinámico y estrategias avanzadas de hidratación.",
      "Técnicas rigurosas de State Management sin re-renderizados huérfanos.",
      "Integración impecable de Microfrontends y arquitecturas modulares."
    ]
  },
  {
    id: "spec-02",
    code: "02",
    name: "EL DISEÑADOR DE MOVIMIENTO",
    role: "Interaction & Motion Architect",
    avatarId: "motion",
    bio: "Ingeniero creativo que cree que la interfaz debe respirar. Domina las leyes de la animación espacial para guiar al usuario mediante micro-interacciones sutiles, transiciones fluidas de diseño táctil y renderizados a 60 FPS consistentes.",
    stats: [
      { name: "Frecuencia de Cuadros (60FPS)", value: 97, desc: "Controlador de animaciones no síncronas" },
      { name: "Easing & Dinámicas Físicas", value: 94, desc: "Curvas de física de rebotes elásticos" },
      { name: "Manipulación SVG Compleja", value: 95, desc: "Transformación de gráficos vectoriales complejos" },
      { name: "Diseño Web Adaptativo", value: 93, desc: "Interacción optimizada para tacto/mouse" }
    ],
    tech: ["Framer Motion", "Tailwind v4", "CSS Grids", "Canvas API", "SVG/SMIL", "GSAP Engine"],
    capabilities: [
      "Animaciones coreografiadas mediante Framer Motion para layouts dinámicos.",
      "Efectos interactivos de hover y fluidos paralelos de profundidad (Parallax).",
      "Experiencias móviles con gestos de arrastre táctiles de alta precisión.",
      "Tiras y loaders totalmente dinámicos construidos de forma matemática."
    ]
  },
  {
    id: "spec-03",
    code: "03",
    name: "EL EXPERTO EN OPTIMIZACIÓN",
    role: "Core Web Vitals & Perf Analyst",
    avatarId: "performance",
    bio: "Un cirujano del código enfocado en reducir cada milisegundo de ejecución. Experto en análisis de runtime, perfiles de memoria de Chrome, optimización SEO-técnico en Core Web Vitals (LCP, INP, CLS) y accesibilidad universal.",
    stats: [
      { name: "Ahorro de Bundle & Tree Shaking", value: 94, desc: "Minimización de peso final del JS" },
      { name: "Optimización de INP (Interactive)", value: 91, desc: "Tareas de baja latencia con Web Workers" },
      { name: "Accesibilidad Semántica (A11y)", value: 95, desc: "Cumplimiento WCAG estricto" },
      { name: "Perfilamiento de Memoria", value: 89, desc: "Eliminación de fugas crónicas de memoria (Leaks)" }
    ],
    tech: ["Chrome DevTools", "Web Workers", "LightHouse Suite", "Babel Plugins", "Semantic HTML", "WAI-ARIA"],
    capabilities: [
      "Diagnósticos exhaustivos de CPU profiling y análisis de renderizado.",
      "Reducción Drástica de Bundle mediante Code Splitting dinámico y Lazy-Loading.",
      "Establecimiento de contrastes WCAG AAA y control por teclado interactivo.",
      "Implementación de almacenamiento local caché y Service Workers optimizados."
    ]
  }
];

export const PROJECTS = [
  {
    id: "proj-01",
    code: "PJ_X1",
    title: "NEXUS COGNITIVE DASHBOARD",
    type: "Enterprise Spatial Application",
    status: "COMPLETED",
    securityLevel: "CLASSIFIED",
    description: "Plataforma de visualización de datos de rendimiento a tiempo real. Diseñado con una interfaz HUD paramétrica repleta de paneles modulares interactivos de Recharts, layouts arrastrables en cascada y simulaciones de fluidos.",
    outcomes: [
      "Reducción de latencia de refresco del DOM de 250ms a 16ms utilizando renderizado selectivo.",
      "Integración de Web Workers para computar métricas matemáticas de 10K nodos sin bloquear hilo principal.",
      "Desarrollo de un sistema de temas híbridos fluidos con Tailwind CSS y Motion."
    ],
    tech: ["React 19", "TypeScript", "Zustand", "Recharts", "Web Workers", "TailwindCSS"],
    url: "#"
  },
  {
    id: "proj-02",
    code: "PJ_X2",
    title: "NEO-DOCK EDITOR",
    type: "Interactive Design System Builder",
    status: "ACTIVE",
    securityLevel: "LEVEL_3",
    description: "Un potente editor WYSIWYG interactivo para diseñadores. Permite componer bloques interactivos, coreografiar curvas de velocidad por interpolación de Bezier y exportar módulos CSS/JS listos para Tailwind.",
    outcomes: [
      "Algoritmo matemático propio para renderizar previsualizaciones en tiempo real.",
      "Control táctil avanzado con fricción de scroll virtual sobre dispositivos móviles.",
      "Persistencia persistente del estado del diseñador local cifrado de forma binaria."
    ],
    tech: ["Framer Motion", "Tailwind v4", "LocalForage", "Vite Build API", "Lucide React"],
    url: "#"
  },
  {
    id: "proj-03",
    code: "PJ_X3",
    title: "SYNAPSE COMPILE BOT",
    type: "CLI & Interactive Web Shell Portfolio",
    status: "COMPLETED",
    securityLevel: "LEVEL_2",
    description: "Una terminal interactiva web incrustada con simulación de compilación y empaquetamiento estático. El usuario puede auditar archivos de configuración del sistema arrastrándolos interactivamente.",
    outcomes: [
      "Simulador CLI interactivo con soporte de autocompletado y comandos nativos.",
      "Efecto visual de aberración cromática CRT por shaders CSS puros.",
      "Certificación perfecta de accesibilidad mediante lectores de pantalla e inputs de voz."
    ],
    tech: ["React Shell", "CSS CRT Shaders", "A11y ARIA", "TypeScript", "Zustand Engine"],
    url: "#"
  },
  {
    id: "proj-04",
    code: "PJ_X4",
    title: "HYPER-MESH GRAPH",
    type: "Interactive SVG Network Visualizer",
    status: "MAINTENANCE",
    securityLevel: "LEVEL_1",
    description: "Motor gráfico 2D minimalista basado en SVG para navegar mapas de calor y de red relacionales masivos de dependencias npm. Ideal para auditar paquetes desactualizados en segundos.",
    outcomes: [
      "Visualizaciones modulares interactivas con arrastre físico de nodos.",
      "Algoritmo optimizado de re-layouts para evitar parpadeos visuales.",
      "Panel lateral adaptativo que muestra el código fuente de configuración en JetBrains Mono."
    ],
    tech: ["React SVG", "D3 Force Layout", "TailwindCSS", "TypeScript Interface", "Lucide Icons"],
    url: "#"
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    id: "exp-01",
    period: "2024 - PRESENTE",
    company: "APEX COGNITIVE SYSTEMS",
    role: "Lead Frontend Engineer",
    description: "Director en el diseño técnico del core de diseño modular, liderando el desarrollo de micro-frontends y gestionando la orquestación global del rendimiento global del sistema.",
    achievements: [
      "Migración integral hacia React 19 y optimización del nuevo compilador automático de React.",
      "Reducción del 35% en el tiempo de interacción inicial de la web (LCP) a nivel global.",
      "Establecimiento de un framework propio de micro-movimiento interactivo de marca."
    ],
    nodeStatus: "ACTIVE",
    geo: "NODE_MIA_04"
  },
  {
    id: "exp-02",
    period: "2022 - 2024",
    company: "SANTANDER TECH STUDIOS",
    role: "Senior UI & Interaction Analyst",
    description: "Coordinador técnico de animación visual y robustez para interfaces financieras de usuario. Encargado de dashboards analíticos complejos e infraestructura interactiva táctil.",
    achievements: [
      "Desarrollo de un editor interactivo en tiempo real con arrastre libre certificado WCAG AA.",
      "Optimización de la latencia de renders recurrentes, salvando 4.2M de llamadas de CPU.",
      "Creación de guías técnicas internas de animación física mediante interpolación por resorte (Springs)."
    ],
    nodeStatus: "STABLE",
    geo: "NODE_MAD_09"
  },
  {
    id: "exp-03",
    period: "2020 - 2022",
    company: "VORTEX LABS DIGITAL",
    role: "React Specialist & Technical Creator",
    description: "Frontend Developer encargado de SPA de alto tráfico, landing pages interactivas para campañas AAA y visualizadores interactivos 2D/3D.",
    achievements: [
      "Integración de dinámicas interactivas Canvas / WebGL que aumentaron tasa de retención un 80%.",
      "Reducción del código desactualizado (legacy) logrando un 100/100 en Web Performance de Lighthouse.",
      "Diseño e ingeniería de más de 45 componentes de UI reusables personalizados con Tailwind."
    ],
    nodeStatus: "DEPRECATED",
    geo: "NODE_BOG_01"
  }
];

export const SKILLS_DIAGNOSTICS = [
  {
    id: "sc-01",
    title: "FRONTEND ENGINES",
    code: "FE_ENG",
    skills: [
      { name: "React / React Native", level: 96, status: "OPTIMIZED", description: "Hooks, Fiber reconciler, suspense bindings" },
      { name: "TypeScript Core", level: 95, status: "OPTIMIZED", description: "Advanced union types, conditional typing, generic mappings" },
      { name: "Vite / Escapsulated Bundler", level: 92, status: "STABLE", description: "Rollup optimization, asset chunking, server proxies" },
      { name: "Zustand / Redux Orchestrators", level: 90, status: "STABLE", description: "Subscription-based atomic state slices, transient updates" }
    ]
  },
  {
    id: "sc-02",
    title: "SPATIAL INTERACTION & STYLING",
    code: "UX_DES",
    skills: [
      { name: "Tailwind CSS (inc. v4)", level: 98, status: "OPTIMIZED", description: "Custom theme configuration, raw utility class orchestration" },
      { name: "Framer Motion (motion/react)", level: 94, status: "OPTIMIZED", description: "Layout animations, custom gesture controls, keyframe loops" },
      { name: "SVG Engineering / SMIL", level: 90, status: "STABLE", description: "Grid paths, dynamic masking, vectorized animations" },
      { name: "UI/UX Aesthetic Engineering", level: 88, status: "UPGRADING", description: "Swiss grids, high contrast color theories, typographic rhythm" }
    ]
  },
  {
    id: "sc-03",
    title: "AUDIT & CORE OPTIMIZATION",
    code: "PF_AUD",
    skills: [
      { name: "INP / FID Optimization", level: 92, status: "OPTIMIZED", description: "Interactivity audit, long-task breakdown, yield-to-main setups" },
      { name: "Memory Profiling & Leaks", level: 86, status: "UPGRADING", description: "Detached DOM node detection, heap snapshot audits, effect disposals" },
      { name: "SEO & Web Vitals Audit", level: 94, status: "OPTIMIZED", description: "Lighthouse CI, responsive layout-shift fixes, absolute layout metrics" },
      { name: "Semantic Web Accessibility", level: 91, status: "STABLE", description: "WAI-ARIA, full-keyboard trap controls, assistive technology testing" }
    ]
  }
];
