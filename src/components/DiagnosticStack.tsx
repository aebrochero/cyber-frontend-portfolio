/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

export default function DiagnosticStack() {
  const { dict } = useLanguage();
  const [selectedCatId, setSelectedCatId] = useState<string>('ALL');

  const filteredCategories = dict.skillsList.filter(
    (c) => selectedCatId === 'ALL' || c.id === selectedCatId
  );

  return (
    <div id="tour-stack-container" className="flex flex-col gap-6 mt-4">
      {/* Diagnostics Header & Category Filter Buttons */}
      <div className="border-b border-white/5 pb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div>
          <span className="font-mono text-[10px] text-white/40 tracking-widest">{dict.stack.tag}</span>
          <h2 className="font-sans text-lg font-black text-white tracking-wide">
            {dict.stack.title} <span className="text-[#00F0FF]">_</span>
          </h2>
        </div>

        {/* Category toggles */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/[0.01] border border-white/5 p-1 rounded-sm">
          <button
            onClick={() => setSelectedCatId('ALL')}
            className={`font-mono text-[9px] tracking-widest px-3 py-1 rounded-xs transition-all uppercase cursor-pointer ${
              selectedCatId === 'ALL'
                ? 'bg-[#00F0FF]/15 text-white border-b border-[#00F0FF] font-medium'
                : 'text-white/40 hover:text-white'
            }`}
          >
            {dict.stack.filterAll}
          </button>

          {dict.skillsList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`font-mono text-[9px] tracking-widest px-3 py-1 rounded-xs transition-all uppercase cursor-pointer ${
                selectedCatId === cat.id
                  ? 'bg-[#00F0FF]/15 text-white border-b border-[#00F0FF] font-medium'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              [ {cat.code} ]
            </button>
          ))}
        </div>
      </div>

      {/* Grid listing Categorized Panels */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Side: System Diagnostic summary metrics */}
        <div className="md:col-span-4 bg-[#12141C]/85 border border-white/10 rounded-sm p-4 relative flex flex-col justify-between">
          <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase block mb-4">
            {dict.stack.coreAnalysis}
          </span>

          <div className="flex-1 flex flex-col justify-center py-6">
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="4" fill="none" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#00F0FF"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 - (251.2 * 96) / 100 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-sans text-xl font-extrabold text-white">96%</span>
                <span className="font-mono text-[8px] text-white/40 uppercase">{dict.stack.coreLoad}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <div className="flex justify-between items-center font-mono text-[10px] bg-white/[0.02] px-2.5 py-1.5 border border-white/5 rounded-xs">
                <span className="text-white/40">{dict.stack.complianceLabel}</span>
                <span className="text-emerald-400 font-semibold uppercase">WCAG 2.2 AA/AAA</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] bg-white/[0.02] px-2.5 py-1.5 border border-white/5 rounded-xs">
                <span className="text-white/40">{dict.stack.renderSpeedLabel}</span>
                <span className="text-[#00F0FF] font-semibold uppercase">60 FPS // 16MS</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] bg-white/[0.02] px-2.5 py-1.5 border border-white/5 rounded-xs">
                <span className="text-white/40">{dict.stack.typesCoverageLabel}</span>
                <span className="text-white font-semibold uppercase">100% STRICT TS</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-3 mt-4 text-[9px] font-mono text-white/30 flex items-center gap-1.5">
            <Cpu size={12} className="text-[#FF0055]" />
            <span>{dict.stack.specFooter}</span>
          </div>
        </div>

        {/* Right Side: Skill Categories Content lists */}
        <div className="md:col-span-8 flex flex-col gap-5">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="bg-[#12141C]/85 border border-white/10 rounded-sm p-5 relative">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                <span className="font-mono text-[10px] text-[#00F0FF] font-extrabold tracking-wider">
                  [{cat.code}] // {cat.title}
                </span>
                <span className="font-mono text-[8.5px] text-white/30">{dict.stack.syncLevel}</span>
              </div>

              <div className="flex flex-col gap-4">
                {cat.skills.map((sk, skIdx) => (
                  <div key={skIdx} className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                    <div className="sm:col-span-5">
                      <h4 className="font-sans text-xs font-bold text-white tracking-wide">{sk.name}</h4>
                      <p className="font-mono text-[9.5px] text-white/40 font-light mt-0.5 leading-tight">
                        {sk.description}
                      </p>
                    </div>

                    <div className="sm:col-span-5 flex items-center gap-3">
                      <div className="h-1.5 flex-1 bg-white/5 rounded-xs overflow-hidden border border-white/5 p-[0.5px]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${sk.level}%` }}
                          transition={{ duration: 1.2, delay: skIdx * 0.05 }}
                          className={`h-full rounded-xs shadow-[0_0_5px_rgba(255,0,85,0.4)] ${
                            sk.level > 94
                              ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF0055]'
                              : 'bg-[#00F0FF]'
                          }`}
                        />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-white w-8 text-right">
                        {sk.level}%
                      </span>
                    </div>

                    <div className="sm:col-span-2 flex justify-end">
                      <span
                        className={`font-mono text-[8px] tracking-wider px-2 py-0.5 rounded-xs border select-none ${
                          sk.status === 'OPTIMIZED'
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 font-semibold'
                            : sk.status === 'UPGRADING'
                            ? 'bg-[#FF0055]/10 border-[#FF0055]/20 text-[#FF0055] font-semibold'
                            : 'bg-white/5 border-white/10 text-white/50'
                        }`}
                      >
                        {sk.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
