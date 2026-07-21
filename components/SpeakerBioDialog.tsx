"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LocalizedText from "@/components/LocalizedText";
import Badge from "@/components/ui/Badge";
import { MailIcon } from "@/components/ui/LineIcons";
import { useLanguage } from "@/lib/i18n";
import type { LocalizedString, Speaker } from "@/lib/types";

const fullBioLabel = {
  en: "Full biography",
  ru: "Полная биография",
  tg: "Шарҳи пурра"
} satisfies LocalizedString;

const closeLabel = {
  en: "Close",
  ru: "Закрыть",
  tg: "Пӯшидан"
} satisfies LocalizedString;

const emailLabel = {
  en: "Email",
  ru: "Email",
  tg: "Email"
} satisfies LocalizedString;

export default function SpeakerBioDialog({
  speaker,
  onClose
}: {
  speaker: Speaker | null;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!speaker) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [speaker, onClose]);

  if (!mounted || !speaker) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label={t(closeLabel)}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`speaker-dialog-title-${speaker.id}`}
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,248,251,0.98))] shadow-[0_32px_90px_rgba(15,23,42,0.28)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 px-5 py-5 sm:px-7">
          <div className="min-w-0 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-800/80">
              <LocalizedText value={fullBioLabel} />
            </p>
            <div className="flex items-start gap-4">
              <div className="relative hidden h-20 w-20 overflow-hidden rounded-[22px] border border-white/80 bg-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.12)] sm:block">
                <Image
                  src={speaker.photo ?? "/images/placeholder-speaker.svg"}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 space-y-2">
                {speaker.company ? (
                  <Badge className="border-sky-200/80 bg-sky-900 text-white">{speaker.company}</Badge>
                ) : null}
                <h2
                  id={`speaker-dialog-title-${speaker.id}`}
                  className="font-heading text-2xl leading-tight text-ink-950"
                >
                  {speaker.name}
                </h2>
                <p className="max-w-3xl text-sm leading-6 text-ink-700">
                  <LocalizedText value={speaker.title} />
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <LocalizedText value={closeLabel} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <div className="space-y-6">
            <p className="text-sm leading-7 text-ink-800">
              <LocalizedText value={speaker.bio} />
            </p>

            {speaker.email ? (
              <a
                href={`mailto:${speaker.email}`}
                aria-label={`${t(emailLabel)}: ${speaker.email}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-sky-900 shadow-sm transition hover:border-sky-200 hover:bg-sky-50/70"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-900">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0 truncate">{speaker.email}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
