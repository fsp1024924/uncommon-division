"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

const rolePoints = [
  "Year-round, full-time position in your market.",
  "Setter or closer roles based on your experience.",
  "Assigned region with local team and manager support.",
  "Build familiarity, referrals, and momentum over time.",
  "Same training, tools, and commission structure as top earners.",
];

const thrivePoints = [
  "You want to build something in one place, not chase markets.",
  "You have roots. Family, a lease, a life you want to keep.",
  "You're competitive and want to own your region.",
  "You want a clear path: setter to closer to lead to manager.",
  "You've thrived in high-rejection environments before.",
];

const steps = [
  { title: "SETTER", desc: "Learn the pitch. Set appointments." },
  { title: "CLOSER", desc: "Run your deals. Full commission." },
  { title: "TEAM LEAD", desc: "Lead a squad. Earn overrides." },
  { title: "REGIONAL MGR", desc: "Own a market. Build your org." },
];

export default function LocalsContent() {
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
            LOCALS
          </motion.p>
          <h1 className="font-bebas text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            <SplitText text="Plant Your Flag." delay={0.5} />
            <br />
            <SplitText text="Build Your Market." delay={1.0} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="text-base max-w-lg mx-auto font-light" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>
            This isn&apos;t a summer gig. It&apos;s a career. Sell year-round in your territory. Build relationships, referrals, and a reputation.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* The Role */}
      <section className="py-28 md:py-36 px-6">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>THE ROLE</p>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>What You&apos;ll Do.</h2>
            </Reveal>
          </div>
          <div className="space-y-5">
            {rolePoints.map((p, i) => (
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
      <section className="py-28 md:py-36 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>IS THIS YOU?</p>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Built for Locals If...</h2>
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

      {/* Career Path */}
      <section className="py-28 md:py-36 px-6">
        <div className="container-site">
          <Reveal className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>THE PATH</p>
            <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>No Ambiguity. Just Performance.</h2>
          </Reveal>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-4 gap-0 relative">
            <Reveal className="absolute top-8 left-0 right-0">
              <div className="h-[1px] bg-gradient-to-r from-[#DC2626] via-[#DC2626] to-[#DC2626]/20" />
            </Reveal>
            {steps.map((s, i) => (
              <Reveal key={i} delay={0.1 + i * 0.12}>
                <div className="relative text-center">
                  <div className="w-4 h-4 bg-[#DC2626] rounded-full mx-auto mb-6 relative z-10 ring-4 ring-[#0a0a0a]" />
                  <p className="font-bebas text-xl tracking-wider text-white mb-2">{s.title}</p>
                  <p className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.35)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-8 border-l border-[#DC2626]/30 pl-8 ml-3">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[2.35rem] top-1 w-3 h-3 bg-[#DC2626] rounded-full ring-4 ring-[#0a0a0a]" />
                  <p className="font-bebas text-xl tracking-wider text-white mb-1">{s.title}</p>
                  <p className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.35)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} className="mt-12">
            <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
              Every regional manager started as a rep. Performance-based, not tenure-based.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 text-center" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site">
          <Reveal>
            <h2 className="font-bebas text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Ready to Build Something?</h2>
            <p className="text-[14px] font-light mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              Apply and talk to a team leader in your area.
            </p>
            <Link href="/apply" className="btn-primary">APPLY FOR LOCALS</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
