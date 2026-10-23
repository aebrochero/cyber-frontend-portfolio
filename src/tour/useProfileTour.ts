/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from "react";
import { driver, Driver, DriveStep } from "driver.js";
import "./driver-theme.css";

const TOUR_STEPS_METADATA = [
  {
    element: "#tour-hero-identity",
    sectionId: "specialties",
    title: "SYS_ID // PERFIL PROFESIONAL",
    description:
      "Andrés — Frontend Engineer & Interactive Creative. Especializado en arquitecturas SPA hiper-reactivas, diseño de movimiento fluido (60 FPS) y optimización de rendimiento a bajo nivel para interfaces de grado aeroespacial.",
    side: "bottom",
    align: "start",
  },
  {
    element: "#tour-hero-specs",
    sectionId: "specialties",
    title: "TELEMETRÍA // ESTADO DEL SISTEMA",
    description:
      "Métricas de telemetría activa en tiempo real: firmware Vite + React 19, estado de carga del núcleo, nodo geográfico de operaciones (LATAM-BOG-01) y reloj UTC en vivo sincronizado.",
    side: "bottom",
    align: "end",
  },
  {
    element: "#tour-nav-sections",
    sectionId: "specialties",
    title: "HUD NAV // RUTAS DE NAVEGACIÓN",
    description:
      "Consola de comando central dividida en 5 módulos: Especialidades técnicas, Misiones de producción, Cronología de experiencia, Equipamiento / Stack y Terminal de señal cifrada.",
    side: "bottom",
    align: "center",
  },
  {
    element: "#tour-specialties-container",
    sectionId: "specialties",
    title: "01 // ESPECIALIDADES & BLUEPRINTS",
    description:
      "3 arquetipos de ingeniería: Arquitecto de Componentes (modularidad y TypeScript estricto), Diseñador de Movimiento (físicas de resorte a 60 FPS) y Experto en Optimización (Core Web Vitals). Incluye blueprints SVG animados y radar de métricas.",
    side: "top",
    align: "start",
  },
  {
    element: "#tour-projects-container",
    sectionId: "projects",
    title: "02 // MISIONES (PROYECTOS CLAVE)",
    description:
      "Casos de estudio reales con resultados de impacto: Dashboards cognitivos con Web Workers (-93% latencia en DOM), constructores interactivos WYSIWYG con Bezier y visualizadores gráficos de dependencias.",
    side: "top",
    align: "start",
  },
  {
    element: "#tour-timeline-container",
    sectionId: "timeline",
    title: "03 // CRONOLOGÍA DE EXPERIENCIA",
    description:
      "Trayectoria auditada en la industria: Lead Frontend Engineer en Apex Cognitive Systems (migración a React 19, reducción 35% en LCP), Santander Tech Studios (fintech UI WCAG AA) y Vortex Labs Digital.",
    side: "top",
    align: "center",
  },
  {
    element: "#tour-stack-container",
    sectionId: "stack",
    title: "04 // EQUIPAMIENTO & AUDITORÍA STACK",
    description:
      "Diagnóstico exhaustivo del arsenal de herramientas: React 19, TypeScript estricto, Tailwind v4, Framer Motion, Web Workers, perfiles de memoria de bajo nivel y accesibilidad universal WAI-ARIA.",
    side: "top",
    align: "start",
  },
  {
    element: "#tour-contact-container",
    sectionId: "contact",
    title: "05 // TERMINAL DE SEÑAL & CONTACTO",
    description:
      "Canal de comunicación interactivo. Permite redactar y transmitir un paquete seguro directamente hacia los terminales locales de Andrés con simulación de cifrado AES-256.",
    side: "top",
    align: "center",
  },
] as const;

export function useProfileTour(
  activeSection: string,
  setActiveSection: (sectionId: string) => void
) {
  const startTour = useCallback(() => {
    // If we're not in specialties section, switch first so hero + specialties are mounted
    if (activeSection !== "specialties") {
      setActiveSection("specialties");
    }

    const driveSteps: DriveStep[] = TOUR_STEPS_METADATA.map((stepMeta) => ({
      element: stepMeta.element,
      waitForElement: 2500,
      popover: {
        title: stepMeta.title,
        description: stepMeta.description,
        side: stepMeta.side,
        align: stepMeta.align,
        popoverClass: "cyber-hud-popover",
      },
    }));

    const stepTo = (delta: 1 | -1, opts: { index?: number; driver: Driver }) => {
      const curIdx = opts.index ?? 0;
      const target = TOUR_STEPS_METADATA[curIdx + delta];
      if (!target) {
        if (delta === 1) opts.driver.destroy();
        return;
      }
      const move = () => (delta === 1 ? opts.driver.moveNext() : opts.driver.movePrevious());
      if (target.sectionId !== TOUR_STEPS_METADATA[curIdx]?.sectionId) {
        setActiveSection(target.sectionId);
        setTimeout(move, 280);
      } else {
        move();
      }
    };

    const driverObj = driver({
      animate: true,
      duration: 350,
      overlayColor: "#05060A",
      overlayOpacity: 0.82,
      stagePadding: 8,
      stageRadius: 4,
      allowClose: true,
      showProgress: true,
      progressText: "NODO {{current}} / {{total}}",
      nextBtnText: "SIGUIENTE ❯",
      prevBtnText: "❮ ANTERIOR",
      doneBtnText: "FINALIZAR TOUR ✓",
      steps: driveSteps,

      onNextClick: (_el, _step, opts) => stepTo(1, opts),
      onPrevClick: (_el, _step, opts) => stepTo(-1, opts),
    });

    // Small delay to ensure initial layout transition is stable
    setTimeout(() => {
      driverObj.drive(0);
    }, 120);
  }, [activeSection, setActiveSection]);

  return {
    startTour,
  };
}
