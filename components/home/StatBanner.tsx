"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

export default function StatBanner() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="red-line" />

      <div className="container-site text-center py-20 md:py-28">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase mb-8 font-medium" style={{ color: "#DC2626" }}>
            2024 COMMISSIONS PAID
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="font-bebas leading-none counter-glow" style={{ color: "#C8A951", fontSize: "clamp(5rem, 14vw, 12rem)" }}>
            $<AnimatedCounter target={169} suffix="M" duration={3} />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm font-light mt-8 tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
            38 states &nbsp;·&nbsp; Thousands of reps &nbsp;·&nbsp; Freedom Forever&apos;s #1 sales organization
          </p>
        </Reveal>

        {/* Earnings breakdown */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="border border-[#1a1a1a] p-8 text-center" style={{ backgroundColor: "#0d0d0d" }}>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
                FIRST YEAR SETTER
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Avg</p>
                  <p className="font-bebas text-3xl text-white">$37,500</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>High</p>
                  <p className="font-bebas text-3xl" style={{ color: "#C8A951" }}>$100K</p>
                </div>
              </div>
            </div>

            <div className="border border-[#1a1a1a] p-8 text-center" style={{ backgroundColor: "#0d0d0d" }}>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
                EXPERIENCED CLOSER
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Avg</p>
                  <p className="font-bebas text-3xl text-white">$55,000</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>High</p>
                  <p className="font-bebas text-3xl" style={{ color: "#C8A951" }}>$350K</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="red-line" />
    </section>
  );
}
