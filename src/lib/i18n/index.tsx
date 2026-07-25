import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from "react";
import type { Locale, Translations } from "./types";
import { es } from "./es";
import { en } from "./en";

const STORAGE_KEY = "stratega-locale";

const translations: Record<string, Translations> = { es, en };

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && (stored === "es" || stored === "en" || stored === "pt")) return stored;
  const navLang = navigator.language?.slice(0, 2);
  if (navLang === "en") return "en";
  return "es";
}

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "es",
  t: es,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const t = translations[locale] ?? es;

  return <I18nContext.Provider value={{ locale, t, setLocale }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
