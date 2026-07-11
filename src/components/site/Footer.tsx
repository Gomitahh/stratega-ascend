import { GraduationCap, Linkedin, Twitter, Youtube, Instagram, Mail, MapPin } from "lucide-react";

const columns = [
  {
    title: "Academia",
    links: ["Programas", "Metodología", "Docentes", "Certificaciones", "Becas"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Investigación", "Eventos", "Podcast", "Biblioteca"],
  },
  {
    title: "Institucional",
    links: ["Sobre nosotros", "Aliados", "Prensa", "Carreras", "Contacto"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-grid-soft [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 ring-1 ring-white/15">
                <GraduationCap className="h-5 w-5 text-accent" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight">STRATEGA</span>
                <span className="text-[10px] font-medium tracking-[0.34em] text-white/60">
                  ACADEMY
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Academia internacional de formación en liderazgo político, gobernanza,
              estrategia e inteligencia aplicada. Formamos a la próxima generación de
              decisores públicos.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> Madrid · Ciudad de México · Washington D.C.
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" /> admisiones@strategaacademy.com
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Stratega Academy. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-white/50">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Código de honor</a>
            <a href="#" className="hover:text-white">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
