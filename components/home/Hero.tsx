"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d.length >= 3 ? "." : d + ".")), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "90px",
        paddingBottom: "40px",
        backgroundColor: "var(--win-bg)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23008080'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Desktop icons on the "desktop" */}
      <div className="absolute top-24 left-6 hidden md:flex flex-col gap-6">
        {[
          { label: "My Earnings", icon: "💰" },
          { label: "Recycle Bin", icon: "🗑️" },
          { label: "Apply.exe", icon: "📄" },
        ].map((icon) => (
          <div key={icon.label} className="flex flex-col items-center gap-1 cursor-default" style={{ width: "64px" }}>
            <div
              style={{
                fontSize: "28px",
                filter: "drop-shadow(1px 1px 0 rgba(0,0,0,0.5))",
                lineHeight: 1,
              }}
            >
              {icon.icon}
            </div>
            <span
              style={{
                fontSize: "11px",
                color: "white",
                textAlign: "center",
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                fontFamily: "Tahoma, Arial, sans-serif",
                lineHeight: 1.2,
              }}
            >
              {icon.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Window — Hero Dialog */}
      <div
        className="win-window relative z-10"
        style={{
          width: "100%",
          maxWidth: "680px",
          margin: "0 16px",
        }}
      >
        {/* Title bar */}
        <div className="win-titlebar">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" fill="#FFD700" stroke="#cc9900" strokeWidth="1" />
              <line x1="8" y1="2" x2="8" y2="4" stroke="#cc9900" strokeWidth="1.5" />
              <line x1="8" y1="12" x2="8" y2="14" stroke="#cc9900" strokeWidth="1.5" />
              <line x1="2" y1="8" x2="4" y2="8" stroke="#cc9900" strokeWidth="1.5" />
              <line x1="12" y1="8" x2="14" y2="8" stroke="#cc9900" strokeWidth="1.5" />
            </svg>
            <span>Uncommon Division — Solar Sales Career Opportunity</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="win-titlebar-btn">_</button>
            <button className="win-titlebar-btn">□</button>
            <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
          </div>
        </div>

        {/* Window body */}
        <div className="p-4">
          {/* Inner sunken panel with background image */}
          <div
            className="win-sunken relative overflow-hidden"
            style={{ height: "220px", marginBottom: "12px" }}
          >
            <img
              src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f77d21c9d6e158faeca5b_culture-photos-p-2000.jpg"
              alt="Uncommon Division team"
              className="w-full h-full object-cover"
              style={{ opacity: 0.85 }}
            />
            {/* Overlay text on the image */}
            <div
              className="absolute inset-0 flex items-end p-3"
              style={{ background: "linear-gradient(to top, rgba(0,0,128,0.7) 0%, transparent 60%)" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'VT323', 'Courier New', monospace",
                    fontSize: "40px",
                    color: "white",
                    lineHeight: 1,
                    textShadow: "2px 2px 0 #000080",
                  }}
                >
                  THREE WAYS TO EARN SIX FIGURES IN SOLAR.
                </p>
              </div>
            </div>
          </div>

          {/* Message area */}
          <div
            className="win-sunken p-3 mb-3 text-sm"
            style={{
              fontFamily: "Tahoma, Arial, sans-serif",
              fontSize: "11px",
              lineHeight: "1.6",
            }}
          >
            <p style={{ marginBottom: "6px" }}>
              <strong>UNCOMMON DIVISION</strong> is Freedom Forever&apos;s #1 sales organization.
              Most companies give you one path. We built three.
            </p>
            <p style={{ color: "#000080" }}>
              $169M+ paid in 2024 &nbsp;&bull;&nbsp; 38 states &nbsp;&bull;&nbsp; #1 sales organization
            </p>
          </div>

          {/* Progress bar — "Loading opportunity..." */}
          <div className="mb-3">
            <p
              style={{
                fontFamily: "Tahoma, Arial, sans-serif",
                fontSize: "11px",
                marginBottom: "3px",
                color: "#444",
              }}
            >
              Loading career opportunity{dots}
            </p>
            <div className="win-progress">
              <div
                className="win-progress-bar"
                style={{ width: "100%", animation: "none" }}
              />
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "2px",
              borderTop: "1px solid #808080",
              borderBottom: "1px solid white",
              margin: "12px 0",
            }}
          />

          {/* Button row */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Link href="/apply" className="btn-primary" style={{ minWidth: "100px" }}>
                Apply Now
              </Link>
              <Link href="#models" className="btn-outline" style={{ minWidth: "100px" }}>
                Explore Models
              </Link>
            </div>
            <button className="btn-outline" style={{ minWidth: "70px" }}>
              Cancel
            </button>
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-panel" style={{ flex: 2 }}>Ready</div>
          <div className="win-statusbar-panel" style={{ flex: 1 }}>38 States</div>
          <div className="win-statusbar-panel" style={{ flex: 1 }}>2024: $169M</div>
        </div>
      </div>

      {/* Floating "New Message" notification window */}
      <div
        className="win-window absolute bottom-16 right-6 hidden lg:block"
        style={{ width: "220px", zIndex: 20 }}
      >
        <div className="win-titlebar" style={{ fontSize: "10px", padding: "2px 4px" }}>
          <div className="flex items-center gap-1">
            <span style={{ fontSize: "12px" }}>📬</span>
            <span>New Opportunity!</span>
          </div>
          <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00", width: "14px", height: "12px", fontSize: "9px" }}>×</button>
        </div>
        <div className="p-3" style={{ fontSize: "11px", fontFamily: "Tahoma, Arial, sans-serif" }}>
          <p style={{ fontWeight: 700, marginBottom: "4px" }}>You have been selected!</p>
          <p style={{ color: "#444", lineHeight: "1.5" }}>
            Top earners made $350,000+ in 2024. Click Apply to start.
          </p>
        </div>
      </div>
    </section>
  );
}
