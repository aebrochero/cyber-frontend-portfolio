/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Feather,
  Sparkles,
  Mail,
  Phone,
  Globe,
  Cpu,
  Layers,
  Briefcase,
  Send,
  Loader2,
  Calendar,
  Lock,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { STYLE_DICTIONARIES } from '@/data/styleLabels';
import { driver, DriveStep } from 'driver.js';
import './minimal-driver.css';

export default function MinimalPortfolio() {
  const { lang, toggleLang, dict } = useLanguage();
  const minimalText = STYLE_DICTIONARIES.minimal[lang];

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

  const startMinimalTour = () => {
    const tourOverrides = minimalText.tourStepOverrides;

    const steps: DriveStep[] = dict.tourSteps.map((s) => {
      let title = s.title;
      let desc = s.description;

      if (tourOverrides) {
        if (s.sectionId === 'specialties' && s.element === '#tour-specialties-container') {
          title = tourOverrides.specialtiesTitle;
          desc = tourOverrides.specialtiesDesc;
        } else if (s.sectionId === 'projects') {
          title = tourOverrides.projectsTitle;
          desc = tourOverrides.projectsDesc;
        } else if (s.sectionId === 'timeline') {
          title = tourOverrides.timelineTitle;
          desc = tourOverrides.timelineDesc;
        } else if (s.sectionId === 'stack') {
          title = tourOverrides.stackTitle;
          desc = tourOverrides.stackDesc;
        } else if (s.sectionId === 'contact') {
          title = tourOverrides.contactTitle;
          desc = tourOverrides.contactDesc;
        }
      }

      return {
        element: s.element,
        waitForElement: 2500,
        popover: {
          title,
          description: desc,
          side: s.side,
          align: s.align,
          popoverClass: 'minimal-popover',
        },
      };
    });

    const d = driver({
      animate: true,
      duration: 200,
      overlayColor: '#1A1A1A',
      overlayOpacity: 0.65,
      stagePadding: 8,
      stageRadius: 0,
      progressText: dict.tourUi.progress,
      nextBtnText: dict.tourUi.next,
      prevBtnText: dict.tourUi.prev,
      doneBtnText: dict.tourUi.done,
      steps,
    });

    d.drive(0);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-serif-ink selection:bg-[#1A1A1A] selection:text-[#FAF9F6] transition-colors pb-24">
      {/* Top Editorial Header */}
      <header className="border-b border-[#1A1A1A] bg-[#FAF9F6] sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#666] block">
              PORTFOLIO EDITION // VOL. 2026
            </span>
            <h1 className="font-serif-ink text-xl sm:text-2xl font-black tracking-tight text-[#1A1A1A]">
              {dict.identity.name}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1 border border-[#1A1A1A] text-xs font-mono tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors cursor-pointer"
            >
              <Globe size={11} className="inline mr-1" />
              {lang.toUpperCase()}
            </button>

            <button
              id="tour-trigger-header"
              onClick={startMinimalTour}
              className="px-3.5 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-mono tracking-widest uppercase hover:bg-stone-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles size={11} />
              <span className="hidden sm:inline">{minimalText.nav.tourBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Column */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-10">
        {/* Editorial Hero Statement */}
        <section
          id="tour-hero-identity"
          className="pb-12 mb-12 border-b border-[#1A1A1A]"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#666] uppercase tracking-widest mb-4">
            <span>{minimalText.hero.locationNote}</span>
            <span>/</span>
            <span className="text-[#1A1A1A] font-bold">{minimalText.hero.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.98] text-[#1A1A1A] mb-6">
            {dict.identity.roleTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
            <div className="md:col-span-8">
              <p className="font-sans text-base sm:text-lg text-[#333] leading-relaxed font-light mb-6">
                {dict.identity.summary}
              </p>

              <blockquote className="font-serif-ink italic text-lg sm:text-xl text-[#1A1A1A] border-l-2 border-[#1A1A1A] pl-4 mb-6">
                {dict.identity.quote}
              </blockquote>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="tour-hero-cta"
                  onClick={startMinimalTour}
                  className="px-6 py-2.5 bg-[#1A1A1A] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Feather size={13} />
                  <span>{minimalText.hero.startTour}</span>
                </button>
                <a
                  href={`mailto:${dict.identity.contacts.primaryEmail}`}
                  className="px-5 py-2.5 border border-[#1A1A1A] text-[#1A1A1A] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors flex items-center gap-1.5"
                >
                  <Mail size={13} />
                  <span>{dict.identity.contacts.primaryEmail}</span>
                </a>
              </div>
            </div>

            {/* Side specs table */}
            <div
              id="tour-hero-specs"
              className="md:col-span-4 border border-[#1A1A1A] p-5 font-mono text-xs bg-white shadow-[4px_4px_0px_#1A1A1A]"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#666] block border-b border-[#1A1A1A] pb-2 mb-3">
                [{minimalText.hero.specsTitle}]
              </span>
              <div className="space-y-2 text-[11px]">
                {dict.identity.systemSpecs.map((s, idx) => (
                  <div key={idx} className="pb-1.5 border-b border-stone-200 last:border-0">
                    <span className="text-[#888] block text-[9.5px] uppercase">{s.label}</span>
                    <span className="font-bold text-[#1A1A1A] block">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Navigation Index */}
        <nav
          id="tour-nav-sections"
          className="flex flex-wrap items-center gap-1 sm:gap-2 pb-4 mb-10 border-b border-[#1A1A1A] font-mono text-xs uppercase tracking-wider"
        >
          {[
            { id: 'specialties', label: '01. ' + minimalText.nav.specialties, icon: Layers },
            { id: 'projects', label: '02. ' + minimalText.nav.projects, icon: Briefcase },
            { id: 'experience', label: '03. ' + minimalText.nav.timeline, icon: Calendar },
            { id: 'stack', label: '04. ' + minimalText.nav.stack, icon: Cpu },
            { id: 'contact', label: '05. ' + minimalText.nav.contact, icon: Send },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3 py-1.5 border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A]'
                    : 'bg-transparent text-[#666] hover:text-[#1A1A1A] border-transparent hover:border-stone-300'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* 1. SPECIALTIES */}
        {activeTab === 'specialties' && (
          <section id="tour-specialties-container" className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 border-r border-[#1A1A1A]/20 pr-6 space-y-4 font-mono text-xs">
              <span className="text-[10px] text-[#666] uppercase tracking-widest block mb-2">
                // {minimalText.specialties.rosterTitle}
              </span>
              {dict.specializations.map((spec) => {
                const isSelected = spec.id === activeSpec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecId(spec.id)}
                    className={`w-full text-left p-3.5 border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#1A1A1A] bg-white shadow-[3px_3px_0px_#1A1A1A]'
                        : 'border-stone-200 hover:border-[#1A1A1A]'
                    }`}
                  >
                    <span className="text-[10px] text-[#888] block">{spec.code}</span>
                    <h3 className="font-serif-ink text-sm font-bold text-[#1A1A1A] mt-0.5">{spec.name}</h3>
                  </button>
                );
              })}
            </div>

            <div className="md:col-span-8 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#888] uppercase tracking-widest">
                  {activeSpec.code} // {activeSpec.role}
                </span>
                <h3 className="text-3xl font-extrabold text-[#1A1A1A] mt-1">{activeSpec.name}</h3>
                <p className="font-sans text-sm text-[#444] leading-relaxed mt-4 font-light">
                  {activeSpec.bio}
                </p>
              </div>

              {/* Stats table */}
              <div className="border border-[#1A1A1A] p-5 bg-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#666] block border-b border-stone-200 pb-2 mb-4">
                  {minimalText.specialties.statsTitle}
                </span>
                <div className="space-y-4">
                  {activeSpec.stats.map((st, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1 pb-2 border-b border-stone-100 last:border-0">
                      <div>
                        <span className="font-bold text-[#1A1A1A]">{st.name}</span>
                        <span className="font-sans text-[11px] text-[#666] block sm:inline sm:ml-2">
                          — {st.desc}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-sm text-[#1A1A1A]">{st.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="pt-2 font-sans">
                <h4 className="font-mono text-[11px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-3">
                  {minimalText.specialties.capabilitiesTitle}
                </h4>
                <div className="space-y-2 text-xs text-[#444]">
                  {activeSpec.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <span className="font-mono text-[#1A1A1A] font-bold">―</span>
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
          <section id="tour-projects-container" className="space-y-6">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#1A1A1A] gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#888] uppercase tracking-widest block mb-1">
                  {minimalText.projects.sectionTag}
                </span>
                <h3 className="text-2xl font-black text-[#1A1A1A]">{minimalText.projects.sectionTitle}</h3>
              </div>

              <div className="flex gap-2 font-mono text-xs">
                {(['ALL', 'ACTIVE', 'COMPLETED'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`px-3 py-1 border transition-colors cursor-pointer ${
                      projectFilter === filter
                        ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A]'
                        : 'border-stone-300 text-[#666] hover:border-[#1A1A1A]'
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

            <div className="divide-y divide-[#1A1A1A]">
              {filteredProjects.map((p) => {
                const isExpanded = expandedProjId === p.id;
                return (
                  <article key={p.id} className="py-6 first:pt-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 font-mono text-xs text-[#888]">
                      <span>{p.code} // {p.type}</span>
                      <div className="flex items-center gap-2">
                        {p.isPrivate && (
                          <span className="border border-stone-300 px-1.5 text-[10px] text-[#444] flex items-center gap-1">
                            <Lock size={9} />
                            PRIVATE
                          </span>
                        )}
                        <span className="text-[#1A1A1A] font-bold">STATUS: {p.status}</span>
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black text-[#1A1A1A] mb-2">{p.title}</h4>
                    <p className="font-sans text-xs sm:text-sm text-[#444] leading-relaxed max-w-3xl mb-3">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3 font-mono text-[10px]">
                      {p.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 border border-stone-200 bg-white text-[#444]">
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
                          className="overflow-hidden pt-3 mt-3 border-t border-stone-200 font-sans"
                        >
                          <span className="font-mono text-[10px] font-bold uppercase text-[#666] block mb-2">
                            {minimalText.projects.outcomesTitle}
                          </span>
                          <div className="space-y-1.5 text-xs text-[#333]">
                            {p.outcomes.map((out, oIdx) => (
                              <div key={oIdx} className="flex items-start gap-2">
                                <span className="font-mono text-[#1A1A1A]">›</span>
                                <span>{out}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between pt-3 font-mono text-xs">
                      <button
                        onClick={() => setExpandedProjId(isExpanded ? null : p.id)}
                        className="underline hover:text-[#666] cursor-pointer"
                      >
                        {isExpanded ? minimalText.projects.collapseBtn : minimalText.projects.expandBtn}
                      </button>

                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#1A1A1A] font-bold hover:underline"
                        >
                          <span>{minimalText.projects.repoBtn}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* 3. EXPERIENCE TIMELINE */}
        {activeTab === 'experience' && (
          <section id="tour-timeline-container" className="space-y-8">
            <div>
              <span className="font-mono text-[10px] text-[#888] uppercase tracking-widest block mb-1">
                {minimalText.timeline.sectionTag}
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A] pb-4 border-b border-[#1A1A1A]">
                {minimalText.timeline.sectionTitle}
              </h3>
            </div>

            <div className="space-y-10">
              {dict.experiences.map((exp) => (
                <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 border-b border-stone-200 last:border-0">
                  <div className="md:col-span-4 font-mono text-xs text-[#888] space-y-1">
                    <span className="font-bold text-[#1A1A1A] block">{exp.period}</span>
                    <span>{exp.geo}</span>
                  </div>

                  <div className="md:col-span-8">
                    <h4 className="text-xl font-bold text-[#1A1A1A]">{exp.role}</h4>
                    <span className="font-mono text-xs text-[#666] uppercase block mb-3">
                      {exp.company}
                    </span>

                    <p className="font-sans text-xs sm:text-sm text-[#444] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 font-sans text-xs text-[#333]">
                      <span className="font-mono text-[10px] font-bold uppercase text-[#888] block mb-2">
                        {minimalText.timeline.achievementsTitle}
                      </span>
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2">
                          <span className="font-mono text-[#1A1A1A]">―</span>
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
          <section id="tour-stack-container" className="space-y-8">
            <div>
              <span className="font-mono text-[10px] text-[#888] uppercase tracking-widest block mb-1">
                {minimalText.stack.sectionTag}
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A] pb-4 border-b border-[#1A1A1A]">
                {minimalText.stack.sectionTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.skillsList.map((cat) => (
                <div key={cat.id} className="border border-[#1A1A1A] p-5 bg-white shadow-[4px_4px_0px_#1A1A1A]">
                  <span className="font-mono text-[10px] text-[#888] block">{cat.code}</span>
                  <h4 className="font-serif-ink text-base font-bold text-[#1A1A1A] pb-3 border-b border-stone-200 mb-4">
                    {cat.title}
                  </h4>

                  <div className="space-y-4">
                    {cat.skills.map((sk, skIdx) => (
                      <div key={skIdx}>
                        <div className="flex justify-between items-baseline text-xs mb-1">
                          <span className="font-bold text-[#1A1A1A]">{sk.name}</span>
                          <span className="font-mono font-bold text-xs">{sk.level}%</span>
                        </div>
                        <div className="h-1 w-full bg-stone-200">
                          <div className="h-full bg-[#1A1A1A]" style={{ width: `${sk.level}%` }} />
                        </div>
                        <span className="font-sans text-[11px] text-[#666] block mt-1 leading-tight">
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
          <section id="tour-contact-container" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4 border border-[#1A1A1A] p-6 bg-white shadow-[5px_5px_0px_#1A1A1A]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#666] block">
                {minimalText.contact.sectionTag}
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A]">{minimalText.contact.sectionTitle}</h3>
              <p className="font-sans text-xs text-[#444] leading-relaxed">{minimalText.contact.sectionDesc}</p>

              <div className="space-y-3 pt-3 border-t border-stone-200 font-mono text-xs">
                <div>
                  <span className="text-[#888] text-[10px] block">PRIMARY_EMAIL:</span>
                  <a
                    href={`mailto:${dict.identity.contacts.primaryEmail}`}
                    className="font-bold text-[#1A1A1A] hover:underline"
                  >
                    {dict.identity.contacts.primaryEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[#888] text-[10px] block">UTP_INSTITUTIONAL:</span>
                  <a
                    href={`mailto:${dict.identity.contacts.institutionalEmail}`}
                    className="text-[#444] hover:underline"
                  >
                    {dict.identity.contacts.institutionalEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[#888] text-[10px] block">PHONE // WHATSAPP:</span>
                  <a
                    href={`https://wa.me/${dict.identity.contacts.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#1A1A1A] hover:underline flex items-center gap-1"
                  >
                    <Phone size={11} />
                    <span>{dict.identity.contacts.phoneDisplay}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[#888] text-[10px] block">PROFILES:</span>
                  <div className="flex gap-3 text-xs font-bold mt-0.5">
                    <a href={dict.identity.contacts.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      GITHUB
                    </a>
                    <span>/</span>
                    <a href={dict.identity.contacts.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Form */}
            <div className="md:col-span-7 border border-[#1A1A1A] p-6 sm:p-8 bg-white shadow-[5px_5px_0px_#1A1A1A]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888] block mb-2">
                CORRESPONDENCE DISPATCH
              </span>

              {formSent ? (
                <div className="text-center py-8">
                  <h5 className="font-serif-ink text-xl font-bold text-[#1A1A1A] mb-2">
                    {minimalText.contact.successTitle}
                  </h5>
                  <p className="font-sans text-xs text-[#555] max-w-sm mx-auto mb-4">
                    {minimalText.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-4 py-2 bg-[#1A1A1A] text-[#FAF9F6] font-mono text-xs uppercase cursor-pointer"
                  >
                    {minimalText.contact.btnNew}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-[#444] mb-1">{dict.contact.fieldName}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={dict.contact.placeholderName}
                      className="w-full p-2.5 border border-[#1A1A1A] focus:outline-none bg-[#FAF9F6]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#444] mb-1">{dict.contact.fieldEmail}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={dict.contact.placeholderEmail}
                      className="w-full p-2.5 border border-[#1A1A1A] focus:outline-none bg-[#FAF9F6]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#444] mb-1">{dict.contact.fieldMessage}</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={dict.contact.placeholderMsg}
                      className="w-full p-2.5 border border-[#1A1A1A] focus:outline-none bg-[#FAF9F6] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3 bg-[#1A1A1A] hover:bg-stone-800 text-[#FAF9F6] font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#666]"
                  >
                    {formLoading ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        <span>{minimalText.contact.btnSending}</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>{minimalText.contact.btnSubmit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Editorial Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-8 pt-16 mt-16 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666]">
        <div>
          <span>© {new Date().getFullYear()} {dict.identity.name}. {lang === 'es' ? 'Edición Tinta y Papel' : 'Ink and Paper Edition'}</span>
        </div>
        <div>
          <span>SWISS EDITORIAL ARCHITECTURE · ANDRÉS BROCHERO</span>
        </div>
      </footer>
    </div>
  );
}
