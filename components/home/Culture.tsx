"use client";

import Image from "next/image";

const cultureVideos = [
  { id: "3QTp1udDph8", title: "Infinite Cruise 2025" },
  { id: "8uI8dD_fqBk", title: "Hawaii Ziplines" },
  { id: "81yH-IAU7os", title: "Become a Legend" },
];

export default function Culture() {
  return (
    <section
      style={{ backgroundColor: "var(--win-bg)", padding: "0 16px 48px" }}
    >
      <div className="container-site">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="14" height="14" rx="2" fill="#800000" />
                <text x="3" y="12" fill="white" fontSize="10" fontFamily="Tahoma" fontWeight="700">UD</text>
              </svg>
              <span>The Culture — Uncommon Division</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="win-titlebar-btn">_</button>
              <button className="win-titlebar-btn">□</button>
              <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="win-menubar">
            {["File", "Edit", "View", "Help"].map((m) => (
              <button
                key={m}
                style={{ background: "none", border: "none", fontFamily: "Tahoma, Arial, sans-serif", fontSize: "11px", cursor: "default", padding: "2px 8px" }}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="p-4">
            {/* Top: text + image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {/* Left: Text content */}
              <div className="flex flex-col gap-3">
                {/* Section header */}
                <div
                  className="win-sunken px-3 py-2"
                  style={{ fontFamily: "Tahoma", fontSize: "10px", color: "#666", letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  THE CULTURE
                </div>
                <p
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "32px",
                    color: "#000080",
                    lineHeight: 1.1,
                  }}
                >
                  THIS IS NOT A LOW-PRESSURE ENVIRONMENT.
                </p>
                <div
                  className="win-sunken p-3"
                  style={{ fontFamily: "Tahoma", fontSize: "11px", lineHeight: "1.6", color: "#333" }}
                >
                  <p>
                    High accountability. High support. High reward. You&apos;ll always know
                    exactly where you stand and what it takes to move up.
                  </p>
                </div>

                {/* Callout box — styled like a Win2K message box */}
                <div
                  className="win-raised p-3"
                  style={{ borderLeft: "3px solid #000080" }}
                >
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                      <rect x="1" y="1" width="14" height="14" rx="2" fill="#FFD700" stroke="#cc9900" />
                      <text x="5" y="12" fill="#800000" fontSize="11" fontFamily="Tahoma" fontWeight="900">!</text>
                    </svg>
                    <p
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: "18px",
                        color: "#000080",
                        lineHeight: 1.3,
                      }}
                    >
                      &ldquo;Hit your numbers, you earn. Exceed them, you travel.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="win-raised" style={{ padding: "3px" }}>
                <div
                  className="win-titlebar"
                  style={{
                    fontSize: "10px",
                    padding: "2px 5px",
                    marginBottom: "3px",
                    background: "linear-gradient(90deg, #800000 0%, #cc3333 100%)",
                  }}
                >
                  <span>team-photo.jpg — Paint</span>
                  <div className="flex gap-1">
                    <button className="win-titlebar-btn" style={{ width: "12px", height: "10px", fontSize: "8px" }}>_</button>
                    <button className="win-titlebar-btn" style={{ width: "12px", height: "10px", fontSize: "8px", fontWeight: 900, color: "#c00" }}>×</button>
                  </div>
                </div>
                <div className="win-sunken relative" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <Image
                    src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f77d21c9d6e158faeca5b_culture-photos-p-2000.jpg"
                    alt="Uncommon Division team culture and travel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div style={{ height: "2px", borderTop: "1px solid #808080", borderBottom: "1px solid white", marginBottom: "16px" }} />

            {/* Videos sub-section */}
            <div
              className="win-sunken px-3 py-1 mb-3 flex items-center gap-2"
              style={{ fontSize: "10px", fontFamily: "Tahoma", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              CULTURE &amp; TRIPS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {cultureVideos.map((v) => (
                <div key={v.id} className="win-raised">
                  <div
                    style={{
                      background: "linear-gradient(90deg, #800000 0%, #cc3333 100%)",
                      padding: "3px 6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="14" height="14" fill="#800000" stroke="white" strokeWidth="1" />
                      <polygon points="6,4 12,8 6,12" fill="white" />
                    </svg>
                    <span style={{ fontFamily: "Tahoma", fontSize: "10px", color: "white", fontWeight: 700 }}>
                      {v.title}
                    </span>
                  </div>
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&controls=1&autoplay=0&mute=0`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={v.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="win-statusbar" style={{ fontSize: "10px" }}>
                    <div className="win-statusbar-panel">{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-panel" style={{ flex: 2 }}>3 videos</div>
            <div className="win-statusbar-panel" style={{ flex: 1 }}>Internet zone</div>
          </div>
        </div>
      </div>
    </section>
  );
}
