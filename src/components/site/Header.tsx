import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import strategaLogo from "@/assets/stratega-logo.png";
import { trackCTAClick, trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DarkModeToggle } from "./DarkModeToggle";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const NAV = useMemo(
    () => [
      { href: "#programas", label: t.nav.programas },
      { href: "#metodologia", label: t.nav.metodologia },
      { href: "#docentes", label: t.nav.docentes },
      { href: "#eventos", label: t.nav.eventos },
    ],
    [t.nav],
  );

  useEffect(() => {
    let frameId: number | null = null;
    const onScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          frameId = null;
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const sections = NAV.map(({ href }) => document.querySelector(href)).filter(
      (section): section is Element => section !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.1, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [NAV]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-[var(--z-sticky)] text-white transition-all duration-500 " +
        (scrolled
          ? "bg-deep border-b border-white/10 shadow-elegant"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div
        className={
          "container-x flex items-center justify-between transition-[padding] duration-500 ease-[var(--ease-premium)] motion-reduce:transition-none " +
          (scrolled ? "py-1.5" : "py-2.5")
        }
      >
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={strategaLogo}
            alt="Stratega Academy"
            className={
              "w-auto transition-all duration-500 ease-[var(--ease-premium)] motion-reduce:transition-none " +
              (scrolled ? "h-14 md:h-[4.25rem]" : "h-16 md:h-20")
            }
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => trackCTAClick(`nav_${n.label}`)}
              aria-current={activeSection === n.href ? "location" : undefined}
              className={
                "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                (activeSection === n.href
                  ? "bg-white/10 text-accent"
                  : "text-white/70 hover:bg-white/10 hover:text-accent")
              }
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />
          <DarkModeToggle />
          <a
            href="https://wa.me/51940371250?text=Hola%2C%20quiero%20aplicar%20a%20Stratega%20Academy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header_aplicar_ahora")}
            className="btn-sweep inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground shadow-elegant btn-transition hover:-translate-y-0.5 hover:bg-accent hover:shadow-gold"
          >
            {t.cta.aplicar}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-deep lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => {
                  setOpen(false);
                  trackCTAClick(`nav_${n.label}`);
                }}
                aria-current={activeSection === n.href ? "location" : undefined}
                className={
                  "flex min-h-[44px] items-center rounded-xl px-4 py-3.5 text-sm font-medium transition-colors " +
                  (activeSection === n.href
                    ? "bg-white/10 text-accent"
                    : "text-white/80 hover:bg-white/10 hover:text-accent")
                }
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/51940371250?text=Hola%2C%20quiero%20aplicar%20a%20Stratega%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setOpen(false);
                trackWhatsAppClick("header_mobile_aplicar_ahora");
              }}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-secondary px-4 py-3.5 text-sm font-semibold text-secondary-foreground"
            >
              {t.cta.aplicar}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
