import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { getGAScript, getGAInitScript, getMetaPixelScript } from "../lib/analytics";
import { I18nProvider } from "../lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-deep px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="font-stat text-sm font-semibold tracking-[0.18em] text-accent">ERROR 404</p>
        <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
          Esta ruta no forma parte del programa.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70">
          La página que buscas no existe o cambió de ubicación. Regresa al inicio para continuar
          explorando Stratega Academy.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#11100E" },
      { title: "Stratega Academy — Liderazgo, Gobernanza y Estrategia" },
      {
        name: "description",
        content:
          "Academia internacional de formación en liderazgo político, gobernanza, estrategia, comunicación e inteligencia aplicada.",
      },
      { property: "og:site_name", content: "Stratega Academy" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_PE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@stratega.politiks" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://stratega.academy" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "64x64" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/favicon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        {getGAScript() && <script src={getGAScript()!.src} data-cfasync="false" async />}
        {getGAInitScript() && <script dangerouslySetInnerHTML={{ __html: getGAInitScript()! }} />}
        {getMetaPixelScript() && (
          <script dangerouslySetInnerHTML={{ __html: getMetaPixelScript()! }} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Stratega Academy",
              url: "https://stratega.academy",
              description:
                "Academia internacional de liderazgo político, gobernanza, estrategia e inteligencia aplicada.",
              knowsAbout: [
                "Liderazgo político",
                "Gobernanza",
                "Estrategia",
                "Comunicación política",
              ],
              offers: {
                "@type": "AggregateOffer",
                offers: [
                  {
                    "@type": "Course",
                    name: "Máster Internacional en Liderazgo Político",
                    description:
                      "Programa integral de 9 meses para futuros líderes con impacto en agendas públicas.",
                    duration: "P9M",
                    educationalCredentialAwarded: "Máster Internacional",
                    inLanguage: "es",
                  },
                  {
                    "@type": "Course",
                    name: "Certificación en Estrategia y Campañas",
                    description:
                      "War room, arquitectura de mensaje, segmentación electoral y disciplina de campaña.",
                    duration: "P16W",
                    educationalCredentialAwarded: "Certificación",
                    inLanguage: "es",
                  },
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PE",
              },
            }),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[var(--z-notification)] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        {children}
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker'in navigator){navigator.serviceWorker.register('/sw.js')}`,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
