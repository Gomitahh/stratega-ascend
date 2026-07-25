import { Reveal } from "@/components/site/Reveal";
import { WorldMap } from "@/components/site/WorldMap";
import { METHOD_STEPS } from "./data";
import { useI18n } from "@/lib/i18n";

export function Methodology() {
  const { t } = useI18n();
  return (
    <section id="metodologia" className="relative overflow-hidden bg-deep py-28 text-white md:py-36">
      <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-accent/80">{t.methodology.eyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-white md:text-5xl">
              {t.methodology.title}
            </h2>
            <span aria-hidden="true" className="section-line mt-5 block h-[2px] w-20 bg-accent" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {t.methodology.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {METHOD_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} distance={14} duration={1000}>
              <article className="h-full border-l-2 border-accent/25 pl-6">
                <div className="flex items-end justify-between gap-4">
                  <span className="font-stat text-6xl font-bold tracking-[-0.05em] text-accent/30 leading-none">{s.n}</span>
                  <s.icon className="h-5 w-5 shrink-0 text-accent/60" />
                </div>
                <h3 className="mt-6 font-sans text-lg font-bold leading-snug text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
