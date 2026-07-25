import { ChevronDown, ArrowRight } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Reveal } from "@/components/site/Reveal";
import { waLink, FAQS } from "./data";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq" className="bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              {t.faq.title.split(" sobre ")[0]} sobre <span className="text-secondary-ink">{t.faq.title.split(" sobre ")[1]}</span>
            </h2>
            <span aria-hidden="true" className="section-line mt-5 block h-[2px] w-20 bg-accent" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paragraph">
              {t.faq.desc}
            </p>
            <a
              href={waLink("Hola, quiero hablar con el equipo de admisiones de Stratega Academy")}
              target="_blank" rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("faq_hablar_admisiones")}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant hover:-translate-y-1"
            >
              {t.faq.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={150}>
            <Accordion.Root
              type="single" collapsible
              className="divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft"
              defaultValue="q0"
            >
              {FAQS.map((f, i) => (
                <Accordion.Item key={i} value={`q${i}`}>
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-8 py-6 text-left transition-colors hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <span className="font-sans text-base font-bold text-ink">{f.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-paragraph transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-base leading-relaxed text-paragraph data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-8 pb-6">{f.a}</div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
