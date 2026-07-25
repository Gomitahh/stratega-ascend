import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "./SectionHeader";
import { FACULTY } from "./data";
import { useI18n } from "@/lib/i18n";

export function Faculty() {
  const { t } = useI18n();

  return (
    <section id="docentes" className="relative bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionHeader
            title={
              <>
                {t.faculty.title.split(" y ")[0]} y{" "}
                <span className="text-secondary-ink">{t.faculty.title.split(" y ")[1]}</span>
              </>
            }
            subtitle={t.faculty.subtitle}
          />
        </div>

        <div className="mt-18 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {FACULTY.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <article className="group flex h-full items-center gap-5 rounded-2xl border border-hairline bg-white p-5 shadow-soft transition-colors duration-300 ease-[var(--ease-premium)] hover:bg-white/80 sm:gap-7 sm:p-7">
                <div className="h-40 w-32 shrink-0 overflow-hidden rounded-xl sm:h-[200px] sm:w-40">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover transition-transform duration-[450ms] ease-[var(--ease-premium)] group-hover:scale-[1.025] ${
                      index === 0 ? "object-[31%_center]" : "object-center"
                    }`}
                  />
                </div>

                <div className="min-w-0 py-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-secondary-ink">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight text-ink transition-colors duration-300 group-hover:text-secondary-ink sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{member.focus}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
