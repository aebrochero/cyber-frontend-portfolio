/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Gamepad2,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  CheckCircle,
  Briefcase,
  Terminal,
  Send,
  Loader2,
  Calendar,
  Flame,
  Radio,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { driver, DriveStep } from 'driver.js';
import './vapor-driver.css';

export default function VaporwavePortfolio() {
  const { lang, toggleLang, dict } = useLanguage();
  const [activeTab, setActiveTab] = useState<'specialties' | 'projects' | 'experience' | 'stack' | 'contact'>('specialties');
  const [selectedSpecId, setSelectedSpecId] = useState(dict.specializations[0].id);
  const [projectFilter, setProjectFilter] = useState<'ALL' | 'ACTIVE' | 'COMPLETED'>('ALL');
  const [expandedProjId, setExpandedProjId] = useState<string | null>(null);

  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const activeSpec = dict.specializations.find((s) => s.id === selectedSpecId) || dict.specializations[0];

  const filteredProjects = dict.projectsList.filter((p) => {
    if (projectFilter === 'ALL') return true;
    return p.status === projectFilter;
  });

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSent(true);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  const startVaporTour = () => {
    const steps: DriveStep[] = dict.tourSteps.map((s) => ({
      element: s.element,
      waitForElement: 2500,
      popover: {
        title: `★ ${s.title} ★`,
        description: s.description,
        side: s.side,
        align: s.align,
        popoverClass: 'vapor-popover',
      },
    }));

    const d = driver({
      animate: true,
      duration: 250,
      overlayColor: '#0A0314',
      overlayOpacity: 0.85,
      stagePadding: 8,
      stageRadius: 4,
      progressText: dict.tourUi.progress,
      nextBtnText: dict.tourUi.next,
      prevBtnText: dict.tourUi.prev,
      doneBtnText: dict.tourUi.done,
      steps,
    });

    d.drive(0);
  };

  return (
    <div className="min-h-screen bg-[#0A0314] text-[#E2D9F3] font-mono selection:bg-[#FF007F] selection:text-white transition-colors pb-16 relative overflow-x-hidden">
      {/* Synthwave Sunset Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 127, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Sun glow & ambient neon orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FF007F]/20 via-[#9900FF]/15 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#0E041A]/90 backdrop-blur-md border-b-2 border-[#FF007F]/40 shadow-[0_4px_20px_rgba(255,0,127,0.25)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#FF007F] to-[#00F0FF] rounded-xs p-[2px] shadow-[0_0_12px_#FF007F]">
              <div className="w-full h-full bg-[#0E041A] flex items-center justify-center text-[#FFE600]">
                <Gamepad2 size={20} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#FF007F]/20 text-[#FF007F] px-1.5 py-0.2 border border-[#FF007F]/50 font-bold tracking-widest">
                  1P READY
                </span>
                <span className="text-xs text-[#00F0FF] font-bold tracking-wider">
                  {dict.identity.name}
                </span>
              </div>
              <span className="text-[11px] text-[#FFE600] font-bold tracking-widest flex items-center gap-1">
                <Flame size={12} className="animate-bounce text-[#FF007F]" />
                STAGE 04: FULL STACK // 1984-2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Lang switch */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1B0A33] hover:bg-[#2B104F] border border-[#00F0FF]/60 text-xs font-bold text-[#00F0FF] shadow-[0_0_8px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
            >
              <Globe size={13} className="text-[#FFE600]" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Tour CTA */}
            <button
              id="tour-trigger-header"
              onClick={startVaporTour}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#FF007F] to-[#9900FF] hover:from-[#FF1A8C] hover:to-[#B31AFF] text-white text-xs font-black tracking-widest uppercase border border-white/20 shadow-[0_0_15px_rgba(255,0,127,0.5)] transition-all cursor-pointer"
            >
              <Sparkles size={13} />
              <span className="hidden sm:inline">{dict.nav.tourBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 relative z-10">
        {/* Retro Arcade Hero */}
        <section
          id="tour-hero-identity"
          className="bg-[#120524]/90 border-2 border-[#FF007F]/50 p-6 sm:p-8 rounded-xs shadow-[0_0_30px_rgba(255,0,127,0.2)] mb-8 relative overflow-hidden"
        >
          {/* Decorative Corner Grid Marks */}
          <span className="absolute top-1 left-1 text-[#00F0FF] text-xs">╔</span>
          <span className="absolute top-1 right-1 text-[#00F0FF] text-xs">╗</span>
          <span className="absolute bottom-1 left-1 text-[#00F0FF] text-xs">╚</span>
          <span className="absolute bottom-1 right-1 text-[#00F0FF] text-xs">╝</span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold mb-3">
                <span className="px-2 py-0.5 bg-[#FF007F]/20 border border-[#FF007F] text-[#FF007F]">
                  <MapPin size={11} className="inline mr-1" />
                  {dict.identity.location}
                </span>
                <span className="px-2 py-0.5 bg-[#00F0FF]/20 border border-[#00F0FF] text-[#00F0FF]">
                  {dict.identity.availability}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#FFE600] to-[#00F0FF] tracking-tighter mb-2 drop-shadow-[0_2px_10px_rgba(255,0,127,0.5)]">
                {dict.identity.name}
              </h2>

              <p className="text-sm text-[#00F0FF] font-bold tracking-wide uppercase mb-3">
                // {dict.identity.roleTitle}
              </p>

              <p className="text-xs sm:text-sm text-[#E2D9F3]/90 leading-relaxed max-w-2xl mb-4 font-light">
                {dict.identity.summary}
              </p>

              <div className="bg-[#1D0838] border-l-4 border-[#FFE600] p-3 text-xs text-[#FFE600] mb-6">
                {dict.identity.quote}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="tour-hero-cta"
                  onClick={startVaporTour}
                  className="px-5 py-2.5 bg-[#00F0FF] hover:bg-[#33F3FF] text-[#0A0314] font-black text-xs uppercase tracking-widest shadow-[0_0_15px_#00F0FF] transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles size={14} />
                  <span>{dict.hero.startTour}</span>
                </button>
                <a
                  href={`mailto:${dict.identity.contacts.primaryEmail}`}
                  className="px-4 py-2.5 bg-[#FF007F]/20 hover:bg-[#FF007F]/40 border border-[#FF007F] text-[#FF007F] font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  <span>COMM CHANNEL</span>
                </a>
              </div>
            </div>

            {/* Arcade Specs Side Panel */}
            <div
              id="tour-hero-specs"
              className="lg:col-span-4 bg-[#1A0833] border border-[#00F0FF]/40 p-4 rounded-xs shadow-[0_0_15px_rgba(0,240,255,0.15)] flex flex-col gap-2.5 text-xs"
            >
              <span className="text-[#FFE600] font-black tracking-widest border-b border-[#FFE600]/30 pb-1 flex items-center justify-between">
                <span>[HIGH SCORE SPECS]</span>
                <Radio size={12} className="text-[#FF007F] animate-pulse" />
              </span>

              {dict.identity.systemSpecs.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5 text-[11px]">
                  <span className="text-white/50">{s.label}:</span>
                  <span className="text-[#00F0FF] font-bold text-right truncate max-w-[65%]">
                    {s.value}
                  </span>
                </div>
              ))}

              <div className="mt-2 pt-2 border-t border-[#FF007F]/40 text-center text-[#FF007F] font-black text-[11px]">
                INSERT COIN TO CONTINUE // 99 CREDITS
              </div>
            </div>
          </div>
        </section>

        {/* Arcade Stage Tabs */}
        <nav
          id="tour-nav-sections"
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b-2 border-[#FF007F]/30"
        >
          {[
            { id: 'specialties', label: 'STAGE 1 // ' + dict.nav.specialties, icon: Layers },
            { id: 'projects', label: 'STAGE 2 // ' + dict.nav.projects, icon: Briefcase },
            { id: 'experience', label: 'STAGE 3 // ' + dict.nav.timeline, icon: Calendar },
            { id: 'stack', label: 'STAGE 4 // ' + dict.nav.stack, icon: Cpu },
            { id: 'contact', label: 'STAGE 5 // ' + dict.nav.contact, icon: Send },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#FF007F] text-white border-[#FF007F] shadow-[0_0_12px_#FF007F]'
                    : 'bg-[#120524] hover:bg-[#1E093A] text-white/70 border-white/10'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* 1. SPECIALTIES */}
        {activeTab === 'specialties' && (
          <section id="tour-specialties-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs font-black text-[#FFE600] tracking-widest uppercase">
                &gt;&gt; SELECT CHARACTER ROLE
              </span>
              {dict.specializations.map((spec) => {
                const isSelected = spec.id === activeSpec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecId(spec.id)}
                    className={`text-left p-4 rounded-xs border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#220745] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-[#120524] hover:bg-[#1A0833] border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#FF007F]">[{spec.code}]</span>
                      {isSelected && <span className="text-[10px] text-[#FFE600] font-black">ACTIVE</span>}
                    </div>
                    <h3 className="font-black text-sm text-white mb-0.5">{spec.name}</h3>
                    <p className="text-[11px] text-[#00F0FF]">{spec.role}</p>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8 bg-[#120524]/90 border-2 border-[#00F0FF]/50 p-6 rounded-xs shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#00F0FF]/30 mb-4">
                <div>
                  <span className="text-xs text-[#FF007F] font-black">
                    [{activeSpec.code}] // {activeSpec.role}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">{activeSpec.name}</h3>
                </div>
                <div className="w-10 h-10 border border-[#FFE600] bg-[#FFE600]/10 flex items-center justify-center text-[#FFE600]">
                  <Layers size={20} />
                </div>
              </div>

              <p className="text-xs text-[#E2D9F3] leading-relaxed mb-6 font-light">{activeSpec.bio}</p>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {activeSpec.stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-[#1A0833] p-3 border border-white/10">
                    <div className="flex justify-between items-baseline text-xs mb-1">
                      <span className="font-bold text-white">{st.name}</span>
                      <span className="text-[#FFE600] font-black">{st.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-black/60 border border-white/20">
                      <div
                        className="h-full bg-gradient-to-r from-[#FF007F] via-[#FFE600] to-[#00F0FF]"
                        style={{ width: `${st.value}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-white/50 block mt-1">{st.desc}</span>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-black text-[#00F0FF] uppercase tracking-widest mb-3">
                  // {dict.specialties.skillsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSpec.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-white/80">
                      <span className="text-[#FF007F] font-bold">►</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. PROJECTS */}
        {activeTab === 'projects' && (
          <section id="tour-projects-container" className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#FF007F] tracking-widest uppercase">
                  {dict.projects.tag}
                </span>
                <h3 className="text-xl font-black text-white">{dict.projects.title}</h3>
              </div>

              <div className="flex items-center gap-1 bg-[#120524] p-1 border border-white/20">
                {(['ALL', 'ACTIVE', 'COMPLETED'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors cursor-pointer ${
                      projectFilter === filter
                        ? 'bg-[#00F0FF] text-black shadow-[0_0_8px_#00F0FF]'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {filter === 'ALL'
                      ? dict.projects.filterAll
                      : filter === 'ACTIVE'
                      ? dict.projects.filterActive
                      : dict.projects.filterCompleted}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((p) => {
                const isExpanded = expandedProjId === p.id;
                return (
                  <div
                    key={p.id}
                    className="bg-[#120524]/90 border-2 border-white/10 hover:border-[#FF007F] p-5 rounded-xs transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 bg-[#FF007F]/20 border border-[#FF007F] text-[#FF007F] text-xs font-black">
                          [{p.code}]
                        </span>
                        <div className="flex items-center gap-2">
                          {p.isPrivate && (
                            <span className="text-[10px] text-[#FFE600] border border-[#FFE600] px-1.5 py-0.2">
                              PRIVATE
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 ${
                              p.status === 'ACTIVE'
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                            }`}
                          >
                            {p.status}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-white/40 uppercase tracking-widest block">
                        {p.type}
                      </span>
                      <h4 className="text-base font-black text-white mt-0.5 mb-2">{p.title}</h4>
                      <p className="text-xs text-[#E2D9F3]/80 leading-relaxed mb-4 font-light">
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-black/60 border border-white/15 text-[10px] text-[#00F0FF]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pt-3 border-t border-white/10"
                          >
                            <h5 className="text-[10px] font-bold text-[#FFE600] uppercase mb-2">
                              {dict.projects.outcomesTitle}
                            </h5>
                            <div className="space-y-1.5">
                              {p.outcomes.map((out, oIdx) => (
                                <div key={oIdx} className="flex items-start gap-1.5 text-xs text-white/80">
                                  <span className="text-[#FF007F]">★</span>
                                  <span>{out}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setExpandedProjId(isExpanded ? null : p.id)}
                        className="text-[#FFE600] hover:underline font-bold cursor-pointer"
                      >
                        {isExpanded ? dict.projects.collapseBtn : dict.projects.expandBtn}
                      </button>

                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#00F0FF]/15 border border-[#00F0FF] text-[#00F0FF] font-bold hover:bg-[#00F0FF] hover:text-black transition-all"
                        >
                          <Code2 size={12} />
                          <span>REPO</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 3. EXPERIENCE TIMELINE */}
        {activeTab === 'experience' && (
          <section id="tour-timeline-container" className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="text-center mb-2">
              <span className="text-xs font-bold text-[#FF007F] tracking-widest uppercase">
                {dict.timeline.tag}
              </span>
              <h3 className="text-2xl font-black text-white">{dict.timeline.title}</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[#FF007F]/40 space-y-6">
              {dict.experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-[#FF007F] shadow-[0_0_8px_#FF007F]" />

                  <div className="bg-[#120524]/90 border border-white/15 p-5 rounded-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-[#FFE600]">{exp.period}</span>
                      <span className="text-xs text-white/50">{exp.geo}</span>
                    </div>

                    <h4 className="text-base font-black text-white">{exp.role}</h4>
                    <span className="text-xs text-[#00F0FF] font-bold block mb-3">{exp.company}</span>

                    <p className="text-xs text-white/80 leading-relaxed mb-4 font-light">
                      {exp.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 space-y-1.5">
                      <span className="text-[10px] font-bold text-[#FF007F] uppercase tracking-wider block mb-2">
                        {dict.timeline.outcomesTitle}
                      </span>
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="text-[#00F0FF] font-bold">»</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. STACK DIAGNOSTIC */}
        {activeTab === 'stack' && (
          <section id="tour-stack-container" className="flex flex-col gap-6">
            <div className="text-center max-w-xl mx-auto mb-2">
              <span className="text-xs font-bold text-[#FFE600] tracking-widest uppercase">
                {dict.stack.tag}
              </span>
              <h3 className="text-2xl font-black text-white">{dict.stack.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.skillsList.map((cat) => (
                <div key={cat.id} className="bg-[#120524]/90 border border-[#00F0FF]/40 p-5 rounded-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#00F0FF]/30 mb-4">
                    <span className="text-xs font-bold text-[#FF007F]">[{cat.code}]</span>
                    <h4 className="font-bold text-xs text-white">{cat.title}</h4>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((sk, skIdx) => (
                      <div key={skIdx}>
                        <div className="flex justify-between items-baseline text-xs mb-1">
                          <span className="font-bold text-white/90">{sk.name}</span>
                          <span className="text-[#FFE600] font-bold">{sk.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-black/60 border border-white/20">
                          <div
                            className="h-full bg-gradient-to-r from-[#FF007F] to-[#00F0FF]"
                            style={{ width: `${sk.level}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-white/50 block mt-0.5 leading-tight">
                          {sk.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. CONTACT */}
        {activeTab === 'contact' && (
          <section id="tour-contact-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 bg-[#120524]/90 border border-[#FF007F]/40 p-6 rounded-xs space-y-4">
              <div>
                <span className="text-xs font-bold text-[#FFE600] uppercase tracking-widest block mb-1">
                  {dict.contact.tag}
                </span>
                <h3 className="text-xl font-black text-white">{dict.contact.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed mt-2">{dict.contact.description}</p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="p-3 bg-[#1A0833] border border-white/10">
                  <span className="text-[10px] text-white/40 block">DIRECT_EMAIL:</span>
                  <a
                    href={`mailto:${dict.identity.contacts.primaryEmail}`}
                    className="text-[#00F0FF] font-bold hover:underline"
                  >
                    {dict.identity.contacts.primaryEmail}
                  </a>
                </div>

                <div className="p-3 bg-[#1A0833] border border-white/10">
                  <span className="text-[10px] text-white/40 block">UTP_EMAIL:</span>
                  <a
                    href={`mailto:${dict.identity.contacts.institutionalEmail}`}
                    className="text-white/80 font-bold hover:underline"
                  >
                    {dict.identity.contacts.institutionalEmail}
                  </a>
                </div>

                <div className="p-3 bg-[#1A0833] border border-white/10">
                  <span className="text-[10px] text-white/40 block">COMMS_PHONE:</span>
                  <a
                    href={`https://wa.me/${dict.identity.contacts.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFE600] font-bold hover:underline flex items-center gap-1"
                  >
                    <Phone size={12} />
                    <span>{dict.identity.contacts.phoneDisplay}</span>
                  </a>
                </div>

                <div className="p-3 bg-[#1A0833] border border-white/10">
                  <span className="text-[10px] text-white/40 block">NETWORKS:</span>
                  <div className="flex gap-3 text-xs font-bold text-[#FF007F] mt-1">
                    <a href={dict.identity.contacts.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      GITHUB
                    </a>
                    <span>|</span>
                    <a href={dict.identity.contacts.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Form */}
            <div className="lg:col-span-7 bg-[#0E041A] border-2 border-[#00F0FF]/40 p-6 rounded-xs shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest block mb-4">
                &gt; COMMS TERMINAL 433 MHZ
              </span>

              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-[#00F0FF]/20 border border-[#00F0FF] text-[#00F0FF] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <h5 className="font-bold text-sm text-white">{dict.contact.successTitle}</h5>
                  <p className="text-xs text-white/70 max-w-sm mx-auto mt-1 mb-4">
                    {dict.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-4 py-2 bg-[#FF007F] text-white text-xs font-bold uppercase cursor-pointer"
                  >
                    {dict.contact.btnNewSignal}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/60 mb-1">{dict.contact.fieldName}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={dict.contact.placeholderName}
                      className="w-full px-3 py-2 bg-black/60 border border-white/20 text-white focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 mb-1">{dict.contact.fieldEmail}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={dict.contact.placeholderEmail}
                      className="w-full px-3 py-2 bg-black/60 border border-white/20 text-white focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 mb-1">{dict.contact.fieldMessage}</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={dict.contact.placeholderMsg}
                      className="w-full px-3 py-2 bg-black/60 border border-white/20 text-white focus:border-[#00F0FF] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-2.5 bg-gradient-to-r from-[#FF007F] to-[#00F0FF] text-black font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                  >
                    {formLoading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>{dict.contact.btnCompiling}</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>{dict.contact.btnSubmit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Retro Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t-2 border-[#FF007F]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-[#00F0FF]" />
          <span>© {new Date().getFullYear()} {dict.footer.copyright}</span>
        </div>
        <div>
          <span>RETRO ARCADE 1984 · ANDRÉS BROCHERO</span>
        </div>
      </footer>
    </div>
  );
}
