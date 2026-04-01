"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import SplitText from "@/components/SplitText";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f77d21c9d6e158faeca5b_culture-photos-p-2000.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/70 to-[#0a0a0a]" />
      </div>

      {/* Ambient glow */}
      <div className="hero-glow" />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 container-site w-full text-center"
      >
        {/* Red accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-[#DC2626] mx-auto mb-10"
        />

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[11px] tracking-[0.5em] uppercase mb-12 font-medium"
          style={{ color: "#C8A951" }}
        >
          UNCOMMON DIVISION
        </motion.p>

        {/* Main headline */}
        <h1 className="font-bebas text-white leading-[0.92] mb-10"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          <SplitText text="Three Ways to Earn" delay={0.6} />
          <br />
          <span className="text-[#DC2626]">
            <SplitText text="Six Figures" delay={1.1} />
          </span>
          <SplitText text=" in Solar." delay={1.5} />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-base md:text-lg mx-auto mb-14 font-light max-w-lg"
          style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}
        >
          Most companies give you one path. We built three.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/apply" className="btn-primary">
            APPLY NOW
          </Link>
          <Link href="#models" className="btn-outline">
            EXPLORE MODELS
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-16 text-[11px] tracking-[0.3em] uppercase font-medium"
        >
          $169M+ paid in 2024 &nbsp;·&nbsp; 38 states &nbsp;·&nbsp; #1 sales organization
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
            <rect x="1" y="1" width="18" height="28" rx="9" />
            <motion.circle cx="10" cy="10" r="2" fill="rgba(220,38,38,0.6)" animate={{ cy: [8, 18, 8] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          </svg>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />
    </section>
  );
}
