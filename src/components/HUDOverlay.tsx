/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";

interface HUDOverlayProps {
  children: ReactNode;
}

export default function HUDOverlay({ children }: HUDOverlayProps) {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-white font-sans overflow-x-hidden selection:bg-[#FF0055] selection:text-white pb-12 transition-colors duration-500">
      
      {/* 1. Fine background Grid Gridlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255, 255, 255) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255, 255, 255) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. Abstract Ambient Shimmer (Glowing backgrounds) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Cyan source top-left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00F0FF]/5 rounded-full blur-[120px]" />
        {/* Crimson source bottom-right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF0055]/5 rounded-full blur-[120px]" />
      </div>

      {/* 3. Outer Frame & Lines with Corner Marks (`+`) */}
      <div className="absolute inset-0 pointer-events-none z-10 border border-white/5 m-3 md:m-6">
        {/* Custom Corner Plus Symbols */}
        <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#00F0FF]/40 leading-none select-none">+</span>
        <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#00F0FF]/40 leading-none select-none">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#00F0FF]/40 leading-none select-none">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#00F0FF]/40 leading-none select-none">+</span>

        {/* Dynamic Scanline laser simulation */}
        <motion.div 
          initial={{ y: "0%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/25 to-transparent shadow-[0_0_8px_rgba(0,240,255,0.4)]"
        />
      </div>

      {/* 4. Active Main App Container */}
      <div className="relative z-20 min-h-screen px-4 md:px-8 py-4 flex flex-col max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
