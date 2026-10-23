/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Sparkles,
  Terminal,
  Coffee,
  Gamepad2,
  Feather,
  ArrowRight,
  Globe,
  ExternalLink,
  Code2,
  Briefcase,
  Layers,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export type PortfolioThemeKey = 'cyber' | 'cozy' | 'vaporwave' | 'minimal';

interface LandingHubProps {
  onSelectTheme: (theme: PortfolioThemeKey) => void;
}

export default function LandingHub({ onSelectTheme }: LandingHubProps) {
  const { lang, toggleLang, dict } = useLanguage();

  const themesConfig: {
    key: PortfolioThemeKey;
    title: string;
    badge: string;
    summary: string;
    vibe: string;
    icon: typeof Terminal;
    accentBg: string;
    accentText: string;
    tagClass: string;
    cardBorder: string;
    previewBg: string;
    highlights: string[];
    bgImage: string;
  }[] = [
    {
      key: 'cyber',
      title: 'Cyber HUD // Spatial Motion',
      badge: lang === 'es' ? 'Aeroespacial & High-Tech' : 'Aerospace & High-Tech',
      summary:
        lang === 'es'
          ? 'Interfaz futurista de telemetría en tiempo real con Bento Grid, retícula láser, blueprints vectoriales animados y cursor interactivo.'
          : 'Futuristic telemetry interface featuring Bento Grid architecture, dynamic laser scanline, animated SVG blueprints, and reticle targeting.',
      vibe: 'Dark Neon · Cyberpunk · 60 FPS',
      icon: Terminal,
      accentBg: 'bg-[#00F0FF]',
      accentText: 'text-[#00F0FF]',
      tagClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      cardBorder: 'hover:border-cyan-500/60',
      previewBg: 'from-cyan-950/40 to-slate-950',
      highlights: ['Bento Architecture', 'Laser Reticle', 'SVG Blueprints'],
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'cozy',
      title: 'Cozy Developer Studio',
      badge: lang === 'es' ? 'Lo-Fi & Amigable' : 'Lo-Fi & Friendly',
      summary:
        lang === 'es'
          ? 'Ambiente de trabajo cálido y humano. Inspirado en plantas, café de especialidad, tonos crema y terracota, con tipografía Plus Jakarta Sans.'
          : 'A warm, human-centered creative workspace. Inspired by indoor plants, specialty coffee, terracotta tones, and tactile soft cards.',
      vibe: 'Warm Lo-Fi · Plants · Accessible',
      icon: Coffee,
      accentBg: 'bg-[#E07A5F]',
      accentText: 'text-[#E07A5F]',
      tagClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      cardBorder: 'hover:border-orange-500/60',
      previewBg: 'from-orange-950/40 to-stone-950',
      highlights: ['Plus Jakarta Sans', 'Terracotta Palette', 'Soft Tactile UI'],
      bgImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'vaporwave',
      title: 'Retro Arcade // Synthwave',
      badge: lang === 'es' ? 'Retro Gaming 80s' : '80s Retro Gaming',
      summary:
        lang === 'es'
          ? 'Nostalgia retro de salas arcade y synthwave: rejilla en perspectiva, gradientes neón magenta y cian, badges tipo cartucho y energía 8-bit.'
          : 'Nostalgic 80s arcade and synthwave aesthetics: wireframe perspective grid, neon magenta gradients, cartridge badges, and 8-bit vibes.',
      vibe: 'Synthwave · Neon Glow · Arcade Stages',
      icon: Gamepad2,
      accentBg: 'bg-[#FF007F]',
      accentText: 'text-[#FF007F]',
      tagClass: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
      cardBorder: 'hover:border-fuchsia-500/60',
      previewBg: 'from-fuchsia-950/40 to-purple-950',
      highlights: ['Synthwave Grid', 'Arcade Badges', 'Neon Gradients'],
      bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'minimal',
      title: 'Ultra-Minimalist Ink & Paper',
      badge: lang === 'es' ? 'Editorial Suizo' : 'Swiss Editorial',
      summary:
        lang === 'es'
          ? 'Elegancia editorial con papel marfil, tinta carbón profunda, contrastes en tipografía serif Fraunces, espaciado generoso y pulcritud matemática.'
          : 'High-end Swiss editorial poise with archival cream paper, deep carbon ink, Fraunces serif typography contrasts, and mathematical discipline.',
      vibe: 'Swiss Editorial · High Contrast · Serif Poise',
      icon: Feather,
      accentBg: 'bg-stone-200',
      accentText: 'text-stone-200',
      tagClass: 'bg-stone-500/10 text-stone-300 border-stone-500/20',
      cardBorder: 'hover:border-stone-400',
      previewBg: 'from-stone-900/60 to-black',
      highlights: ['Fraunces Serif', 'Monochrome Poise', 'Generous Whitespace'],
      bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Refined clean ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent pointer-events-none blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between py-4 px-6 mb-12 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-sm text-white shadow-md shadow-blue-500/20">
              AB
            </div>
            <div>
              <span className="font-semibold text-sm text-white tracking-tight block">
                {dict.identity.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Frontend & Full Stack Software Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Lang switch */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-300 transition-colors cursor-pointer"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe size={13} className="text-blue-400" />
              <span>{lang === 'es' ? 'Español' : 'English'}</span>
            </button>

            {/* GitHub Link */}
            <a
              href={dict.identity.contacts.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Code2 size={13} className="text-slate-400" />
              <span>GitHub</span>
              <ExternalLink size={11} className="text-slate-500" />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 shadow-sm"
          >
            <Sparkles size={13} />
            <span>
              {lang === 'es'
                ? 'Portfolio Design Studio · 4 Experiencias Visuales'
                : 'Portfolio Design Studio · 4 Visual Experiences'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
          >
            {lang === 'es' ? (
              <>
                Un portafolio, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                  cuatro visiones de diseño
                </span>
              </>
            ) : (
              <>
                One portfolio, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                  four design perspectives
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8"
          >
            {lang === 'es'
              ? 'Mismo contenido profesional, proyectos de Betowa (SENA), métricas y experiencia técnica presentados en cuatro estilos frontend únicos y adaptados con tours interactivos.'
              : 'Same core engineering experience, Betowa (SENA) production platforms, and technical skills presented across four distinctive frontend themes with interactive onboarding tours.'}
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-blue-400" />
              <span>Pereira, Risaralda // Colombia</span>
            </div>
            <div className="hidden sm:block text-slate-700">•</div>
            <div className="flex items-center gap-2">
              <Briefcase size={13} className="text-indigo-400" />
              <span>4+ {lang === 'es' ? 'Años Experiencia' : 'Years Experience'}</span>
            </div>
            <div className="hidden sm:block text-slate-700">•</div>
            <div className="flex items-center gap-2">
              <Layers size={13} className="text-teal-400" />
              <span>Next.js · React 19 · TypeScript</span>
            </div>
          </motion.div>
        </section>

        {/* 4 Cards Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {themesConfig.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectTheme(theme.key)}
                className={`group relative rounded-2xl border border-slate-800/90 ${theme.cardBorder} bg-slate-900/70 hover:bg-slate-900 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl shadow-black/40 cursor-pointer`}
              >
                {/* Visual Image Header */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <img
                    src={theme.bgImage}
                    alt={theme.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-110 group-hover:scale-105 group-hover:brightness-[0.75] transition-all duration-700"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${theme.previewBg} opacity-80 group-hover:opacity-70 transition-opacity`}
                  />

                  {/* Top Bar with Badge and Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-black/60 border border-white/10 text-white backdrop-blur-md">
                      {theme.badge}
                    </span>

                    <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:rotate-6 transition-transform">
                      <Icon size={15} />
                    </div>
                  </div>

                  {/* Vibe subtitle */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-medium text-slate-200 drop-shadow">
                      {theme.vibe}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                      {theme.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal mb-5">
                      {theme.summary}
                    </p>
                  </div>

                  <div>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {theme.highlights.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-medium"
                        >
                          <CheckCircle2 size={11} className="text-emerald-400" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>

                    {/* Button footer */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        {lang === 'es' ? 'Recorrido guiado incluido' : 'Guided tour included'}
                      </span>

                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 group-hover:bg-blue-600 text-white text-xs font-semibold transition-all duration-200 shadow-sm">
                        <span>{lang === 'es' ? 'Ver Portafolio' : 'View Portfolio'}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Profile Summary Accordion/Card */}
        <section className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1">
                {lang === 'es' ? 'Perfil del Ingeniero' : 'Engineer Profile'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {dict.identity.name}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium">
              <a
                href={`mailto:${dict.identity.contacts.primaryEmail}`}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {dict.identity.contacts.primaryEmail}
              </a>
              <a
                href={dict.identity.contacts.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={dict.identity.contacts.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm text-slate-400">
            <div>
              <h4 className="font-semibold text-slate-200 mb-2">
                {lang === 'es' ? 'Experiencia Clave' : 'Key Experience'}
              </h4>
              <p className="leading-relaxed text-xs">
                {lang === 'es'
                  ? 'Frontend Developer en el ecosistema Betowa (SENA / Sofia Plus), liderando aplicaciones web de alta concurrencia como Oferta Sofia Plus, Admin Betowa y Selección Betowa.'
                  : 'Frontend Developer in the Betowa ecosystem (SENA / Sofia Plus), building mission-critical platforms like Oferta Sofia Plus, Admin Betowa, and Selección Betowa.'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-200 mb-2">
                {lang === 'es' ? 'Enfoque Técnico' : 'Technical Focus'}
              </h4>
              <p className="leading-relaxed text-xs">
                {lang === 'es'
                  ? 'Arquitectura modular en Next.js (App Router, Server Actions), React 19, TypeScript estricto, Tailwind CSS y pruebas automatizadas E2E con Playwright.'
                  : 'Modular architecture with Next.js (App Router, Server Actions), React 19, strict TypeScript, Tailwind CSS, and E2E automated testing via Playwright.'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-200 mb-2">
                {lang === 'es' ? 'Disponibilidad' : 'Availability'}
              </h4>
              <p className="leading-relaxed text-xs">
                {lang === 'es'
                  ? 'Disponible para posiciones presenciales, híbridas o en remoto (Pereira, Colombia // UTC-05). Abierto a nuevos desafíos de ingeniería.'
                  : 'Available for on-site, hybrid, or remote positions (Pereira, Colombia // UTC-05). Open to impactful software engineering challenges.'}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} {dict.identity.name}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
          </div>
          <div>
            <span>React 19 · Vite 6 · Tailwind CSS v4 · TypeScript</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
