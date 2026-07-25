export interface Translations {
  nav: { programas: string; metodologia: string; docentes: string; eventos: string };
  hero: {
    cohorte: string;
    headline: string;
    subtitle: string;
    features: string[];
    explorar: string;
    contactar: string;
    badge: string;
    badge_sub: string;
  };
  cta: { aplicar: string; solicitar: string; info: string; mas_info: string; ver_todos: string; hablar: string; enviar: string };
  about: { title: string; subtitle: string; p1: string; p2_bold: string; p2_post: string; cta: string };
  metrics: { title: string; subtitle: string };
  faculty: { title: string; subtitle: string; affiliation: string; others: string };
  pillars: { title: string; subtitle: string };
  programs: { title: string; subtitle: string; modelo: string; modelo_title: string; modelo_desc: string; insignia: string; master: string; retiro: string; retiro_desc: string; duracion: string; formato: string; nivel: string };
  methodology: { title: string; eyebrow: string; subtitle: string };
  testimonials: { title: string };
  events: { title: string; subtitle: string };
  faq: { title: string; desc: string; cta: string };
  contact: {
    title: string;
    description: string;
    details: string;
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    success: string;
    success_desc: string;
  };
  finalcta: { eyebrow: string; title: string; subtitle: string; solicitar: string; hablar: string; proceso: string; cierre: string; checkpoints: string[] };
  footer: { tagline: string; derechos: string; academia: string; recursos: string; institucional: string; desc: string; privacidad: string; terminos: string; codigo: string; accesibilidad: string };
}

export type Locale = "es" | "en" | "pt";