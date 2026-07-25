import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "./SectionHeader";
import { WorldMap } from "@/components/site/WorldMap";
import { waLink, PROGRAMS, METHOD_STEPS } from "./data";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export function Programs() {
  const { t } = useI18n();
  const featured = PROGRAMS.find((p) => p.featured) ?? PROGRAMS[0];
  const rest = PROGRAMS.filter((p) => p !== featured);
  return (
    <section id="programas" className="relative bg-background py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          title={
            <>
              {t.programs.title.split(" para ")[0]} para{" "}
              <span className="text-secondary-ink">{t.programs.title.split(" para ")[1]}</span>
            </>
          }
          subtitle={t.programs.subtitle}
          align="between"
          cta={
            <a
              href={waLink("Hola, quiero información sobre los programas de Stratega Academy")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("programas_ver_todos")}
              className="hidden items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-soft hover:border-primary/30 md:inline-flex"
            >
              {t.cta.ver_todos} <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <Reveal delay={100} className="mt-12">
          <div className="max-w-3xl rounded-2xl border border-hairline bg-gradient-to-r from-primary/5 via-secondary/3 to-transparent p-8 md:p-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-secondary-ink">
              {t.programs.modelo}
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight text-ink">
              {t.programs.modelo_title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-paragraph">
              {t.programs.modelo_desc}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <FeaturedProgram {...featured} />
        </Reveal>

        <div className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft">
          <div className="hidden items-center gap-x-6 border-b border-hairline bg-muted/50 px-6 py-3.5 lg:grid lg:grid-cols-[72px_minmax(0,1.7fr)_1fr_1fr_1fr_auto]">
            <span aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paragraph">
              {t.nav.programas}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paragraph">
              {t.programs.duracion}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paragraph">
              {t.programs.formato}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paragraph">
              {t.programs.nivel.split(" ")[0]}
            </span>
            <span aria-hidden />
          </div>
          <div className="divide-y divide-hairline">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} distance={14} duration={1000}>
                <ProgramRow {...p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Methodology — integrated below programs */}
        <div
          id="metodologia"
          className="relative mt-20 scroll-mt-24 overflow-hidden bg-deep py-20 md:py-24 -mx-[1.25rem] md:-mx-8 px-[1.25rem] md:px-8 rounded-2xl"
        >
          <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />
          <div className="container-x relative">
            <div className="max-w-2xl mb-14">
              <Reveal>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-accent/80">
                  {t.methodology.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-[1.05] text-white md:text-4xl">
                  {t.methodology.title}
                </h2>
                <span
                  aria-hidden="true"
                  className="section-line mt-4 block h-[2px] w-20 bg-accent"
                />
                <p className="mt-4 text-base leading-relaxed text-white/75">
                  {t.methodology.subtitle}
                </p>
              </Reveal>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {METHOD_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 110} distance={14} duration={1000}>
                  <article className="h-full border-l-2 border-accent/25 pl-6">
                    <div className="flex items-end justify-between gap-4">
                      <span className="font-stat text-6xl font-bold tracking-[-0.05em] text-accent/30 leading-none">
                        {s.n}
                      </span>
                      <s.icon className="h-5 w-5 shrink-0 text-accent/60" />
                    </div>
                    <h3 className="mt-6 font-sans text-lg font-bold leading-snug text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/70">{s.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProgram({
  title,
  desc,
  duration,
  format,
  level,
  icon: Icon,
  image,
}: (typeof PROGRAMS)[number]) {
  const { t } = useI18n();
  return (
    <article className="grid overflow-hidden rounded-2xl border border-hairline bg-white shadow-elegant lg:grid-cols-[1.2fr_1fr]">
      <div className="relative min-h-[300px] overflow-hidden lg:min-h-[520px]">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
        <div className="absolute left-0 top-0 flex items-center gap-2 bg-primary px-5 py-2.5 rounded-br-lg">
          <Icon className="h-4 w-4 text-primary-foreground" />
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">
            {t.programs.insignia}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center p-10 md:p-12 lg:p-14">
        <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-secondary-ink">
          {t.programs.master}
        </p>
        <h3 className="mt-5 font-display text-3xl leading-[1.06] text-ink md:text-4xl">{title}</h3>
        <p className="mt-6 text-[15px] leading-relaxed text-paragraph">{desc}</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-hairline/40 pt-10">
          {[
            { label: t.programs.duracion, value: duration },
            { label: t.programs.formato, value: format },
            { label: t.programs.nivel, value: level },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-paragraph/60">
                {label}
              </p>
              <p className="mt-2 font-sans text-sm font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-hairline/60 bg-background/60 p-5">
          <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-ink" />
          <p className="text-sm leading-relaxed text-paragraph">
            <span className="font-semibold text-ink">{t.programs.retiro}</span>{" "}
            {t.programs.retiro_desc}
          </p>
        </div>

        <div className="mt-10">
          <a
            href={waLink(`Hola, quiero información sobre el programa: ${title}`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(`programa_${title}`)}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-1"
          >
            {t.cta.info}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProgramMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-t border-hairline/70 pt-2 lg:block lg:border-0 lg:pt-0">
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-paragraph lg:hidden">
        {label}
      </span>
      <span className="text-sm font-medium text-ink tabular-nums">{value}</span>
    </div>
  );
}

function ProgramRow({
  tag,
  title,
  duration,
  format,
  level,
  icon: Icon,
  image,
}: (typeof PROGRAMS)[number]) {
  const { t } = useI18n();
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 px-8 py-7 transition-colors hover:bg-white/60 lg:grid-cols-[80px_minmax(0,1.8fr)_1.1fr_1.1fr_1.1fr_auto] lg:items-center lg:gap-y-0">
      <div className="hidden h-[80px] w-[80px] overflow-hidden rounded-lg lg:block">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg lg:hidden">
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-secondary-ink">
            <Icon className="h-3.5 w-3.5" /> {tag}
          </p>
          <h3 className="mt-2 font-sans text-base font-bold leading-snug tracking-[-0.015em] text-ink md:text-lg">
            {title}
          </h3>
        </div>
      </div>
      <ProgramMeta label="Duración" value={duration} />
      <ProgramMeta label="Formato" value={format} />
      <ProgramMeta label="Nivel" value={level} />
      <a
        href={waLink(`Hola, quiero información sobre el programa: ${title}`)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(`programa_row_${title}`)}
        className="mt-2 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-primary transition-colors hover:text-secondary-ink lg:mt-0 lg:justify-self-end"
      >
        {t.cta.mas_info} <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
