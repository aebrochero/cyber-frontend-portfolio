/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EXPERIENCE_TIMELINE } from "../data";
import { Briefcase, MapPin, Calendar, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function MemoryCores() {
  return (
    <div id="tour-timeline-container" className="flex flex-col gap-6 mt-4 max-w-4xl mx-auto w-full">
      
      {/* Timeline Header */}
      <div className="border-b border-white/5 pb-4 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <span className="font-mono text-[10px] text-white/40 tracking-widest">CRONOLOGÍA PROFESIONAL // EXPERIENCIA</span>
          <h2 className="font-sans text-lg font-black text-white tracking-wide">
            REGISTRO DE MEMORIA MESH <span className="text-[#FF0055]">_</span>
          </h2>
        </div>
        <div className="font-mono text-[9px] text-white/30 flex items-center gap-1.5 self-start md:self-auto">
          <Terminal size={11} className="text-[#FF0055]" />
          <span>SYS_REGISTRY // VERIFICATION: SUCCESS</span>
        </div>
      </div>

      {/* Vertical Spine Layout */}
      <div className="relative pl-6 md:pl-12 border-l border-white/10 flex flex-col gap-8 py-4 select-none">
        {EXPERIENCE_TIMELINE.map((exp, idx) => {
          const isActive = exp.nodeStatus === "ACTIVE";
          const isStable = exp.nodeStatus === "STABLE";

          return (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={exp.id}
              className="relative group"
            >
              {/* Timeline Connector Dot on Spinal line */}
              <div className="absolute left-[-31px] md:left-[-55px] top-1.5 z-10 flex items-center justify-center">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center bg-[#08090C] transition-all duration-300 ${
                    isActive
                      ? "border-[#00F0FF] scale-125 shadow-[0_0_8px_#00F0FF]"
                      : isStable
                      ? "border-emerald-500 scale-105"
                      : "border-white/20"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                  )}
                </div>
              </div>

              {/* Box Content Card */}
              <div className="relative bg-[#12141C]/85 border border-white/5 hover:border-white/15 p-5 md:p-6 rounded-sm transition-all duration-300">
                {/* Background decorative layout codes */}
                <span className="absolute right-4 top-4 font-mono text-[8.5px] text-white/15 tracking-wider font-light">
                  ADDR: {exp.geo}
                </span>

                {/* Date / Location Row */}
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 font-mono text-[10px] text-white/40 mb-3 uppercase">
                  <div className="flex items-center gap-1">
                    <Calendar size={11} className="text-[#00F0FF]" />
                    <span className="text-white/60 font-semibold">{exp.period}</span>
                  </div>
                  <span>/</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-[#FF0055]" />
                    <span>{exp.geo}</span>
                  </div>
                  <span>/</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#00F0FF]" : "bg-white/25"}`} />
                    <span className={isActive ? "text-[#00F0FF]" : ""}>
                      {isActive ? "NODO_ACTIVO" : "NODO_ARCHIVADO"}
                    </span>
                  </div>
                </div>

                {/* Company Name & Role */}
                <div className="mb-4">
                  <h3 className="font-sans text-base md:text-lg font-black text-white leading-tight">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs text-[#00F0FF] uppercase mt-0.5 font-semibold tracking-wider">
                    {exp.company}
                  </p>
                </div>

                {/* Description text */}
                <p className="font-sans text-xs text-white/80 leading-relaxed font-light mb-4">
                  {exp.description}
                </p>

                {/* Key achievements split lists */}
                <div className="border-t border-white/5 pt-4">
                  <span className="font-mono text-[8.5px] text-white/30 tracking-widest uppercase block mb-2.5">
                    MÉTRICAS CLAVE Y LOGROS // RUNTIME_OUTCOMES
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex gap-2 items-start">
                        <span className="font-mono text-[10px] text-[#FF0055] font-bold mt-0.5">»</span>
                        <span className="font-sans text-xs text-white/70 leading-relaxed font-light">
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
