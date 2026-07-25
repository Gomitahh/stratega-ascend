import { ArrowUpRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "./SectionHeader";
import { waLink, EVENTS_DATA } from "./data";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export function Events() {
  const { t } = useI18n();
  const [first, ...rest] = EVENTS_DATA;
  return (
    <section id="eventos" className="bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionHeader
            title={
              <>
                {t.events.title.split(" que ")[0]} que <span className="text-secondary-ink">{t.events.title.split(" que ")[1]}</span>
              </>
            }
            subtitle={t.events.subtitle}
          />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <article className="group flex h-full flex-col transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-y-1">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-hairline shadow-soft transition-shadow duration-300 ease-[var(--ease-premium)] group-hover:shadow-elegant">
                <img
                  src={first.image} alt="" loading="lazy" decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div className="text-white">
                    <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/70">{first.tag}</p>
                    <p className="mt-2 font-stat text-lg font-bold text-white">{first.date}</p>
                  </div>
                  <Calendar className="h-4 w-4 text-white/60" />
                </div>
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <p className="text-sm font-semibold text-secondary-ink uppercase tracking-[0.08em]">{first.city}</p>
                <h3 className="mt-2 font-sans text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-secondary-ink">
                  {first.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-paragraph">{first.speaker}</p>
                <a
                  href={waLink(first.ctaMessage)}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`evento_${first.title}`)}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-primary transition-colors hover:text-secondary-ink"
                >
                  {first.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-10">
            {rest.map((e, i) => (
              <Reveal key={e.title} delay={i * 110} distance={14} duration={1000}>
                <article className="group flex gap-5 rounded-xl border border-hairline bg-white p-5 shadow-soft transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-x-1 hover:shadow-elegant">
                  <div className="h-24 w-32 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={e.image} alt="" loading="lazy" decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center min-w-0">
                    <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-secondary-ink">
                      <Calendar className="h-3 w-3" /> {e.date}
                    </p>
                    <h3 className="mt-1 font-sans text-sm font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-secondary-ink">
                      {e.title}
                    </h3>
                    <a
                      href={waLink(e.ctaMessage)}
                      target="_blank" rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick(`evento_${e.title}`)}
                      className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary-ink"
                    >
                      {e.ctaLabel}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
