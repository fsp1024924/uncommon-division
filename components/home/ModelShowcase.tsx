"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

/* ── SVG Icons ── */
const HouseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16L16 5L28 16" />
    <path d="M7 14v12h7v-7h4v7h7V14" />
  </svg>
);

const PlaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 4L14 18" />
    <path d="M28 4L19 28L14 18L4 13L28 4Z" />
  </svg>
);

const KioskIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="4" width="22" height="16" rx="1" />
    <path d="M10 24h12" />
    <path d="M16 20v4" />
    <path d="M10 28h12" />
  </svg>
);

const models = [
  {
    number: "01",
    title: "LOCALS",
    icon: HouseIcon,
    tagline: "Year-round. Your market. Your career.",
    bullets: [
      "Sell in an assigned territory with a local team",
      "Build referrals and compound your close rate",
      "Clear path from setter to regional manager",
    ],
    stats: { left: "Year-Round", right: "Setter → Manager" },
    href: "/locals",
  },
  {
    number: "02",
    title: "X TEAM",
    icon: PlaneIcon,
    tagline: "10 days on. 20 days off. Anywhere.",
    bullets: [
      "Deploy to the hottest markets in the country",
      "Housing provided during every stretch",
      "Go home for 20 days. Your time is yours",
    ],
    stats: { left: "10 On / 20 Off", right: "Housing Included" },
    href: "/x-team",
  },
  {
    number: "03",
    title: "RETAIL",
    icon: KioskIcon,
    tagline: "Inside Lowe's and Home Depot.",
    bullets: [
      "Set appointments with warm foot traffic",
      "No doors. Consistent hours. Full training",
      "Commission on every deal that closes",
    ],
    stats: { left: "In-Store", right: "No Exp. Required" },
    href: "/retail",
  },
];

export default function ModelShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="models" className="py-28 md:py-40" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container-site">
        <Reveal className="text-center mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-5 font-medium" style={{ color: "#DC2626" }}>
            THE MODELS
          </p>
          <h2 className="font-bebas text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Choose Your Path.
          </h2>
        </Reveal>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={m.href}
                  className="group block h-full border border-[#1a1a1a] relative overflow-hidden transition-all duration-500 hover:border-[#DC2626]/40"
                  style={{ backgroundColor: "#0d0d0d" }}
                >
                  {/* Top red accent that expands on hover */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#DC2626] group-hover:w-full transition-all duration-700" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.05) 0%, transparent 70%)" }}
                  />

                  {/* Card content */}
                  <div className="relative p-8 md:p-9 flex flex-col h-full">
                    {/* Icon + Number row */}
                    <div className="flex items-start justify-between mb-7">
                      <div className="text-[#DC2626] opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon />
                      </div>
                      <span className="text-[10px] tracking-[0.3em] font-medium" style={{ color: "#333" }}>
                        {m.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bebas text-3xl md:text-[2.2rem] text-white tracking-wider mb-3 group-hover:text-[#DC2626] transition-colors duration-500">
                      {m.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[15px] font-medium text-white/70 mb-6">
                      {m.tagline}
                    </p>

                    {/* Bullet points */}
                    <div className="space-y-3 mb-8 flex-1">
                      {m.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-3">
                          <div className="w-[3px] h-[3px] rounded-full bg-[#DC2626] mt-2 flex-shrink-0 opacity-40" />
                          <p className="text-[13px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                            {b}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full mb-6" style={{ backgroundColor: "#1a1a1a" }} />

                    {/* Stats row */}
                    <div className="flex justify-between items-center mb-7">
                      <div>
                        <p className="text-[9px] tracking-[0.2em] uppercase mb-1 font-medium" style={{ color: "#444" }}>Schedule</p>
                        <p className="text-[13px] font-semibold text-white/80">{m.stats.left}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] tracking-[0.2em] uppercase mb-1 font-medium" style={{ color: "#444" }}>Path</p>
                        <p className="text-[13px] font-semibold text-white/80">{m.stats.right}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[#DC2626] group-hover:gap-5 transition-all duration-300">
                      LEARN MORE
                      <span className="inline-block w-5 h-[1px] bg-[#DC2626] group-hover:w-8 transition-all duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
