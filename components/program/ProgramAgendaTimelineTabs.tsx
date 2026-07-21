"use client";

import type { KeyboardEvent } from "react";
import LocalizedText from "@/components/LocalizedText";
import Card from "@/components/ui/Card";
import { ChevronIcon, RouteIcon } from "@/components/ui/LineIcons";
import { useLanguage } from "@/lib/i18n";
import type { ProgramAgendaDay } from "@/lib/programAgenda";
import { cn } from "@/lib/utils";
import {
  getCompactDate,
  getDayOptionLabel,
  getLocalizedDayLabel,
  programAgendaTabLabels as labels
} from "./programAgendaTabUtils";

type ProgramAgendaTimelineTabsProps = {
  activeIndex: number;
  days: ProgramAgendaDay[];
  panelId: string;
  setTabRef: (index: number, node: HTMLButtonElement | null) => void;
  onSelect: (index: number) => void;
  onTabKeyDown: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void;
};

export default function ProgramAgendaTimelineTabs({
  activeIndex,
  days,
  panelId,
  setTabRef,
  onSelect,
  onTabKeyDown
}: ProgramAgendaTimelineTabsProps) {
  const { t } = useLanguage();
  const activeDay = days[activeIndex];
  const lastIndex = days.length - 1;

  if (!activeDay) {
    return null;
  }

  return (
    <Card className="relative overflow-hidden rounded-[28px] border-white/80  p-3 shadow-[0_26px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:rounded-[32px] sm:p-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_72%)]" />
      <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-sky-200/35 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-100/35 blur-3xl" />

      <div className="relative grid gap-2">
        <div className="flex">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] border border-slate-800/10 bg-white/82 text-sky-700 ">
              <RouteIcon className="h-5 w-5" />
            </span>

            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-800">
                <LocalizedText value={labels.quickNavigator} />
              </p>
             
            </div>
          </div>
        </div>

        <div className="rounded-[22px] border border-sky-700 bg-white/58 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:hidden">
          <label
            className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-500"
            htmlFor={`${panelId}-mobile-select`}
          >
            <LocalizedText value={labels.quickTitle} />
          </label>

          <div className="relative mt-2">
            <select
              id={`${panelId}-mobile-select`}
              value={activeDay.id}
              onChange={(event) => {
                const nextIndex = days.findIndex((day) => day.id === event.target.value);
                if (nextIndex >= 0) {
                  onSelect(nextIndex);
                }
              }}
              className="w-full appearance-none rounded-[18px] border border-slate-200/80 bg-white/90 px-4 py-3 pr-11 text-sm font-semibold text-ink-900 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition outline-none hover:border-sky-200 focus:border-sky-400"
            >
              {days.map((day) => (
                <option key={day.id} value={day.id}>
                  {getDayOptionLabel(day, t)}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-ink-500">
              <ChevronIcon className="h-4 w-4 rotate-90" />
            </span>
          </div>
        </div>

        <div className="hidden grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 sm:grid xl:grid-cols-[repeat(auto-fit,minmax(142px,1fr))]">
          {days.map((day, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <button
                key={day.id}
                ref={(node) => setTabRef(index, node)}
                id={`${panelId}-tab-${day.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${panelId}-panel`}
                aria-label={getDayOptionLabel(day, t)}
                tabIndex={isActive ? 0 : -1}
                type="button"
                onClick={() => onSelect(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={cn(
                  "group relative min-w-0 overflow-hidden rounded-[24px] border p-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2",
                  isActive
                    ? "border-slate-900 bg-[linear-gradient(135deg,#0f172a_0%,#082f49_58%,#0ea5e9_150%)] text-white shadow-[0_18px_38px_rgba(15,23,42,0.17)]"
                    : "border-sky-700/50 bg-white/76 text-ink-900 shadow-[0_12px_28px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_16px_32px_rgba(14,165,233,0.10)]"
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px",
                    isActive
                      ? "bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.85),rgba(186,230,253,0.2))]"
                      : "bg-[linear-gradient(90deg,rgba(14,165,233,0),rgba(14,165,233,0.3),rgba(14,165,233,0))]"
                  )}
                />

                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-9 min-w-9 items-center justify-center rounded-[14px] border px-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition",
                      isActive
                        ? "border-white/18 bg-white/10 text-white"
                        : isCompleted
                          ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                          : "border-sky-100 bg-sky-50 text-sky-700"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <span
                      className={cn(
                        "h-2.5 w-2.5 shrink-0 rounded-full transition",
                        isActive
                          ? "bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.12)]"
                          : isCompleted
                            ? "bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]"
                            : "bg-sky-500/75 shadow-[0_0_0_5px_rgba(14,165,233,0.10)]"
                      )}
                    />
                    <span
                      className={cn(
                        "h-px flex-1 rounded-full transition",
                        index === lastIndex
                          ? "opacity-0"
                          : isActive
                            ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.55),rgba(186,230,253,0.12))]"
                            : isCompleted
                              ? "bg-[linear-gradient(90deg,rgba(16,185,129,0.42),rgba(56,189,248,0.16))]"
                              : "bg-[linear-gradient(90deg,rgba(148,163,184,0.42),rgba(226,232,240,0.12))]"
                      )}
                    />
                  </div>
                </div>
                

                <div className="flex justify-between items-end gap-2 ">
                      <p
                        className={cn(
                          " text-[10px] font-semibold uppercase tracking-[0.24em]",
                          isActive ? "text-white/62" : "text-ink-500"
                        )}
                      >
                        <LocalizedText value={getLocalizedDayLabel(day.dayLabel)} />
                      </p>
                      <p
                        className={cn(
                          "mttext-sm font-semibold tracking-[0.01em] lg:text-[15px]",
                          isActive ? "text-white" : "text-ink-900"
                        )}
                      >
                        <LocalizedText value={getCompactDate(day.date)} />
                      </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/70 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/75 bg-white/78 px-3 py-2 text-sm font-semibold text-ink-900 shadow-[0_10px_22px_rgba(15,23,42,0.05)] sm:hidden">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.12)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              <LocalizedText value={labels.selectedDay} />
            </span>
            <span>{getDayOptionLabel(activeDay, t)}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:ml-auto sm:inline-flex">
            <button
              type="button"
              onClick={() => onSelect(activeIndex - 1)}
              disabled={activeIndex === 0}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                activeIndex === 0
                  ? "cursor-not-allowed border-slate-200/70 bg-slate-100/80 text-ink-400"
                  : "border-white/80 bg-white/84 text-ink-800 shadow-[0_10px_20px_rgba(15,23,42,0.04)] hover:border-sky-200 hover:bg-white"
              )}
            >
              <ChevronIcon className="h-4 w-4 rotate-180" />
              <LocalizedText value={labels.previousDay} />
            </button>

            <button
              type="button"
              onClick={() => onSelect(activeIndex + 1)}
              disabled={activeIndex === lastIndex}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                activeIndex === lastIndex
                  ? "cursor-not-allowed border-slate-200/70 bg-slate-100/80 text-ink-400"
                  : "border-slate-900 bg-slate-900 text-white shadow-[0_12px_24px_rgba(15,23,42,0.12)] hover:bg-slate-800"
              )}
            >
              <LocalizedText value={labels.nextDay} />
              <ChevronIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
