<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Andrés - Cyber Frontend Portfolio

Un portafolio 'About Me' interactivo con estética cyber, bento grids y un sistema HUD premium.

## Ejecución Local

**Prerrequisitos:** Node.js (v18+) y [pnpm](https://pnpm.io/) (`corepack enable` o `pnpm`).

1. Instalar dependencias:
   ```bash
   pnpm install
   ```

2. Configurar variables de entorno (opcional si se requiere integración GenAI):
   Crea `.env.local` y define `GEMINI_API_KEY`:
   ```bash
   cp .env.example .env.local
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Compilar para producción:
   ```bash
   pnpm build
   ```
