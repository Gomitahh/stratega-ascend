import {
  BookOpen,
  BrainCircuit,
  Compass,
  Crown,
  Globe2,
  Radar,
  Rocket,
  Scale,
  Target,
} from "lucide-react";

import heroImg from "@/assets/hero-leadership.jpg";
import architectureImg from "@/assets/architecture-1.jpg";
import strategyImg from "@/assets/strategy-meeting.jpg";
import cityImg from "@/assets/city-skyline.jpg";
import teamFounderImg from "@/assets/team-founder.jpeg";
import teamCofounderImg from "@/assets/team-cofounder.jpeg";
import teamProfessorImg from "@/assets/team-professor.jpeg";
import sessionCommunicationImg from "@/assets/session-communication.jpeg";
import sessionGovernanceImg from "@/assets/session-governance.jpeg";

export const WHATSAPP_BASE = "https://wa.me/51940371250";
export const waLink = (message: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

export const PILLARS = [
  {
    icon: BookOpen,
    title: "Formación internacional",
    desc: "Programas certificados en liderazgo político, gobernanza y estrategia, diseñados con expertos de 30+ países.",
  },
  {
    icon: BrainCircuit,
    title: "Investigación aplicada",
    desc: "Laboratorio de análisis prospectivo, inteligencia política e investigación en gobernanza comparada.",
  },
  {
    icon: Globe2,
    title: "Red global",
    desc: "Comunidad de 12,400+ alumni en 32 países, conectando decisores públicos, estrategas y líderes políticos.",
  },
  {
    icon: Rocket,
    title: "Impacto transformacional",
    desc: "Apoyo activo a proyectos de nuestros alumni que transforman agendas públicas y políticas en sus territorios.",
  },
];

export const PROGRAMS = [
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

export const METHOD_STEPS = [
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

export interface FacultyMember {
  name: string;
  role: string;
  focus: string;
  image: string;
}

export const FACULTY: FacultyMember[] = [
  {
    name: "Víctor",
    role: "Fundador · Stratega Academy",
    focus: "Liderazgo institucional y visión académica de Stratega Academy.",
    image: teamFounderImg,
  },
  {
    name: "Giovanni Paolo Berroa Oquendo",
    role: "Cofundador · Stratega Academy",
    focus: "Desarrollo estratégico y proyección internacional de la academia.",
    image: teamCofounderImg,
  },
];

export const METRICS = [
  {
    value: 12400,
    label: "Alumni formados",
    suffix: "+",
    desc: "En 32 países y 5 continentes",
  },
  {
    value: 32,
    label: "Países con presencia",
    desc: "Red global de líderes activos",
  },
  {
    value: 180,
    label: "Docentes certificados",
    suffix: "+",
    desc: "Investigadores y ex funcionarios",
  },
  {
    value: 60,
    label: "Instituciones aliadas",
    suffix: "+",
    desc: "Universidades y organismos globales",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Stratega me dio herramientas que ninguna maestría me había dado antes: rigor académico y aplicación real en la toma de decisiones públicas. Cambió mi forma de entender la estrategia política.",
    name: "María Fernanda Castillo",
    role: "Directora de Gabinete · México",
  },
  {
    quote:
      "El nivel del claustro y la comunidad internacional son excepcionales. Conecté con estrategas de 12 países en mi cohorte. Una experiencia que todo líder público debería vivir.",
    name: "Carlos Andrés Mendoza",
    role: "Consultor Político · Colombia",
  },
  {
    quote:
      "La metodología del laboratorio aplicado te transforma en un profesional mucho más sofisticado. Las simulaciones de war room son brutalmente realistas y útiles.",
    name: "Ana Lucía Ramírez",
    role: "Asesora Legislativa · Perú",
  },
];

export const EVENTS_DATA = [
  {
    date: "04 · JUL",
    city: "Online · En vivo",
    title: "Masterclass Internacional: Redes sociales como herramientas de poder político",
    speaker: "Rayane Moreira · Estratega digital · Brasil",
    tag: "Masterclass",
    image: sessionCommunicationImg,
    ctaLabel: "Quiero info de la próxima masterclass",
    ctaMessage: "Hola, quiero información sobre la próxima masterclass de Stratega Academy",
  },
  {
    date: "17 · JUN",
    city: "Online · En vivo",
    title: "Masterclass: Estado Peruano, Descentralización y Gobernanza Territorial",
    speaker: "William Manuel Llatance Chávez · Abogado constitucionalista",
    tag: "Masterclass",
    image: sessionGovernanceImg,
    ctaLabel: "Quiero info de la próxima masterclass",
    ctaMessage: "Hola, quiero información sobre la próxima masterclass de Stratega Academy",
  },
  {
    date: "SEP 2026",
    city: "Convocatoria abierta",
    title: "Programa de Pasantías Preprofesionales — Cohortes Internacionales",
    speaker: "Stratega Politiks · Tres áreas: Estrategia, Comunicación, Análisis",
    tag: "Pasantías",
    image: architectureImg,
    ctaLabel: "Postular a pasantías",
    ctaMessage: "Hola, quiero postular al Programa de Pasantías Preprofesionales de Stratega",
  },
];

export const FAQS = [
  {
    q: "¿Qué requisitos necesito para aplicar?",
    a: "Buscamos perfiles con vocación pública y al menos 2 años de experiencia profesional demostrable en gobierno, consultoría política, organizaciones internacionales o cargos de representación. El comité de admisión evalúa cada perfil de forma individual.",
  },
  {
    q: "¿Los programas otorgan certificación oficial?",
    a: "Sí. Todos nuestros programas otorgan certificación verificable con código QR. Contamos con aval académico de instituciones aliadas internacionales y el respaldo de Stratega Politiks.",
  },
  {
    q: "¿Existen becas o planes de financiación?",
    a: "Ofrecemos becas al mérito académico (hasta 40%), becas por país para postulantes de economías emergentes, y planes de pago en 6 cuotas sin interés para programas insignia y ejecutivos.",
  },
  {
    q: "¿Cuál es la modalidad de las clases?",
    a: "Combinamos sesiones online en vivo vía Zoom con plataforma de aprendizaje propia, más un componente presencial optativo. Los programas híbridos incluyen una semana presencial en Madrid o Ciudad de México. Consultá cada ficha para la modalidad específica.",
  },
  {
    q: "¿Puedo estudiar desde cualquier país?",
    a: "Sí. Nuestras sesiones en vivo se graban y se adaptan a múltiples zonas horarias. El campus virtual está disponible 24/7 con mentorías programables según tu ubicación. Actualmente tenemos estudiantes activos en 32 países.",
  },
  {
    q: "¿Cuál es el proceso de admisión?",
    a: "Completás el formulario de solicitud, adjuntás tu CV y una carta de motivación. El comité académico revisa tu perfil en un plazo de 5 días hábiles. Si tu perfil es seleccionado, coordinamos una entrevista virtual de 30 minutos. Resultado final en máximo 10 días.",
  },
  {
    q: "¿Qué diferencia a Stratega de un MBA tradicional?",
    a: "Stratega no es un MBA genérico. Somos una academia vertical especializada en liderazgo político y estrategia gubernamental. Nuestro claustro son ex funcionarios y estrategas en ejercicio, no académicos de tiempo completo. Enseñamos lo que hacemos.",
  },
];

export { heroImg, architectureImg, strategyImg, cityImg, teamFounderImg, teamCofounderImg, teamProfessorImg, sessionCommunicationImg, sessionGovernanceImg };
