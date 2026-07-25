import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  ColumnRail,
  IntroVisual,
  Hero,
  AboutUs,
  Faculty,
  Programs,
  Testimonials,
  Events,
  ContactSection,
  FAQ,
  FinalCTA,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stratega Academy: formación internacional en liderazgo y estrategia política" },
      {
        name: "description",
        content:
          "Academia internacional de liderazgo político, gobernanza, estrategia, comunicación e inteligencia aplicada. Programas certificados con docentes de clase mundial.",
      },
      { property: "og:title", content: "Stratega Academy: Liderazgo, Estrategia e Inteligencia" },
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
      <ColumnRail />
      <main id="main-content">
        <IntroVisual />
        <Hero />
        <AboutUs />
        <Faculty />
        <Programs />
        <Testimonials />
        <Events />
        <ContactSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
