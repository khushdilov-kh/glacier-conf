import type { Metadata } from "next";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusPanel from "@/components/ui/StatusPanel";
import { CheckCircleIcon, ClockIcon, MailIcon } from "@/components/ui/LineIcons";
import { text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Contact and Updates",
  description: "Official update status for conference registration, logistics and contact information."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Conference desk", "Секретариат конференции", "Котиботи конфронс")}
        title={text("Contact and updates", "Контакты и обновления", "Тамос ва навсозиҳо")}
        description={text("Registration is open. Verified contact and online participation details will appear here as soon as they are confirmed by the organizers.", "Регистрация открыта. Проверенные контактные данные и информация об онлайн-участии появятся здесь сразу после подтверждения организаторами.", "Бақайдгирӣ кушода аст. Маълумоти санҷидашудаи тамос ва иштироки онлайн пас аз тасдиқи ташкилкунандагон дар ин ҷо нашр мешавад.")}
        meta={text("Contact information · Awaiting confirmation", "Контактная информация · Ожидает подтверждения", "Маълумоти тамос · Дар интизори тасдиқ")}
        actions={<Button className="!bg-white !text-ink-900 hover:!bg-gold-300" href="/#faq" variant="secondary"><LocalizedText value={text("Read FAQ", "Читать вопросы и ответы", "Дидани саволу ҷавоб")} /></Button>}
      />

      <section className="conference-content">
        <Container>
          <StatusPanel
            label={text("Contact details pending", "Контактные данные ожидаются", "Маълумоти тамос интизор аст")}
            title={text("The official Conference contact channel is not yet published", "Официальный канал связи конференции пока не опубликован", "Канали расмии тамоси конфронс ҳанӯз нашр нашудааст")}
            description={text("No unverified legacy email address or telephone number is displayed. A verified Conference desk address and contact number will be added when confirmed.", "Непроверенные прежние адреса электронной почты и номера телефонов не публикуются. Подтверждённые контакты секретариата конференции будут добавлены после согласования.", "Суроғаҳои электронии қаблӣ ва рақамҳои телефони тасдиқнашуда нашр намешаванд. Маълумоти тасдиқшудаи котиботи конфронс пас аз мувофиқа илова мешавад.")}
            icon={<MailIcon className="h-7 w-7" aria-hidden="true" />}
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="conference-eyebrow"><LocalizedText value={text("Current information", "Текущая информация", "Маълумоти ҷорӣ")} /></p>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 sm:text-4xl"><LocalizedText value={text("What is already confirmed", "Что уже подтверждено", "Чӣ аллакай тасдиқ шудааст")} /></h2>
              <p className="mt-5 text-[15px] leading-7 text-ink-600"><LocalizedText value={text("Use these published details for planning while operational information is being finalized.", "Используйте опубликованные сведения для планирования, пока уточняется организационная информация.", "Ҳангоми дақиқ шудани маълумоти ташкилӣ аз ин маълумоти нашршуда барои банақшагирӣ истифода баред.")} /></p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-soft">
              {[
                [text("Main Conference", "Основная конференция", "Конфронси асосӣ"), text("18 August 2026 · Dushanbe, Republic of Tajikistan", "18 августа 2026 года · город Душанбе, Республика Таджикистан", "18 августи соли 2026 · шаҳри Душанбе, Ҷумҳурии Тоҷикистон")],
                [text("Field visit", "Выездное мероприятие", "Чорабинии сайёри саҳроӣ"), text("19 August 2026 · Rasht District", "19 августа 2026 года · Раштский район", "19 августи соли 2026 · ноҳияи Рашт")],
                [text("Format", "Формат", "Шакл"), text("Hybrid · In-person and online participation", "Гибридный · Очное и онлайн-участие", "Омехта · Иштироки ҳузурӣ ва онлайн")],
                [text("Languages", "Языки", "Забонҳо"), text("Tajik, Russian and English with simultaneous interpretation", "Таджикский, русский и английский языки с синхронным переводом", "Тоҷикӣ, русӣ ва англисӣ бо тарҷумаи ҳамзамон")]
              ].map(([label, value]) => (
                <div className="grid gap-2 border-b border-sand-200 px-6 py-5 last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-6" key={label.en}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-600"><LocalizedText value={label} /></p>
                  <p className="text-sm font-semibold leading-6 text-ink-800"><LocalizedText value={value} /></p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {[
              { title: text("Registration", "Регистрация", "Бақайдгирӣ"), description: text("The official participant form is available for in-person and online participation.", "Официальная форма участника доступна для очного и онлайн-участия.", "Шакли расмии иштирокчӣ барои иштироки ҳузурӣ ва онлайн дастрас аст."), href: "/registration/", available: true },
              { title: text("Venue", "Место проведения", "Макон"), description: text("Exact Dushanbe address, arrival instructions and access guidance.", "Точный адрес в Душанбе, инструкции по прибытию и доступу.", "Суроғаи дақиқ дар Душанбе ва дастурҳои ташрифу дастрасӣ."), href: "/venue/", available: false },
              { title: text("Online access", "Онлайн-доступ", "Дастрасии онлайн"), description: text("Remote platform, joining links and technical guidance.", "Платформа, ссылки для подключения и технические инструкции.", "Платформа, пайвандҳои пайвастшавӣ ва дастурҳои техникӣ."), href: "/participants/", available: false }
            ].map((item) => (
              <Card className="flex min-h-[230px] flex-col p-7" key={item.title.en}>
                <div className="flex items-start justify-between gap-4">
                  {item.available ? <CheckCircleIcon className="h-6 w-6 text-accent-600" aria-hidden="true" /> : <ClockIcon className="h-6 w-6 text-accent-600" aria-hidden="true" />}
                  <Badge variant={item.available ? "success" : "pending"}><LocalizedText value={item.available ? text("Open", "Открыта", "Кушода") : text("Pending", "Ожидается", "Дар интизорӣ")} /></Badge>
                </div>
                <h3 className="mt-8 font-heading text-2xl font-semibold text-ink-900"><LocalizedText value={item.title} /></h3>
                <p className="mt-3 text-sm leading-7 text-ink-600"><LocalizedText value={item.description} /></p>
                <Button className="mt-auto w-fit" href={item.href} size="sm" variant="ghost"><LocalizedText value={item.available ? text("Open form", "Открыть форму", "Кушодани шакл") : text("View status", "Смотреть статус", "Дидани ҳолат")} /></Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
