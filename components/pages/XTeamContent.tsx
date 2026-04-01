"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

const howItWorks = [
  "Deploy to a high-demand market for 10 consecutive selling days.",
  "Housing assistance provided during your deployment window.",
  "Return home or travel for 20 days. Your time is yours.",
  "Repeat with a new market or return to a proven one.",
  "Live anywhere in the country. We recruit and deploy nationally.",
];

const thrivePoints = [
  "You want intensity over routine. Compressed windows, real time off.",
  "You're not tied to one place and you don't want to be.",
  "You're a high-output closer who goes where the pipeline is hottest.",
  "Former athlete, military vet, or someone who runs on structure.",
  "You want full-time earnings on 10-day stretches.",
];

const uncommonHandles = [
  "Market selection and deployment scheduling",
  "Housing during active selling windows",
  "Team structure and manager support in each market",
  "Leads, tools, and training",
];

export default function XTeamContent() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.7], [0, -80]);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="hero-glow" />
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 container-site w-full text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.2 }} className="h-[1px] bg-[#DC2626] mx-auto mb-8" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: "#C8A951" }}>
            X TEAM
          </motion.p>
          <h1 className="font-bebas text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            <SplitText text="Live Anywhere." delay={0.5} />
            <br />
            <SplitText text="Earn Everywhere." delay={1.0} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="text-base max-w-lg mx-auto font-light" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>
            10 days of intensity. 20 days of freedom. No market fatigue. No long-term lease in someone else&apos;s city.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* The Cycle */}
      <section className="py-28 md:py-36 px-6">
        <div className="container-site">
          <Reveal className="text-center mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>THE CYCLE</p>
            <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>10 On. 20 Off. Repeat.</h2>
          </Reveal>

          <div className="flex flex-col md:flex-row items-stretch gap-5 max-w-3xl mx-auto">
            <Reveal delay={0.1} className="flex-1">
              <div className="py-14 text-center border border-[#DC2626]/30 bg-[#DC2626]/[0.03] h-full flex flex-col justify-center">
                <p className="font-bebas text-[#DC2626] mb-2" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>10</p>
                <p className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>DAYS IN THE FIELD</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="w-[1px] h-4 md:w-4 md:h-auto bg-[#222] self-center mx-auto" />
            </Reveal>

            <Reveal delay={0.2} className="flex-1">
              <div className="py-14 text-center border border-[#1a1a1a] bg-[#0d0d0d] h-full flex flex-col justify-center">
                <p className="font-bebas mb-2" style={{ color: "#C8A951", fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>20</p>
                <p className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>DAYS YOUR TIME</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="text-center mt-8">
            <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.2)" }}>
              Cycle repeats. You decide how many stretches to run per year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 md:py-36 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>HOW IT WORKS</p>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>The Mechanics.</h2>
            </Reveal>
          </div>
          <div className="space-y-5">
            {howItWorks.map((p, i) => (
              <Reveal key={i} delay={i * 0.06} x={15} y={0}>
                <div className="flex items-start gap-4 group">
                  <div className="w-[2px] h-5 mt-1.5 bg-[#DC2626] opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who Thrives */}
      <section className="py-28 md:py-36 px-6">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>IS THIS YOU?</p>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Built for X If...</h2>
            </Reveal>
          </div>
          <div className="space-y-5">
            {thrivePoints.map((p, i) => (
              <Reveal key={i} delay={i * 0.06} x={15} y={0}>
                <div className="flex items-start gap-4 group">
                  <div className="w-[2px] h-5 mt-1.5 bg-[#C8A951] opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-28 md:py-36 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site">
          <Reveal className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>DIVISION OF LABOR</p>
            <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>What We Handle. What You Handle.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.1}>
              <div className="border border-[#1a1a1a] p-8 md:p-10 h-full" style={{ backgroundColor: "#111" }}>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: "#555" }}>UNCOMMON HANDLES</p>
                <div className="space-y-4">
                  {uncommonHandles.map((item, i) => (
                    <p key={i} className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border border-[#DC2626]/20 p-8 md:p-10 h-full flex flex-col justify-center bg-[#DC2626]/[0.02]">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: "#DC2626" }}>YOU HANDLE</p>
                <p className="font-bebas text-3xl md:text-4xl text-white tracking-wider">Showing up ready to sell.</p>
                <p className="text-xs font-light mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                  That&apos;s it. We handle infrastructure. You handle performance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 text-center">
        <div className="container-site">
          <Reveal>
            <h2 className="font-bebas text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Think You&apos;re Built for This?</h2>
            <p className="text-[14px] font-light mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              Apply and talk to a rep who&apos;s done it. Real answers about the stretches.
            </p>
            <Link href="/apply" className="btn-primary">APPLY FOR X TEAM</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
