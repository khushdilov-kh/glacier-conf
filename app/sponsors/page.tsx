import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import OfficialMarks from "@/components/conference/OfficialMarks";
import PageHero from "@/components/conference/PageHero";
import Button from "@/components/ui/Button";
import StatusPanel from "@/components/ui/StatusPanel";
import { PeopleIcon } from "@/components/ui/LineIcons";
import LocalizedText from "@/components/LocalizedText";
import { text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Conference Institutions",
  description: "Official national marks and publication status for organizing and partner institutions."
};

export default function SponsorsPage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Institutional context", "Институциональный контекст", "Заминаи институтсионалӣ")}
        title={text("Conference institutions", "Учреждения конференции", "Муассисаҳои конфронс")}
        description={text("Official national marks are presented below. Formal organizer, partner and supporter roles will be listed only after approval.", "Ниже представлены официальные государственные символы. Роли организаторов, партнёров и поддерживающих организаций будут указаны только после утверждения.", "Дар поён рамзҳои расмии давлатӣ оварда шудаанд. Нақшҳои ташкилкунандагон, шарикон ва созмонҳои дастгиркунанда танҳо пас аз тасдиқ нишон дода мешаванд.")}
        meta={text("Institutional roles · Awaiting final confirmation", "Роли учреждений · Ожидают окончательного подтверждения", "Нақшҳои муассисаҳо · Дар интизори тасдиқи ниҳоӣ")}
      />
      <section className="conference-content bg-white">
        <Container>
          <div className="overflow-hidden rounded-[28px] border border-sand-200 bg-sand-50">
            <OfficialMarks />
          </div>
          <StatusPanel
            className="mt-8"
            label={text("Roles awaiting approval", "Роли ожидают утверждения", "Нақшҳо дар интизори тасдиқ")}
            title={text("Final organizer and partner list forthcoming", "Итоговый список организаторов и партнёров будет опубликован позднее", "Рӯйхати ниҳоии ташкилкунандагон ва шарикон баъдтар нашр мешавад")}
            description={text("The website does not assign unconfirmed organizer, scientific partner, development partner or sponsor roles. The approved institutional list will be published here.", "Сайт не присваивает неподтверждённые роли организатора, научного партнёра, партнёра по развитию или спонсора. Утверждённый список учреждений будет опубликован здесь.", "Сомона нақшҳои тасдиқнашудаи ташкилкунанда, шарики илмӣ, шарики рушд ё сарпарастро таъин намекунад. Рӯйхати тасдиқшудаи муассисаҳо дар ин ҷо нашр мешавад.")}
            icon={<PeopleIcon className="h-7 w-7" aria-hidden="true" />}
            actions={<Button href="/committee/" variant="secondary"><LocalizedText value={text("Committee status", "Статус комитетов", "Ҳолати кумитаҳо")} /></Button>}
          />
        </Container>
      </section>
    </main>
  );
}
