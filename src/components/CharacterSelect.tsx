/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SPECIALIZATIONS } from "../data";
import { Specialization } from "../types";
import { Shield, Sparkles, Cpu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CharacterSelect() {
  const [selectedSpecId, setSelectedSpecId] = useState(SPECIALIZATIONS[0].id);

  const activeSpec = SPECIALIZATIONS.find((s) => s.id === selectedSpecId) || SPECIALIZATIONS[0];

  // Render a highly styled animated SVG abstract blueprint matching the specialty
  const renderAvatar = (avatarId: string) => {
    switch (avatarId) {
      case "architect":
        return (
          <svg className="w-full h-full max-h-[220px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="100%" stopColor="#005577" />
              </linearGradient>
            </defs>
            {/* Background circular grids */}
            <circle cx="100" cy="100" r="80" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="55" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1" />
            
            {/* Modular rotating geometric boxes (Isometric modular architecture simulation) */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            >
              {/* Outer floating anchors */}
              <rect x="94" y="10" width="12" height="12" stroke="#00F0FF" strokeWidth="1.5" fill="#08090C" />
              <rect x="94" y="178" width="12" height="12" stroke="#00F0FF" strokeWidth="1.5" fill="#08090C" />
              <rect x="10" y="94" width="12" height="12" stroke="#00F0FF" strokeWidth="1.5" fill="#08090C" />
              <rect x="178" y="94" width="12" height="12" stroke="#00F0FF" strokeWidth="1.5" fill="#08090C" />
              
              {/* Connected lines */}
              <line x1="100" y1="22" x2="100" y2="178" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
              <line x1="22" y1="100" x2="178" y2="100" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
            </motion.g>

            {/* Inner dynamic core */}
            <motion.g
              animate={{ scale: [0.95, 1.05, 0.95], rotate: -360 }}
              transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
              style={{ transformOrigin: "100px 100px" }}
            >
              {/* Floating tech nodes */}
              <polygon points="100,50 143,75 143,125 100,150 57,125 57,75" stroke="url(#cyanGlow)" strokeWidth="2" fill="rgba(0, 240, 255, 0.03)" />
              <polygon points="100,65 130,82 130,118 100,135 70,118 70,82" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
              
              <circle cx="100" cy="50" r="4" fill="#00F0FF" />
              <circle cx="143" cy="75" r="4" fill="#00F0FF" />
              <circle cx="143" cy="125" r="4" fill="#00F0FF" />
              <circle cx="100" cy="150" r="4" fill="#FF0055" />
              <circle cx="57" cy="125" r="4" fill="#00F0FF" />
              <circle cx="57" cy="75" r="4" fill="#00F0FF" />
            </motion.g>

            {/* Central glowing indicator */}
            <circle cx="100" cy="100" r="10" fill="#00F0FF" className="animate-pulse" />
            <text x="100" y="104" fontClassName="text-mono" fontSize="10" fill="#12141C" textAnchor="middle" fontWeight="bold">01</text>
          </svg>
        );
      case "motion":
        return (
          <svg className="w-full h-full max-h-[220px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="crimsonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF0055" />
                <stop offset="100%" stopColor="#550022" />
              </linearGradient>
            </defs>
            {/* Background sound wave grid references */}
            <line x1="20" y1="50" x2="180" y2="50" stroke="rgba(255, 0, 85, 0.08)" strokeWidth="1" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255, 0, 85, 0.12)" strokeWidth="1" />
            <line x1="20" y1="150" x2="180" y2="150" stroke="rgba(255, 0, 85, 0.08)" strokeWidth="1" />
            
            {/* Pulse rings */}
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              stroke="#FF0055"
              strokeWidth="1.5"
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              stroke="#00F0FF"
              strokeWidth="1"
              animate={{ scale: [1, 2.4], opacity: [0.4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
            />

            {/* Sinusoidal curves symbolizing motion physics */}
            <motion.path
              d="M20,100 Q40,40 60,100 T100,100 T140,100 T180,100"
              stroke="url(#crimsonGlow)"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{
                d: [
                  "M20,100 Q40,40 60,100 T100,100 T140,100 T180,100",
                  "M20,100 Q40,160 60,100 T100,100 T140,100 T180,100",
                  "M20,100 Q40,40 60,100 T100,100 T140,100 T180,100"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M20,100 Q40,140 60,100 T100,100 T140,100 T180,100"
              stroke="rgba(0, 240, 255, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              animate={{
                d: [
                  "M20,100 Q40,140 60,100 T100,100 T140,100 T180,100",
                  "M20,100 Q40,60 60,100 T100,100 T140,100 T180,100",
                  "M20,100 Q40,140 60,100 T100,100 T140,100 T180,100"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Pulsing center nodes */}
            <circle cx="100" cy="100" r="16" fill="#12141C" stroke="#FF0055" strokeWidth="2" />
            <circle cx="100" cy="100" r="6" fill="#FF0055" />
            <circle cx="140" cy="100" r="4" fill="#00F0FF" />
            <circle cx="60" cy="100" r="4" fill="#00F0FF" />
            <text x="100" y="130" fontClassName="text-mono" fontSize="9" fill="#FF0055" textAnchor="middle" fontWeight="bold">FPS: 60+</text>
          </svg>
        );
      case "performance":
        return (
          <svg className="w-full h-full max-h-[220px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#775500" />
              </linearGradient>
            </defs>
            {/* Speed radar dials (circular diagnostic shards) */}
            <circle cx="100" cy="100" r="80" stroke="rgba(255, 215, 0, 0.08)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="30 15 5 15" />
            
            <motion.circle
              cx="100"
              cy="100"
              r="45"
              stroke="#FFA500"
              strokeWidth="2"
              strokeDasharray="210 70"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
            
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            >
              {/* Radar scanner sweep line */}
              <line x1="100" y1="100" x2="100" y2="20" stroke="url(#amberGlow)" strokeWidth="1.5" />
              <polygon points="100,20 104,26 96,26" fill="#FFD700" />
            </motion.g>

            {/* Core computer speed metrics representation */}
            <rect x="75" y="85" width="50" height="30" fill="#08090C" stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1" rx="2" />
            <text x="100" y="103" fontClassName="text-mono" fontSize="11" fill="#FFD700" textAnchor="middle" fontWeight="bold">99.8%</text>
            <text x="100" y="125" fontClassName="text-mono" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle">LATENCY: OK</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-4">
      
      {/* LEFT COLUMN: Character/Specialty Roster Cards */}
      <div className="lg:col-span-4 flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
          <span className="font-mono text-[10px] text-white/40 tracking-widest">ROSTER DE ESPECIALISTA</span>
          <span className="font-mono text-[9px] text-[#00F0FF]/80 bg-[#00F0FF]/10 px-1.5 py-0.5 rounded-xs">SELECT_ROLE</span>
        </div>

        {SPECIALIZATIONS.map((spec) => {
          const isSelected = spec.id === selectedSpecId;
          return (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecId(spec.id)}
              className={`text-left relative p-4 rounded-sm border transition-all duration-300 overflow-hidden group flex flex-col gap-2 ${
                isSelected
                  ? "bg-[#12141C] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.1)] ring-1 ring-[#00F0FF]/30"
                  : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {/* Highlight Overlay on Selection */}
              {isSelected && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00F0FF]/10 to-transparent pointer-events-none rounded-bl-full" />
              )}
              
              {/* Top Row with ID Code and indicator */}
              <div className="flex items-center justify-between pointer-events-none">
                <span className={`font-mono text-xs font-bold leading-none ${isSelected ? "text-[#00F0FF]" : "text-white/40"}`}>
                  [{spec.code}]
                </span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" : "bg-white/10 group-hover:bg-white/40"} transition-colors`} />
              </div>

              {/* Title & Role */}
              <div className="pointer-events-none mt-1">
                <h3 className={`font-sans text-sm font-bold tracking-wide ${isSelected ? "text-white" : "text-white/70"}`}>
                  {spec.name}
                </h3>
                <p className="font-mono text-[9px] text-white/40 tracking-wider uppercase mt-0.5">
                  {spec.role}
                </p>
              </div>

              {/* Custom micro statistics summary */}
              <div className="grid grid-cols-2 gap-x-2 mt-2 pt-2 border-t border-white/5 pointer-events-none">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[8px] text-white/30">SKILLS:</span>
                  <span className="font-mono text-[9px] text-white/60 font-medium">90% // COG</span>
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span className="font-mono text-[8px] text-white/30">STATUS:</span>
                  <span className="font-mono text-[8px] text-[#00F0FF] font-medium tracking-wide">COMPATIBLE</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* RIGHT COLUMN: Bento-grid view of Selected Character / Specialty */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSpecId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            {/* 1. BLUEPRINT VECTOR ARCHITECTURE (MD: Span 5) */}
            <div className="md:col-span-5 bg-[#12141C]/85 border border-white/10 rounded-sm p-4 flex flex-col justify-between relative overflow-hidden group">
              <span className="font-mono text-[9px] text-white/30 absolute top-3 left-4 tracking-widest uppercase">
                VECTOR_RADAR // BLUEPRINT
              </span>
              <div className="absolute top-3 right-4 font-mono text-[9px] text-[#00F0FF]">
                REF: 0x{activeSpec.code}A9
              </div>

              <div className="py-6 flex items-center justify-center p-4">
                {renderAvatar(activeSpec.avatarId)}
              </div>

              {/* Stats overview banner */}
              <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-sm bg-white/5 text-white/40">
                    <Layers size={12} />
                  </span>
                  <span className="font-mono text-[9px] text-white/50 tracking-wider">ROLE INTEGRATION</span>
                </div>
                <span className="font-mono text-[10px] text-[#00F0FF] font-semibold">STABLE_COGNITIVE</span>
              </div>
            </div>

            {/* 2. DESCRIPTION & BRAND BIO (MD: Span 7) */}
            <div className="md:col-span-7 bg-[#12141C]/85 border border-white/10 rounded-sm p-5 flex flex-col justify-between relative">
              <span className="font-mono text-[9px] text-white/30 absolute top-3 left-5 tracking-widest uppercase">
                PROFILE // BIOGRAFÍA CORE
              </span>

              <div className="pt-4 flex-1">
                <h4 className="font-mono text-xs text-[#00F0FF]/80 font-bold uppercase tracking-widest">
                  [{activeSpec.code}] // FRONTEND PERSONA
                </h4>
                <h2 className="font-sans text-xl md:text-2xl font-black text-white tracking-wide mt-1">
                  {activeSpec.name}
                </h2>
                <p className="font-sans text-xs text-white/80 leading-relaxed mt-4 bg-white/[0.02] border border-white/5 p-3 rounded-xs font-light">
                  {activeSpec.bio}
                </p>
              </div>

              {/* Technologies chip lists */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase block mb-2">EQUIPAMIENTO / STACK DIRECTO</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSpec.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[9px] px-2 py-0.5 border border-white/5 rounded-xs bg-[#08090C] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. CORE TACTICAL STATS (MD: Span 6) */}
            <div className="md:col-span-6 bg-[#12141C]/85 border border-white/10 rounded-sm p-4 relative">
              <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase block mb-4">
                PARÁMETROS CAPACIDAD // STATS
              </span>

              <div className="flex flex-col gap-4">
                {activeSpec.stats.map((st, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-sans text-xs font-semibold text-white/80">{st.name}</span>
                      <span className="font-mono text-xs text-[#00F0FF] font-bold">{st.value}%</span>
                    </div>
                    {/* Visual Meter */}
                    <div className="h-2 w-full bg-white/5 rounded-sm overflow-hidden p-[1px] border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${st.value}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FF0055] rounded-xs shadow-[0_0_5px_rgba(0,240,255,0.5)]"
                      />
                    </div>
                    <span className="font-mono text-[8px] text-white/30 block mt-0.5">{st.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. KEY CAPABILITIES (MD: Span 6) */}
            <div className="md:col-span-6 bg-[#12141C]/85 border border-white/10 rounded-sm p-4 relative flex flex-col justify-between">
              <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase block mb-3">
                HABILIDADES ACTIVAS // SKILLS LOG
              </span>

              <div className="flex flex-col gap-3.5 flex-1 justify-center pt-2">
                {activeSpec.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="p-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] shrink-0 mt-0.5">
                      <Shield size={11} />
                    </span>
                    <span className="font-sans text-xs text-white/70 leading-relaxed font-light">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status footer for stats */}
              <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between text-mono text-[9px]">
                <span className="text-white/40 uppercase">EVALUATION METRIC</span>
                <span className="text-[#FF0055]/90 flex items-center gap-1.5">
                  <Sparkles size={11} className="animate-spin text-[#FF0055]" />
                  A-CLASS SYSTEM
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
