import Link from "next/link";
import LocalizedText from "@/components/LocalizedText";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ChevronIcon } from "@/components/ui/LineIcons";
import { text } from "@/lib/conference-i18n";

const conferenceUpdates = [
  { label: text("Programme", "Программа", "Рӯзнома"), title: text("Working programme available", "Рабочая программа опубликована", "Рӯзномаи корӣ дастрас аст"), text: text("The current agenda includes plenary dialogue, parallel scientific sessions, a panel discussion and a field visit.", "Текущая программа включает пленарное заседание, параллельные научные сессии, панельную дискуссию и выездное мероприятие.", "Рӯзномаи ҷорӣ ҷаласаи пленарӣ, ҷаласаҳои мувозии илмӣ, муҳокимаи панелӣ ва чорабинии сайёри саҳроиро дар бар мегирад."), href: "/program-agenda/" },
  { label: text("Registration", "Регистрация", "Бақайдгирӣ"), title: text("Registration is open", "Регистрация открыта", "Бақайдгирӣ кушода аст"), text: text("The official participant form is available for in-person and online participation.", "Официальная форма участника доступна для очного и онлайн-участия.", "Шакли расмии иштирокчӣ барои иштироки ҳузурӣ ва онлайн дастрас аст."), href: "/registration/" },
  { label: text("Call for Papers", "Приём материалов", "Қабули мавод"), title: text("Submission guidance forthcoming", "Инструкции по подаче готовятся", "Дастури пешниҳод омода мешавад"), text: text("Abstract format, requirements, review arrangements and deadlines are currently awaiting approval.", "Формат тезисов, требования, порядок рассмотрения и сроки в настоящее время ожидают утверждения.", "Шакли фишурдаи маърӯза, талабот, тартиби баррасӣ ва муҳлатҳо айни замон дар интизори тасдиқ қарор доранд."), href: "/#call-for-papers" }
] as const;

export default function ConferenceUpdates({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-sand-50 py-24 sm:py-28 lg:py-32" aria-labelledby="conference-updates-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="conference-eyebrow"><LocalizedText value={text("Latest information", "Последняя информация", "Маълумоти навтарин")} /></p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink-900 sm:text-5xl" id="conference-updates-title">
              <LocalizedText value={text("Conference updates and announcements", "Новости и объявления конференции", "Навсозиҳо ва эълонҳои конфронс")} />
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-600 sm:text-base">
              <LocalizedText value={text("Current publication status for the programme, participation and scientific submissions.", "Текущий статус публикации программы, информации об участии и научных материалах.", "Ҳолати ҷории нашри рӯзнома, маълумоти иштирок ва маводи илмӣ.")} />
            </p>
          </div>
          {compact ? <Button href="/news/" variant="secondary"><LocalizedText value={text("View all updates", "Все обновления", "Ҳамаи навсозиҳо")} /></Button> : null}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {conferenceUpdates.map((item) => (
            <Card className="group flex min-h-[260px] flex-col p-7" interactive key={item.title.en}>
              <Badge className="w-fit" variant="info"><LocalizedText value={item.label} /></Badge>
              <h3 className="mt-8 font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] text-ink-900"><LocalizedText value={item.title} /></h3>
              <p className="mt-4 text-sm leading-7 text-ink-600"><LocalizedText value={item.text} /></p>
              <Link className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-accent-600" href={item.href}>
                <LocalizedText value={text("Read details", "Подробнее", "Маълумоти бештар")} /> <ChevronIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
