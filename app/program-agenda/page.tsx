import type { Metadata } from "next";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import ConferenceProgramme from "@/components/conference/ConferenceProgramme";
import PageHero from "@/components/conference/PageHero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { conferenceI18n, programmeContributorsI18n, text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Conference Programme",
  description: "Programme for 18–19 August 2026 in Dushanbe and Rasht District."
};

export default function ProgrammePage() {
  return (
    <main>
      <PageHero
        eyebrow={conferenceI18n.dates}
        title={text("Conference programme", "Программа конференции", "Рӯзномаи конфронс")}
        description={text("One day of plenary, parallel and panel sessions in Dushanbe, followed by a field visit to Rasht District.", "Один день пленарных, параллельных и панельных заседаний в Душанбе, после которого состоится выездное мероприятие в Раштском районе.", "Як рӯзи ҷаласаҳои пленарӣ, мувозӣ ва панелӣ дар Душанбе, сипас чорабинии сайёри саҳроӣ дар ноҳияи Рашт.")}
        meta={text("Working programme · Speaker confirmations in progress", "Рабочая программа · Подтверждение выступающих продолжается", "Рӯзномаи корӣ · Тасдиқи сухангӯён идома дорад")}

      />
      <section className="conference-content">
        <Container>
          <div className="conference-note"><LocalizedText value={text("This working programme reflects the information currently approved by the organizers. Speakers and institutional representatives remain subject to final confirmation.", "Настоящая рабочая программа отражает информацию, утверждённую организаторами на текущий момент. Выступающие и представители учреждений подлежат окончательному подтверждению.", "Ин рӯзномаи корӣ маълумоти айни замон аз ҷониби ташкилкунандагон тасдиқшударо инъикос мекунад. Сухангӯён ва намояндагони муассисаҳо бояд ниҳоӣ тасдиқ шаванд.")} /></div>
          <ConferenceProgramme />

          <div className="mt-20 border-t border-sand-200 pt-14">
            <div className="max-w-3xl">
              <p className="conference-eyebrow"><LocalizedText value={text("Programme contributors", "Участники программы", "Иштирокчиёни рӯзнома")} /></p>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 sm:text-4xl"><LocalizedText value={text("Institutions and delegations represented in the working programme", "Учреждения и делегации, представленные в рабочей программе", "Муассисаҳо ва ҳайатҳое, ки дар рӯзномаи корӣ намояндагӣ шудаанд")} /></h2>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {programmeContributorsI18n.map((contributor, index) => (
                <Card className="min-h-[180px] p-6" key={contributor.en}>
                  <span className="text-xs font-bold tracking-[0.15em] text-accent-600">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-8 font-heading text-lg font-semibold leading-7 text-ink-900"><LocalizedText value={contributor} /></p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
