import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WorldMap } from "@/components/site/WorldMap";
import { TESTIMONIALS } from "./data";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();
  const [featured, ...rest] = TESTIMONIALS;
  return (
    <section className="relative overflow-hidden border-t border-accent/10 bg-deep py-28 text-white md:py-36">
      <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />

      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] text-white md:text-5xl">
              {t.testimonials.title.split(" ya son ")[0]} ya son <span className="text-secondary">{t.testimonials.title.split(" ya son ")[1]}</span>
            </h2>
            <span aria-hidden="true" className="section-line mx-auto mt-5 block h-[2px] w-20 bg-accent" />
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <figure className="flex h-full flex-col">
              <div className="flex flex-1 flex-col rounded-2xl border border-accent/20 bg-white/5 p-10 backdrop-blur md:p-12">
                <Quote className="h-8 w-8 shrink-0 text-accent" aria-hidden="true" />
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-white/90 md:text-2xl">{featured.quote}</blockquote>
                <figcaption className="mt-8 border-t border-accent/20 pt-6 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">
                    {featured.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-white">{featured.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/60">{featured.role}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-10">
            {rest.map((t, i) => (
              <Reveal key={i} delay={i * 110} distance={14} duration={1000}>
                <figure className="flex h-full flex-col">
                  <div className="flex flex-1 flex-col rounded-2xl border border-accent/20 bg-white/5 p-8 backdrop-blur">
                    <Quote className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                    <blockquote className="mt-4 font-display text-base leading-relaxed text-white/85">{t.quote}</blockquote>
                    <figcaption className="mt-6 border-t border-accent/20 pt-5">
                      <p className="font-sans text-sm font-bold text-white">{t.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/60">{t.role}</p>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
