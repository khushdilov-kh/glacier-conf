import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Reveal from "@/components/ui/Reveal";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

type AchievementItem = {
  title: LocalizedString;
  text: LocalizedString;
  badge: LocalizedString;
};

interface ProjectAchievementsSectionProps {
  items: AchievementItem[];
}

const milestoneThemes = [
  {
    accent: "from-sky-500 to-cyan-500",
    ring: "border-sky-200",
    badge: "bg-sky-100 text-sky-900"
  },
  {
    accent: "from-emerald-500 to-teal-500",
    ring: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-900"
  },
  {
    accent: "from-amber-500 to-orange-500",
    ring: "border-amber-200",
    badge: "bg-amber-100 text-amber-900"
  }
] as const;

export default function ProjectAchievementsSection({ items }: ProjectAchievementsSectionProps) {
  return (
    <section id="achievements" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),transparent)]" />
      <div className="absolute left-[10%] top-20 h-36 w-36 rounded-full bg-amber-100/80 blur-3xl" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-ink-500">
              <LocalizedText value={{ en: "ARCH milestones", ru: "Этапы ARCH", tg: "Марҳилаҳои ARCH" }} />
            </p>
            <h2 className="mt-4 text-4xl font-heading leading-tight text-ink-900 sm:text-5xl">
              <LocalizedText
                value={{
                  en: "Previous achievements within the project",
                  ru: "Предыдущие достижения в рамках проекта",
                  tg: "Дастовардҳои пешина дар доираи лоиҳа"
                }}
              />
            </h2>
            <p className="mt-5 px-6 text-base leading-8 text-ink-600 sm:text-lg">
              <LocalizedText
                value={{
                  en: "The Summer and Winter University Programmes in Tajikistan have grown into impactful platforms for tackling climate change and disaster risks in mountainous regions—equipping participants with the knowledge, skills, and collaboration needed to turn challenges into solutions.",
                  ru: "Летние и зимние университетские программы в Таджикистане превратились в эффективные платформы для решения проблем изменения климата и рисков стихийных бедствий в горных регионах, предоставляя участникам знания, навыки и возможности для сотрудничества, необходимые для превращения проблем в решения.",
                  tg: "Барномаҳои Summer University ва Winter University дар Тоҷикистон ба платформаҳои таъсирбахш барои баррасии тағйирёбии иқлим ва хавфҳои офатҳои табиӣ дар минтақаҳои кӯҳистон табдил ёфтаанд ва иштирокчиёнро бо дониш, малака ва ҳамкории зарурӣ барои табдил додани мушкилот ба роҳҳалҳо таъмин мекунанд."
                }}
              />
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-7 top-3 w-px bg-gradient-to-b from-sky-200 via-emerald-200 to-amber-200 lg:hidden" />
          <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-sky-300 via-emerald-300 to-amber-300 lg:block" />

          <div className="grid gap-10 lg:grid-cols-3">
            {items.map((item, index) => {
              const theme = milestoneThemes[index % milestoneThemes.length];

              return (
                <Reveal key={item.title.en} delay={index * 0.06}>
                  <article className="relative pl-20 lg:pl-0">
                    <div className="absolute left-0 top-0 lg:static">
                      <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                        <div
                          className={cn(
                            "relative flex h-14 w-14 items-center justify-center rounded-full border-8 bg-white text-lg font-heading text-ink-900 shadow-[0_18px_40px_rgba(15,23,42,0.10)]",
                            theme.ring
                          )}
                        >
                          0{index + 1}
                        </div>
                        <span
                          className={cn(
                            "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                            theme.badge
                          )}
                        >
                          <LocalizedText value={item.badge} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-1 rounded-[30px] border border-white/80 bg-white/100  p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:mt-6">
                      <div className={cn("h-1 w-20 rounded-full bg-gradient-to-r", theme.accent)} />
                      <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink-900 lg:text-center">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-800 lg:text-center">
                        <LocalizedText value={item.text} />
                      </p>
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
