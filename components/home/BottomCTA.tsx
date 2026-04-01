"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BottomCTA() {
  return (
    <section className="py-32 md:py-44" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="red-line mb-20" />

      <div className="container-site text-center">
        <Reveal>
          <h2 className="font-bebas text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Not Sure Which Model<br />Is Right for You?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[15px] font-light mb-14 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.85 }}>
            Schedule a free 15-minute call with a team leader who&apos;s done the job. Real answers, no pitch.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Link href="/apply" className="btn-primary">
            SCHEDULE A FREE CALL
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
