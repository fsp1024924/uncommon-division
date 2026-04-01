"use client";

const videos = [
  { id: "XUWTrsj6Acw", name: "Logan Berger" },
  { id: "u73b7c8ZRF0", name: "Brock Denison" },
  { id: "xsH_s2VILE4", name: "Owen Anderson" },
  { id: "QADw2KXofTc", name: "Christian Harrison" },
];

export default function Testimonials() {
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
                <rect x="1" y="2" width="14" height="12" rx="1" fill="#1761c7" />
                <circle cx="4" cy="8" r="2" fill="white" />
                <rect x="8" y="6" width="6" height="1.5" fill="white" />
                <rect x="8" y="9" width="4" height="1.5" fill="white" />
              </svg>
              <span>Success Stories — Real Reps. Real Earnings.</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="win-titlebar-btn">_</button>
              <button className="win-titlebar-btn">□</button>
              <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
            </div>
          </div>

          {/* Menu */}
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
            {/* Info bar */}
            <div
              className="win-sunken px-3 py-2 mb-4 flex items-center gap-2"
              style={{ fontSize: "11px", fontFamily: "Tahoma, Arial, sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="#1761c7" stroke="#000080" />
                <text x="6" y="12" fill="white" fontSize="11" fontFamily="Tahoma" fontWeight="700">i</text>
              </svg>
              <span>
                <strong>4 videos found.</strong> These are real representatives sharing their results. No scripts.
              </span>
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {videos.map((v) => (
                <div key={v.id} className="win-raised">
                  {/* Mini title bar per video */}
                  <div
                    style={{
                      background: "linear-gradient(90deg, #000080 0%, #1761c7 100%)",
                      padding: "3px 6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="14" height="14" fill="#1761c7" stroke="white" strokeWidth="1" />
                      <polygon points="6,4 12,8 6,12" fill="white" />
                    </svg>
                    <span
                      style={{
                        fontFamily: "Tahoma, Arial, sans-serif",
                        fontSize: "10px",
                        color: "white",
                        fontWeight: 700,
                      }}
                    >
                      {v.name} — Testimonial
                    </span>
                  </div>

                  {/* Video embed */}
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&controls=1&autoplay=0&mute=0`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={v.name}
                      loading="lazy"
                    />
                  </div>

                  {/* Status bar */}
                  <div className="win-statusbar" style={{ fontSize: "10px" }}>
                    <div className="win-statusbar-panel">{v.name}</div>
                    <div className="win-statusbar-panel">YouTube</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-panel" style={{ flex: 2 }}>4 items</div>
            <div className="win-statusbar-panel" style={{ flex: 1 }}>Internet zone</div>
          </div>
        </div>
      </div>
    </section>
  );
}
