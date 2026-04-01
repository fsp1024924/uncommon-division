"use client";

import Link from "next/link";

const HouseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16L16 5L28 16" />
    <path d="M7 14v12h7v-7h4v7h7V14" />
  </svg>
);

const PlaneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 4L14 18" />
    <path d="M28 4L19 28L14 18L4 13L28 4Z" />
  </svg>
);

const KioskIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stats: { schedule: "Year-Round", path: "Setter → Manager" },
    href: "/locals",
    iconBg: "#000080",
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
    stats: { schedule: "10 On / 20 Off", path: "Housing Included" },
    href: "/x-team",
    iconBg: "#800000",
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
    stats: { schedule: "In-Store", path: "No Exp. Required" },
    href: "/retail",
    iconBg: "#006400",
  },
];

export default function ModelShowcase() {
  return (
    <section
      id="models"
      style={{ backgroundColor: "var(--win-bg)", padding: "0 16px 48px" }}
    >
      <div className="container-site">
        {/* Outer window */}
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="6" height="6" fill="#FF0000" />
                <rect x="9" y="1" width="6" height="6" fill="#00FF00" />
                <rect x="1" y="9" width="6" height="6" fill="#0000FF" />
                <rect x="9" y="9" width="6" height="6" fill="#FFFF00" />
              </svg>
              <span>Choose Your Path — Sales Model Explorer</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="win-titlebar-btn">_</button>
              <button className="win-titlebar-btn">□</button>
              <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
            </div>
          </div>

          {/* Menu */}
          <div className="win-menubar">
            {["File", "View", "Favorites", "Tools", "Help"].map((m) => (
              <button
                key={m}
                className="px-2 py-0.5"
                style={{ background: "none", border: "none", fontFamily: "Tahoma, Arial, sans-serif", fontSize: "11px", cursor: "default" }}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="p-4">
            {/* Section header */}
            <div
              className="win-sunken px-4 py-3 mb-4 flex items-center gap-3"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="28" height="28" rx="2" fill="#ece9d8" stroke="#808080" />
                <text x="4" y="22" fill="#000080" fontSize="18" fontFamily="'VT323', monospace" fontWeight="700">THE</text>
                <text x="4" y="30" fill="#000080" fontSize="18" fontFamily="'VT323', monospace" fontWeight="700">MODELS</text>
              </svg>
              <div>
                <p
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "28px",
                    color: "#000080",
                    lineHeight: 1,
                  }}
                >
                  SELECT YOUR CAREER PATH
                </p>
                <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: "11px", color: "#444" }}>
                  3 programs available. Double-click to learn more.
                </p>
              </div>
            </div>

            {/* Model cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {models.map((m) => {
                const Icon = m.icon;
                return (
                  <Link key={m.title} href={m.href} style={{ textDecoration: "none" }}>
                    <div className="win-window h-full" style={{ cursor: "default" }}>
                      {/* Card title bar */}
                      <div
                        className="win-titlebar"
                        style={{
                          background: `linear-gradient(90deg, ${m.iconBg} 0%, ${m.iconBg}cc 100%)`,
                          padding: "3px 6px",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div style={{ color: "white" }}>
                            <Icon />
                          </div>
                          <span style={{ fontSize: "11px" }}>{m.title}</span>
                        </div>
                        <span style={{ fontSize: "10px", opacity: 0.6 }}>{m.number}</span>
                      </div>

                      <div className="p-3">
                        {/* Tagline in sunken box */}
                        <div
                          className="win-sunken px-3 py-2 mb-3"
                          style={{
                            fontFamily: "Tahoma, Arial, sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#000080",
                          }}
                        >
                          {m.tagline}
                        </div>

                        {/* Bullet list */}
                        <ul
                          style={{
                            fontFamily: "Tahoma, Arial, sans-serif",
                            fontSize: "11px",
                            color: "#333",
                            listStyle: "none",
                            padding: 0,
                            marginBottom: "12px",
                          }}
                        >
                          {m.bullets.map((b, i) => (
                            <li
                              key={i}
                              style={{
                                paddingLeft: "16px",
                                position: "relative",
                                marginBottom: "4px",
                                lineHeight: "1.4",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: "4px",
                                  top: "0",
                                  color: m.iconBg,
                                  fontWeight: 700,
                                }}
                              >
                                •
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        {/* Stats row */}
                        <div
                          style={{
                            height: "1px",
                            borderTop: "1px solid #808080",
                            borderBottom: "1px solid white",
                            marginBottom: "8px",
                          }}
                        />
                        <div className="flex justify-between">
                          <div>
                            <p style={{ fontSize: "9px", fontFamily: "Tahoma", color: "#666", textTransform: "uppercase" }}>Schedule</p>
                            <p style={{ fontSize: "11px", fontFamily: "Tahoma", fontWeight: 700, color: "#000" }}>{m.stats.schedule}</p>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <p style={{ fontSize: "9px", fontFamily: "Tahoma", color: "#666", textTransform: "uppercase" }}>Path</p>
                            <p style={{ fontSize: "11px", fontFamily: "Tahoma", fontWeight: 700, color: "#000" }}>{m.stats.path}</p>
                          </div>
                        </div>

                        {/* CTA button */}
                        <div style={{ marginTop: "12px" }}>
                          <button
                            className="btn-primary"
                            style={{ width: "100%", backgroundColor: m.iconBg, color: "white", borderColor: `${m.iconBg}aa ${m.iconBg}44 ${m.iconBg}44 ${m.iconBg}aa` }}
                          >
                            Learn More &rsaquo;&rsaquo;
                          </button>
                        </div>
                      </div>

                      <div className="win-statusbar" style={{ fontSize: "10px" }}>
                        <div className="win-statusbar-panel">{m.stats.schedule}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-panel" style={{ flex: 2 }}>3 objects</div>
            <div className="win-statusbar-panel" style={{ flex: 1 }}>Internet zone</div>
          </div>
        </div>
      </div>
    </section>
  );
}
