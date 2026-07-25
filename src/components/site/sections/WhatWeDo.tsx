import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "./SectionHeader";
import { PILLARS } from "./data";
import { useI18n } from "@/lib/i18n";

export function WhatWeDo() {
  const { t } = useI18n();
  return (
    <section className="relative bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <SectionHeader
            title={
              <>
                {t.pillars.title.split(" de ")[0]} de <span className="text-secondary-ink">{t.pillars.title.split(" de ")[1]}</span>
              </>
            }
            subtitle={t.pillars.subtitle}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} distance={14} duration={1000}>
              <div className="group h-full rounded-xl border border-hairline bg-white p-8 shadow-soft transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-start gap-3">
                  <p.icon className="h-6 w-6 shrink-0 text-secondary-ink mt-0.5" />
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-ink transition-colors duration-300 group-hover:text-secondary-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paragraph">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
