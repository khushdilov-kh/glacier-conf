import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import ProgramTable from "@/components/ProgramTable";
import Card from "@/components/ui/Card";
import GeoPatternBackdrop from "@/components/ui/GeoPatternBackdrop";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProgramDay } from "@/lib/types";
import { labels } from "@/lib/labels";
import { cn } from "@/lib/utils";

interface ProgramJourneySectionProps {
  program: ProgramDay[];
}

const phaseThemes = [
  {
    accent: "from-sky-500 to-cyan-500",
    chip: "bg-sky-100 text-sky-900",
    glow: "bg-sky-100/80"
  },
  {
    accent: "from-indigo-500 to-sky-500",
    chip: "bg-indigo-100 text-indigo-900",
    glow: "bg-indigo-100/80"
  },
  {
    accent: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-100 text-emerald-900",
    glow: "bg-emerald-100/80"
  },
  {
    accent: "from-amber-500 to-orange-500",
    chip: "bg-amber-100 text-amber-900",
    glow: "bg-amber-100/80"
  }
] as const;

export default function ProgramJourneySection({ program }: ProgramJourneySectionProps) {
  const totalLearningBlocks = program.reduce((sum, phase) => sum + phase.sessions.length, 0);

  return (
    <section id="program" className="relative overflow-hidden py-20 sm:py-24">
      <GeoPatternBackdrop variant="network" className="text-slate-300 opacity-50" />
      {/* <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(14,165,233,0.08),transparent)]" /> */}
      {/* <div className="absolute left-[7%] top-20 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl" />
      <div className="absolute right-[8%] top-16 h-44 w-44 rounded-full bg-amber-100/75 blur-3xl" /> */}

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={labels.program}
            title={labels.programPreview}
            description={{
              en: "The 13-day structure moves from shared foundations into applied tools, integrated risk thinking, and a final field-and-capstone phase.",
              ru: "13-дневная структура ведет участников от общих основ к прикладным инструментам, интегрированному пониманию риска и финальной полевой и итоговой фазе.",
              tg: "Сохтори 13-рӯза иштирокчиёнро аз заминаи муштарак ба воситаҳои амалӣ, тафаккури ҳамгирои хавф ва марҳилаи ниҳоии саҳроӣ мебарад."
            }}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-1">
          <Reveal className="h-full">
            <Card className="relative h-full overflow-hidden rounded-[34px] border-white/80 bg-white/88 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-sky-100/80 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[0.78fr,1.22fr]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-500">
                    <LocalizedText value={{ en: "Program arc", ru: "Логика программы", tg: "Мантиқи барнома" }} />
                  </p>
                  <h3 className="mt-4 text-3xl font-heading leading-tight text-ink-900">
                    <LocalizedText
                      value={{
                        en: "A compact sequence from foundations to field briefing.",
                        ru: "Компактная траектория от базовых основ к итоговому полевому брифингу.",
                        tg: "Пайдарпаии фишурда аз асосҳо то risk briefing-и саҳроии ниҳоӣ."
                      }}
                    />
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-600 sm:text-base">
                    <LocalizedText
                      value={{
                        en: "Instead of one long list with a disconnected sidebar, the journey is framed as a clear progression: understand the system, work with the tools, interpret risk, and present a practical output.",
                        ru: "Вместо длинного списка с отдельной боковой карточкой траектория собрана как ясная последовательность: понять систему, освоить инструменты, интерпретировать риск и представить практический результат.",
                        tg: "Ба ҷойи як рӯйхати дароз, ин роҳ ҳамчун пайдарпаии равшан нишон дода шудааст: фаҳмидани система, аз худ кардани воситаҳо, тафсири хавф ва пешниҳоди натиҷаи амалӣ."
                      }}
                    />
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-700">
                      {program.length} <LocalizedText value={{ en: "phases", ru: "фазы", tg: "марҳилаҳо" }} />
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-700">
                      {totalLearningBlocks} <LocalizedText value={{ en: "learning blocks", ru: "учебных блока", tg: "блоки омӯзишӣ" }} />
                    </span>
                    
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {program.map((phase, index) => {
                    const theme = phaseThemes[index % phaseThemes.length];

                    return (
                      <div
                        key={`${phase.date}-${phase.label.en}`}
                        className="relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-50/80 p-4"
                      >
                        <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r bg-cyan-900", )} />
                        <div className={cn("absolute -right-8 -top-8 h-20 w-20 rounded-full blur-3xl", theme.glow)} />
                        <div className="relative">
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-500">
                              0{index + 1}
                            </span>
                            <span className={cn("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]", theme.chip)}>
                              {phase.date}
                            </span>
                          </div>
                          <p className="mt-4 text-base font-semibold leading-6 text-ink-900">
                            <LocalizedText value={phase.label} />
                          </p>
                          <p className="mt-2 text-sm leading-6 text-ink-600">
                            <LocalizedText
                              value={{
                                en: `${phase.sessions.length} structured learning blocks`,
                                ru: `${phase.sessions.length} структурированных учебных блока`,
                                tg: `${phase.sessions.length} блоки сохторёфтаи омӯзишӣ`
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </Reveal>

         
        </div>

        
      </Container>
    </section>
  );
}
