"use client";

import AnimatedCounter from "@/components/AnimatedCounter";

export default function StatBanner() {
  return (
    <section
      style={{
        backgroundColor: "var(--win-bg)",
        padding: "32px 16px 48px",
      }}
    >
      <div className="container-site">
        {/* Main stats window */}
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="1" fill="#4a8fd4" />
                <rect x="3" y="5" width="10" height="6" fill="#ece9d8" />
                <line x1="5" y1="7" x2="11" y2="7" stroke="#000080" strokeWidth="1" />
                <line x1="5" y1="9" x2="9" y2="9" stroke="#000080" strokeWidth="1" />
              </svg>
              <span>Earnings Report — Uncommon Division (FY 2024)</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="win-titlebar-btn">_</button>
              <button className="win-titlebar-btn">□</button>
              <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win-menubar" style={{ fontSize: "11px" }}>
            {["File", "Edit", "View", "Format", "Help"].map((m) => (
              <button
                key={m}
                className="px-2 py-0.5"
                style={{ background: "none", border: "none", fontFamily: "Tahoma, Arial, sans-serif", fontSize: "11px", cursor: "default" }}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="p-5">
            {/* Big number — sunken box */}
            <div
              className="win-sunken text-center"
              style={{ padding: "24px 16px", marginBottom: "16px" }}
            >
              <p
                style={{
                  fontFamily: "Tahoma, Arial, sans-serif",
                  fontSize: "10px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                2024 TOTAL COMMISSIONS PAID
              </p>
              <div
                className="counter-glow"
                style={{
                  fontFamily: "'VT323', 'Courier New', monospace",
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                  lineHeight: 1,
                  color: "#000080",
                }}
              >
                $<AnimatedCounter target={169} suffix="M" duration={3} />
              </div>
              <p
                style={{
                  fontFamily: "Tahoma, Arial, sans-serif",
                  fontSize: "10px",
                  color: "#666",
                  marginTop: "8px",
                }}
              >
                38 states &nbsp;&bull;&nbsp; Thousands of reps &nbsp;&bull;&nbsp; Freedom Forever&apos;s #1 sales organization
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Card 1 */}
              <div className="win-raised p-4">
                {/* Inner sunken header */}
                <div
                  className="win-sunken px-3 py-1 mb-3 text-center"
                  style={{ fontSize: "10px", fontFamily: "Tahoma, Arial, sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}
                >
                  FIRST YEAR SETTER
                </div>
                <div className="flex justify-between items-end px-2">
                  <div>
                    <p style={{ fontSize: "10px", fontFamily: "Tahoma", color: "#666", marginBottom: "2px" }}>Avg</p>
                    <p
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: "36px",
                        color: "#000080",
                        lineHeight: 1,
                      }}
                    >
                      $37,500
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "10px", fontFamily: "Tahoma", color: "#666", marginBottom: "2px" }}>Top</p>
                    <p
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: "36px",
                        color: "#800000",
                        lineHeight: 1,
                      }}
                    >
                      $100K
                    </p>
                  </div>
                </div>
                {/* Win2K progress bar for visual */}
                <div className="win-progress mt-3">
                  <div className="win-progress-bar" style={{ width: "37%" }} />
                </div>
              </div>

              {/* Card 2 */}
              <div className="win-raised p-4">
                <div
                  className="win-sunken px-3 py-1 mb-3 text-center"
                  style={{ fontSize: "10px", fontFamily: "Tahoma, Arial, sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}
                >
                  EXPERIENCED CLOSER
                </div>
                <div className="flex justify-between items-end px-2">
                  <div>
                    <p style={{ fontSize: "10px", fontFamily: "Tahoma", color: "#666", marginBottom: "2px" }}>Avg</p>
                    <p
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: "36px",
                        color: "#000080",
                        lineHeight: 1,
                      }}
                    >
                      $55,000
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "10px", fontFamily: "Tahoma", color: "#666", marginBottom: "2px" }}>Top</p>
                    <p
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: "36px",
                        color: "#800000",
                        lineHeight: 1,
                      }}
                    >
                      $350K
                    </p>
                  </div>
                </div>
                {/* Win2K progress bar for visual */}
                <div className="win-progress mt-3">
                  <div className="win-progress-bar" style={{ width: "78%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar">
            <div className="win-statusbar-panel" style={{ flex: 2 }}>Done</div>
            <div className="win-statusbar-panel" style={{ flex: 1 }}>Internet zone</div>
          </div>
        </div>
      </div>
    </section>
  );
}
