import { ArrowRight, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WorldMap } from "@/components/site/WorldMap";
import { waLink } from "./data";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section id="cta" className="relative overflow-hidden py-28 md:py-36">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-deep px-10 py-20 shadow-float md:px-20 md:py-28">
          <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/8" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-accent/90">
                  {t.finalcta.eyebrow}
                </p>
                <h2 className="mt-6 font-display text-4xl leading-[1.04] text-white md:text-5xl lg:text-6xl">
                  {t.finalcta.title}
                </h2>
                <span aria-hidden="true" className="section-line mt-5 block h-[2px] w-20 bg-accent" />
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  {t.finalcta.subtitle}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={waLink("Hola, quiero iniciar mi aplicación a Stratega Academy")}
                    target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("final_cta_iniciar_solicitud")}
                    className="btn-sweep group inline-flex items-center gap-2.5 rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold text-secondary-foreground shadow-gold btn-transition hover:-translate-y-1"
                  >
                    {t.finalcta.solicitar}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
                  </a>
                  <a
                    href={waLink("Hola, quiero hablar con el equipo de admisiones")}
                    target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("final_cta_hablar_admisiones")}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/8 px-8 py-3.5 text-sm font-bold text-white backdrop-blur btn-transition hover:bg-white/12 hover:border-white/30"
                  >
                    {t.finalcta.hablar}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-accent/20 bg-white/5 backdrop-blur p-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-3xl leading-tight text-white">{t.finalcta.proceso}</p>
                    <p className="mt-2 text-sm text-white/70">{t.finalcta.cierre}</p>
                  </div>
                </div>

                <ul className="mt-8 space-y-4 border-t border-accent/20 pt-8">
                  {t.finalcta.checkpoints.map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent/90" />
                      <span className="text-sm text-white/85">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
