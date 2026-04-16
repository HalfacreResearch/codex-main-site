/* =============================================================
   DESIGN: Dark Luxury — fixed top nav, BTC orange (#F7931A) accents, Inter font
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const ORANGE = "oklch(0.72 0.17 55)";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Intelligence", href: "#platform" },
  { label: "Performance", href: "#performance" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col leading-none"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span
            className="font-bold tracking-widest uppercase text-xs"
            style={{ color: ORANGE, letterSpacing: "0.18em" }}
          >
            Bitcoin Treasury
          </span>
          <span
            className="font-bold tracking-widest uppercase text-xs"
            style={{ color: ORANGE, letterSpacing: "0.18em" }}
          >
            Codex
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
              style={{ color: "oklch(0.65 0.008 65)", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.008 65)")}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://client.codexyield.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
            style={{ color: "oklch(0.65 0.008 65)", letterSpacing: "0.12em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.008 65)")}
          >
            Client Portal
          </a>
          <button
            onClick={() => handleNav("#contact")}
            className="btn-gold text-xs"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: ORANGE }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "rgba(10,10,10,0.98)", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-xs font-medium tracking-widest uppercase"
                style={{ color: "oklch(0.65 0.008 65)", letterSpacing: "0.12em" }}
              >
                {link.label}
              </button>
            ))}
            <div className="gold-line my-2" />
            <button
              onClick={() => handleNav("#contact")}
              className="btn-gold text-xs w-full justify-center"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
