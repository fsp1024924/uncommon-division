"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 200, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200, mass: 0.5 });

  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, label');
      setHovering(!!isClickable);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", checkHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== "undefined" && isTouchDevice.current) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: "50%",
          border: `1px solid ${hovering ? "rgba(220,38,38,0.5)" : "rgba(220,38,38,0.2)"}`,
          opacity: visible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          borderRadius: "50%",
          backgroundColor: "#DC2626",
          opacity: visible ? 0.8 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.3s",
        }}
      />
    </>
  );
}
