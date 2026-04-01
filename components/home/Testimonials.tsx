"use client";

import Reveal from "@/components/Reveal";

const videos = [
  { id: "XUWTrsj6Acw", name: "Logan Berger" },
  { id: "u73b7c8ZRF0", name: "Brock Denison" },
  { id: "xsH_s2VILE4", name: "Owen Anderson" },
  { id: "QADw2KXofTc", name: "Christian Harrison" },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-40" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-site">
        <Reveal className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-5 font-medium" style={{ color: "#DC2626" }}>
            SUCCESS STORIES
          </p>
          <h2 className="font-bebas text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Hear It From the Reps.
          </h2>
          <p className="text-[15px] font-light mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
            Real reps. Real earnings. No scripts.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.1}>
              <div>
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&controls=1&autoplay=0&mute=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={v.name}
                    loading="lazy"
                  />
                </div>
                <p className="text-[11px] tracking-[0.15em] uppercase mt-3 font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {v.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
