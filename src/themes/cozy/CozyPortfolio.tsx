/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Coffee,
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
  Send,
  Loader2,
  Calendar,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { STYLE_DICTIONARIES } from '@/data/styleLabels';
import { driver, DriveStep } from 'driver.js';
import './cozy-driver.css';

export default function CozyPortfolio() {
  const { lang, toggleLang, dict } = useLanguage();
  const cozyText = STYLE_DICTIONARIES.cozy[lang];

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

  const startCozyTour = () => {
    const tourOverrides = cozyText.tourStepOverrides;

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
          popoverClass: 'cozy-popover',
        },
      };
    });

    const d = driver({
      animate: true,
      duration: 300,
      overlayColor: '#2B2D42',
      overlayOpacity: 0.65,
      stagePadding: 8,
      stageRadius: 10,
      progressText: dict.tourUi.progress,
      nextBtnText: dict.tourUi.next,
      prevBtnText: dict.tourUi.prev,
      doneBtnText: dict.tourUi.done,
      steps,
    });

    d.drive(0);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2B2D42] font-cozy selection:bg-[#E07A5F] selection:text-white transition-colors pb-16">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E07A5F]/15 border border-[#E07A5F]/30 flex items-center justify-center text-[#E07A5F]">
              <Coffee size={20} />
            </div>
            <div>
              <h1 className="font-bold text-base text-[#2B2D42] tracking-tight">
                {dict.identity.name}
              </h1>
              <span className="text-xs text-[#8D99AE] flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {dict.identity.roleTitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Lang switch */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F1DE] hover:bg-[#EAE6D0] border border-[#E5E0D8] text-xs font-semibold text-[#3D405B] transition-colors cursor-pointer"
            >
              <Globe size={13} className="text-[#E07A5F]" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Tour CTA */}
            <button
              id="tour-trigger-header"
              onClick={startCozyTour}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E07A5F] hover:bg-[#C86348] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Sparkles size={13} />
              <span className="hidden sm:inline">{cozyText.nav.tourBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        {/* Cozy Hero Card */}
        <section
          id="tour-hero-identity"
          className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Text column */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#8D99AE] mb-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F4F1DE] text-[#3D405B]">
                  <MapPin size={12} className="text-[#E07A5F]" />
                  {cozyText.hero.locationNote}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {cozyText.hero.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2D42] tracking-tight leading-tight mb-2">
                {dict.identity.name}
              </h2>

              <p className="text-xs font-bold uppercase tracking-wider text-[#E07A5F] mb-3">
                {dict.identity.roleTitle}
              </p>

              <p className="text-sm sm:text-base text-[#4A4E69] leading-relaxed font-normal max-w-2xl mb-5">
                {dict.identity.summary}
              </p>

              <blockquote className="border-l-4 border-[#E07A5F] pl-4 italic text-sm text-[#8D99AE] mb-6">
                {dict.identity.quote}
              </blockquote>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="tour-hero-cta"
                  onClick={startCozyTour}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E07A5F] hover:bg-[#C86348] text-white font-medium text-sm shadow-md transition-all cursor-pointer"
                >
                  <Sparkles size={16} />
                  <span>{cozyText.hero.startTour}</span>
                </button>
                <a
                  href={`mailto:${dict.identity.contacts.primaryEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F4F1DE] hover:bg-[#EAE6D0] text-[#3D405B] font-medium text-sm transition-colors"
                >
                  <Mail size={15} />
                  <span>{dict.identity.contacts.primaryEmail}</span>
                </a>
              </div>
            </div>

            {/* Workplace workspace illustration */}
            <div
              id="tour-hero-specs"
              className="lg:col-span-4 rounded-xl overflow-hidden border border-[#E5E0D8] bg-[#FDFBF7] shadow-inner relative h-64 lg:h-72"
            >
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80"
                alt="Cozy workspace"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-xs font-semibold text-[#F4F1DE]">
                  {cozyText.hero.locationNote}
                </span>
                <span className="text-[11px] text-white/80 font-medium">
                  {cozyText.hero.specsTitle} · SENA & UTP Hub
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Tabs Navigator */}
        <nav
          id="tour-nav-sections"
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#E5E0D8]"
        >
          {[
            { id: 'specialties', label: cozyText.nav.specialties, icon: Layers },
            { id: 'projects', label: cozyText.nav.projects, icon: Briefcase },
            { id: 'experience', label: cozyText.nav.timeline, icon: Calendar },
            { id: 'stack', label: cozyText.nav.stack, icon: Cpu },
            { id: 'contact', label: cozyText.nav.contact, icon: Send },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#E07A5F] text-white shadow-sm'
                    : 'bg-white hover:bg-[#F4F1DE] text-[#4A4E69] border border-[#E5E0D8]'
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* 1. SPECIALTIES VIEW */}
        {activeTab === 'specialties' && (
          <section id="tour-specialties-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#8D99AE] tracking-wider uppercase mb-1">
                {cozyText.specialties.rosterTitle}
              </span>
              {dict.specializations.map((spec) => {
                const isSelected = spec.id === activeSpec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecId(spec.id)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#E07A5F] ring-2 ring-[#E07A5F]/20 shadow-md'
                        : 'bg-white/60 hover:bg-white border-[#E5E0D8]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#E07A5F]">
                        {spec.code}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />}
                    </div>
                    <h3 className="font-bold text-sm text-[#2B2D42] mb-1">{spec.name}</h3>
                    <p className="text-xs text-[#8D99AE]">{spec.role}</p>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE4] mb-5">
                <div>
                  <span className="text-xs font-semibold text-[#E07A5F] uppercase">
                    {activeSpec.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#2B2D42] mt-1">{activeSpec.name}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#F4F1DE] flex items-center justify-center text-[#E07A5F]">
                  <Layers size={22} />
                </div>
              </div>

              <p className="text-sm text-[#4A4E69] leading-relaxed mb-6 font-normal">
                {activeSpec.bio}
              </p>

              {/* Stats Meters */}
              <div className="mb-6">
                <span className="text-xs font-bold text-[#8D99AE] uppercase tracking-wider block mb-3">
                  {cozyText.specialties.statsTitle}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeSpec.stats.map((st, sIdx) => (
                    <div key={sIdx} className="bg-[#FDFBF7] p-3.5 rounded-xl border border-[#E5E0D8]">
                      <div className="flex justify-between items-baseline text-xs mb-1.5">
                        <span className="font-semibold text-[#2B2D42]">{st.name}</span>
                        <span className="font-bold text-[#E07A5F]">{st.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#E5E0D8] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${st.value}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-[#E07A5F] to-[#81B29A] rounded-full"
                        />
                      </div>
                      <span className="text-[11px] text-[#8D99AE] block mt-1">{st.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-4 border-t border-[#F0ECE4]">
                <h4 className="text-xs font-bold text-[#3D405B] uppercase tracking-wider mb-3">
                  {cozyText.specialties.capabilitiesTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSpec.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-[#4A4E69]">
                      <CheckCircle size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. PROJECTS VIEW */}
        {activeTab === 'projects' && (
          <section id="tour-projects-container" className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#8D99AE] tracking-wider uppercase">
                  {cozyText.projects.sectionTag}
                </span>
                <h3 className="text-xl font-extrabold text-[#2B2D42]">{cozyText.projects.sectionTitle}</h3>
              </div>

              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E5E0D8]">
                {(['ALL', 'ACTIVE', 'COMPLETED'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      projectFilter === filter
                        ? 'bg-[#E07A5F] text-white'
                        : 'text-[#4A4E69] hover:bg-[#F4F1DE]'
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
                    className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F4F1DE] text-[#3D405B] text-[11px] font-bold">
                          {p.code}
                        </span>
                        <div className="flex items-center gap-2">
                          {p.isPrivate && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <Lock size={10} />
                              {dict.projects.privateBadge}
                            </span>
                          )}
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              p.status === 'ACTIVE'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-blue-50 text-blue-700'
                            }`}
                          >
                            {p.status === 'ACTIVE' ? (lang === 'es' ? 'En Producción' : 'Live / Active') : (lang === 'es' ? 'Completado' : 'Completed')}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-medium text-[#8D99AE] uppercase tracking-wider block">
                        {p.type}
                      </span>
                      <h4 className="text-lg font-bold text-[#2B2D42] mt-0.5 mb-2">{p.title}</h4>
                      <p className="text-xs text-[#4A4E69] leading-relaxed mb-4">{p.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-[#FDFBF7] border border-[#E5E0D8] text-[11px] text-[#4A4E69]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Expandable outcomes */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pt-3 border-t border-[#F0ECE4]"
                          >
                            <h5 className="text-[11px] font-bold text-[#3D405B] uppercase mb-2">
                              {cozyText.projects.outcomesTitle}
                            </h5>
                            <div className="space-y-1.5">
                              {p.outcomes.map((out, oIdx) => (
                                <div key={oIdx} className="flex items-start gap-1.5 text-xs text-[#4A4E69]">
                                  <span className="text-[#E07A5F] font-bold">›</span>
                                  <span>{out}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                      <button
                        onClick={() => setExpandedProjId(isExpanded ? null : p.id)}
                        className="text-xs font-semibold text-[#E07A5F] hover:underline cursor-pointer"
                      >
                        {isExpanded ? cozyText.projects.collapseBtn : cozyText.projects.expandBtn}
                      </button>

                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F1DE] text-[#3D405B] text-xs font-semibold hover:bg-[#EAE6D0] transition-colors"
                        >
                          <Code2 size={12} />
                          <span>{cozyText.projects.repoBtn}</span>
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

        {/* 3. EXPERIENCE TIMELINE VIEW */}
        {activeTab === 'experience' && (
          <section id="tour-timeline-container" className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-[#8D99AE] tracking-wider uppercase">
                {cozyText.timeline.sectionTag}
              </span>
              <h3 className="text-2xl font-extrabold text-[#2B2D42]">{cozyText.timeline.sectionTitle}</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[#E5E0D8] space-y-8">
              {dict.experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#E07A5F]" />

                  <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#E07A5F]">
                        {exp.period}
                      </span>
                      <span className="text-xs text-[#8D99AE] flex items-center gap-1 font-medium">
                        <MapPin size={12} />
                        {exp.geo}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#2B2D42]">{exp.role}</h4>
                    <span className="text-xs font-semibold text-[#81B29A] uppercase tracking-wide block mb-3">
                      {exp.company}
                    </span>

                    <p className="text-xs text-[#4A4E69] leading-relaxed mb-4">{exp.description}</p>

                    <div className="pt-3 border-t border-[#F0ECE4] space-y-1.5">
                      <span className="text-[11px] font-bold text-[#3D405B] uppercase tracking-wider block mb-2">
                        {cozyText.timeline.achievementsTitle}
                      </span>
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-[#4A4E69]">
                          <span className="text-[#E07A5F] font-bold">›</span>
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

        {/* 4. STACK DIAGNOSTIC VIEW */}
        {activeTab === 'stack' && (
          <section id="tour-stack-container" className="flex flex-col gap-6">
            <div className="text-center max-w-xl mx-auto mb-2">
              <span className="text-xs font-bold text-[#8D99AE] tracking-wider uppercase">
                {cozyText.stack.sectionTag}
              </span>
              <h3 className="text-2xl font-extrabold text-[#2B2D42]">{cozyText.stack.sectionTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.skillsList.map((cat) => (
                <div key={cat.id} className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4] mb-4">
                    <span className="text-xs font-bold text-[#E07A5F]">{cat.code}</span>
                    <h4 className="font-bold text-sm text-[#2B2D42]">{cat.title}</h4>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((sk, skIdx) => (
                      <div key={skIdx}>
                        <div className="flex justify-between items-baseline text-xs mb-1">
                          <span className="font-semibold text-[#2B2D42]">{sk.name}</span>
                          <span className="font-bold text-[#81B29A]">{sk.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#E5E0D8] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#E07A5F] to-[#81B29A] rounded-full"
                            style={{ width: `${sk.level}%` }}
                          />
                        </div>
                        <span className="text-[10.5px] text-[#8D99AE] block mt-0.5 leading-tight">
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

        {/* 5. CONTACT VIEW */}
        {activeTab === 'contact' && (
          <section id="tour-contact-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-bold text-[#8D99AE] uppercase tracking-wider block mb-1">
                  {cozyText.contact.sectionTag}
                </span>
                <h3 className="text-2xl font-extrabold text-[#2B2D42]">{cozyText.contact.sectionTitle}</h3>
                <p className="text-xs text-[#4A4E69] leading-relaxed mt-2">{cozyText.contact.sectionDesc}</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-[#FDFBF7] border border-[#E5E0D8]">
                  <span className="text-[11px] font-semibold text-[#8D99AE] block">Email:</span>
                  <a
                    href={`mailto:${dict.identity.contacts.primaryEmail}`}
                    className="text-xs font-bold text-[#E07A5F] hover:underline"
                  >
                    {dict.identity.contacts.primaryEmail}
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-[#FDFBF7] border border-[#E5E0D8]">
                  <span className="text-[11px] font-semibold text-[#8D99AE] block">Email Académico:</span>
                  <a
                    href={`mailto:${dict.identity.contacts.institutionalEmail}`}
                    className="text-xs font-bold text-[#3D405B] hover:underline"
                  >
                    {dict.identity.contacts.institutionalEmail}
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-[#FDFBF7] border border-[#E5E0D8]">
                  <span className="text-[11px] font-semibold text-[#8D99AE] block">WhatsApp / Teléfono:</span>
                  <a
                    href={`https://wa.me/${dict.identity.contacts.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1.5"
                  >
                    <Phone size={12} />
                    <span>{dict.identity.contacts.phoneDisplay}</span>
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-[#FDFBF7] border border-[#E5E0D8]">
                  <span className="text-[11px] font-semibold text-[#8D99AE] block">Redes Profesionales:</span>
                  <div className="flex gap-3 text-xs font-bold text-[#E07A5F] mt-1">
                    <a href={dict.identity.contacts.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub
                    </a>
                    <span>•</span>
                    <a href={dict.identity.contacts.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 shadow-sm">
              <h4 className="text-lg font-bold text-[#2B2D42] mb-1">
                {lang === 'es' ? 'Escribe un mensaje directo' : 'Send a direct message'}
              </h4>
              <p className="text-xs text-[#8D99AE] mb-5">
                {lang === 'es' ? 'Respuestas en menos de 24 horas.' : 'Replies in under 24 hours.'}
              </p>

              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={28} />
                  </div>
                  <h5 className="font-bold text-base text-[#2B2D42]">{cozyText.contact.successTitle}</h5>
                  <p className="text-xs text-[#4A4E69] max-w-sm mx-auto mt-1 mb-4">
                    {cozyText.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-4 py-2 rounded-xl bg-[#F4F1DE] hover:bg-[#EAE6D0] text-xs font-semibold text-[#3D405B] cursor-pointer"
                  >
                    {cozyText.contact.btnNew}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3D405B] mb-1">
                      {lang === 'es' ? 'Nombre o Empresa' : 'Name or Company'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={lang === 'es' ? 'Tu nombre o el de tu equipo' : 'Your name or team'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] bg-[#FDFBF7] text-xs text-[#2B2D42] focus:border-[#E07A5F] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D405B] mb-1">
                      {lang === 'es' ? 'Correo Electrónico' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu-email@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] bg-[#FDFBF7] text-xs text-[#2B2D42] focus:border-[#E07A5F] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D405B] mb-1">
                      {lang === 'es' ? 'Mensaje o Propuesta' : 'Message or Proposal'}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={lang === 'es' ? 'Cuéntame sobre el proyecto o vacante...' : 'Tell me about your project or role...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] bg-[#FDFBF7] text-xs text-[#2B2D42] focus:border-[#E07A5F] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3 rounded-xl bg-[#E07A5F] hover:bg-[#C86348] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formLoading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>{cozyText.contact.btnSending}</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>{cozyText.contact.btnSubmit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Cozy Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D99AE]">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {dict.identity.name}. {lang === 'es' ? 'Construido con React 19 y Tailwind v4' : 'Built with React 19 & Tailwind v4'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>COZY DEVELOPER LO-FI STUDIO</span>
        </div>
      </footer>
    </div>
  );
}
