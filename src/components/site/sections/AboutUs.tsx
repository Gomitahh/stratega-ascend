import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WorldMap } from "@/components/site/WorldMap";
import { useReveal, useCounter } from "@/hooks/use-reveal";
import { strategyImg, PILLARS, METRICS } from "./data";
import { useI18n } from "@/lib/i18n";
import { useMemo } from "react";
import type { CSSProperties } from "react";

function MetricCard({ metric, delay }: { metric: { value: number; label: string; suffix?: string; desc: string }; delay: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const count = useCounter(metric.value, 1800, shown && !reducedMotion);
  const displayValue = reducedMotion ? metric.value : count;
  const style: CSSProperties & Record<string, string> = { transitionDelay: `${delay}ms`, "--reveal-distance": "14px", "--reveal-duration": "1000ms" };

  return (
    <div ref={ref} style={style} className={`reveal ${shown ? "reveal-in" : ""} rounded-xl border border-accent/20 bg-white/5 backdrop-blur p-8 text-center`}>
      <p className="font-stat text-5xl font-bold text-secondary leading-none tabular-nums">
        {displayValue.toLocaleString("es")}{metric.suffix}
      </p>
      <p className="mt-4 font-sans text-lg font-bold text-white">{metric.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{metric.desc}</p>
    </div>
  );
}

export function AboutUs() {
  const { t } = useI18n();
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                {t.about.title.split(" y ")[0]} y<br />
                <span className="text-secondary-ink">{t.about.title.split(" y ")[1]}</span>
              </h2>
              <p className="mt-4 font-sans italic text-base leading-[1.4] text-secondary-ink/80">
                {t.about.subtitle}
              </p>
              <span aria-hidden="true" className="section-line mt-5 block h-[2px] w-20 bg-accent" />
              <p className="mt-8 text-lg leading-relaxed text-ink">
                {t.about.p1}
              </p>
              <p className="mt-6 text-base leading-relaxed text-paragraph">
                Stratega Academy es la división formativa de Stratega Politiks, firma de consultoría
                política especializada en estrategia, comunicación, posicionamiento, análisis
                político y gestión de crisis. Nuestros programas nacen de la práctica real: lo que
                enseñamos es lo que ejercemos en campañas y gobiernos.
              </p>
              <p className="mt-6 text-base leading-relaxed text-paragraph">
                <span className="font-semibold text-ink">{t.about.p2_bold}</span>{" "}
                {t.about.p2_post}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#programas" className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant btn-transition hover:-translate-y-1">
                  {t.about.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[1/1.1] overflow-hidden rounded-2xl shadow-elegant ring-1 ring-primary/5">
              <img src={strategyImg} alt="Encuentro de líderes estrategas" width={800} height={880} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Pillars grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} distance={14} duration={1000}>
              <div className="group h-full rounded-xl border border-hairline bg-white p-8 shadow-soft btn-transition hover:-translate-y-1 hover:shadow-elegant">
                <p.icon className="h-6 w-6 shrink-0 text-secondary-ink" />
                <h3 className="mt-5 font-sans text-lg font-bold text-ink transition-colors duration-300 group-hover:text-secondary-ink">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-paragraph">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Metrics section */}
      <div className="relative mt-24 bg-deep text-white py-24 md:py-28">
        <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />
        <div className="container-x relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Reveal>
              <h2 className="font-display text-3xl leading-[1.05] text-white md:text-4xl">{t.metrics.title}</h2>
              <span aria-hidden="true" className="section-line mx-auto mt-5 block h-[2px] w-20 bg-accent" />
              <p className="mt-5 text-base leading-relaxed text-white/75">{t.metrics.subtitle}</p>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => <MetricCard key={m.label} metric={m} delay={i * 90} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
