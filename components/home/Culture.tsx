"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const cultureVideos = [
  { id: "3QTp1udDph8", title: "Infinite Cruise 2025" },
  { id: "8uI8dD_fqBk", title: "Hawaii Ziplines" },
  { id: "81yH-IAU7os", title: "Become a Legend" },
];

export default function Culture() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineW = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Ghost text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: "18vw", color: "rgba(220,38,38,0.025)", lineHeight: 1 }}
      >
        UNCOMMON
      </div>

      <div className="container-site relative z-10">
        <motion.div className="h-[1px] bg-[#DC2626] mb-16" style={{ width: lineW }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-5 font-medium" style={{ color: "#DC2626" }}>
                THE CULTURE
              </p>
              <h2 className="font-bebas text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}>
                This Is Not a<br />Low-Pressure Environment.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[15px] font-light mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                High accountability. High support. High reward. You&apos;ll always know
                exactly where you stand and what it takes to move up.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-l-2 border-[#DC2626] pl-6 py-2">
                <p className="font-bebas text-xl md:text-2xl text-white tracking-wider">
                  &ldquo;Hit your numbers, you earn. Exceed them, you travel.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden border border-[#1a1a1a]">
              <Image
                src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f77d21c9d6e158faeca5b_culture-photos-p-2000.jpg"
                alt="Uncommon Division team culture and travel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="text-[11px] tracking-[0.4em] uppercase mb-8 font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
            CULTURE &amp; TRIPS
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cultureVideos.map((v, i) => (
            <Reveal key={v.id} delay={0.1 + i * 0.08}>
              <div>
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&controls=1&autoplay=0&mute=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={v.title}
                    loading="lazy"
                  />
                </div>
                <p className="text-[11px] tracking-[0.15em] uppercase mt-3 font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {v.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
