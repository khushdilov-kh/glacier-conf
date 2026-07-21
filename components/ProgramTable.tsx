import LocalizedText from "@/components/LocalizedText";
import Badge from "@/components/ui/Badge";
import type { ProgramDay, Speaker } from "@/lib/types";
import { labels } from "@/lib/labels";
import { cn } from "@/lib/utils";

interface ProgramTableProps {
  day: ProgramDay;
  speakersById: Record<string, Speaker>;
  limit?: number;
  variant?: "default" | "plain";
  className?: string;
}

export default function ProgramTable({
  day,
  speakersById,
  limit,
  variant = "default",
  className
}: ProgramTableProps) {
  const sessions = limit ? day.sessions.slice(0, limit) : day.sessions;
  const isPlain = variant === "plain";
  const showSpeakers = sessions.some((session) => (session.speakers?.length ?? 0) > 0);

  return (
    <div
      className={cn(
        "space-y-4",
        isPlain &&
          "h-full rounded-[30px] border border-white/80 bg-white/88 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {isPlain ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-500">
              <LocalizedText value={{ en: "Program phase", ru: "Фаза программы", tg: "Марҳилаи барнома" }} />
            </p>
          ) : null}
          <h3 className={cn("font-semibold text-ink-900", isPlain ? "mt-2 text-xl leading-tight" : "text-2xl")}>
            <LocalizedText value={day.label} />
          </h3>
        </div>
        <Badge className={cn(isPlain ? "bg-rose-800 text-white" : "bg-white/80 text-ink-700")}>{day.date}</Badge>
      </div>
      <div
        className={cn(
          "divide-y divide-sand-200/60 rounded-2xl",
          isPlain
            ? "overflow-hidden border border-slate-200/70 bg-slate-50/80"
            : "border border-sand-200/70 bg-white/80"
        )}
      >
        {sessions.map((session) => {
          const speakerNames = session.speakers?.map((id) => speakersById[id]?.name ?? id).join(", ");
          return (
            <div
              key={`${day.date}-${session.time}-${session.title.en}`}
              className={cn(
                "grid gap-3 px-5 py-4",
                showSpeakers ? "md:grid-cols-[120px_1fr_200px]" : "md:grid-cols-[120px_1fr]"
              )}
            >
              <div className="text-sm font-semibold text-ink-800">{session.time}</div>
              <div>
                <p className="text-base font-semibold text-ink-900">
                  <LocalizedText value={session.title} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ink-500">
                  <LocalizedText value={session.type} />
                  {session.location ? (
                    <>
                      {" | "}
                      <LocalizedText value={session.location} />
                    </>
                  ) : null}
                </p>
              </div>
              {showSpeakers ? (
                speakerNames ? (
                  <p className="text-sm text-ink-600 md:text-right">
                    <span className="text-xs uppercase tracking-widest text-ink-500">
                      <LocalizedText value={labels.programTable.speakers} />
                      {": "}
                    </span>
                    {speakerNames}
                  </p>
                ) : (
                  <p className="text-sm text-ink-400 md:text-right">-</p>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
