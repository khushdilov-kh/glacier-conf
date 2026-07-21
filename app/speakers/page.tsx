import type { Metadata } from "next";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import Card from "@/components/ui/Card";
import StatusPanel from "@/components/ui/StatusPanel";
import { PeopleIcon } from "@/components/ui/LineIcons";
import { programmeContributorsI18n, text } from "@/lib/conference-i18n";

export const metadata: Metadata = { title: "Speakers and Contributors" };

export default function SpeakersPage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Conference community", "Сообщество конференции", "Ҷомеаи конфронс")}
        title={text("Speakers and contributors", "Выступающие и участники", "Сухангӯён ва иштирокчиён")}
        description={text("National institutions, Central Asian delegations and international scientific and development partners are represented in the working programme.", "В рабочей программе представлены национальные учреждения, делегации стран Центральной Азии, международные научные организации и партнёры по развитию.", "Дар рӯзномаи корӣ муассисаҳои миллӣ, ҳайатҳои кишварҳои Осиёи Марказӣ, созмонҳои байналмилалии илмӣ ва шарикони рушд намояндагӣ шудаанд.")}
        meta={text("Individual speaker profiles · Confirmations in progress", "Профили выступающих · Подтверждение продолжается", "Профилҳои сухангӯён · Тасдиқ идома дорад")}
      />
      <section className="conference-content">
        <Container>
          <StatusPanel
            label={text("Profiles forthcoming", "Профили готовятся", "Профилҳо омода мешаванд")}
            title={text("Individual speaker announcements are awaiting confirmation", "Информация об отдельных выступающих ожидает подтверждения", "Маълумот дар бораи сухангӯёни алоҳида дар интизори тасдиқ аст")}
            description={text("Names, titles, affiliations, biographies and session assignments will be published only after formal confirmation. This page currently presents the institutions and groups referenced in the working programme.", "Имена, должности, организации, биографии и распределение по сессиям будут опубликованы только после официального подтверждения. Сейчас на странице представлены учреждения и группы, упомянутые в рабочей программе.", "Номҳо, вазифаҳо, муассисаҳо, тарҷумаи ҳол ва тақсимот ба ҷаласаҳо танҳо пас аз тасдиқи расмӣ нашр мешаванд. Айни замон дар саҳифа муассисаҳо ва гурӯҳҳои дар рӯзномаи корӣ зикршуда оварда шудаанд.")}
            icon={<PeopleIcon className="h-7 w-7" aria-hidden="true" />}
          />

          <div className="mt-16">
            <div className="max-w-3xl">
              <p className="conference-eyebrow"><LocalizedText value={text("Current programme", "Текущая программа", "Рӯзномаи ҷорӣ")} /></p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-ink-900 sm:text-4xl"><LocalizedText value={text("Represented institutions and delegations", "Представленные учреждения и делегации", "Муассисаҳо ва ҳайатҳои намояндагишуда")} /></h2>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {programmeContributorsI18n.map((item, index) => (
                <Card className="min-h-[190px] p-6" key={item.en}>
                  <span className="text-xs font-bold tracking-[0.15em] text-accent-600">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-8 font-heading text-lg font-semibold leading-7 text-ink-900"><LocalizedText value={item} /></p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
