"use client";

import Link from "next/link";

export default function BottomCTA() {
  return (
    <section
      style={{ backgroundColor: "var(--win-bg)", padding: "0 16px 48px" }}
    >
      <div className="container-site">
        {/* Modal-style dialog box */}
        <div
          className="win-window"
          style={{ maxWidth: "520px", margin: "0 auto" }}
        >
          {/* Title bar */}
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="#FFD700" stroke="#cc9900" />
                <text x="5" y="12" fill="#800000" fontSize="10" fontFamily="Tahoma" fontWeight="900">?</text>
              </svg>
              <span>Which Model Is Right for You?</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="win-titlebar-btn">_</button>
              <button className="win-titlebar-btn">□</button>
              <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
            </div>
          </div>

          <div className="p-5">
            {/* Icon + message row — classic Win2K dialog layout */}
            <div className="flex gap-4 mb-5">
              {/* Large question-mark icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#1761c7" stroke="#000080" strokeWidth="2" />
                  <text x="14" y="35" fill="white" fontSize="32" fontFamily="'VT323', monospace" fontWeight="700">?</text>
                </svg>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "26px",
                    color: "#000080",
                    lineHeight: 1.1,
                    marginBottom: "8px",
                  }}
                >
                  NOT SURE WHICH MODEL IS RIGHT FOR YOU?
                </p>
                <div
                  className="win-sunken p-3"
                  style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: "11px", lineHeight: "1.6", color: "#333" }}
                >
                  Schedule a free 15-minute call with a team leader who&apos;s done the job.
                  Real answers, no pitch.
                </div>
              </div>
            </div>

            {/* Separator */}
            <div style={{ height: "2px", borderTop: "1px solid #808080", borderBottom: "1px solid white", marginBottom: "14px" }} />

            {/* Button row — classic dialog style */}
            <div className="flex justify-center gap-3">
              <Link href="/apply" className="btn-primary" style={{ minWidth: "140px", fontSize: "11px" }}>
                Schedule a Free Call
              </Link>
              <button className="btn-outline" style={{ minWidth: "80px" }}>
                Cancel
              </button>
              <button className="btn-outline" style={{ minWidth: "60px" }}>
                Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
