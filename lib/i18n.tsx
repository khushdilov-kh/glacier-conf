"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, LocalizedString } from "@/lib/types";

const STORAGE_KEY = "lang";

export const supportedLanguages = ["en", "ru", "tg"] as const satisfies readonly Lang[];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value?: LocalizedString | string | null) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function normalizeLang(value?: string): Lang {
  return supportedLanguages.find((lang) => lang === value) ?? "en";
}

export function LanguageProvider({
  initialLang,
  children
}: {
  initialLang?: Lang;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(normalizeLang(initialLang));

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const preferred = stored ?? window.navigator.language.split("-")[0];
    if (preferred && supportedLanguages.includes(preferred as Lang) && preferred !== lang) {
      setLangState(preferred as Lang);
    }
  }, []);

  useEffect(() => {
    document.cookie = `${STORAGE_KEY}=${lang};path=/;max-age=31536000`;
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const t = (value?: LocalizedString | string | null) => {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[lang] ?? value.ru ?? value.en ?? "";
  };

  const contextValue = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
