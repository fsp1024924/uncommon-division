"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "LOCALS", href: "/locals" },
  { label: "X TEAM", href: "/x-team" },
  { label: "RETAIL", href: "/retail" },
];

const menuItems = ["File", "Edit", "View", "Favorites", "Help"];

export default function Navbar() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { setOpen(false); setActiveMenu(null); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      {/* ── Address Bar / Main Nav ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#d4d0c8", boxShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
      >
        {/* Title bar row */}
        <div
          className="win-titlebar"
          style={{ padding: "4px 6px", minHeight: "28px" }}
        >
          {/* Icon + Title */}
          <div className="flex items-center gap-2">
            {/* Win2K-style sun/solar icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#FFD700" />
              <line x1="8" y1="1" x2="8" y2="3" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="8" y1="13" x2="8" y2="15" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="1" y1="8" x2="3" y2="8" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="13" y1="8" x2="15" y2="8" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="2.9" y1="2.9" x2="4.3" y2="4.3" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="11.7" y1="11.7" x2="13.1" y2="13.1" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="13.1" y1="2.9" x2="11.7" y2="4.3" stroke="#FFD700" strokeWidth="1.5" />
              <line x1="4.3" y1="11.7" x2="2.9" y2="13.1" stroke="#FFD700" strokeWidth="1.5" />
            </svg>
            <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: "11px", fontWeight: 700, color: "white" }}>
              Uncommon Division - Solar Sales Careers
            </span>
          </div>

          {/* Title bar buttons */}
          <div className="flex items-center gap-1">
            <button className="win-titlebar-btn" aria-label="Minimize">_</button>
            <button className="win-titlebar-btn" aria-label="Maximize">□</button>
            <button
              className="win-titlebar-btn"
              aria-label="Close"
              style={{ fontWeight: 900, color: "#c00" }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Menu bar row */}
        <div className="win-menubar">
          {menuItems.map((item) => (
            <button
              key={item}
              onMouseEnter={() => activeMenu && setActiveMenu(item)}
              onClick={() => setActiveMenu(activeMenu === item ? null : item)}
              className="px-2 py-0.5 text-[11px] cursor-default"
              style={{
                background: activeMenu === item ? "var(--win-highlight)" : "transparent",
                color: activeMenu === item ? "white" : "var(--win-text)",
                fontFamily: "Tahoma, Arial, sans-serif",
                border: "none",
                textDecoration: activeMenu === item ? "none" : "none",
              }}
            >
              {item}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          {/* Nav links styled as toolbar buttons */}
          <div className="flex items-center gap-1 pr-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="win-titlebar-btn"
                style={{
                  width: "auto",
                  height: "20px",
                  padding: "0 10px",
                  fontSize: "11px",
                  fontFamily: "Tahoma, Arial, sans-serif",
                  textDecoration: "none",
                  backgroundColor: pathname === l.href ? "var(--win-highlight)" : "var(--win-silver)",
                  color: pathname === l.href ? "white" : "var(--win-text)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="win-titlebar-btn"
              style={{
                width: "auto",
                height: "20px",
                padding: "0 10px",
                fontSize: "11px",
                fontWeight: 700,
                fontFamily: "Tahoma, Arial, sans-serif",
                textDecoration: "none",
                backgroundColor: "#000080",
                color: "white",
                display: "flex",
                alignItems: "center",
                borderColor: "#5555aa #00002a #00002a #5555aa",
              }}
            >
              APPLY NOW
            </Link>
          </div>
        </div>

        {/* Address bar row */}
        <div
          className="flex items-center gap-2 px-2 py-1"
          style={{
            backgroundColor: "#d4d0c8",
            borderTop: "1px solid #a0a098",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontFamily: "Tahoma, Arial, sans-serif",
              color: "#444",
              whiteSpace: "nowrap",
            }}
          >
            Address:
          </span>
          <div
            className="flex items-center gap-1 flex-1"
            style={{
              backgroundColor: "white",
              borderTop: "2px solid #808080",
              borderLeft: "2px solid #808080",
              borderRight: "2px solid white",
              borderBottom: "2px solid white",
              padding: "1px 4px",
              fontSize: "11px",
              fontFamily: "Tahoma, Arial, sans-serif",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" fill="#1761c7" />
              <text x="4" y="12" fill="white" fontSize="10" fontFamily="Tahoma" fontWeight="700">e</text>
            </svg>
            <span>http://uncommondivision.com/</span>
          </div>
          <button
            className="btn-primary"
            style={{ padding: "2px 12px", fontSize: "11px", minWidth: 0 }}
          >
            Go
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden win-titlebar-btn"
            style={{ width: "20px", height: "20px" }}
            aria-label="Menu"
          >
            ≡
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center"
          style={{ backgroundColor: "var(--win-bg)", paddingTop: "90px" }}
        >
          <div className="win-window" style={{ width: "300px" }}>
            <div className="win-titlebar">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#FFD700" />
                </svg>
                <span>Navigation</span>
              </div>
              <button onClick={() => setOpen(false)} className="win-titlebar-btn" style={{ fontWeight: 900, color: "#c00" }}>×</button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="btn-primary"
                  style={{ width: "100%", fontSize: "13px", padding: "6px 12px" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div style={{ height: "1px", background: "var(--win-border-darker)", margin: "4px 0" }} />
              <Link href="/apply" className="btn-primary" style={{ width: "100%", fontSize: "13px", padding: "6px 12px", backgroundColor: "#000080", color: "white", borderColor: "#5555aa #00002a #00002a #5555aa" }} onClick={() => setOpen(false)}>
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
