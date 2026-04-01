"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "LOCALS", href: "/locals" },
  { label: "X TEAM", href: "/x-team" },
  { label: "RETAIL", href: "/retail" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
          borderBottom: scrolled ? "1px solid rgba(220,38,38,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <Link href="/" className="hover:opacity-70 transition-opacity duration-300 flex items-center">
            <img
              src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f83a127fb9320e56e7f7a_un-white.svg"
              alt="Uncommon Division"
              className="h-7"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[13px] font-medium tracking-[0.15em] transition-colors duration-200 group"
                style={{ color: pathname === l.href ? "#DC2626" : "rgba(255,255,255,0.6)" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-[1px] bg-[#DC2626] transition-all duration-300"
                  style={{ width: pathname === l.href ? "100%" : "0" }}
                />
                <span className="absolute -bottom-1.5 left-0 h-[1px] bg-[#DC2626] w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <Link
            href="/apply"
            className="hidden md:inline-block magnetic-btn px-7 py-2.5 bg-[#DC2626] text-white text-[12px] font-bold tracking-[0.2em]"
          >
            APPLY NOW
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden z-50 p-2" aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className="block h-[1.5px] bg-white origin-center" />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-[1.5px] bg-white" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className="block h-[1.5px] bg-white origin-center" />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-bebas text-6xl text-white tracking-[0.15em] block py-3 hover:text-[#DC2626] transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="magnetic-btn inline-block px-12 py-4 bg-[#DC2626] text-white font-bold tracking-[0.2em] text-sm"
              >
                APPLY NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
