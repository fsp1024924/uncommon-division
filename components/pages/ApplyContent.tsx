"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "@/components/SplitText";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

const modelOptions = [
  "Locals: Year-round, in-market selling",
  "X Team: 10 days on, 20 days off, travel-based",
  "Retail: Inside Lowe's and Home Depot",
  "Not sure yet. I want to learn more",
];

const salesBg = [
  "Door-to-door / field sales",
  "In-home sales",
  "Retail sales",
  "Phone / inside sales",
  "Solar (previous experience)",
  "Other sales",
  "No sales experience",
];

const referralSources = [
  "Indeed", "LinkedIn", "ZipRecruiter", "Google",
  "Instagram / Facebook", "Friend or current rep", "Other",
];

const inputClass = "w-full bg-[#111] border border-[#222] text-white text-[14px] px-4 py-3.5 transition-all duration-300 placeholder:text-[#444] font-light";
const labelClass = "block text-[11px] tracking-[0.15em] uppercase mb-2.5 font-medium";

export default function ApplyContent() {
  const [submitted, setSubmitted] = useState(false);
  const [model, setModel] = useState("");
  const [backgrounds, setBackgrounds] = useState<string[]>([]);
  const [available, setAvailable] = useState("");

  const toggleBg = (val: string) => {
    setBackgrounds((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden">
        <div className="hero-glow" style={{ opacity: 0.5 }} />
        <div className="relative z-10 container-site text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.2 }} className="h-[1px] bg-[#DC2626] mx-auto mb-8" />
          <h1 className="font-bebas text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <SplitText text="Let's See If You're a Fit." delay={0.4} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5 }} className="text-[14px] font-light max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
            Fill out the form below. A team lead will reach out within 24 hours. No pitch, just a real conversation.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-28 md:pb-36 px-6">
        <div className="container-site" style={{ maxWidth: 680 }}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="border border-[#1a1a1a] p-8 md:p-12"
                style={{ backgroundColor: "#0d0d0d" }}
              >
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>First Name *</label>
                    <input type="text" required className={inputClass} placeholder="John" />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>Last Name *</label>
                    <input type="text" required className={inputClass} placeholder="Smith" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>Email *</label>
                    <input type="email" required className={inputClass} placeholder="john@email.com" />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>Phone *</label>
                    <input type="tel" required className={inputClass} placeholder="(555) 555-5555" />
                  </div>
                </div>

                {/* State */}
                <div className="mb-5">
                  <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>State *</label>
                  <select required className={inputClass} defaultValue="">
                    <option value="" disabled>Select your state</option>
                    {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="red-line my-10" />

                {/* Model */}
                <div className="mb-8">
                  <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>Which model interests you? *</label>
                  <div className="space-y-3 mt-3">
                    {modelOptions.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="model" value={opt} required checked={model === opt} onChange={() => setModel(opt)} className="w-4 h-4 flex-shrink-0" />
                        <span className="text-[13px] font-light group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sales bg */}
                <div className="mb-8">
                  <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>
                    Sales background * <span className="normal-case tracking-normal font-light">(select all that apply)</span>
                  </label>
                  <div className="space-y-3 mt-3">
                    {salesBg.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" checked={backgrounds.includes(opt)} onChange={() => toggleBg(opt)} className="w-4 h-4 flex-shrink-0" />
                        <span className="text-[13px] font-light group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Available */}
                <div className="mb-8">
                  <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>Available to start within 30 days? *</label>
                  <div className="flex gap-6 mt-3">
                    {["Yes", "No", "Not sure"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="available" value={opt} required checked={available === opt} onChange={() => setAvailable(opt)} className="w-4 h-4" />
                        <span className="text-[13px] font-light group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="red-line my-10" />

                {/* Referral */}
                <div className="mb-5">
                  <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>How did you find us?</label>
                  <select className={inputClass} defaultValue="">
                    <option value="">Optional</option>
                    {referralSources.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Anything else */}
                <div className="mb-10">
                  <label className={labelClass} style={{ color: "rgba(255,255,255,0.45)" }}>Anything else?</label>
                  <textarea className={`${inputClass} min-h-[100px] resize-none`} placeholder="Optional. Tell us anything you think we should know." />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-center">
                  SUBMIT APPLICATION
                </button>

                {/* Disclaimer */}
                <p className="text-[10px] font-light mt-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.2)" }}>
                  This opportunity isn&apos;t for everyone. We work in a high-accountability, performance-driven
                  environment. If you&apos;re looking for a low-pressure, salaried role, this isn&apos;t the right fit.
                  If you&apos;re ready to outwork the room and earn accordingly, apply.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="border border-[#1a1a1a] p-12 md:p-16 text-center"
                style={{ backgroundColor: "#0d0d0d" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-8 border-2 border-[#DC2626] rounded-full flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </motion.div>
                <h2 className="font-bebas tracking-wider mb-4" style={{ color: "#C8A951", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  You&apos;re In the Queue.
                </h2>
                <p className="text-[14px] font-light max-w-md mx-auto mb-2" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                  We received your application. A team leader will reach out within 24 hours to schedule your intro call.
                </p>
                <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Check your email and keep your phone nearby.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
