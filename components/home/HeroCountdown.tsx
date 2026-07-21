"use client";

import { useEffect, useMemo, useState } from "react";
import LocalizedText from "@/components/LocalizedText";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

type CountdownPart = {
  key: "days" | "hours" | "minutes" | "seconds";
  value: number;
  label: LocalizedString;
  color: string;
};

type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface HeroCountdownProps {
  targetDate: string;
  className?: string;
  label?: LocalizedString;
  ariaLabel?: string;
}

const labels: Record<CountdownPart["key"], LocalizedString> = {
  days: { en: "Days", ru: "Дней", tg: "Рӯз" },
  hours: { en: "Hours", ru: "Часов", tg: "Соат" },
  minutes: { en: "Minutes", ru: "Минут", tg: "Дақиқа" },
  seconds: { en: "Seconds", ru: "Секунд", tg: "Сония" }
};

const colors: Record<CountdownPart["key"], string> = {
  days: "text-red-500",
  hours: "text-yellow-400",
  minutes: "text-sky-400",
  seconds: "text-lime-400"
};

function getRemaining(targetDate: string): CountdownValues {
  const diff = Math.max(new Date(targetDate).getTime() - Date.now(), 0);
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

function formatValue(value: number) {
  return String(value).padStart(2, "0");
}

export default function HeroCountdown({ targetDate, className, label, ariaLabel }: HeroCountdownProps) {
  const [remaining, setRemaining] = useState<CountdownValues | null>(null);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(targetDate));

    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const parts = useMemo<CountdownPart[]>(
    () =>
      (["days", "hours", "minutes", "seconds"] as const).map((key) => ({
        key,
        value: remaining?.[key] ?? 0,
        label: labels[key],
        color: colors[key]
      })),
    [remaining]
  );

  return (
    <div className={cn("w-full", className)} aria-label={ariaLabel ?? "Summer University countdown"}>
      {label ? (
        <p className="mb-2 text-center text-xs font-extrabold uppercase tracking-[0.28em] text-white/86 sm:text-sm">
          <LocalizedText value={label} />
        </p>
      ) : null}
      <div className="grid w-full grid-cols-4 overflow-hidden">
        {parts.map((part) => (
          <div
            key={part.key}
            className="flex min-h-[74px] flex-col items-center justify-center px-1.5 py-3 text-center sm:min-h-[96px] sm:px-3 sm:py-4 lg:min-h-[112px]"
          >
            <span
              className={cn(
                "font-heading text-4xl font-extrabold leading-none tabular-nums sm:text-5xl lg:text-6xl",
                part.color
              )}
              suppressHydrationWarning
            >
              {formatValue(part.value)}
            </span>
            <span className={cn("mt-1.5 text-[10px] font-extrabold uppercase leading-none sm:mt-2 sm:text-base", part.color)}>
              <LocalizedText value={part.label} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
