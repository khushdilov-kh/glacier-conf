import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import GeoPatternBackdrop from "@/components/ui/GeoPatternBackdrop";
import Reveal from "@/components/ui/Reveal";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

type OutcomeItem = {
  title: LocalizedString;
  text: LocalizedString;
};

interface LearningOutcomesSectionProps {
  items: OutcomeItem[];
}

const outcomeThemes = [
  {
    accent: "from-sky-400 to-cyan-400",
    panel: "bg-sky-400/10"
  },
  {
    accent: "from-indigo-400 to-sky-400",
    panel: "bg-indigo-400/10"
  },
  {
    accent: "from-emerald-400 to-teal-400",
    panel: "bg-emerald-400/10"
  },
  {
    accent: "from-amber-300 to-orange-400",
    panel: "bg-amber-400/10"
  }
] as const;

export default function LearningOutcomesSection({ items }: LearningOutcomesSectionProps) {
  return (
    <section id="outcomes" className="relative overflow-hidden py-20 sm:py-24 text-white">
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,1))]" />
      {/* <div className="absolute left-[7%] top-20 h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" /> */}
      <div className="absolute right-[8%] top-14 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
      <GeoPatternBackdrop variant="network" className="text-white opacity-100" />

      <Container className="relative">
        <div className="grid gap-10 xl:grid-cols-[0.78fr,1.22fr] xl:items-start">
          <Reveal>
            <div className="xl:sticky xl:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200/72">
                <LocalizedText value={{ en: "Learning outcomes", ru: "Результаты обучения", tg: "Натиҷаҳои омӯзиш" }} />
              </p>
              <h2 className="mt-4 max-w-lg text-4xl font-heading leading-tight text-white sm:text-5xl">
                <LocalizedText
                  value={{
                    en: "What participants will leave with",
                    ru: "С чем участники выйдут из программы",
                    tg: "Иштирокчиён барномаро бо чӣ анҷом медиҳанд"
                  }}
                />
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/72 sm:text-lg">
                <LocalizedText
                  value={{
                    en: "The results are presented as a set of practical capabilities rather than another grid of feature cards. Each one reflects something participants should be able to explain, map, connect, or produce by the end.",
                    ru: "Результаты показаны как набор практических способностей, а не еще одна сетка одинаковых карточек. Каждый пункт отражает то, что участники смогут объяснить, картировать, связать или подготовить к завершению программы.",
                    tg: "Натиҷаҳо ҳамчун маҷмӯи қобилиятҳои амалӣ нишон дода шудаанд, на ҳамчун шабакаи навбатии кортҳои якхела. Ҳар банди он инъикос мекунад, ки иштирокчиён то анҷоми барнома чиро метавонанд шарҳ диҳанд, харитасозӣ кунанд, пайваст намоянд ё таҳия созанд."
                  }}
                />
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { en: "Understand", ru: "Понимать", tg: "Фаҳмидан" },
                  { en: "Analyze", ru: "Анализировать", tg: "Таҳлил кардан" },
                  { en: "Translate into action", ru: "Переводить в действие", tg: "Ба амал табдил додан" }
                ].map((item) => (
                  <span
                    key={item.en}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/78"
                  >
                    <LocalizedText value={item} />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-4 sm:space-y-5">
            {items.map((item, index) => {
              const theme = outcomeThemes[index % outcomeThemes.length];

              return (
                <Reveal key={item.title.en} delay={index * 0.05}>
                  <article
                    className={cn(
                      "group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] sm:p-7",
                      index % 2 === 1 ? "xl:ml-14" : "xl:mr-14"
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", theme.accent)} />
                    <div className={cn("absolute inset-y-0 left-0 w-20 blur-2xl", theme.panel)} />

                    <div className="relative grid gap-5 md:grid-cols-[92px,1fr] md:items-start">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[26px] border border-white/10 bg-white/[0.05] text-3xl font-heading text-white/88 shadow-[0_18px_40px_rgba(2,8,23,0.22)]">
                        0{index + 1}
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/46">
                          <LocalizedText value={{ en: "Capability", ru: "Компетенция", tg: "Қобилият" }} />
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                          <LocalizedText value={item.title} />
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                          <LocalizedText value={item.text} />
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
