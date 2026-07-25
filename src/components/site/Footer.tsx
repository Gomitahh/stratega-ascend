import { Instagram, Mail, MapPin } from "lucide-react";
import strategaLogo from "@/assets/stratega-logo.png";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const navigation = [
    { label: "Programas", href: "#programas" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Docentes", href: "#docentes" },
    { label: "Eventos", href: "#eventos" },
    { label: "Preguntas frecuentes", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="relative overflow-hidden bg-deep text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-grid-soft [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-2">
              <img src={strategaLogo} alt="Stratega Academy" className="h-16 w-auto" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent/80">
              {t.footer.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{t.footer.desc}</p>

            <ul className="mt-6 space-y-2 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> Lima, Perú
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" /> strategacompol@gmail.com
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              <a
                href="https://www.instagram.com/stratega.politiks/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                aria-label="Instagram de Stratega"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Explorar
            </p>
            <ul className="mt-5 grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {navigation.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex min-h-11 items-center border-b border-white/10 text-sm text-white/70 transition-colors hover:border-accent/50 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Stratega Academy. {t.footer.derechos}
          </p>
          <a
            href="mailto:strategacompol@gmail.com"
            className="text-xs text-white/50 transition-colors hover:text-white"
          >
            Información legal y privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
