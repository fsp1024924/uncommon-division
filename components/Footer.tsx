import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--win-bg)", paddingBottom: "38px" }}>
      {/* Footer window */}
      <div style={{ padding: "0 16px 16px" }}>
        <div className="container-site">
          <div className="win-window">
            {/* Title bar */}
            <div className="win-titlebar">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" fill="#FFD700" stroke="#cc9900" strokeWidth="1" />
                </svg>
                <span>Uncommon Division — Site Map</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="win-titlebar-btn">_</button>
                <button className="win-titlebar-btn">□</button>
                <button className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
              </div>
            </div>

            <div className="p-4">
              {/* Logo + links */}
              <div className="flex flex-col md:flex-row gap-6 justify-between mb-4">
                <div>
                  <div className="win-raised inline-block p-2 mb-3">
                    <img
                      src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f83a127fb9320e56e7f7a_un-white.svg"
                      alt="Uncommon Division"
                      style={{ height: "28px", filter: "invert(1)" }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "Tahoma, Arial, sans-serif",
                      fontSize: "10px",
                      color: "#666",
                      marginBottom: "4px",
                    }}
                  >
                    A Freedom Forever Sales Organization
                  </p>
                  <p
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: "14px",
                      color: "#000080",
                    }}
                  >
                    Uncommon Division™ v1.0
                  </p>
                </div>

                <div className="flex gap-10">
                  <div>
                    <p
                      style={{
                        fontFamily: "Tahoma",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#000080",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "6px",
                        borderBottom: "1px solid #808080",
                        paddingBottom: "3px",
                      }}
                    >
                      Models
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { label: "Locals", href: "/locals" },
                        { label: "X Team", href: "/x-team" },
                        { label: "Retail", href: "/retail" },
                      ].map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          style={{
                            fontFamily: "Tahoma",
                            fontSize: "11px",
                            color: "#000080",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: "Tahoma",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#000080",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "6px",
                        borderBottom: "1px solid #808080",
                        paddingBottom: "3px",
                      }}
                    >
                      Resources
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { label: "Apply Now", href: "/apply" },
                        { label: "Free Trainings", href: "#" },
                        { label: "Blog", href: "#" },
                      ].map((l) => (
                        <Link
                          key={l.label}
                          href={l.href}
                          style={{
                            fontFamily: "Tahoma",
                            fontSize: "11px",
                            color: "#000080",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "2px",
                  borderTop: "1px solid #808080",
                  borderBottom: "1px solid white",
                  marginBottom: "12px",
                }}
              />

              {/* Disclaimer */}
              <div
                className="win-sunken p-3 mb-3"
                style={{
                  fontFamily: "Tahoma, Arial, sans-serif",
                  fontSize: "10px",
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                Earnings represented are based on 2024 actual rep commissions within the Uncommon Division.
                Individual results vary based on effort, market conditions, and experience. Commission-based
                compensation only. No base salary.
              </div>

              <p
                style={{
                  fontFamily: "Tahoma",
                  fontSize: "10px",
                  color: "#888",
                }}
              >
                © 2026 Uncommon Division. All rights reserved.
              </p>
            </div>

            {/* Status bar */}
            <div className="win-statusbar">
              <div className="win-statusbar-panel" style={{ flex: 2 }}>Done</div>
              <div className="win-statusbar-panel" style={{ flex: 1 }}>Internet zone</div>
              <div className="win-statusbar-panel" style={{ flex: 1 }}>© 2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Windows 2000 Taskbar */}
      <div className="win-taskbar">
        {/* Start button */}
        <button
          style={{
            background: "linear-gradient(180deg, #3dba3d 0%, #2da02d 40%, #228822 100%)",
            border: "none",
            borderRadius: "0 10px 10px 0",
            height: "22px",
            padding: "0 10px 0 6px",
            color: "white",
            fontFamily: "Tahoma, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            cursor: "default",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
            marginRight: "4px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="6" height="6" fill="#FF0000" />
            <rect x="9" y="1" width="6" height="6" fill="#00B000" />
            <rect x="1" y="9" width="6" height="6" fill="#0000FF" />
            <rect x="9" y="9" width="6" height="6" fill="#FFD700" />
          </svg>
          start
        </button>

        {/* Quick-launch divider */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)",
            marginRight: "4px",
          }}
        />

        {/* Active window buttons */}
        <div className="flex gap-1 flex-1 overflow-hidden">
          {["Uncommon Division - Solar Sales", "Earnings Report - FY2024"].map((t, i) => (
            <button
              key={t}
              style={{
                background: i === 0
                  ? "linear-gradient(180deg, #5b9bd5 0%, #4a8fcb 100%)"
                  : "linear-gradient(180deg, #2e6ab1 0%, #1e5aa1 100%)",
                border: "1px solid #1a4f8a",
                borderRadius: "2px",
                height: "22px",
                padding: "0 8px",
                color: "white",
                fontFamily: "Tahoma, Arial, sans-serif",
                fontSize: "11px",
                cursor: "default",
                maxWidth: "160px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* System tray */}
        <div
          style={{
            background: "linear-gradient(180deg, #1556b8 0%, #1252ad 50%, #1556b8 100%)",
            border: "1px solid #0b47a3",
            borderRadius: "2px",
            height: "22px",
            padding: "0 8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginLeft: "4px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" fill="#4a8fd4" />
            <text x="5" y="12" fill="white" fontSize="9" fontFamily="Tahoma">W</text>
          </svg>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="4" width="14" height="8" rx="1" fill="#4a8fd4" />
            <rect x="3" y="6" width="10" height="4" fill="white" />
          </svg>
          <span
            style={{
              fontFamily: "Tahoma",
              fontSize: "11px",
              color: "white",
            }}
          >
            {/* The clock renders client side in the Navbar; static fallback here */}
            12:00 PM
          </span>
        </div>
      </div>
    </footer>
  );
}
