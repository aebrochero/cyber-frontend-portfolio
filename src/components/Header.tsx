/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Radio, Terminal, Sparkles, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: { id: string; name: string; code: string }[];
  onStartTour?: () => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  sections,
  onStartTour,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, dict } = useLanguage();

  return (
    <header className="relative z-40 border-b border-white/5 pb-4 mb-6 pt-2">
      <div className="flex items-center justify-between gap-3">
        {/* Brand logo & codename */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm">
            <span className="font-mono text-lg font-bold text-white tracking-widest">A</span>
            <span className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-ping" />
            <span className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-[#00F0FF] rounded-full" />
          </div>
          <div>
            <div className="font-mono text-xs text-white/50 tracking-wider">PORTFOLIO.SYS</div>
            <h1 className="font-sans text-sm font-semibold tracking-wider text-white">
              {dict.identity.name} <span className="text-[#00F0FF]">╱╱</span> FRONTEND
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav id="tour-nav-sections" className="hidden lg:flex items-center gap-1">
          {sections.map((sect) => {
            const isActive = activeSection === sect.id;
            return (
              <button
                key={sect.id}
                onClick={() => setActiveSection(sect.id)}
                className="relative group px-3.5 py-2 font-mono text-[11px] tracking-widest text-[#6B7280] hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBG"
                    className="absolute inset-0 bg-[#00F0FF]/10 border-b-2 border-[#00F0FF] rounded-t-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  <span
                    className={
                      isActive ? 'text-[#00F0FF]' : 'text-white/30 group-hover:text-[#00F0FF]/50 transition-colors'
                    }
                  >
                    {sect.code}
                  </span>
                  <span className={isActive ? 'text-white font-medium' : ''}>{sect.name}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Global Connection, Language Toggle & System Ping Status */}
        <div className="hidden md:flex items-center gap-2.5 font-mono text-[10px] text-white/40">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00F0FF]/50 text-white rounded-xs font-mono text-[10px] tracking-wider transition-all cursor-pointer group"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe size={11} className="text-[#00F0FF] group-hover:rotate-45 transition-transform" />
            <span className={lang === 'es' ? 'text-[#00F0FF] font-bold' : 'text-white/50'}>ES</span>
            <span className="text-white/30">/</span>
            <span className={lang === 'en' ? 'text-[#00F0FF] font-bold' : 'text-white/50'}>EN</span>
          </button>

          {onStartTour && (
            <button
              id="tour-trigger-header"
              onClick={onStartTour}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 border border-[#00F0FF]/40 hover:border-[#00F0FF] rounded-sm text-[#00F0FF] font-mono text-[10px] font-semibold tracking-wider transition-all shadow-[0_0_12px_rgba(0,240,255,0.18)] hover:shadow-[0_0_18px_rgba(0,240,255,0.45)] cursor-pointer group"
              title={dict.nav.tourBtn}
            >
              <Sparkles size={11} className="text-[#00F0FF] group-hover:rotate-12 transition-transform animate-pulse" />
              <span>{dict.nav.tourBtn}</span>
            </button>
          )}

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/5 rounded-sm">
            <Terminal size={11} className="text-[#00F0FF]" />
            <span className="text-[#00F0FF]/80">{dict.identity.firmware}</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF0055]/10 border border-[#FF0055]/20 rounded-sm">
            <Radio size={11} className="text-[#FF0055] animate-pulse" />
            <span className="text-[#FF0055]/90">{dict.nav.signalActive}</span>
          </div>
        </div>

        {/* Mobile menu trigger + Lang toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded-sm font-mono text-[10px] text-white"
            aria-label="Toggle language"
          >
            <span className={lang === 'es' ? 'text-[#00F0FF] font-bold' : 'text-white/40'}>ES</span>
            <span className="text-white/20">|</span>
            <span className={lang === 'en' ? 'text-[#00F0FF] font-bold' : 'text-white/40'}>EN</span>
          </button>

          {onStartTour && (
            <button
              onClick={onStartTour}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-[#00F0FF]/15 border border-[#00F0FF]/50 text-[#00F0FF] rounded-sm font-mono text-[10px] font-bold cursor-pointer"
            >
              <Sparkles size={11} />
              <span>TOUR</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            className="flex items-center justify-center p-2 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-30 mt-2 bg-[#12141C] border border-white/10 p-4 rounded shadow-2xl lg:hidden ring-1 ring-[#00F0FF]/20"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] text-white/30 mb-2 tracking-widest px-2">
                {dict.nav.currentSection}
              </span>
              {sections.map((sect) => {
                const isActive = activeSection === sect.id;
                return (
                  <button
                    key={sect.id}
                    onClick={() => {
                      setActiveSection(sect.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-3 rounded-xs font-mono text-xs tracking-wider transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#00F0FF]/15 text-white border-l-4 border-[#00F0FF] font-medium'
                        : 'text-white/60 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={isActive ? 'text-[#00F0FF]' : 'text-white/30'}>{sect.code}</span>
                      <span>{sect.name}</span>
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF]" />
                    )}
                  </button>
                );
              })}

              {onStartTour && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartTour();
                  }}
                  className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#00F0FF]/15 border border-[#00F0FF]/60 rounded-xs text-[#00F0FF] font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)] cursor-pointer"
                >
                  <Sparkles size={13} />
                  <span>{dict.hero.startTour}</span>
                </button>
              )}
            </div>

            <div className="border-t border-white/5 mt-4 pt-4 flex items-center justify-between">
              <span className="font-mono text-[9px] text-white/40">{dict.identity.location}</span>
              <span className="font-mono text-[9px] text-[#00F0FF]/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse" />
                ONLINE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
