# Andrés Brochero — Multi-Theme Portfolio Studio 🚀

[![React 19](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.16-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Un portafolio interactivo de ingeniería de software estructurado con **4 universos visuales y estéticas frontend radicalmente distintas**, alimentados por una única fuente de verdad con la información profesional real de **Andrés Brochero** (Frontend Developer & Full Stack Software Engineer).

---

## 🌟 Los 4 Estilos de Portafolio

Cada experiencia cuenta con su propia dirección de arte, animaciones fluidas con **Motion** y un recorrido guiado interactivo adaptado con **Driver.js**:

1. **⚡ Cyber HUD // Spatial Architecture (`/?style=cyber`)**:
   - Estética espacial de grado militar con escaneo láser por CSS.
   - Cursor de orientación reticular interactivo y telemetría en vivo (UTC).
   - Blueprints vectoriales SVG animados y Bento Grids de alta densidad.

2. **☕ Cozy Developer Studio (`/?style=cozy`)**:
   - Espacio de trabajo cálido y relajante inspirado en estudios lo-fi y plantas de interior.
   - Paleta crema, sage green y terracota suave (`#FDFBF7`) con tipografía `Plus Jakarta Sans`.
   - Fotografía de ambiente de trabajo libre de derechos (Unsplash) y popovers de tour con bordes redondeados.

3. **🕹️ Retro Arcade // Synthwave 80s (`/?style=vaporwave`)**:
   - Rejilla en perspectiva retro, gradientes neón (`#FF007F`, `#00F0FF`, `#FFE600`) y CRT glow.
   - Badges estilo cartucho de consola y estética *Insert Coin / High Score*.
   - Tour guiado con diseño de neón arcade.

4. **✒️ Ultra-Minimalist Ink & Paper (`/?style=minimal`)**:
   - Diseño editorial suizo de alta precisión tipográfica.
   - Papel marfil de archivo (`#FAF9F6`), tinta carbón negra (`#1A1A1A`) y tipografía serif elegante `Fraunces`.
   - Espaciado generoso, líneas tipográficas nítidas y popovers sobrios de estilo editorial.

---

## 🌐 Internacionalización Completa (ES / EN)

- Conmutador de idioma en vivo **[ ES | EN ]** integrado en la Landing Page y en cada portafolio.
- Persistencia de preferencia en `localStorage` con detección automática del idioma del navegador.
- Diccionario bilingüe estricto en TypeScript (`src/data/es.ts` y `src/data/en.ts`) sin librerías pesadas externas (**0 KB overhead de i18n**).
- Sincronización instantánea de los tours guiados de Driver.js en español o inglés.

---

## 🛠️ Stack Tecnológico & Arquitectura

- **Framework & Bundler:** [React](https://react.dev/) 19.3 & [Vite](https://vite.dev/) 6.4
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) 5.8 (Configuración estricta `"strict": true`, `"noUnusedLocals": true`)
- **Estilos & UI:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Motion](https://motion.dev/) (Framer Motion)
- **Tours Guiados:** [Driver.js](https://driverjs.com/) v1.9 con 4 temas CSS personalizados
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Optimización React + Vite:**
  - Code splitting por rutas mediante `React.lazy()` y `Suspense`.
  - Configuración de `manualChunks` en Rollup (`vendor`, `motion`, `driver`, y chunks por tema).
  - Alias `@/` para resolución limpia de módulos en `src/`.

---

## 📂 Estructura del Proyecto

```text
cyber-frontend-portfolio/
├── src/
│   ├── components/            # Componentes compartidos y Landing Hub
│   │   ├── LandingHub.tsx     # Selector bilingüe interactivo de estilos
│   │   ├── Header.tsx         # Barra de navegación HUD con switch de idioma
│   │   ├── CharacterSelect.tsx# Selector de especialidades con blueprints SVG
│   │   ├── MissionLogs.tsx    # Proyectos de producción (Betowa / GitHub)
│   │   ├── MemoryCores.tsx    # Cronología de experiencia profesional
│   │   ├── DiagnosticStack.tsx# Diagnóstico de habilidades y niveles
│   │   ├── SignalTerminal.tsx # Terminal interactiva de contacto
│   │   ├── CustomCursor.tsx   # Cursor reticular para estilo Cyber
│   │   └── HUDOverlay.tsx     # Overlay y scanline CSS para estilo Cyber
│   ├── context/
│   │   └── LanguageContext.tsx# Contexto nativo de internacionalización (ES/EN)
│   ├── data/
│   │   ├── types.ts           # Interfaces y contratos de TypeScript
│   │   ├── es.ts              # Diccionario de contenido en Español
│   │   ├── en.ts              # Diccionario de contenido en Inglés
│   │   └── index.ts           # Exportador unificado de diccionarios
│   ├── themes/
│   │   ├── cozy/              # Estilo Cozy Developer Studio
│   │   ├── vaporwave/         # Estilo Retro Arcade / Synthwave
│   │   └── minimal/           # Estilo Ultra-Minimalist Ink & Paper
│   ├── tour/
│   │   ├── useProfileTour.ts  # Hook desacoplado de tour con Driver.js
│   │   └── driver-theme.css   # Estilos HUD para tour Cyber
│   ├── App.tsx                # Portafolio Cyber HUD original
│   ├── RootApp.tsx            # Enrutador por URL params y suspense fallback
│   ├── main.tsx               # Punto de entrada de la aplicación
│   └── index.css              # Import de Tailwind v4 y fuentes temáticas
├── index.html                 # Carga de fuentes (Fraunces, Plus Jakarta, etc.)
├── vite.config.ts             # Alias `@/`, targets modernos y manualChunks
└── tsconfig.json              # Tipado estricto y rutas aliadas
```

---

## ⚡ Ejecución y Desarrollo Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/) (`corepack enable` o `npm i -g pnpm`)

### 1. Instalar dependencias
```bash
pnpm install
```

### 2. Iniciar servidor de desarrollo
```bash
pnpm dev
```
La aplicación estará disponible localmente en `http://localhost:3000`.

### 3. Verificación de Tipos y Calidad
```bash
pnpm run lint
```

### 4. Compilar para producción
```bash
pnpm run build
```

---

## 🔗 Enlaces Directos de Navegación

Puedes ingresar directamente a cualquier estilo utilizando el parámetro `style` en la URL:

- **Landing Hub Principal:** `http://localhost:3000/`
- **Estilo Cyber HUD:** `http://localhost:3000/?style=cyber`
- **Estilo Cozy Studio:** `http://localhost:3000/?style=cozy`
- **Estilo Retro Arcade:** `http://localhost:3000/?style=vaporwave`
- **Estilo Ultra-Minimalist:** `http://localhost:3000/?style=minimal`

---

## 👤 Autor

**Andrés Brochero**  
*Frontend Developer & Full Stack Software Engineer*  
- 📍 Pereira / Dosquebradas, Risaralda, Colombia  
- ✉️ Email personal: [andresaws9401@gmail.com](mailto:andresaws9401@gmail.com)  
- 🎓 Email UTP: [aebrochero@utp.edu.co](mailto:aebrochero@utp.edu.co)  
- 💻 GitHub: [github.com/aebrochero](https://github.com/aebrochero)  
- 💼 LinkedIn: [linkedin.com/in/aebrochero](https://www.linkedin.com/in/aebrochero/)  
- 📱 WhatsApp: [+57 312 508 6035](https://wa.me/573125086035)

---

## 📄 Licencia

Distribuido bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más información.
