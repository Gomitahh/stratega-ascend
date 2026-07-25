import { Reveal } from "@/components/site/Reveal";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "between";
  cta?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, align = "center", cta }: SectionHeaderProps) {
  if (align === "between") {
    return (
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.06] text-ink md:text-5xl">{title}</h2>
          <span aria-hidden="true" className="section-line mt-5 block h-[2px] w-20 bg-accent" />
          {subtitle && <p className="mt-5 max-w-xl text-lg leading-relaxed text-paragraph">{subtitle}</p>}
        </Reveal>
        {cta && <Reveal delay={120}>{cta}</Reveal>}
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <h2 className="font-display text-4xl leading-[1.06] text-ink md:text-5xl">{title}</h2>
        <span aria-hidden="true" className="section-line mx-auto mt-5 block h-[2px] w-20 bg-accent" />
      </Reveal>
      {subtitle && (
        <Reveal delay={150}>
          <p className="mt-5 text-lg leading-relaxed text-paragraph">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
