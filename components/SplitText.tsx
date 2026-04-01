"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function SplitText({ text, className = "", delay = 0, stagger = 0.03 }: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, y: 50, rotateX: -80 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wi * word.length + ci) * stagger * 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block"
              style={{ transformOrigin: "bottom" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
