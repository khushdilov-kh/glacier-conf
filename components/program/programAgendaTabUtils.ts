import type { ProgramAgendaDay } from "@/lib/programAgenda";
import type { LocalizedString } from "@/lib/types";

export const programAgendaTabLabels = {
  day: { en: "Day", ru: "День", tg: "Рӯз" },
  quickNavigator: { en: "Day switcher", ru: "Переключение дней", tg: "Гузариши рӯзҳо" },
  quickTitle: { en: "Choose a program day", ru: "Выберите день программы", tg: "Рӯзи барномаро интихоб кунед" },
  quickDescription: {
    en: "Use the timeline or move one day at a time.",
    ru: "Используйте таймлайн или переходите по одному дню.",
    tg: "Аз таймлайн истифода баред ё рӯзҳоро як-як иваз кунед."
  },
  selectedDay: { en: "Current selection", ru: "Текущий выбор", tg: "Интихоби ҷорӣ" },
  previousDay: { en: "Earlier", ru: "Раньше", tg: "Пештар" },
  nextDay: { en: "Later", ru: "Позже", tg: "Баъдтар" }
} as const satisfies Record<string, LocalizedString>;

export function getLocalizedDayLabel(dayLabel: string): LocalizedString {
  return {
    en: dayLabel,
    ru: dayLabel.replace(programAgendaTabLabels.day.en, programAgendaTabLabels.day.ru),
    tg: dayLabel.replace(programAgendaTabLabels.day.en, programAgendaTabLabels.day.tg)
  };
}

export function getCompactDate(date: LocalizedString): LocalizedString {
  return {
    en: formatCompactDate(date.en),
    ru: formatCompactDate(date.ru ?? date.en),
    tg: formatCompactDate(date.tg ?? date.en)
  };
}

export function getDayOptionLabel(
  day: ProgramAgendaDay,
  t: (value?: LocalizedString | string | null) => string
) {
  return `${t(getLocalizedDayLabel(day.dayLabel))} - ${t(getCompactDate(day.date))}`;
}

function formatCompactDate(value: string): string {
  const withoutWeekday = value.includes(",") ? value.split(",").slice(1).join(",").trim() : value.trim();
  const match = withoutWeekday.match(/^(\d{1,2})\s+([^\s,]+)/);

  if (!match) {
    return value;
  }

  const [, day, month] = match;
  return `${day.padStart(2, "0")}-${month.replace(/[.,]$/g, "")}`;
}
