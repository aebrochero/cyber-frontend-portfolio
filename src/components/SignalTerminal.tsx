/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from "react";
import { Send, Terminal, Loader2, CheckCircle, Radio } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SignalTerminal() {
  const [status, setStatus] = useState<"IDLE" | "COMPILING" | "CONNECTING" | "TRANSMITTED">("IDLE");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("COMPILING");
    setTerminalLogs([
      "» Iniciando túnel de comunicación segura...",
      "» Encriptando paquetes en formato AES-256...",
      "» Analizando metadata de sesión...",
    ]);

    // Simulate terminal actions chain
    timers.current.push(setTimeout(() => {
      setStatus("CONNECTING");
      setTerminalLogs((prev) => [
        ...prev,
        "» Compilación completa. Paquete de señal listo.",
        "» Buscando puertos disponibles: [LATAM-BOG-01]...",
        "» Frecuencia establecida en 433.92 MHz.",
        "» Transmitiendo ráfaga de datos...",
      ]);
    }, 1200));

    timers.current.push(setTimeout(() => {
      setStatus("TRANSMITTED");
      setTerminalLogs((prev) => [
        ...prev,
        "» TRANSMISIÓN EXITOSA // SIGNAL RECEIVED.",
        "» Código de respuesta local: 250 OK SECURE.",
        "» Andrés recibirá la señal en sus terminales locales.",
      ]);
    }, 2800));
  };

  const resetTerminal = () => {
    setStatus("IDLE");
    setTerminalLogs([]);
  };

  return (
    <div id="tour-contact-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
      
      {/* Left Details Grid (MD: Span 5) */}
      <div className="lg:col-span-5 bg-[#12141C]/85 border border-white/10 rounded-sm p-5 flex flex-col justify-between relative overflow-hidden">
        <div>
          <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase block mb-3">
            LINK_STATUS // CHANNELS
          </span>
          <h2 className="font-sans text-xl font-black text-white tracking-wide">
            ESTABLECER CANAL DE COMUNICACIÓN <span className="text-[#FF0055]">_</span>
          </h2>
          <p className="font-sans text-xs text-white/70 leading-relaxed font-light mt-3 bg-white/[0.01] p-3 border border-white/5 rounded-xs">
            Inicia un enlace directo hacia la frecuencia local del desarrollador. Introduce tus parámetros de señal debajo para encender el transmisor.
          </p>

          {/* Contact Details listed as a terminal parameters */}
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex flex-col gap-0.5 bg-white/[0.01] p-2.5 border border-white/5 rounded-xs">
              <span className="font-mono text-[8px] text-white/30">NÚCLEO_EMAIL:</span>
              <a href="mailto:andresaws9401@gmail.com" className="font-mono text-xs text-[#00F0FF] hover:underline hover:text-[#FF0055]">
                andresaws9401@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col gap-0.5 bg-white/[0.01] p-2.5 border border-white/5 rounded-xs">
              <span className="font-mono text-[8px] text-white/30">NODO_UBICACIÓN:</span>
              <span className="font-mono text-xs text-white/80">Bogotá D.C., Colombia // UTC-05</span>
            </div>

            <div className="flex flex-col gap-0.5 bg-white/[0.01] p-2.5 border border-white/5 rounded-xs">
              <span className="font-mono text-[8px] text-white/30">REDES_ANALOGÍAS:</span>
              <div className="flex items-center gap-3 mt-1.5 font-mono text-[10px] text-[#00F0FF]">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#FF0055] hover:underline">
                  GITHUB // G_HUB
                </a>
                <span className="text-white/20">|</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FF0055] hover:underline">
                  LINKEDIN // L_NKD
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 mt-6 font-mono text-[9px] text-[#FF0055]/80 flex items-center gap-1.5 font-medium">
          <Radio size={12} className="animate-pulse text-[#FF0055]" />
          <span>FIRM: SECURE_COMMS_SOCKET</span>
        </div>
      </div>

      {/* Right Terminal Form (MD: Span 7) */}
      <div className="lg:col-span-7 bg-[#0E1017] border border-[#00F0FF]/25 shadow-[0_0_20px_rgba(0,240,255,0.02)] rounded-sm p-5 md:p-6 relative flex flex-col justify-between min-h-[400px]">
        {/* Terminal frame border detail */}
        <span className="font-mono text-[9px] text-[#00F0FF]/50 absolute top-3 left-6 tracking-widest uppercase flex items-center gap-1.5">
          <Terminal size={11} />
          SECURE SHELL COMMS TERMINAL
        </span>
        <span className="absolute top-3 right-6 font-mono text-[8px] text-white/25">PORT: 433</span>

        <div className="pt-6 flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {status !== "TRANSMITTED" ? (
              <motion.form
                key="terminal-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleTerminalSubmit}
                className="flex flex-col gap-4 mt-2"
              >
                {/* 1. Name input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[9.5px] text-white/50 uppercase tracking-widest">
                    [1] DEPARTAMENTO / NOMBRE_CODENAME:
                  </label>
                  <div className="relative flex items-center">
                    <span className="font-mono text-xs text-[#00F0FF] absolute left-3">❯</span>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. INGENIERO_ALFA"
                      disabled={status !== "IDLE"}
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border border-white/10 focus:border-[#00F0FF] outline-none text-white font-mono text-xs py-2.5 pl-7 pr-3 rounded-xs tracking-wider transition-all"
                      required
                    />
                  </div>
                </div>

                {/* 2. Email input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[9.5px] text-white/50 uppercase tracking-widest">
                    [2] FRECUENCIA / CORREO_ENLACE:
                  </label>
                  <div className="relative flex items-center">
                    <span className="font-mono text-xs text-[#00F0FF] absolute left-3">❯</span>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="andres@frecuencia.com"
                      disabled={status !== "IDLE"}
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border border-white/10 focus:border-[#00F0FF] outline-none text-white font-mono text-xs py-2.5 pl-7 pr-3 rounded-xs tracking-wider transition-all"
                      required
                    />
                  </div>
                </div>

                {/* 3. Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[9.5px] text-white/50 uppercase tracking-widest">
                    [3] PAQUETE_DATOS / TRANSMISIÓN_MENSAJE:
                  </label>
                  <div className="relative flex items-start">
                    <span className="font-mono text-xs text-[#00F0FF] absolute left-3 top-2.5">❯</span>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Escribe tu propuesta o saludo..."
                      disabled={status !== "IDLE"}
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border border-white/10 focus:border-[#00F0FF] outline-none text-white font-mono text-xs py-2.5 pl-7 pr-3 rounded-xs tracking-wider transition-all resize-none min-h-[90px]"
                      required
                    />
                  </div>
                </div>

                {/* Compiler Submit button */}
                <button
                  type="submit"
                  disabled={status !== "IDLE"}
                  className="interactive mt-2 font-mono text-xs text-black font-extrabold tracking-widest bg-gradient-to-r from-[#00F0FF] to-[#00AFFF] hover:from-[#FF0055] hover:to-[#CF003C] hover:text-white transition-all duration-300 py-3 rounded-xs uppercase shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_15px_rgba(255,0,85,0.25)] flex items-center justify-center gap-2 cursor-pointer w-full"
                >
                  {status === "COMPILING" || status === "CONNECTING" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      COMPILANDO_SEÑAL...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      TRANSMITIR_SEÑAL // SEND_NOW
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="terminal-success"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center p-6 bg-[#0E1017]/50 rounded-sm"
              >
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mb-4 text-emerald-400">
                  <CheckCircle size={26} className="animate-pulse" />
                </div>
                <h3 className="font-sans text-[#00F0FF] text-lg font-black tracking-wide uppercase">
                  SEÑAL DE COMUNICACIÓN ABIERTA
                </h3>
                <p className="font-sans text-xs text-white/80 leading-relaxed max-w-xs mt-2 font-light">
                  Tu mensaje ha sido cifrado de forma cuántica y enviado al servidor de Andrés. Él volverá a establecer contacto en menos de 24 ciclos localmente.
                </p>

                <button
                  onClick={resetTerminal}
                  className="interactive mt-6 font-mono text-[9px] tracking-widest border border-white/10 hover:border-[#00F0FF] text-white/60 hover:text-[#00F0FF] bg-[#12141C] py-2 px-5 rounded-xs uppercase transition-all duration-300 cursor-pointer"
                >
                  TRANSMITIR_NUEVA_SEÑAL
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Terminal Real Time Compilation Logs output */}
          {(terminalLogs.length > 0 || status !== "IDLE") && (
            <div className="border-t border-white/5 pt-3.5 mt-5 font-mono text-[9.5px] text-white/50 text-left bg-black/40 p-3.5 rounded-sm flex flex-col gap-1.5 overflow-y-auto max-h-[140px] leading-tight select-none">
              <span className="text-[#00F0FF]">SYSTEM@ANDRES:~/COMMS_LOG</span>
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="flex gap-1">
                  <span className={log.startsWith("» ERROR") ? "text-[#FF0055]" : log.includes("TRANS") ? "text-emerald-400" : "text-white/70"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
