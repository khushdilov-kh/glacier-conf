"use client";

import { useState } from "react";
import LocalizedText from "@/components/LocalizedText";
import SpeakerBioDialog from "@/components/SpeakerBioDialog";
import ProgramAgendaSpeakerText from "@/components/program/ProgramAgendaSpeakerText";
import Badge from "@/components/ui/Badge";
import { ClockIcon } from "@/components/ui/LineIcons";
import type { ProgramAgendaDay } from "@/lib/programAgenda";
import type { LocalizedString, Speaker } from "@/lib/types";
import { cn } from "@/lib/utils";

const labels = {
  day: { en: "Day", ru: "День", tg: "Рӯз" },
  introduction: { en: "Introduction", ru: "Введение", tg: "Муқаддима" },
  sessionDuration: { en: "Session duration", ru: "Длительность", tg: "Давомнокӣ" },
  trainers: { en: "Trainer(s)", ru: "Тренеры", tg: "Мураббиён" },
  methods: { en: "Methods", ru: "Методы", tg: "Усулҳо" },
  aims: { en: "Aims and results", ru: "Цели и результаты", tg: "Ҳадафҳо ва натиҷаҳо" },
  dailyAgenda: { en: "Daily agenda", ru: "Программа дня", tg: "Барномаи рӯз" },
  topic: { en: "Topic", ru: "Тема", tg: "Мавзӯъ" },
  time: { en: "Time", ru: "Время", tg: "Вақт" },
  who: { en: "Who", ru: "Кто", tg: "Кӣ" },
  rows: { en: "rows", ru: "строк", tg: "сатр" }
} as const;

const accents = [
  "from-sky-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500"
] as const;

function DetailTextBlock({
  title,
  items,
  bullet = false,
  className,
  speakers = [],
  linkSpeakers = false,
  onSpeakerClick
}: {
  title: LocalizedString;
  items?: LocalizedString[];
  bullet?: boolean;
  className?: string;
  speakers?: Speaker[];
  linkSpeakers?: boolean;
  onSpeakerClick?: (speakerId: string) => void;
}) {
  if (!items?.length) return null;

  return (
    <div className={cn("rounded-[24px] border border-slate-200/70 bg-white/84 p-5 shadow-md", className)}>
      <p className="text-[13px] font-bold uppercase tracking-[0.28em] text-ink-800">
        <LocalizedText value={title} />
      </p>
      <div className="mt-3 space-y-2.5">
        {items.map((item, index) =>
          bullet ? (
            <div key={`${title.en}-${index}`} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <p className="whitespace-pre-line text-sm leading-7 text-ink-700">
                {linkSpeakers ? (
                  <ProgramAgendaSpeakerText value={item} speakers={speakers} onSpeakerClick={onSpeakerClick} />
                ) : (
                  <LocalizedText value={item} />
                )}
              </p>
            </div>
          ) : (
            <p key={`${title.en}-${index}`} className="whitespace-pre-line text-sm leading-7 text-ink-700">
              {linkSpeakers ? (
                <ProgramAgendaSpeakerText value={item} speakers={speakers} onSpeakerClick={onSpeakerClick} />
              ) : (
                <LocalizedText value={item} />
              )}
            </p>
          )
        )}
      </div>
    </div>
  );
}

function MetaCard({
  title,
  value,
  icon: Icon,
  accent
}: {
  title: LocalizedString;
  value?: LocalizedString | string | null;
  icon: typeof ClockIcon;
  accent: string;
}) {
  if (!value) return null;

  return (
    <div className="rounded-[24px] border border-slate-200/70 bg-white/88 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <div className="flex items-start gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white", accent)}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-500">
            <LocalizedText value={title} />
          </p>
          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-ink-800">
            <LocalizedText value={value} />
          </p>
        </div>
      </div>
    </div>
  );
}

function getLocalizedDayLabel(dayLabel: string): LocalizedString {
  return {
    en: dayLabel,
    ru: dayLabel.replace(labels.day.en, labels.day.ru),
    tg: dayLabel.replace(labels.day.en, labels.day.tg)
  };
}

function isUtilityRow(topic: string) {
  const normalized = topic.toLowerCase();
  return (
    normalized.includes("break") ||
    normalized.includes("lunch") ||
    normalized.includes("end of the day")
  );
}

function MobileAgendaItem({
  rowIndex,
  topic,
  time,
  who,
  speakers,
  onSpeakerClick
}: {
  rowIndex: number;
  topic: LocalizedString;
  time: string;
  who?: LocalizedString;
  speakers: Speaker[];
  onSpeakerClick: (speakerId: string) => void;
}) {
  const utilityRow = isUtilityRow(topic.en);
  const contributor = who?.en.trim().toLowerCase() === "break" ? undefined : who;

  if (utilityRow) {
    return (
      <div className="rounded-[22px] border border-sky-200/70 bg-sky-50/90 px-4 py-4 shadow-[0_10px_24px_rgba(14,116,144,0.08)]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink-900">
            <LocalizedText value={topic} />
          </p>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-800 shadow-sm">{time}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <p className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {time}
        </p>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          {String(rowIndex + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-4 whitespace-pre-line text-base font-semibold leading-7 text-ink-900">
        <LocalizedText value={topic} />
      </p>

      {contributor ? (
        <div className="mt-4 rounded-[18px] border border-slate-200/80 bg-slate-50/85 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-500">
            <LocalizedText value={labels.who} />
          </p>
          <div className="mt-2 whitespace-pre-line text-sm leading-7 text-ink-700">
            <ProgramAgendaSpeakerText value={contributor} speakers={speakers} onSpeakerClick={onSpeakerClick} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function ProgramAgendaDayCard({
  day,
  index,
  speakers
}: {
  day: ProgramAgendaDay;
  index: number;
  speakers: Speaker[];
}) {
  const accent = accents[index % accents.length];
  const [activeSpeakerId, setActiveSpeakerId] = useState<string | null>(null);
  const activeSpeaker = speakers.find((speaker) => speaker.id === activeSpeakerId) ?? null;

  return (
    <>
      <div className="relative overflow-hidden rounded-[28px] border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,250,252,0.95))] shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[34px]">
        <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", accent)} />

        <div className="relative px-4 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-7">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-3xl">
              <Badge className="border-slate-200/80 bg-slate-900 px-4 py-2.5 text-base text-white sm:px-5 sm:py-4 sm:text-[25px]">
                <LocalizedText value={getLocalizedDayLabel(day.dayLabel)} />
              </Badge>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-500">
                <LocalizedText value={day.date} />
              </p>
              <h2 className="mt-2 max-w-3xl font-heading text-[1.65rem] leading-tight tracking-tight text-ink-900 sm:text-[1.95rem]">
                <LocalizedText value={day.theme} />
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-1 xl:w-[360px]">
              <MetaCard
                title={labels.sessionDuration}
                value={day.sessionDuration}
                icon={ClockIcon}
                accent={accent}
              />
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.3fr,0.7fr]">
            <DetailTextBlock title={labels.introduction} items={day.introduction} className="h-full" />

            <div className="grid gap-4">
              <DetailTextBlock
                title={labels.trainers}
                items={day.trainers}
                speakers={speakers}
                linkSpeakers
                onSpeakerClick={setActiveSpeakerId}
              />
              <DetailTextBlock title={labels.methods} items={day.methods} />
            </div>
          </div>

          <div className="mt-4">
            <DetailTextBlock title={labels.aims} items={day.aims} bullet />
          </div>
        </div>

        <div className="px-0 pb-5 sm:pb-6">
          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
            <div className="border-b border-slate-200/70 bg-sky-700 px-6 py-4 text-white sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/62">
                <LocalizedText value={labels.dailyAgenda} />
              </p>
            </div>

            <div className="space-y-3 p-4 md:hidden">
              {day.schedule.map((item, rowIndex) => (
                <MobileAgendaItem
                  key={`${day.id}-${rowIndex}-${item.time}`}
                  rowIndex={rowIndex}
                  topic={item.topic}
                  time={item.time}
                  who={item.who}
                  speakers={speakers}
                  onSpeakerClick={setActiveSpeakerId}
                />
              ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="min-w-[720px] w-full table-fixed">
                <colgroup>
                  <col className="w-[48%]" />
                  <col className="w-[20%]" />
                  <col className="w-[32%]" />
                </colgroup>
                <thead className="bg-sky-700  text-white">
                  <tr>
                    <th className="border-b border-white/10 px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68 sm:px-8">
                      <LocalizedText value={labels.topic} />
                    </th>
                    <th className="border-b border-white/10 px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68 sm:px-8">
                      <LocalizedText value={labels.time} />
                    </th>
                    <th className="border-b border-white/10 px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68 sm:px-8">
                      <LocalizedText value={labels.who} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {day.schedule.map((item, rowIndex) => {
                    const utilityRow = isUtilityRow(item.topic.en);
                    const contributor = item.who?.en.trim().toLowerCase() === "break" ? undefined : item.who;

                    return (
                      <tr
                        key={`${day.id}-${rowIndex}-${item.time}`}
                        className={cn(
                          "align-top transition-colors",
                          utilityRow
                            ? "bg-sky-100/50 hover:bg-sky-200/70"
                            : rowIndex % 2 === 0
                              ? "bg-white hover:bg-sky-200/70"
                              : "bg-sky-100/50 hover:bg-sky-200/70"
                        )}
                      >
                        <td className="border-b border-slate-200/60 px-6 py-4 sm:px-8">
                          <p
                            className={cn(
                              "whitespace-pre-line text-sm leading-7",
                              utilityRow ? "font-medium text-ink-700" : "font-semibold text-ink-900"
                            )}
                          >
                            <LocalizedText value={item.topic} />
                          </p>
                        </td>
                        <td className="border-b border-slate-200/60 px-6 py-4 text-sm leading-7 text-ink-700 sm:px-8">
                          <span className="whitespace-pre-line">{item.time}</span>
                        </td>
                        <td className="border-b border-slate-200/60 px-6 py-4 text-sm leading-7 text-ink-700 sm:px-8">
                          <div className="whitespace-pre-line">
                            <ProgramAgendaSpeakerText
                              value={contributor ?? "-"}
                              speakers={speakers}
                              onSpeakerClick={setActiveSpeakerId}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <SpeakerBioDialog speaker={activeSpeaker} onClose={() => setActiveSpeakerId(null)} />
    </>
  );
}
