import { useMemo } from "react";
import { Reveal } from "@/components/site/Reveal";
import { WorldMap } from "@/components/site/WorldMap";
import { useReveal, useCounter } from "@/hooks/use-reveal";
import { METRICS } from "./data";
import type { CSSProperties } from "react";
import { useI18n } from "@/lib/i18n";

export function ImpactMetrics() {
  const { t } = useI18n();
  return (
    <section className="relative bg-deep text-white py-28 md:py-36">
      <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />
      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] text-white md:text-5xl">
              {t.metrics.title}
            </h2>
            <span aria-hidden="true" className="section-line mx-auto mt-5 block h-[2px] w-20 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              {t.metrics.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} metric={m} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Metric = { value: number; label: string; suffix?: string; desc: string };

function MetricCard({ metric, delay }: { metric: Metric; delay: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const count = useCounter(metric.value, 1800, shown && !reducedMotion);
  const displayValue = reducedMotion ? metric.value : count;
  const style: CSSProperties & Record<string, string> = {
    transitionDelay: `${delay}ms`,
    "--reveal-distance": "14px",
    "--reveal-duration": "1000ms",
  };

  return (
    <div ref={ref} style={style}
      className={`reveal ${shown ? "reveal-in" : ""} rounded-xl border border-accent/20 bg-white/5 backdrop-blur p-8 text-center`}>
      <p className="font-stat text-5xl font-bold text-secondary leading-none tabular-nums">
        {displayValue.toLocaleString("es")}{metric.suffix}
      </p>
      <p className="mt-4 font-sans text-lg font-bold text-white">{metric.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{metric.desc}</p>
    </div>
  );
}
