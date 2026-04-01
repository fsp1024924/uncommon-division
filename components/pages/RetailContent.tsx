"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

const rolePoints = [
  "Work inside Lowe's and Home Depot locations in your market.",
  "Engage homeowners already in a home improvement mindset.",
  "Set solar consultations routed to Locals and X Team closers.",
  "Commission on every appointment that converts to a closed deal.",
  "Consistent schedule. No 8pm door knocks. No weather days.",
];

const thrivePoints = [
  "You're new to solar and want to learn without the deep end.",
  "You're a strong communicator. You like people and it shows.",
  "You want structure: fixed location, fixed hours, fixed team.",
  "You want to earn on performance without full D2D exposure.",
  "You're building toward a closer role and want to learn the pipeline.",
];

const steps = [
  { title: "RETAIL SETTER", desc: "Generate appointments in store." },
  { title: "FIELD SETTER", desc: "Expand to door-to-door." },
  { title: "CLOSER", desc: "Run in-home presentations." },
  { title: "TEAM LEAD", desc: "Train and manage setters." },
];

export default function RetailContent() {
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
            RETAIL
          </motion.p>
          <h1 className="font-bebas text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            <SplitText text="No Doors. No Cold Starts." delay={0.5} />
            <br />
            <SplitText text="Just Conversations." delay={1.1} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="text-base max-w-lg mx-auto font-light" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>
            You generate the appointment. Our closing teams handle the rest. You earn on every deal that closes.
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
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>What a Retail Setter Does.</h2>
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

      {/* Partnership */}
      <section className="py-28 md:py-36 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site">
          <Reveal className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>THE PLATFORM</p>
            <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Where You&apos;ll Work.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "LOWE'S", desc: "Hundreds of locations. High homeowner foot traffic. Trusted brand environment." },
              { name: "HOME DEPOT", desc: "One of the most trafficked home improvement retailers in the U.S. Prime setting for solar conversations." },
            ].map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <div className="border border-[#1a1a1a] p-8 md:p-10 group hover:border-[#DC2626]/30 transition-all duration-500" style={{ backgroundColor: "#111" }}>
                  <div className="h-[2px] bg-[#DC2626] mb-8 w-8 group-hover:w-full transition-all duration-500" />
                  <p className="font-bebas text-3xl text-white tracking-wider mb-4">{p.name}</p>
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8">
            <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.2)" }}>
              The lowest-friction entry into solar sales, and one of the most scalable setter roles in the industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who Thrives */}
      <section className="py-28 md:py-36 px-6">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>IS THIS YOU?</p>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Built for Retail If...</h2>
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

      {/* Growth Path */}
      <section className="py-28 md:py-36 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site">
          <Reveal className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: "#DC2626" }}>GROWTH PATH</p>
            <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Retail Is a Launchpad. Not a Ceiling.</h2>
          </Reveal>

          <div className="hidden md:grid grid-cols-4 gap-0 relative">
            <Reveal className="absolute top-8 left-0 right-0">
              <div className="h-[1px] bg-gradient-to-r from-[#DC2626] via-[#DC2626] to-[#DC2626]/20" />
            </Reveal>
            {steps.map((s, i) => (
              <Reveal key={i} delay={0.1 + i * 0.12}>
                <div className="relative text-center">
                  <div className="w-4 h-4 bg-[#DC2626] rounded-full mx-auto mb-6 relative z-10 ring-4 ring-[#0d0d0d]" />
                  <p className="font-bebas text-xl tracking-wider text-white mb-2">{s.title}</p>
                  <p className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.35)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:hidden space-y-8 border-l border-[#DC2626]/30 pl-8 ml-3">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[2.35rem] top-1 w-3 h-3 bg-[#DC2626] rounded-full ring-4 ring-[#0d0d0d]" />
                  <p className="font-bebas text-xl tracking-wider text-white mb-1">{s.title}</p>
                  <p className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.35)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 text-center">
        <div className="container-site">
          <Reveal>
            <h2 className="font-bebas text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Ready to Get Started?</h2>
            <p className="text-[14px] font-light mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              Apply and get connected with a team leader near you.
            </p>
            <Link href="/apply" className="btn-primary">APPLY FOR RETAIL</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
