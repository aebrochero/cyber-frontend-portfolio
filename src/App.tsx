/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ComponentType } from 'react';
import HUDOverlay from './components/HUDOverlay';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import CharacterSelect from './components/CharacterSelect';
import MissionLogs from './components/MissionLogs';
import MemoryCores from './components/MemoryCores';
import DiagnosticStack from './components/DiagnosticStack';
import SignalTerminal from './components/SignalTerminal';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, MapPin, Eye, Sparkles } from 'lucide-react';
import { useProfileTour } from './tour/useProfileTour';
import { useLanguage } from './context/LanguageContext';

const SECTION_COMPONENTS: Record<string, ComponentType> = {
  specialties: CharacterSelect,
  projects: MissionLogs,
  timeline: MemoryCores,
  stack: DiagnosticStack,
  contact: SignalTerminal,
};

const fmtTime = () => new Date().toISOString().replace('T', ' // ').substring(0, 22);

export default function App() {
  const [activeSection, setActiveSection] = useState('specialties');
  const [tickerTime, setTickerTime] = useState(fmtTime);
  const { startTour } = useProfileTour(activeSection, setActiveSection);
  const { dict } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => setTickerTime(fmtTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { id: 'specialties', name: dict.nav.specialties, code: '01' },
    { id: 'projects', name: dict.nav.projects, code: '02' },
    { id: 'timeline', name: dict.nav.timeline, code: '03' },
    { id: 'stack', name: dict.nav.stack, code: '04' },
    { id: 'contact', name: dict.nav.contact, code: '05' },
  ];

  const ActiveComponent = SECTION_COMPONENTS[activeSection] || CharacterSelect;

  return (
    <HUDOverlay>
      {/* 1. Futuristic custom targeting cursor */}
      <CustomCursor />

      {/* 2. Absolute navigation and log markers */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
        onStartTour={startTour}
      />

      {/* 3. Hero Identity Dashboard Card */}
      <section
        id="tour-hero-identity"
        className="mb-6 bg-[#12141C]/50 border border-white/5 rounded-sm p-4 md:p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#00F0FF]/5 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
          {/* Identity details (Span 8) */}
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[9px] text-white/50 mb-2 uppercase">
              <span className="flex items-center gap-1">
                <MapPin size={10} className="text-[#FF0055]" />
                {dict.identity.location}
              </span>
              <span>•</span>
              <span className="text-[#00F0FF] font-semibold">{dict.identity.availability}</span>
              <span>•</span>
              <span>{dict.hero.nodeAuth}</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none select-none">
              {dict.identity.name} <span className="text-[#00F0FF] text-3xl md:text-4xl lg:text-5xl">_</span>
            </h1>

            <p className="font-mono text-xs text-[#00F0FF]/90 font-medium tracking-wide mt-2">
              {dict.identity.roleTitle}
            </p>

            <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed font-light mt-2 max-w-2xl">
              {dict.identity.summary}
            </p>

            {/* Quick Tour Launcher Action */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                id="tour-hero-cta"
                onClick={startTour}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#00F0FF]/15 hover:bg-[#00F0FF]/25 border border-[#00F0FF]/70 hover:border-[#00F0FF] text-[#00F0FF] font-mono text-[10.5px] font-bold tracking-widest uppercase rounded-xs transition-all shadow-[0_0_14px_rgba(0,240,255,0.2)] hover:shadow-[0_0_22px_rgba(0,240,255,0.5)] cursor-pointer group"
              >
                <Sparkles size={12} className="group-hover:rotate-45 transition-transform animate-pulse" />
                <span>{dict.hero.startTour}</span>
              </button>
              <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest hidden sm:inline">
                {dict.hero.tourTag}
              </span>
            </div>
          </div>

          {/* Diagnostic Stats Sidebar (Span 4) */}
          <div
            id="tour-hero-specs"
            className="md:col-span-4 bg-black/40 border border-white/5 p-4 rounded-xs flex flex-col gap-2 font-mono text-[9.5px]"
          >
            <span className="text-white/30 uppercase tracking-widest block mb-1">
              {dict.hero.specsTitle}
            </span>
            {dict.identity.systemSpecs.map((spec, sIdx) => (
              <div key={sIdx} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                <span className="text-white/45">{spec.label}</span>
                <span className="text-[#00F0FF] font-semibold text-right max-w-[60%] truncate" title={spec.value}>
                  {spec.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center py-1 mt-1 font-semibold text-[#FF0055]">
              <span>{dict.hero.systemTime}</span>
              <span className="animate-pulse">{tickerTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Active Animated Context Screen */}
      <main className="flex-1 min-h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSection}-${dict.identity.name}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Footer and copyright details */}
      <footer className="border-t border-white/5 mt-12 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-[9px] text-white/30">
        <div className="flex items-center gap-1.5 font-light">
          <Terminal size={11} className="text-[#00F0FF]" />
          <span>© {new Date().getFullYear()} {dict.footer.copyright}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#FF0055] hover:underline uppercase select-all">REF: AEB_PORTFOLIO_SYS</span>
          <span className="opacity-40">/</span>
          <span className="flex items-center gap-1">
            <Eye size={11} />
            <span>{dict.footer.compliance}</span>
          </span>
        </div>
      </footer>
    </HUDOverlay>
  );
}
