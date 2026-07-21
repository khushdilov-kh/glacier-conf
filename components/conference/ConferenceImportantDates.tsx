import Button from "@/components/ui/Button";
import { CalendarIcon, ChevronIcon } from "@/components/ui/LineIcons";
import { importantDatesI18n, text } from "@/lib/conference-i18n";
import GeoPatternBackdrop from "../ui/GeoPatternBackdrop";

export default function ConferenceImportantDates({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-[#0a181d] py-24 text-white sm:py-28 lg:py-24" aria-labelledby="important-dates-title" id="important-dates">
      <GeoPatternBackdrop variant="mesh" className="text-sky-600 opacity-50" />
      {/* <div className="absolute inset-0 bg-[url('/images/topo.jpg')] bg-[length:1000px_auto] opacity-[0.045] mix-blend-screen" aria-hidden="true" /> */}
      

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="conference-eyebrow conference-eyebrow--light"><LocalizedText value={text("Important dates", "Важные даты", "Санаҳои муҳим")} /></p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[2.65rem]" id="important-dates-title">
            <LocalizedText value={text("Your conference journey, step by step.", "Ваш путь к конференции — шаг за шагом.", "Роҳи шумо ба конфронс — қадам ба қадам.")} />
          </h2>
          <p className="mx-auto mt-5 text-[15px] leading-7 text-[#b8d5d7] sm:text-base">
            <LocalizedText value={text("Follow the key milestones from the opening of submissions to the Conference and field visit.", "Следите за ключевыми этапами — от начала приёма материалов до конференции и выездного мероприятия.", "Марҳилаҳои асосиро аз оғози қабули мавод то конфронс ва чорабинии сайёри саҳроӣ пайгирӣ намоед.")} />
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-[#ddb54b]/20 via-white/25 to-[#ddb54b]/20 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

          <ol className="space-y-8 md:space-y-12">
            {importantDatesI18n.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li className="group relative grid grid-cols-[32px_minmax(0,1fr)] gap-5 md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:gap-0" key={item.title.en}>
                  <span
                    className="relative z-10 col-start-1 row-start-1 mt-8 flex h-8 w-8 items-center justify-center justify-self-center rounded-full border-[7px] border-[#052f3d] bg-[#ddb54b] shadow-[0_0_0_1px_rgba(255,255,255,0.32),0_0_0_8px_rgba(221,181,75,0.08)] transition duration-300 group-hover:scale-110 md:col-start-2 md:mt-12"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#052f3d]" />
                  </span>

                  <article
                    className={`relative col-start-2 row-start-1 min-h-[240px] rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.075] sm:p-7 ${
                      isLeft ? "md:col-start-1 md:mr-0 md:text-right" : "md:col-start-3 md:ml-0"
                    }`}
                  >
                    <span
                      className={`absolute top-[59px] hidden h-px w-11 bg-gradient-to-r md:block ${
                        isLeft ? "-right-11 from-white/25 to-[#ddb54b]" : "-left-11 from-[#ddb54b] to-white/25"
                      }`}
                      aria-hidden="true"
                    />
                    <div className={`flex items-center justify-between gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#91c7cb]"><LocalizedText value={text("Milestone", "Этап", "Марҳила")} /> {String(index + 1).padStart(2, "0")}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07] text-[#ddb54b]">
                        <CalendarIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-3 font-heading text-lg font-semibold text-[#f0ca69]"><LocalizedText value={item.date} /></p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight text-white"><LocalizedText value={item.title} /></h3>
                    <p className={`mt-3 text-sm leading-7 text-[#b8d5d7] ${isLeft ? "md:ml-auto md:max-w-sm" : "md:max-w-sm"}`}><LocalizedText value={item.detail} /></p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        
      </div>
    </section>
  );
}
import LocalizedText from "@/components/LocalizedText";
