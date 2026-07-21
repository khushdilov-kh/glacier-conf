"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import LocalizedText from "@/components/LocalizedText";
import Badge from "@/components/ui/Badge";
import { BookIcon, ChevronIcon, MailIcon } from "@/components/ui/LineIcons";
import { useLanguage } from "@/lib/i18n";
import type { LocalizedString, Speaker } from "@/lib/types";

interface SpeakerCardProps {
  speaker: Speaker;
  onOpenBio: () => void;
}

const readBioLabel = {
  en: "Read full bio",
  ru: "Читать полную биографию",
  tg: "Хондани шарҳи пурра"
} satisfies LocalizedString;

const emailLabel = {
  en: "Email",
  ru: "Email",
  tg: "Email"
} satisfies LocalizedString;

export default function SpeakerCard({ speaker, onOpenBio }: SpeakerCardProps) {
  const { t } = useLanguage();
  const bioText = t(speaker.bio);
  const showBioAction = bioText.length > 220;

  return (
    <Card
      id={speaker.id}
      className="lecturer-card group relative flex h-full flex-col gap-5 overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,252,0.96))] p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_58%)]" />

      <div className="relative grid grid-cols-[92px,1fr] gap-4 sm:grid-cols-[108px,1fr]">
        <div className="relative h-[112px] overflow-hidden rounded-[24px] border border-white/70 bg-slate-100 shadow-[0_14px_32px_rgba(15,23,42,0.12)] sm:h-[132px]">
          <Image
            src={speaker.photo ?? "/images/placeholder-speaker.svg"}
            alt={speaker.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap gap-2">
            {speaker.company ? (
              <Badge className="border-sky-200/80 bg-sky-900 text-white">{speaker.company}</Badge>
            ) : null}
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-[1.1rem] leading-tight tracking-tight text-ink-900 sm:text-[1.2rem]">
              {speaker.name}
            </h3>
            <p className="text-sm leading-5 text-ink-800">
              <LocalizedText value={speaker.title} />
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex h-full flex-col justify-between gap-4">
        <div className="py-4 text-justify">
          <div className="relative">
            <p className="max-h-[10.5rem] overflow-hidden text-sm leading-6 text-ink-800">
              <LocalizedText value={speaker.bio} />
            </p>
            {showBioAction ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/90 to-transparent" />
            ) : null}
          </div>

          {showBioAction ? (
            <button
              type="button"
              onClick={onOpenBio}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-2 text-xs font-semibold text-sky-900 shadow-sm transition hover:border-sky-300 hover:bg-sky-100"
            >
              <BookIcon className="h-4 w-4" />
              <LocalizedText value={readBioLabel} />
              <ChevronIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {speaker.email ? (
          <a
            href={`mailto:${speaker.email}`}
            aria-label={`${t(emailLabel)}: ${speaker.email}`}
            className="inline-flex w-full items-center justify-between text-sm font-medium text-sky-800"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <MailIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0 truncate">{speaker.email}</span>
            </span>
          </a>
        ) : null}
      </div>
    </Card>
  );
}
