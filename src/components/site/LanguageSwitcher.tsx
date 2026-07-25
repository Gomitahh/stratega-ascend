import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-0.5">
      {LOCALES.map((l, i) => (
        <span key={l.code}>
          <button
            onClick={() => setLocale(l.code)}
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
              locale === l.code ? "text-accent" : "text-white/50"
            }`}
          >
            {l.label}
          </button>
          {i < LOCALES.length - 1 && (
            <span className="mx-1 text-white/20">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
