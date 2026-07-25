import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { trackFormSubmission } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "51940371250";
const buildWaLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function ContactSection() {
  const { t } = useI18n();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const fullName = `${firstname.trim()} ${lastname.trim()}`.trim();

    if (!fullName || !email.trim() || !message.trim()) {
      setError("Completa tu nombre, email y mensaje para que podamos contactarte.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    const waMessage = [
      `*Nuevo mensaje — Stratega Academy*`,
      ``,
      `*Nombre:* ${fullName}`,
      `*Email:* ${email.trim()}`,
      `*Asunto:* ${subject.trim() || "No especificado"}`,
      `*Mensaje:*`,
      message.trim(),
    ].join("\n");

    trackFormSubmission("contact_form");
    setSent(true);
    window.open(buildWaLink(waMessage), "_blank", "noopener,noreferrer");
  };

  const resetForm = () => {
    setSent(false);
    setFirstname("");
    setLastname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  if (sent) {
    return (
      <section className="bg-background py-28 md:py-36">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-secondary" />
              <h2 className="mt-6 font-display text-3xl leading-tight text-ink">
                {t.contact.success}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paragraph">
                {t.contact.success_desc}
              </p>
              <button
                onClick={resetForm}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-ink transition-colors hover:text-accent"
              >
                Enviar otro mensaje
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-secondary-ink">
                Contacto
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
                {t.contact.title}
              </h2>
              <span aria-hidden="true" className="section-line mt-5 block h-[2px] w-20 bg-accent" />
              <p className="mt-5 text-base leading-relaxed text-paragraph">
                {t.contact.description}
              </p>
            </div>

            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center font-display text-2xl font-semibold text-ink lg:text-left">
                {t.contact.details}
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 shrink-0 text-secondary-ink" />
                  <span className="font-bold text-ink">WhatsApp: </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-ink underline underline-offset-2 hover:text-accent"
                  >
                    +51 940 371 250
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-4 w-4 shrink-0" />
                  <span className="font-bold text-ink">Email: </span>
                  <a
                    href="mailto:strategacompol@gmail.com"
                    className="text-secondary-ink underline underline-offset-2 hover:text-accent"
                  >
                    strategacompol@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-4 w-4 shrink-0" />
                  <span className="font-bold text-ink">Instagram: </span>
                  <a
                    href="https://www.instagram.com/stratega.politiks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-ink underline underline-offset-2 hover:text-accent"
                  >
                    @stratega.politiks
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-2xl border border-hairline bg-background p-8 shadow-soft md:p-10">
            {error && (
              <div
                id="contact-error"
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-5 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              noValidate
              aria-describedby={error ? "contact-error" : undefined}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="contact-firstname" className="text-sm font-semibold text-ink">
                    {t.contact.firstname}
                  </label>
                  <input
                    type="text"
                    id="contact-firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Tu nombre"
                    autoComplete="given-name"
                    required
                    className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="contact-lastname" className="text-sm font-semibold text-ink">
                    {t.contact.lastname}
                  </label>
                  <input
                    type="text"
                    id="contact-lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Tu apellido"
                    autoComplete="family-name"
                    className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="contact-subject" className="text-sm font-semibold text-ink">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Sobre qué quieres hablar"
                  className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              <div className="grid w-full gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="btn-sweep group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant btn-transition hover:-translate-y-1 hover:shadow-float"
              >
                {t.contact.send}
                <Send className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
