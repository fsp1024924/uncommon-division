import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080808" }}>
      <div className="red-line" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0">
            <img
              src="https://cdn.prod.website-files.com/698f77d21c9d6e158faeca4c/698f83a127fb9320e56e7f7a_un-white.svg"
              alt="Uncommon Division"
              className="h-8 mb-2"
            />
            <p className="text-[11px] font-light mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
              A Freedom Forever Sales Organization
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: "#DC2626" }}>Models</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Locals", href: "/locals" },
                  { label: "X Team", href: "/x-team" },
                  { label: "Retail", href: "/retail" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-xs font-light hover:text-white transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: "#DC2626" }}>Resources</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Apply Now", href: "/apply" },
                  { label: "Free Trainings", href: "#" },
                  { label: "Blog", href: "#" },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-xs font-light hover:text-white transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#141414] pt-8">
          <p className="text-[10px] font-light leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.15)" }}>
            Earnings represented are based on 2024 actual rep commissions within the Uncommon Division.
            Individual results vary based on effort, market conditions, and experience. Commission-based
            compensation only. No base salary.
          </p>
          <p className="text-[10px] font-light mt-4" style={{ color: "rgba(255,255,255,0.15)" }}>
            © 2026 Uncommon Division. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
