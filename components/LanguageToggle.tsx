"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const languageOptions = [
  {
    code: "en",
    flagClass: "fi-gb",
    shortLabel: "EN",
    label: "English",
    nativeLabel: "English"
  },
  {
    code: "ru",
    flagClass: "fi-ru",
    shortLabel: "RU",
    label: "Russian",
    nativeLabel: "Русский"
  },
  {
    code: "tg",
    flagClass: "fi-tj",
    shortLabel: "TJ",
    label: "Tajik",
    nativeLabel: "Тоҷикӣ"
  }
] as const;

type LanguageToggleProps = {
  variant?: "dropdown" | "inline";
  className?: string;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={cn("h-4 w-4 transition duration-200", open ? "rotate-180" : "")}
      aria-hidden="true"
    >
      <path d="m5.5 7.5 4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LanguageToggle({ variant = "dropdown", className }: LanguageToggleProps) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const menuId = useId();

  const activeOption = languageOptions.find((option) => option.code === lang) ?? languageOptions[0];

  if (variant === "inline") {
    return (
      <div className={cn("grid grid-cols-3 gap-2", className)} role="group" aria-label={t({ en: "Language switcher", ru: "Переключатель языка", tg: "Ивазкунандаи забон" })}>
        {languageOptions.map((option) => {
          const active = option.code === lang;

          return (
            <button
              key={option.code}
              type="button"
              aria-pressed={active}
              onClick={() => setLang(option.code)}
              className={cn(
                "flex min-h-[92px] flex-col items-start justify-between rounded-[22px] border px-3 py-3 text-left transition",
                active
                  ? "border-ink-900 bg-ink-900 text-white shadow-[0_18px_36px_rgba(15,23,42,0.18)]"
                  : "border-sand-200/80 bg-white/82 text-ink-800 hover:border-sand-300 hover:bg-white"
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border shadow-sm",
                  active ? "border-white/15 bg-white/10" : "border-white/90 bg-slate-50"
                )}
              >
                <span className={cn("fi block h-5 w-6 rounded-[3px]", option.flagClass)} aria-hidden="true" />
              </span>
              <span className="block">
                <span className={cn("block text-xs font-semibold uppercase tracking-[0.2em]", active ? "text-white/68" : "text-ink-500")}>
                  {option.shortLabel}
                </span>
                <span className={cn("mt-1 block text-sm font-semibold", active ? "text-white" : "text-ink-900")}>
                  {option.nativeLabel}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "group flex h-11 items-center gap-2.5 rounded-full border border-sand-300/80 bg-white/88 px-2.5 pr-3 shadow-soft backdrop-blur transition",
          open ? "border-sand-400/90 shadow-[0_16px_38px_rgba(15,23,42,0.14)]" : "hover:border-sand-400/80 hover:bg-white"
        )}
      >
        <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-slate-100 shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
          <span className={cn("fi block h-[15px] w-5 rounded-[2px]", activeOption.flagClass)} aria-hidden="true" />
        </span>
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-700 sm:block">
          {activeOption.shortLabel}
        </span>
        <span className="text-ink-500 group-hover:text-ink-700">
          <ChevronIcon open={open} />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={t({ en: "Language switcher", ru: "Переключатель языка", tg: "Ивазкунандаи забон" })}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full z-[70] mt-3 w-[210px] overflow-hidden rounded-[24px] border border-sand-200/80 bg-white/96 p-2 shadow-[0_24px_64px_rgba(15,23,42,0.16)] backdrop-blur-xl"
          >
            <div className="rounded-[20px] bg-[linear-gradient(180deg,rgba(248,250,252,0.95),rgba(255,255,255,0.82))] p-1">
              {languageOptions.map((option) => {
                const active = option.code === lang;

                return (
                  <button
                    key={option.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => {
                      setLang(option.code);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left transition",
                      active ? "bg-ink-900 text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)]" : "text-ink-800 hover:bg-sand-100/90"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border shadow-sm",
                        active ? "border-white/25 bg-white/10" : "border-white/80 bg-white"
                      )}
                    >
                      <span className={cn("fi block h-5 w-6 rounded-[3px]", option.flagClass)} aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className={cn("block text-sm font-semibold", active ? "text-white" : "text-ink-900")}>
                        {option.nativeLabel}
                      </span>
                      <span className={cn("block text-xs", active ? "text-white/68" : "text-ink-500")}>
                        {option.shortLabel}
                      </span>
                    </span>

                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.22em]",
                        active ? "text-white/72" : "text-ink-400"
                      )}
                    >
                      {option.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
