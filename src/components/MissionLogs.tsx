/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ExternalLink, CheckCircle, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data';

export default function MissionLogs() {
  const { dict } = useLanguage();
  const [filter, setFilter] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterOptions = [
    { id: 'ALL', label: dict.projects.filterAll },
    { id: 'ACTIVE', label: dict.projects.filterActive },
    { id: 'COMPLETED', label: dict.projects.filterCompleted },
  ];

  const filteredProjects = dict.projectsList.filter((p) => {
    if (filter === 'ALL') return true;
    return p.status === filter;
  });

  const securityStyles: Record<string, string> = {
    CLASSIFIED: 'text-[#FF0055] bg-[#FF0055]/10 border-[#FF0055]/30 animate-pulse',
    LEVEL_3: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    LEVEL_2: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    PUBLIC: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/20',
  };
  const defaultSecurityStyle = 'text-white/50 bg-white/5 border-white/10';

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'ACTIVE':
        return dict.projects.statusActive;
      case 'COMPLETED':
        return dict.projects.statusCompleted;
      case 'MAINTENANCE':
        return dict.projects.statusMaintenance;
    }
  };

  return (
    <div id="tour-projects-container" className="flex flex-col gap-6 mt-4">
      {/* Search and Filters Hub */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/5 pb-4 gap-3">
        <div>
          <span className="font-mono text-[10px] text-white/40 tracking-widest">{dict.projects.tag}</span>
          <h2 className="font-sans text-lg font-black text-white tracking-wide">
            {dict.projects.title} <span className="text-[#00F0FF]">_</span>
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-1 bg-white/[0.02] border border-white/5 p-1 rounded-sm">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`font-mono text-[9px] tracking-widest px-3 py-1 rounded-xs transition-all duration-200 uppercase cursor-pointer ${
                filter === opt.id
                  ? 'bg-[#00F0FF]/15 text-white border-b border-[#00F0FF] font-medium'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((proj, idx) => {
          const isExpanded = expandedId === proj.id;
          return (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`relative bg-[#12141C]/85 border transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.06)]'
                  : 'border-white/5 hover:border-white/15'
              }`}
            >
              <div className="p-5 flex-1">
                {/* ID and Status/Security Bar */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xs font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded-xs">
                    [{proj.code}]
                  </span>

                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[8px] tracking-wider px-2 py-0.5 border rounded-xs ${
                        securityStyles[proj.securityLevel] ?? defaultSecurityStyle
                      }`}
                    >
                      {proj.securityLevel}
                    </span>

                    <span className="flex items-center gap-1.5 font-mono text-[9px] text-white/55">
                      {proj.status === 'ACTIVE' ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] absolute" />
                          <span className="text-[#00F0FF]">{getStatusLabel(proj.status)}</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-emerald-400">{getStatusLabel(proj.status)}</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Project Header details */}
                <div className="mb-2">
                  <span className="font-mono text-[9px] text-white/30 tracking-wider block uppercase">
                    {proj.type}
                  </span>
                  <h3 className="font-sans text-base font-black tracking-wide text-white mt-0.5">
                    {proj.title}
                  </h3>
                </div>

                {/* Project description */}
                <p className="font-sans text-xs text-white/70 leading-relaxed font-light mt-2.5">
                  {proj.description}
                </p>

                {/* Technology nodes */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[8px] px-1.5 py-0.5 border border-white/5 bg-white/[0.01] rounded-xs text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded Details Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/5 flex flex-col gap-3">
                        <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
                          {dict.projects.outcomesTitle}
                        </span>

                        <div className="flex flex-col gap-2.5">
                          {proj.outcomes.map((out, oIdx) => (
                            <div
                              key={oIdx}
                              className="flex gap-2 items-start bg-white/[0.01] p-2 border border-white/5 rounded-xs"
                            >
                              <span className="p-0.5 rounded text-emerald-400 mt-0.5 shrink-0">
                                <CheckCircle size={12} />
                              </span>
                              <span className="font-sans text-[11px] text-white/80 leading-relaxed font-light">
                                {out}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card expandable actions footer */}
              <div className="px-5 py-3.5 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(proj.id)}
                  className="font-mono text-[9px] text-white/50 hover:text-white flex items-center gap-1 hover:underline transition-all cursor-pointer"
                >
                  {isExpanded ? dict.projects.collapseBtn : dict.projects.expandBtn}
                </button>

                <div className="flex items-center gap-2">
                  {proj.isPrivate && (
                    <span className="font-mono text-[8px] text-amber-400/80 flex items-center gap-1">
                      <Lock size={10} />
                      {dict.projects.privateBadge}
                    </span>
                  )}
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#00F0FF] hover:text-[#FF0055] transition-all p-1 hover:bg-white/5 rounded-sm inline-flex items-center gap-1 font-mono text-[9px]"
                      title="GitHub Repository"
                    >
                      <span>REPO</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
