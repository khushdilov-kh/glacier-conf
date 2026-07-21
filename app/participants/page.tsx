import type { Metadata } from "next";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusPanel from "@/components/ui/StatusPanel";
import { GlobeIcon, PeopleIcon } from "@/components/ui/LineIcons";
import { conferenceI18n, text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Participants",
  description: "Participant profile, conference format and working languages."
};

export default function ParticipantsPage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Participation", "Участие", "Иштирок")}
        title={text("For participants", "Участникам", "Барои иштирокчиён")}
        description={text("The Conference brings together the institutions and professionals responsible for turning climate knowledge into practical public value.", "Конференция объединяет учреждения и специалистов, которые превращают знания о климате в практические решения для общества.", "Конфронс муассисаҳо ва мутахассисонеро муттаҳид мекунад, ки дониши иқлимиро ба қарорҳои амалӣ барои ҷомеа табдил медиҳанд.")}
        meta={conferenceI18n.format}
        actions={<Button className="!bg-white !text-ink-900 hover:!bg-gold-300" href="/registration/" variant="secondary"><LocalizedText value={text("Register now", "Зарегистрироваться", "Бақайдгирӣ")} /></Button>}
      />

      <section className="conference-content">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="conference-eyebrow"><LocalizedText value={text("Participant profile", "Профиль участников", "Профили иштирокчиён")} /></p>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 sm:text-4xl"><LocalizedText value={text("Who the Conference is for", "Для кого предназначена конференция", "Конфронс барои кӣ пешбинӣ шудааст")} /></h2>
              <p className="mt-5 text-[15px] leading-7 text-ink-600"><LocalizedText value={text("Participation is intended for policy, science, operations, finance and development communities working across hydrometeorology, climate and the cryosphere.", "Участие предназначено для представителей органов управления, науки, оперативных служб, финансовых институтов и организаций развития, работающих в области гидрометеорологии, климата и криосферы.", "Иштирок барои намояндагони мақомоти идоракунӣ, илм, хадамоти амалӣ, институтҳои молиявӣ ва созмонҳои рушд, ки дар соҳаи обуҳавошиносӣ, иқлим ва криосфера фаъолият мекунанд, пешбинӣ шудааст.")} /></p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {conferenceI18n.participantGroups.map((group, index) => (
                <Card className="min-h-[170px] p-6" key={group.en}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sand-100 text-accent-600">
                    <PeopleIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-7 font-heading text-lg font-semibold leading-7 text-ink-900"><LocalizedText value={group} /></p>
                  <span className="sr-only"><LocalizedText value={text("Participant group", "Группа участников", "Гурӯҳи иштирокчиён")} /> {index + 1}</span>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            <Card className="p-7">
              <Badge variant="info"><LocalizedText value={text("Format", "Формат", "Шакл")} /></Badge>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-ink-900"><LocalizedText value={text("Hybrid participation", "Гибридное участие", "Иштироки омехта")} /></h3>
              <p className="mt-3 text-sm leading-7 text-ink-600"><LocalizedText value={text("Both in-person and remote participation are planned for the main Conference day.", "В основной день конференции предусмотрено как очное, так и дистанционное участие.", "Дар рӯзи асосии конфронс иштироки ҳузурӣ ва маҷозӣ пешбинӣ шудааст.")} /></p>
            </Card>
            <Card className="p-7">
              <GlobeIcon className="h-6 w-6 text-accent-600" aria-hidden="true" />
              <h3 className="mt-6 font-heading text-2xl font-semibold text-ink-900"><LocalizedText value={text("Working languages", "Рабочие языки", "Забонҳои корӣ")} /></h3>
              <p className="mt-3 text-sm leading-7 text-ink-600"><LocalizedText value={conferenceI18n.languages} /></p>
            </Card>
            <Card className="p-7">
              <Badge variant="success"><LocalizedText value={text("19 August", "19 августа", "19 август")} /></Badge>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-ink-900"><LocalizedText value={text("Field visit", "Выездное полевое мероприятие", "Чорабинии сайёри саҳроӣ")} /></h3>
              <p className="mt-3 text-sm leading-7 text-ink-600"><LocalizedText value={text("Detailed arrangements for Rasht District will be shared with confirmed participants.", "Подробная информация о мероприятии в Раштском районе будет направлена подтверждённым участникам.", "Маълумоти муфассал оид ба чорабинӣ дар ноҳияи Рашт ба иштирокчиёни тасдиқшуда ирсол мешавад.")} /></p>
            </Card>
          </div>

          <StatusPanel
            className="mt-16"
            status="success"
            label={text("Registration open", "Регистрация открыта", "Бақайдгирӣ кушода аст")}
            title={text("Submit the official participant form", "Заполните официальную форму участника", "Шакли расмии иштирокчиро пур кунед")}
            description={text("Registration is available for both in-person and online participation. Confirmation and logistical guidance will be sent by the organizers.", "Регистрация доступна для очного и онлайн-участия. Подтверждение и логистическая информация будут направлены организаторами.", "Бақайдгирӣ барои иштироки ҳузурӣ ва онлайн дастрас аст. Тасдиқ ва маълумоти логистикӣ аз ҷониби ташкилкунандагон ирсол мешаванд.")}
            actions={<Button href="/registration/"><LocalizedText value={text("Open registration form", "Открыть форму регистрации", "Кушодани шакли бақайдгирӣ")} /></Button>}
          />
        </Container>
      </section>
    </main>
  );
}
