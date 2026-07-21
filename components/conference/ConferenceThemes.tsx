import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import {
  ChevronIcon,
  GlobeIcon,
  GridIcon,
  MountainIcon,
  TargetIcon
} from "@/components/ui/LineIcons";
import { conferenceI18n, text } from "@/lib/conference-i18n";

const presentation = [
  {
    icon: GridIcon,
    label: text("Observation & prediction", "Наблюдения и прогнозирование", "Мушоҳида ва пешгӯӣ"),
    color: "bg-[#dff2f2] text-[#08707b]",
    accent: "bg-[#16a1ad]"
  },
  {
    icon: MountainIcon,
    label: text("Cryosphere science", "Науки о криосфере", "Илмҳои криосфера"),
    color: "bg-[#e7efff] text-[#3c66aa]",
    accent: "bg-[#6d92d0]"
  },
  {
    icon: GlobeIcon,
    label: text("Adaptation & development", "Адаптация и развитие", "Мутобиқшавӣ ва рушд"),
    color: "bg-[#e6f3e8] text-[#39754b]",
    accent: "bg-[#67a876]"
  },
  {
    icon: TargetIcon,
    label: text("Finance & cooperation", "Финансирование и сотрудничество", "Маблағгузорӣ ва ҳамкорӣ"),
    color: "bg-[#fbefd1] text-[#8a681b]",
    accent: "bg-[#ddb54b]"
  }
] as const;

export default function ConferenceThemes() {
  return (
    <section
      aria-labelledby="conference-themes-title"
      className="relative isolate overflow-hidden bg-[#f1f7f6] py-24 sm:py-28 lg:py-36"
      id="conference-themes"
    >
      <div className="absolute inset-0 -z-20 bg-[url('/images/topo.jpg')] bg-[length:1050px_auto] opacity-[0.035]" aria-hidden="true" />
      <div className="absolute -right-32 top-24 -z-10 h-[440px] w-[440px] rounded-full bg-[#9ed6d7]/20 blur-3xl" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="conference-eyebrow"><LocalizedText value={text("Conference themes", "Темы конференции", "Мавзӯъҳои конфронс")} /></p>
            <h2
              className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink-900 sm:text-5xl lg:text-[4rem]"
              id="conference-themes-title"
            >
              <LocalizedText value={text("One climate system. Four connected perspectives.", "Единая климатическая система. Четыре взаимосвязанных направления.", "Як низоми иқлимӣ. Чор самти ба ҳам пайваст.")} />
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-8 text-ink-600 sm:text-base">
              <LocalizedText value={text("The scientific agenda follows the full path from observation and research to resilient development, investment and international cooperation.", "Научная повестка охватывает весь путь — от наблюдений и исследований до устойчивого развития, инвестиций и международного сотрудничества.", "Рӯзномаи илмӣ тамоми масирро аз мушоҳида ва таҳқиқот то рушди устувор, сармоягузорӣ ва ҳамкории байналмилалӣ фаро мегирад.")} />
            </p>

           
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {conferenceI18n.themes.map((theme, index) => {
              const item = presentation[index];
              const Icon = item.icon;

              return (
                <article
                  aria-labelledby={`conference-theme-${theme.number}`}
                  className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[30px] border border-white/90 bg-white p-7 shadow-[0_22px_60px_rgba(6,43,58,0.075)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_75px_rgba(6,43,58,0.12)] sm:p-8"
                  key={theme.number}
                >
                  <span className={`absolute inset-x-0 top-0 h-1 ${item.accent}`} aria-hidden="true" />
                  <div className="flex items-start justify-between gap-5">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-4xl font-medium tracking-[-0.07em] text-[#d7e4e3] transition-colors group-hover:text-[#aac9c8]" aria-hidden="true">
                      {theme.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-14">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-600"><LocalizedText value={item.label} /></p>
                    <h3
                      className="mt-4 font-heading text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.03em] text-ink-900"
                      id={`conference-theme-${theme.number}`}
                    >
                      <LocalizedText value={theme.title} />
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-ink-600"><LocalizedText value={theme.text} /></p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[#cddfdd] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-heading text-xl font-semibold leading-8 text-ink-900">
            <LocalizedText value={text("Have research or practical experience to contribute to these themes?", "У вас есть результаты исследований или практический опыт по этим темам?", "Оё шумо оид ба ин мавзӯъҳо натиҷаҳои таҳқиқот ё таҷрибаи амалӣ доред?")} />
          </p>
          <Button href="#call-for-papers" variant="secondary">
            <LocalizedText value={text("Explore the Call for Papers", "Открыть приглашение к подаче материалов", "Дидани даъват барои пешниҳоди мавод")} />
            <ChevronIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
