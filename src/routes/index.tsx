import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Building2,
  Calendar,
  ChevronDown,
  Compass,
  Crown,
  Flag,
  Globe2,
  GraduationCap,
  Landmark,
  LineChart,
  MessageSquareQuote,
  Play,
  Radar,
  Rocket,
  ScrollText,
  Scale,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WorldMap } from "@/components/site/WorldMap";
import { useCounter, useReveal } from "@/hooks/use-reveal";

import heroImg from "@/assets/hero-leadership.jpg";
import architectureImg from "@/assets/architecture-1.jpg";
import strategyImg from "@/assets/strategy-meeting.jpg";
import cityImg from "@/assets/city-skyline.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stratega Academy — Formación internacional en liderazgo y estrategia política" },
      {
        name: "description",
        content:
          "Academia internacional de liderazgo político, gobernanza, estrategia, comunicación e inteligencia aplicada. Programas certificados con docentes de clase mundial.",
      },
      { property: "og:title", content: "Stratega Academy — Liderazgo, Estrategia e Inteligencia" },
      {
        property: "og:description",
        content:
          "Formamos a la próxima generación de líderes, estrategas y decisores públicos con estándares académicos internacionales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Partners />
        <WhyUs />
        <Programs />
        <Methodology />
        <Benefits />
        <Faculty />
        <Testimonials />
        <Events />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ────────────────────────── HERO ────────────────────────── */

function Hero() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallax(Math.min(80, window.scrollY * 0.15));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={scrollRef} className="relative overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-[0.35] [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]" />
      <WorldMap className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-[520px] w-full max-w-[1600px] text-primary/8" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Cohorte Internacional 2026 · Aplicaciones abiertas
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-ink md:text-6xl lg:text-[4.2rem]">
                Formamos a los{" "}
                <span className="text-gradient-brand">líderes</span> que
                <br className="hidden md:block" /> tomarán las decisiones{" "}
                <span className="relative whitespace-nowrap">
                  del futuro
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 Q 50 2, 100 6 T 198 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-paragraph">
                Academia internacional de{" "}
                <span className="font-semibold text-ink">liderazgo político, gobernanza, estrategia,
                comunicación e inteligencia aplicada</span>. Programas certificados con docentes de
                universidades y organismos multilaterales de más de 30 países.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#programas"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
                >
                  Explorar programas
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#metodologia"
                  className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Play className="h-3 w-3 fill-current" />
                  </span>
                  Ver metodología
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-paragraph">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-secondary" />
                  Acreditación internacional
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-accent" />
                  Certificación oficial
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  Aval de organismos multilaterales
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={200} className="relative">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-float"
              style={{ transform: `translateY(${-parallax * 0.3}px)` }}
            >
              <img
                src={heroImg}
                alt="Cumbre internacional de líderes en un auditorio contemporáneo"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Globe2 className="h-4 w-4" />
                  </span>
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest text-white/70">Global Summit</p>
                    <p className="text-sm font-semibold">Estrategia & Gobernanza 2026</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/80" />
              </div>
            </div>

            {/* Floating stats card */}
            <StatCard
              className="absolute -left-6 top-16 hidden md:block"
              icon={<Users className="h-4 w-4 text-secondary" />}
              label="Alumni activos"
              value={12400}
              suffix="+"
            />
            <StatCard
              className="absolute -right-6 top-1/2 hidden md:block"
              icon={<Globe2 className="h-4 w-4 text-accent" />}
              label="Países"
              value={32}
              accent
            />
            <StatCard
              className="absolute -left-4 bottom-8 hidden md:block"
              icon={<Star className="h-4 w-4 text-secondary" />}
              label="Satisfacción"
              value={98}
              suffix="%"
            />
          </Reveal>
        </div>

        {/* Bottom stat bar */}
        <Reveal delay={500}>
          <div className="mt-20 grid gap-4 rounded-3xl border border-hairline bg-white/60 p-6 backdrop-blur-md shadow-soft sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
            {[
              { icon: Users, label: "Estudiantes formados", value: 12400, suffix: "+" },
              { icon: GraduationCap, label: "Docentes internacionales", value: 180, suffix: "+" },
              { icon: Landmark, label: "Instituciones aliadas", value: 60 },
              { icon: Flag, label: "Presencia en países", value: 32 },
            ].map((s, i) => (
              <StatBlock key={i} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({
  className = "",
  icon,
  label,
  value,
  suffix,
  accent,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  accent?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const n = useCounter(value, 1600, shown);
  return (
    <div ref={ref} className={`glass-card rounded-2xl px-4 py-3 ${className}`}>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 place-items-center rounded-xl ${
            accent ? "bg-accent/15" : "bg-secondary/10"
          }`}
        >
          {icon}
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-paragraph">
            {label}
          </p>
          <p className="font-stat text-lg font-bold tracking-tight text-ink tabular-nums">
            {n.toLocaleString("es")}
            {suffix}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatBlock({
  icon: Icon,
  label,
  value,
  suffix,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const n = useCounter(value, 1800, shown);
  return (
    <div ref={ref} className="flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/5 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-stat text-2xl font-bold tracking-tight text-ink tabular-nums">
          {n.toLocaleString("es")}
          {suffix}
        </p>
        <p className="text-xs font-medium text-paragraph">{label}</p>
      </div>
    </div>
  );
}

/* ────────────────────────── PARTNERS ────────────────────────── */

const PARTNERS = [
  "Harvard Kennedy",
  "Oxford Politics",
  "IE University",
  "LSE",
  "Sciences Po",
  "OEA",
  "PNUD",
  "Georgetown",
];

function Partners() {
  return (
    <section className="border-y border-hairline/70 bg-white py-10">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-paragraph">
            Aliados académicos e institucionales
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 opacity-80 md:grid-cols-4 lg:grid-cols-8">
          {PARTNERS.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="flex items-center justify-center gap-2 text-center">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/8">
                  <Landmark className="h-4 w-4 text-primary" />
                </span>
                <span className="font-display text-sm font-bold tracking-tight text-primary/80">
                  {p}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── WHY US ────────────────────────── */

const WHY = [
  {
    icon: Globe2,
    title: "Perspectiva internacional",
    desc: "Programas diseñados con expertos de 30+ países y estudios comparados de gobernanza real.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia aplicada",
    desc: "Metodologías basadas en datos, IA y análisis prospectivo para decisiones de alto impacto.",
  },
  {
    icon: Award,
    title: "Certificación reconocida",
    desc: "Credenciales avaladas por instituciones académicas y organismos multilaterales.",
  },
  {
    icon: Users,
    title: "Red global de alumni",
    desc: "Comunidad activa de líderes, estrategas y decisores públicos en cinco continentes.",
  },
  {
    icon: Compass,
    title: "Mentoría 1:1",
    desc: "Acompañamiento personalizado por parte de asesores con experiencia gubernamental real.",
  },
  {
    icon: Rocket,
    title: "Casos reales",
    desc: "Aprendizaje basado en dossiers, war rooms y simulaciones de campañas y crisis.",
  },
];

function WhyUs() {
  return (
    <section id="por-que" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.25] [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Por qué Stratega Academy"
          title={
            <>
              La escuela para quienes van a{" "}
              <span className="text-gradient-brand">gobernar el futuro</span>.
            </>
          }
          subtitle="Formación de élite pensada para líderes, asesores, estrategas y equipos de gobierno que operan en entornos exigentes."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <article className="hover-lift group h-full rounded-3xl border border-hairline bg-white p-7 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-elegant transition-transform duration-500 group-hover:scale-110">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{w.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-paragraph">{w.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                  Descubrir <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── PROGRAMS ────────────────────────── */

const PROGRAMS = [
  {
    tag: "Insignia",
    title: "Máster Internacional en Liderazgo Político",
    desc: "Programa integral de 9 meses para futuros líderes con impacto en agendas públicas.",
    duration: "9 meses",
    format: "Híbrido",
    level: "Avanzado",
    icon: Crown,
    image: heroImg,
    featured: true,
  },
  {
    tag: "Estrategia",
    title: "Certificación en Estrategia y Campañas",
    desc: "War room, arquitectura de mensaje, segmentación electoral y disciplina de campaña.",
    duration: "16 semanas",
    format: "Online en vivo",
    level: "Intermedio",
    icon: Target,
    image: strategyImg,
  },
  {
    tag: "Gobernanza",
    title: "Programa Ejecutivo en Gobernanza Global",
    desc: "Diseño de políticas públicas, cooperación internacional y multilateralismo aplicado.",
    duration: "12 semanas",
    format: "Presencial · Madrid",
    level: "Ejecutivo",
    icon: Scale,
    image: architectureImg,
  },
  {
    tag: "Inteligencia",
    title: "Diplomado en Inteligencia y Prospectiva",
    desc: "Análisis de riesgo, escenarios geopolíticos e inteligencia aplicada a la decisión.",
    duration: "10 semanas",
    format: "Online",
    level: "Intermedio",
    icon: Radar,
    image: cityImg,
  },
];

function Programs() {
  return (
    <section id="programas" className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Programas destacados"
          title={
            <>
              Formación diseñada para <span className="text-gradient-brand">tomar decisiones reales</span>.
            </>
          }
          subtitle="Rutas académicas certificadas, con cohortes internacionales y admisión curada."
          align="between"
          cta={
            <a
              href="#"
              className="hidden items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-soft hover:border-primary/30 md:inline-flex"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-6">
          {PROGRAMS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className={p.featured ? "lg:col-span-3" : "lg:col-span-3 xl:col-span-2"}
            >
              <ProgramCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  tag,
  title,
  desc,
  duration,
  format,
  level,
  icon: Icon,
  image,
  featured,
}: (typeof PROGRAMS)[number]) {
  return (
    <article className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-soft">
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/20 to-transparent" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Icon className="h-3 w-3" /> {tag}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
              <Sparkles className="h-3 w-3" /> Insignia
            </span>
          )}
        </div>
        <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
          {[duration, format, level].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`font-display font-bold text-ink ${featured ? "text-2xl" : "text-lg"}`}>
          {title}
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-paragraph">{desc}</p>
        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Ver programa <ArrowUpRight className="h-4 w-4" />
          </a>
          <span className="text-xs font-medium text-paragraph">Cohorte 2026</span>
        </div>
      </div>
    </article>
  );
}

/* ────────────────────────── METHODOLOGY ────────────────────────── */

const METHOD_STEPS = [
  {
    n: "01",
    title: "Diagnóstico estratégico",
    desc: "Evaluación inicial de perfil, objetivos y contexto para diseñar tu ruta académica.",
    icon: Compass,
  },
  {
    n: "02",
    title: "Fundamentos avanzados",
    desc: "Marcos teóricos de liderazgo, gobernanza, estrategia y comunicación política.",
    icon: BookOpen,
  },
  {
    n: "03",
    title: "Laboratorio aplicado",
    desc: "Simulaciones, war rooms y casos reales guiados por asesores internacionales.",
    icon: BrainCircuit,
  },
  {
    n: "04",
    title: "Proyecto de impacto",
    desc: "Diseño y defensa de una intervención real ante un comité académico global.",
    icon: Rocket,
  },
];

function Methodology() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-deep py-24 text-white md:py-32">
      <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/10" />
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-grid-soft [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-end gap-8 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Metodología Stratega
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
              Aprender como se decide{" "}
              <span className="text-gradient-gold">en la realidad</span>.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              Cuatro fases que integran teoría rigurosa, práctica intensiva y mentoría de alto nivel.
              Diseñado para transformar conocimiento en criterio y criterio en resultados.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {METHOD_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/20 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="flex items-center justify-between">
                  <span className="font-stat text-4xl font-bold tracking-tight text-white/25">
                    {s.n}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/10">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── BENEFITS ────────────────────────── */

const BENEFITS = [
  { icon: BadgeCheck, title: "Certificación internacional", desc: "Credencial verificable y respaldada." },
  { icon: Users, title: "Red global de alumni", desc: "Comunidad activa en cinco continentes." },
  { icon: MessageSquareQuote, title: "Mentoría 1:1", desc: "Asesores con experiencia real." },
  { icon: ScrollText, title: "Bibliografía curada", desc: "Acceso a papers, dossiers y casos." },
  { icon: LineChart, title: "Herramientas premium", desc: "Software de análisis e inteligencia." },
  { icon: Building2, title: "Visitas institucionales", desc: "Encuentros con think tanks y gobiernos." },
];

function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Beneficios
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Una experiencia académica{" "}
              <span className="text-gradient-brand">integral y premium</span>.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-paragraph">
              Todo lo que necesitas para acelerar tu carrera política, estratégica o
              institucional. Excelencia académica, red internacional y herramientas de
              primer nivel.
            </p>

            <div className="mt-8 rounded-3xl border border-hairline bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <img
                  src={strategyImg}
                  alt="Reunión estratégica ejecutiva"
                  loading="lazy"
                  className="h-20 w-24 shrink-0 rounded-2xl object-cover"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    Programa insignia
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">
                    Retiro internacional presencial en Madrid
                  </p>
                  <p className="mt-1 text-sm text-paragraph">
                    Una semana de inmersión con líderes internacionales.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="hover-lift group flex h-full items-start gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/8 to-secondary/12 text-primary transition-transform group-hover:scale-110">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[15px] font-bold text-ink">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-paragraph">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── FACULTY ────────────────────────── */

const FACULTY = [
  {
    name: "Dra. Elena Márquez",
    role: "Directora Académica",
    focus: "Gobernanza global · Harvard Kennedy School",
    image: faculty1,
  },
  {
    name: "Prof. Andreas Klein",
    role: "Cátedra de Estrategia",
    focus: "LSE · Ex asesor Consejo Europeo",
    image: faculty2,
  },
  {
    name: "Dra. Camila Restrepo",
    role: "Cátedra de Comunicación Política",
    focus: "Sciences Po · Ex directora BID",
    image: faculty3,
  },
  {
    name: "Prof. Richard Hollis",
    role: "Cátedra de Inteligencia",
    focus: "Georgetown · Ex analista OTAN",
    image: faculty4,
  },
];

function Faculty() {
  return (
    <section id="docentes" className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Docentes internacionales"
          title={
            <>
              Un claustro de <span className="text-gradient-brand">clase mundial</span>.
            </>
          }
          subtitle="Investigadores, ex funcionarios y estrategas con experiencia gubernamental real, provenientes de las principales instituciones del planeta."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <article className="hover-lift group overflow-hidden rounded-3xl border border-hairline bg-white shadow-soft">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {f.role}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight">{f.name}</h3>
                  </div>
                </div>
                <div className="border-t border-hairline p-5">
                  <p className="text-sm text-paragraph">{f.focus}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── TESTIMONIALS ────────────────────────── */

const TESTIMONIALS = [
  {
    quote:
      "Stratega me dio herramientas que ninguna maestría me había dado antes: rigor académico y aplicación real en la toma de decisiones.",
    name: "María Fernanda Ossa",
    role: "Directora de gabinete",
    country: "Colombia",
  },
  {
    quote:
      "El nivel del claustro y la comunidad internacional son excepcionales. Es una escuela pensada para quienes toman decisiones de verdad.",
    name: "Diego Aranha",
    role: "Estratega de campaña",
    country: "Brasil",
  },
  {
    quote:
      "Una experiencia intelectualmente exigente. La metodología te transforma en un profesional mucho más sofisticado.",
    name: "Sara Belmonte",
    role: "Consultora política",
    country: "España",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.18] [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />

      <div className="container-x relative">
        <SectionHeader
          eyebrow="Testimonios"
          title={
            <>
              Lo que dicen quienes ya son <span className="text-gradient-brand">Stratega</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="hover-lift flex h-full flex-col justify-between rounded-3xl border border-hairline bg-white p-7 shadow-soft">
                <div>
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-display text-lg leading-snug text-ink">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-paragraph">
                      {t.role} · {t.country}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── EVENTS ────────────────────────── */

const EVENTS = [
  {
    date: "18 · MAR",
    city: "Madrid",
    title: "Global Summit de Liderazgo Político",
    tag: "Presencial",
    image: architectureImg,
  },
  {
    date: "07 · MAY",
    city: "Ciudad de México",
    title: "Foro Iberoamericano de Estrategia",
    tag: "Presencial",
    image: cityImg,
  },
  {
    date: "22 · JUN",
    city: "Online",
    title: "Masterclass: Comunicación en crisis",
    tag: "En vivo",
    image: strategyImg,
  },
];

function Events() {
  return (
    <section id="eventos" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Eventos internacionales"
          title={
            <>
              Encuentros que <span className="text-gradient-brand">definen agendas</span>.
            </>
          }
          subtitle="Cumbres, foros y masterclasses con la comunidad global Stratega."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <article className="hover-lift group overflow-hidden rounded-3xl border border-hairline bg-white shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={e.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-2xl bg-white/95 px-3 py-2 text-center shadow-soft">
                    <p className="font-stat text-xs font-bold tracking-widest text-primary">
                      {e.date}
                    </p>
                  </div>
                  <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
                    {e.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-paragraph">
                    <Calendar className="h-3.5 w-3.5" /> {e.city}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{e.title}</h3>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
                  >
                    Reservar plaza <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── BLOG ────────────────────────── */

const POSTS = [
  {
    tag: "Estrategia",
    title: "Cómo diseñar una arquitectura de mensaje ganadora",
    read: "8 min",
    image: strategyImg,
  },
  {
    tag: "Gobernanza",
    title: "El nuevo mapa de la cooperación multilateral",
    read: "12 min",
    image: architectureImg,
  },
  {
    tag: "Inteligencia",
    title: "IA aplicada al análisis de riesgo político",
    read: "10 min",
    image: cityImg,
  },
];

function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Ideas & Análisis"
          title={
            <>
              Pensamiento <span className="text-gradient-brand">Stratega</span>.
            </>
          }
          subtitle="Publicaciones, análisis y ensayos de nuestra facultad y comunidad global."
          align="between"
          cta={
            <a
              href="#"
              className="hidden items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-soft hover:border-primary/30 md:inline-flex"
            >
              Todo el blog <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="hover-lift group overflow-hidden rounded-3xl border border-hairline bg-white shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-paragraph">
                    <span className="rounded-full bg-primary/8 px-2.5 py-1 text-primary">
                      {p.tag}
                    </span>
                    <span>{p.read} de lectura</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
                  >
                    Leer artículo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */

const FAQS = [
  {
    q: "¿Qué requisitos necesito para aplicar?",
    a: "Buscamos perfiles con vocación pública, experiencia profesional demostrable o formación previa en áreas afines. Cada programa tiene un comité de admisión curado.",
  },
  {
    q: "¿Los programas otorgan certificación oficial?",
    a: "Sí. Todos los programas otorgan una certificación verificable, con aval de instituciones académicas aliadas y organismos multilaterales colaboradores.",
  },
  {
    q: "¿Existen becas o financiación disponible?",
    a: "Contamos con becas al mérito, becas por país y planes de financiación en cuotas para programas insignia y ejecutivos.",
  },
  {
    q: "¿Cuál es la modalidad de las clases?",
    a: "Ofrecemos programas online en vivo, híbridos y presenciales en Madrid, Ciudad de México y Washington. Cada ficha detalla la modalidad específica.",
  },
  {
    q: "¿Puedo estudiar desde cualquier país?",
    a: "Sí. Nuestra plataforma y calendario están diseñados para cohortes multipaís, con sesiones y mentorías adaptadas a distintas zonas horarias.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr]">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Preguntas frecuentes
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Todo lo que necesitas saber para{" "}
              <span className="text-gradient-brand">dar el paso</span>.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-paragraph">
              ¿No encuentras tu respuesta? Nuestro equipo de admisiones te acompañará durante todo el
              proceso.
            </p>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5"
            >
              Hablar con admisiones <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={150}>
            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline bg-white shadow-soft"
              defaultValue="q0"
            >
              {FAQS.map((f, i) => (
                <Accordion.Item key={i} value={`q${i}`}>
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <span className="font-display text-base font-semibold text-ink">{f.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-paragraph transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-paragraph data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-6">{f.a}</div>
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

/* ────────────────────────── FINAL CTA ────────────────────────── */

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[36px] bg-deep px-8 py-16 shadow-float md:px-16 md:py-24">
          <WorldMap className="pointer-events-none absolute inset-0 h-full w-full text-white/10" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-20 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <span className="eyebrow border-white/15 bg-white/5 text-white">
                  <TrendingUp className="h-3.5 w-3.5 text-accent" /> Cohorte 2026 · Plazas limitadas
                </span>
                <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Aplica a la próxima generación de{" "}
                  <span className="text-gradient-gold">líderes globales</span>.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                  Un proceso de admisión curado, plazas limitadas y una comunidad
                  internacional lista para acompañarte.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-gold transition-all hover:-translate-y-0.5"
                  >
                    Iniciar aplicación <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
                  >
                    Descargar brochure
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="glass-dark rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Próximo llamado
                </p>
                <p className="mt-3 font-display text-2xl font-bold text-white">
                  Admisiones abiertas
                </p>
                <p className="mt-1 text-sm text-white/70">Cierre: 30 de septiembre de 2026</p>

                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  {[
                    "Comité de admisión internacional",
                    "Entrevista personalizada",
                    "Beca al mérito hasta 40%",
                  ].map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── SECTION HEADER ────────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  cta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "between";
  cta?: React.ReactNode;
}) {
  if (align === "between") {
    return (
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-paragraph">{subtitle}</p>
          )}
        </Reveal>
        {cta && <Reveal delay={120}>{cta}</Reveal>}
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span className="eyebrow">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={200}>
          <p className="mt-4 text-lg leading-relaxed text-paragraph">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
