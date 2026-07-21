import type { SVGProps } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import GeoPatternBackdrop from "@/components/ui/GeoPatternBackdrop";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AboutShowcaseSectionProps {
  title: LocalizedString;
  description: LocalizedString;
  programDays: number;
  tracksCount: number;
  sponsorsCount: number;
  aboutUrl: string;
  participantsUrl: string;
  sectionId?: string;
}

function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" />
    </svg>
  );
}

function SummitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m3.5 18.5 5.7-8 2.7 3.6 3.1-5.1 5.5 9H3.5Z" />
      <path d="m11.8 8.8 1.4-2.3 1.8 2.3" />
    </svg>
  );
}

function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M10 14 8.2 15.8a3.2 3.2 0 0 1-4.5-4.5L6 9" />
      <path d="M14 10 15.8 8.2a3.2 3.2 0 1 1 4.5 4.5L18 15" />
      <path d="m8.5 15.5 7-7" />
    </svg>
  );
}

const storyLead = {
  en: `This Summer University Program responds to these urgent realities by strengthening capacity in cryosphere risk understanding and management. Its core objective is to equip participants with applied knowledge and analytical skills to identify cryosphere-related hazards, understand their physical drivers and cascading impacts, and evaluate risk in the context of climate change, exposure, and vulnerability.
In this context, Khorog State University and the Aga Khan Foundation are organizing a Summer University Program on “Understanding Cryosphere Hazards: Integrating Glaciers, Glacial Lakes, and Permafrost” under the Adaptive and Resilient Communities in their Habitat (ARCH) initiative, financially supported by the Government of Switzerland through the Swiss Agency for Development and Cooperation (SDC). 
`,
  ru: "Summer University 2026 объединяет криосферную науку, ГИС, дистанционное зондирование и практику управления рисками в одном очном формате, рассчитанном на обучение через реальные задачи."
};

const featureCards = [
  {
    icon: CompassIcon,
    title: {
      en: "Integrated Learning Workflow",
      ru: "Интегрированный учебный процесс",
      tg: "Раванди ҳамгирои омӯзиш"
    },
    text: {
      en: "Lectures, GIS labs, group work, and field-based observation are structured as one connected workflow rather than separate activities.",
      ru: "Лекции, ГИС-лаборатории, групповая работа и полевые наблюдения собраны в единый связанный процесс, а не разделены на отдельные активности.",
      tg: "Лексияҳо, лабораторияҳои GIS, кори гурӯҳӣ ва мушоҳидаҳои саҳроӣ ҳамчун як раванди ягонаи ҳамбаста ташкил шудаанд, на ҳамчун фаъолиятҳои ҷудогона."
    },
    accent: "from-sky-500 to-cyan-500"
  },
  {
    icon: LinkIcon,
    title: {
      en: "Small group, close collaboration",
      ru: "Небольшая группа, тесное взаимодействие",
      tg: "Гурӯҳи хурд, ҳамкории наздик"
    },
    text: {
      en: "A limited participant group keeps mentoring direct and makes interdisciplinary teamwork part of the daily experience.",
      ru: "Ограниченный набор участников делает менторство более прямым, а междисциплинарную командную работу частью ежедневного опыта.",
      tg: "Гурӯҳи маҳдуди иштирокчиён мураббигиро мустақимтар мекунад ва кори байнисоҳавии дастаҷамъонаро ба қисми таҷрибаи ҳаррӯза табдил медиҳад."
    },
    accent: "from-emerald-500 to-teal-500"
  },
  {
    icon: SummitIcon,
    title: {
      en: "Practical Skills for Research and Risk Planning",
      ru: "Практические навыки для исследований и планирования рисков",
      tg: "Малакаҳои амалӣ барои таҳқиқот ва банақшагирии хавф"
    },
    text: {
      en: "Participants leave with methods they can carry into research, planning, preparedness, and communication around mountain risk.",
      ru: "Участники завершают программу с методами, которые можно перенести в исследования, планирование, готовность и коммуникацию вокруг горных рисков.",
      tg: "Иштирокчиён барномаро бо усулҳое анҷом медиҳанд, ки онҳоро метавон ба таҳқиқот, банақшагирӣ, омодагӣ ва иртибот дар бораи хавфҳои кӯҳистон интиқол дод."
    },
    accent: "from-amber-500 to-orange-500"
  }
] as const;

function StatCard({
  value,
  label,
  accent
}: {
  value: LocalizedString;
  label: LocalizedString;
  accent: string;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-[24px] border border-slate-200/70 bg-white/80 p-5 shadow-soft">
      <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", accent)} />
      <p className="text-3xl font-semibold text-ink-900">{value.en}</p>
      <p className="mt-2 text-sm leading-6 text-ink-600">
        <LocalizedText value={label} />
      </p>
    </div>
  );
}

export default function AboutShowcaseSection({
  title,
  description,
  programDays,
  tracksCount,
  sponsorsCount,
  aboutUrl,
  participantsUrl,
  sectionId = "about"
}: AboutShowcaseSectionProps) {
  return (
    <section id={sectionId} className="relative overflow-hidden py-20 sm:py-24">
      <GeoPatternBackdrop variant="mesh" className="text-sky-600 opacity-50" />
      

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={{ en: "Program overview", ru: "Обзор программы", tg: "Шарҳи барнома" }}
                title={title}
                description={description}
              />
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-3 max-w-2xl text-base text-justify word leading-8 text-ink-800 sm:text-lg mb-10">
                      <LocalizedText
                        value={{
                          en: "In 2025, the International Year of Glaciers’ Preservation and the UN Decade of Action for Cryospheric Sciences (2025–2034) placed global attention on the accelerating transformation of glaciers, snow, and permafrost. The International Year is accompanied by the establishment of the World Day for Glaciers (21 March, starting in 2025). These changes are reshaping mountain environments worldwide, with profound consequences for water security, ecosystems, infrastructure, and human safety – particularly in regions already facing social and economic pressures.",
                          ru: "В 2025 году Международный год сохранения ледников и Десятилетие действий ООН в области криосферных наук (2025–2034) привлекли всеобщее внимание к ускоряющейся трансформации ледников, снега и вечной мерзлоты. Международный год сопровождается учреждением Всемирного дня ледников (21 марта, начиная с 2025 года). Эти изменения преобразуют горные районы по всему миру, имея серьезные последствия для водной безопасности, экосистем, инфраструктуры и безопасности человека, особенно в регионах, уже сталкивающихся с социальным и экономическим давлением.",
                          tg: "Соли 2025, ки ҳамчун Соли байналмилалии ҳифзи пиряхҳо эълон гардидааст, ҳамзамон оғози Даҳсолаи амал барои илмҳои криосфераи Созмони Милали Муттаҳид (2025–2034) мебошад. Ин ташаббусҳои ҷаҳонӣ таваҷҷуҳи ҷомеаи байналмилалиро ба тағйироти босуръати пиряхҳо, қабати барф ва яхбандии абадӣ ҷалб намуда, аҳаммияти омӯзиш ва ҳифзи онҳоро бештар таъкид мекунанд. Дар доираи ин иқдом, аз соли 2025 сар карда, ҳамасола 21 март ҳамчун Рӯзи ҷаҳонии пиряхҳо таҷлил мегардад. Тағйироти босуръат дар криосфера муҳити кӯҳистониро дар саросари ҷаҳон ба таври назаррас дигаргун сохта, барои амнияти захираҳои обӣ, устувории экосистемаҳо, инфрасохтор ва амнияти аҳолӣ паёмадҳои ҷиддӣ ба вуҷуд меоранд. Ин таъсирот махсусан дар минтақаҳои кӯҳистонӣ ва осебпазир, ки аллакай бо мушкилоти иҷтимоӣ ва иқтисодӣ рӯ ба рӯ ҳастанд, бештар эҳсос мешаванд."
                        }}
                      />
              </p>
              <p className="mt-3 max-w-2xl text-base text-justify leading-8 text-ink-800 sm:text-lg mb-10">
                      <LocalizedText
                        value={{
                          en: "This Summer University Program responds to these urgent realities by strengthening capacity in cryosphere risk understanding and management. Its core objective is to equip participants with applied knowledge and analytical skills to identify cryosphere-related hazards, understand their physical drivers and cascading impacts, and evaluate risk in the context of climate change, exposure, and vulnerability.",
                          ru: "Эта программа Summer University отвечает на эти срочные реалии, усиливая возможности в понимании и управлении рисками криосферы. Ее основная цель - обеспечить участников практическими знаниями и аналитическими навыками для идентификации опасностей, связанных с криосферой, понимания их физических движущих сил и каскадных последствий, а также оценки рисков в контексте изменения климата, экспозиции и уязвимости.",
                          tg: "Донишгоҳи байналмилалии тобистонаи 2026 ба ин воқеиятҳои мубрам ва рӯзафзун посух гуфта, ба таҳкими иқтидори иштирокчиён дар самти дарк, арзёбӣ ва идоракунии хавфҳои марбут ба криосфера равона гардидааст. Ҳадафи асосии он фароҳам овардани донишҳои муосир, малакаҳои амалӣ ва қобилиятҳои таҳлилӣ барои муайянсозии хатарҳои вобаста ба криосфера, фаҳмиши равандҳои физикии ташаккул ва рушди онҳо, инчунин дарки паёмадҳои занҷирии онҳо мебошад. Барнома ҳамзамон ба тақвияти қобилияти иштирокчиён дар самти арзёбии хавфҳо дар заминаи тағйирёбии иқлим, қароргирӣ дар маърази хатар ва сатҳи осебпазирии ҷомеаҳо мусоидат хоҳад кард."
                        }}
                      />
              </p>              
              <p className="mt-3 max-w-2xl text-base text-justify leading-8 text-ink-800 sm:text-lg mb-10">
                      <LocalizedText
                        value={{
                          en: "In this context, Khorog State University and the Aga Khan Foundation are organizing a Summer University Program on “Understanding Cryosphere Hazards: Integrating Glaciers, Glacial Lakes, and Permafrost” under the Adaptive and Resilient Communities in their Habitat (ARCH) initiative, financially supported by the Government of Switzerland through the Swiss Agency for Development and Cooperation (SDC).",
                          ru: "В этом контексте Хорогский государственный университет и Фонд Ага Хана организуют Summer University по теме «Понимание криосферных опасностей: интеграция ледников, ледниковых озер и мерзлоты» в рамках инициативы ARCH при финансовой поддержке Правительства Швейцарии через Swiss Agency for Development and Cooperation (SDC).",
                          tg: "Дар ин замина, Донишгоҳи давлатии Хоруғ ба номи Моёншо Назаршоев ва Фонди Оғохон дар ҳамкорӣ бо ҳамдигар Донишгоҳи байналмилалии тобистонаи 2026-ро таҳти унвони «Дарки хатарҳои криосфера: аз пиряхҳо ва кӯлҳои пиряхӣ то яхбандии абадӣ» дар доираи ташаббуси ARCH бо дастгирии молиявии Ҳукумати Швейтсария тавассути Агентии Швейтсария оид ба рушд ва ҳамкорӣ (SDC) ташкил менамоянд."
                        }}
                      />
              </p>
              
            </Reveal>

           

            <Reveal delay={0.09}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={aboutUrl}>
                  <LocalizedText value={{ en: "Read full overview", ru: "Читать полное описание", tg: "Матни пурраро хонед" }} />
                </Button>              
              </div>
            </Reveal>

           
          </div>

          <div className="grid gap-5">
            <Reveal delay={0.04}>
              <figure className="group relative overflow-hidden rounded-[34px] border border-sky-100/80 bg-[#0b2740] shadow-[0_28px_90px_rgba(8,47,73,0.24)]">
                <div className="relative h-[290px] w-full overflow-hidden sm:h-[340px]">
                  <Image
                    src="/images/rahmon.jpeg"
                    alt="Эмомалӣ Раҳмон"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2740] via-[#0b2740]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                </div>

                <blockquote className="relative px-6 pb-7 pt-5 sm:px-8 sm:pb-9 sm:pt-6">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 48 48"
                    className="absolute right-6 top-4 h-14 w-14 text-cyan-300/15 sm:right-8 sm:h-16 sm:w-16"
                    fill="currentColor"
                  >
                    <path d="M10.3 35.8C6.8 32.7 5 28.7 5 23.8 5 15.7 9.3 10 17.9 6.7l2.2 4.5c-4.8 2-7.4 5-7.8 9h7.1v15.6h-9.1Zm22.9 0c-3.5-3.1-5.3-7.1-5.3-12 0-8.1 4.3-13.8 12.9-17.1l2.2 4.5c-4.8 2-7.4 5-7.8 9h7.1v15.6h-9.1Z" />
                  </svg>

                  <p className="relative pr-6 text-[15px] font-medium leading-7 text-slate-50 sm:text-base sm:leading-8">
                    «Обшавии босуръати пиряхҳо имрӯз ба як буҳрони глобалии замони мо табдил ёфта, дар тӯли даҳсолаҳои охир, онҳо бо суръати баланд коҳиш меёбанд. Ин раванди ташвишовар дар таърихи инсоният бесобиқа аст. Умед дорам, ки ҷомеаи ҷаҳонӣ дар татбиқи саривақтии ҳадафу уҳдадориҳои марбут ба обу иқлим, бахусус ҳифзи пиряхҳо ва истифодаи босамару оқилонаи об беш аз пеш талош хоҳад кард.»
                  </p>

                  <figcaption className="mt-6 flex items-center gap-4">
                    <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-sky-400" />
                    <cite className="not-italic text-sm font-semibold tracking-wide text-cyan-100 sm:text-base">
                      Эмомалӣ Раҳмон
                    </cite>
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-[34px] border border-slate-200/70 bg-white shadow-[0_26px_90px_rgba(15,23,42,0.12)]">
                <div className="relative h-[330px] w-full">
                  <Image
                    src="/images/3245.jpg"
                    alt="Mountain landscape representing the Summer University field setting"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />                 
                  
                 
                </div>
              </div>
            </Reveal>
             {/* <div className="mt-8 grid gap-4">
              {featureCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title.en} delay={0.12 + index * 0.05}>
                    <Card className="rounded-[28px] border-white/80 bg-white/85 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                      <div className="flex items-start gap-4">
                        <span
                          className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-slate-900/10",
                            item.accent
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-lg font-semibold text-ink-900">
                            <LocalizedText value={item.title} />
                          </p>
                          <p className="mt-2 text-sm leading-7 text-ink-600">
                            <LocalizedText value={item.text} />
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
