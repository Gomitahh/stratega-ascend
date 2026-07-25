import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Award, BadgeCheck, Shield } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { waLink, heroImg } from "./data";
import { trackCTAClick, trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const [parallax, setParallax] = useState(0);
  const heroIcons = [BadgeCheck, Award, Shield];

  useEffect(() => {
    let frameId: number | null = null;
    const onScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(() => {
          setParallax(Math.min(80, window.scrollY * 0.15));
          frameId = null;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-background pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container-x relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.24em] text-secondary-ink">
                {t.hero.cohorte}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2rem,8vw,4.8rem)] leading-[1.02] text-ink">
                {t.hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-paragraph">
                {t.hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#programas"
                  onClick={() => trackCTAClick("hero_explorar_programas")}
                  className="btn-sweep group inline-flex items-center gap-2.5 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant btn-transition hover:-translate-y-1 hover:shadow-float"
                >
                  {t.hero.explorar}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
                </a>
                <a
                  href={waLink("Hola, quiero más información sobre Stratega Academy")}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("hero_contactar_admisiones")}
                  className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all hover:border-primary/20 hover:bg-card"
                >
                  {t.hero.contactar}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 flex flex-col gap-3 border-t border-hairline/50 pt-8">
                {t.hero.features.map((label, i) => {
                  const Icon = heroIcons[i] ?? BadgeCheck;
                  return (
                    <div key={label} className="flex items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0 text-secondary-ink" />
                      <span className="text-base font-medium text-paragraph">{label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative h-full">
            <div
              className="relative aspect-[1/1.15] overflow-hidden rounded-2xl shadow-float ring-1 ring-primary/5"
              style={{ transform: `translateY(${-parallax * 0.2}px)`, willChange: "transform" }}
            >
              <img
                src={heroImg} alt="Cumbre internacional de líderes en política y gobernanza"
                width={1400} height={1600} decoding="async" fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end gap-6 bg-gradient-to-t from-deep/70 via-deep/30 to-transparent px-8 py-10">
                <div className="text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{t.hero.badge}</p>
                  <p className="mt-2 text-xl font-display leading-tight text-white">{t.hero.badge_sub}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
