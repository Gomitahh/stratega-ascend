import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { waLink, PROGRAMS } from "./data";
import { trackFormSubmission } from "@/lib/analytics";

const PROGRAM_OPTIONS = [
  { value: "", label: "Selecciona un programa" },
  ...PROGRAMS.map((p) => ({ value: p.title, label: p.title })),
  { value: "No estoy seguro", label: "Aún no estoy seguro" },
];

export function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Completa tu nombre, email y teléfono para que podamos contactarte.");
      return;
    }

    const body = [
      `*Nuevo lead - Stratega Academy*`,
      ``,
      `*Nombre:* ${name.trim()}`,
      `*Email:* ${email.trim()}`,
      `*Teléfono:* ${phone.trim()}`,
      `*Programa de interés:* ${program || "No especificado"}`,
      `*Mensaje:* ${message.trim() || "Sin mensaje adicional"}`,
    ].join("\n");

    trackFormSubmission("lead_form");
    setSent(true);
    window.open(waLink(body), "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <section className="bg-white py-28 md:py-36">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-secondary" />
              <h2 className="mt-6 font-display text-3xl leading-tight text-ink">Solicitud enviada</h2>
              <p className="mt-4 text-lg leading-relaxed text-paragraph">
                Gracias, {name}. Te hemos redirigido a WhatsApp para continuar con tu proceso de admisión.
              </p>
              <button
                onClick={() => { setSent(false); setName(""); setEmail(""); setPhone(""); setProgram(""); setMessage(""); }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-ink transition-colors hover:text-accent"
              >
                Enviar otra solicitud
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="aplicar" className="bg-white py-28 md:py-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-secondary-ink">
                Admisiones abiertas
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                Solicita información
              </h2>
              <span aria-hidden="true" className="section-line mx-auto mt-5 block h-[2px] w-20 bg-accent" />
              <p className="mt-5 mx-auto max-w-xl text-lg leading-relaxed text-paragraph">
                Completa tus datos y recibirás información personalizada sobre el programa que mejor se adapte a tu perfil.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="mt-14 space-y-6" noValidate>
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-5 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="lead-name" className="block text-sm font-semibold text-ink mb-1.5">
                    Nombre completo <span className="text-secondary-ink">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="block text-sm font-semibold text-ink mb-1.5">
                    Correo electrónico <span className="text-secondary-ink">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="lead-phone" className="block text-sm font-semibold text-ink mb-1.5">
                    Teléfono / WhatsApp <span className="text-secondary-ink">*</span>
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+51 999 999 999"
                    className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lead-program" className="block text-sm font-semibold text-ink mb-1.5">
                    Programa de interés
                  </label>
                  <select
                    id="lead-program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  >
                    {PROGRAM_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="lead-message" className="block text-sm font-semibold text-ink mb-1.5">
                  Mensaje o consulta
                </label>
                <textarea
                  id="lead-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos sobre tu perfil o lo que te gustaría saber..."
                  className="w-full rounded-lg border border-hairline bg-background px-4 py-3 text-sm text-ink placeholder:text-paragraph/50 focus:border-secondary-ink focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="btn-sweep group inline-flex items-center gap-2.5 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:shadow-float"
              >
                Enviar solicitud
                <Send className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
