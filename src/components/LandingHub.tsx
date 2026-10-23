/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Terminal, Coffee, Gamepad2, Feather, ArrowRight, Globe, ExternalLink, Code2 } from 'lucide-react';
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
    subtitle: string;
    badge: string;
    description: string;
    vibe: string;
    icon: typeof Terminal;
    accentColor: string;
    gradient: string;
    border: string;
    previewBg: string;
    tags: string[];
    bgImage: string;
  }[] = [
    {
      key: 'cyber',
      title: 'Cyber HUD // Spatial Architecture',
      subtitle: lang === 'es' ? 'Original · Telemetría & Bento Grid' : 'Original · Telemetry & Bento Grid',
      badge: lang === 'es' ? 'SISTEMA ACTIVO' : 'SYSTEM ACTIVE',
      description:
        lang === 'es'
          ? 'Interfaz aeroespacial de grado militar con escaneo láser, cursor interactivo con retícula, telemetría UTC, blueprints SVG animados y tour en nodos.'
          : 'Military-grade aerospace interface featuring laser scanning, interactive reticle cursor, live UTC telemetry, animated SVG blueprints, and node tour.',
      vibe: 'Dark Neon · Cyberpunk · High Tech · 60 FPS',
      icon: Terminal,
      accentColor: '#00F0FF',
      gradient: 'from-[#00F0FF]/20 via-[#12141C] to-[#08090C]',
      border: 'border-[#00F0FF]/40 hover:border-[#00F0FF]',
      previewBg: 'bg-[#08090C]',
      tags: ['Bento Grid', 'Cyber Cursor', 'SVG Blueprints', 'Laser Scanline'],
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'cozy',
      title: 'Cozy Developer Studio',
      subtitle: lang === 'es' ? 'Nuevo · Iluminación Cálida & Plantas' : 'New · Warm Lighting & Plants',
      badge: lang === 'es' ? 'CÁLIDO & ACCESIBLE' : 'WARM & ACCESSIBLE',
      description:
        lang === 'es'
          ? 'Espacio de trabajo relajante inspirado en estudios creativos. Tonos crema, verde salvia, terracota suave, micro-tarjetas acogedoras, café humeante y lecturas amigables.'
          : 'Relaxing developer space inspired by creative studio lofts. Cream tones, sage greens, warm terracotta, tactile soft cards, steaming coffee, and friendly typography.',
      vibe: 'Warm Lo-Fi · Plants · Latte · Human-Centered UI',
      icon: Coffee,
      accentColor: '#E07A5F',
      gradient: 'from-[#E07A5F]/20 via-[#FDFBF7] to-[#F4F1DE]',
      border: 'border-[#E07A5F]/40 hover:border-[#E07A5F]',
      previewBg: 'bg-[#FDFBF7]',
      tags: ['Warm Palette', 'Plus Jakarta Sans', 'Plant Accents', 'Tactile Cards'],
      bgImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'vaporwave',
      title: 'Retro Arcade // Synthwave 80s',
      subtitle: lang === 'es' ? 'Nuevo · Pixel Neon & CRT Glow' : 'New · Neon Pixel & CRT Glow',
      badge: lang === 'es' ? 'INSERT COIN // 1984' : 'INSERT COIN // 1984',
      description:
        lang === 'es'
          ? 'Estética nostálgica de arcade de los 80s y synthwave: rejilla en perspectiva, púrpura eléctrico y rosa neón, badges estilo cartucho de consola y sonido visual retro.'
          : 'Nostalgic 80s arcade and synthwave aesthetics: perspective wireframe grid, electric purple & hot neon pink, cartridge-style badges, and retro gaming vibes.',
      vibe: 'Synthwave · Neon Magenta · CRT Scan · 8-Bit Glory',
      icon: Gamepad2,
      accentColor: '#FF007F',
      gradient: 'from-[#FF007F]/25 via-[#1A0933] to-[#0A0314]',
      border: 'border-[#FF007F]/40 hover:border-[#FF007F]',
      previewBg: 'bg-[#0E041A]',
      tags: ['CRT Glow', 'Perspective Grid', 'Pixel Accents', 'Vapor Sunset'],
      bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    },
    {
      key: 'minimal',
      title: 'Ultra-Minimalist Ink & Paper',
      subtitle: lang === 'es' ? 'Nuevo · Tipografía Editorial & Espacio' : 'New · Editorial Typography & Space',
      badge: lang === 'es' ? 'EDICIÓN IMPRESA' : 'PRINT EDITION',
      description:
        lang === 'es'
          ? 'Diseño editorial suizo de alta precisión. Fondo papel marfil, tinta carbón profunda, elegantes contrastes en tipografía serif Fraunces, espaciado generoso y pulcritud matemática.'
          : 'High-end Swiss editorial design. Crisp cream archival paper, deep carbon ink, elegant Fraunces serif typography contrasts, generous whitespace, and mathematical poise.',
      vibe: 'Swiss Editorial · High Contrast · Fraunces Serif · Pure Poise',
      icon: Feather,
      accentColor: '#1A1A1A',
      gradient: 'from-stone-300/40 via-[#FAF9F6] to-stone-100',
      border: 'border-stone-400/50 hover:border-black',
      previewBg: 'bg-[#FAF9F6]',
      tags: ['Editorial Serif', 'Monochrome Ink', 'Generous Whitespace', 'Swiss Precision'],
      bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07080B] text-white selection:bg-[#00F0FF] selection:text-black font-sans relative overflow-x-hidden">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FF0055]/15 rounded-full blur-[160px]" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#E07A5F]/15 rounded-full blur-[150px]" />
      </div>

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Top Bar Navigation */}
        <header className="flex items-center justify-between pb-8 mb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#00F0FF]/20 to-white/5 border border-white/15 flex items-center justify-center font-mono font-bold text-lg text-white tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              AB
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#00F0FF] tracking-widest block uppercase">
                PORTFOLIO ARCHITECTURE LAB
              </span>
              <h2 className="font-sans text-sm md:text-base font-extrabold tracking-tight text-white">
                {dict.identity.name} <span className="text-white/40 font-light">╱╱ MULTI-EXPERIENCE STUDIO</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00F0FF]/50 text-white rounded-xs font-mono text-[11px] tracking-wider transition-all cursor-pointer group"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe size={12} className="text-[#00F0FF] group-hover:rotate-45 transition-transform" />
              <span className={lang === 'es' ? 'text-[#00F0FF] font-bold' : 'text-white/50'}>ES</span>
              <span className="text-white/30">/</span>
              <span className={lang === 'en' ? 'text-[#00F0FF] font-bold' : 'text-white/50'}>EN</span>
            </button>

            <a
              href={dict.identity.contacts.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white rounded-xs font-mono text-[11px] tracking-wider transition-colors"
            >
              <Code2 size={12} className="text-[#00F0FF]" />
              <span>GITHUB</span>
              <ExternalLink size={10} className="text-white/40" />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-xs mb-5"
          >
            <Sparkles size={12} className="text-[#00F0FF] animate-pulse" />
            <span>
              {lang === 'es'
                ? '4 Interpretaciones de Diseño · Mismo Código & Contenido'
                : '4 Design Interpretations · Same Core Code & Data'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6"
          >
            {lang === 'es' ? (
              <>
                Elige la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FF007F] to-[#E07A5F]">experiencia visual</span> para explorar mi trabajo.
              </>
            ) : (
              <>
                Select your preferred <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FF007F] to-[#E07A5F]">visual realm</span> to explore my portfolio.
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {lang === 'es'
              ? 'Toda la experiencia profesional, proyectos clave de Betowa/SENA, métricas y stack técnico de Andrés Brochero estructurados en 4 estéticas frontend radicalmente distintas. Cada una cuenta con su propio tour guiado interactivo.'
              : 'All professional experience, key Betowa/SENA production projects, metrics, and technical stack of Andrés Brochero rendered across 4 radically distinct frontend aesthetics, each equipped with its own interactive onboarding tour.'}
          </motion.p>
        </section>

        {/* 4 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {themesConfig.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.key}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-sm border ${theme.border} bg-[#0E1017] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl cursor-pointer`}
                onClick={() => onSelectTheme(theme.key)}
              >
                {/* Visual Header with Unsplash image preview overlay */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={theme.bgImage}
                    alt={theme.title}
                    className="w-full h-full object-cover object-center filter brightness-50 contrast-125 group-hover:scale-105 group-hover:brightness-75 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-85 group-hover:opacity-75 transition-opacity`} />

                  {/* Top floating pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-xs font-mono text-[9px] font-bold tracking-widest uppercase border backdrop-blur-md"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderColor: theme.accentColor,
                        color: theme.accentColor,
                      }}
                    >
                      {theme.badge}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:rotate-12 transition-transform">
                      <Icon size={14} style={{ color: theme.accentColor }} />
                    </div>
                  </div>

                  {/* Aesthetic Vibe text bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-mono text-[10px] tracking-wider text-white/80 uppercase font-semibold drop-shadow-md">
                      {theme.vibe}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase block mb-1">
                      {theme.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                      {theme.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-5">
                      {theme.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {theme.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-white/60 font-mono text-[9px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Launch Action Button */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        {lang === 'es' ? 'CLICK PARA ENTRAR' : 'CLICK TO LAUNCH'}
                      </span>
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xs font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        style={{
                          backgroundColor: theme.accentColor,
                          color: theme.key === 'minimal' ? '#FFFFFF' : '#000000',
                        }}
                      >
                        <span>{lang === 'es' ? 'Explorar Portafolio' : 'Enter Portfolio'}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info */}
        <footer className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {dict.identity.name} — {dict.identity.roleTitle}
            </span>
          </div>
          <div>
            <span>REACT 19 · VITE 6 · TAILWIND v4 · MOTION · DRIVER.JS</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
