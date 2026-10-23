/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const coordsRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide standard cursor on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      return;
    }

    document.documentElement.style.cursor = "none";
    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (coordsRef.current) coordsRef.current.textContent = `X: ${e.clientX} / Y: ${e.clientY}`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      setHovered(Boolean((e.target as Element).closest("button, a, .interactive")));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer reticle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          animate={{
            width: hovered ? 44 : 28,
            height: hovered ? 44 : 28,
            borderColor: hovered ? "#FF0055" : "#00F0FF",
            rotate: hovered ? 90 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-full border border-dashed flex items-center justify-center"
        >
          {/* Inner reticle element */}
          {hovered && (
            <div className="absolute w-2 h-2 rounded-full bg-[#FF0055]" />
          )}
          {/* Corner tick lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-[#00F0FF]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-[#00F0FF]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-[#00F0FF]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-[#00F0FF]" />
        </motion.div>
      </motion.div>

      {/* Trailing dot & Coordinates info HUD */}
      {!hovered && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block"
          style={{
            x: cursorX,
            y: cursorY,
            transform: "translate(18px, 12px)",
          }}
        >
          <div
            ref={coordsRef}
            className="bg-black/80 font-mono text-[9px] text-[#00F0FF]/80 px-1 border border-[#00F0FF]/25 leading-none py-0.5 rounded backdrop-blur-xs whitespace-nowrap"
          >
            X: 0 / Y: 0
          </div>
        </motion.div>
      )}
    </>
  );
}
