import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import StatusPanel from "@/components/ui/StatusPanel";
import { PeopleIcon } from "@/components/ui/LineIcons";
import LocalizedText from "@/components/LocalizedText";
import { text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Conference Committees",
  description: "Publication status for the organizing and scientific committees."
};

export default function CommitteePage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Conference governance", "Органы конференции", "Мақомоти конфронс")}
        title={text("Organizing and scientific committees", "Организационный и научный комитеты", "Кумитаҳои ташкилӣ ва илмӣ")}
        description={text("Committee membership will be presented only after names, affiliations and roles are formally approved by the organizers.", "Состав комитетов будет опубликован только после официального утверждения организаторами имён, организаций и ролей.", "Ҳайати кумитаҳо танҳо пас аз тасдиқи расмии номҳо, муассисаҳо ва нақшҳо аз ҷониби ташкилкунандагон нашр мешавад.")}
        meta={text("Membership lists · Awaiting confirmation", "Списки участников · Ожидают подтверждения", "Рӯйхати аъзоён · Дар интизори тасдиқ")}
      />
      <section className="conference-content">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <StatusPanel
              label={text("Awaiting approval", "Ожидает утверждения", "Дар интизори тасдиқ")}
              title={text("Organizing Committee", "Организационный комитет", "Кумитаи ташкилӣ")}
              description={text("The confirmed chair, members, institutional affiliations and organizational responsibilities will be published here.", "Здесь будут опубликованы утверждённые председатель, члены, их организации и организационные обязанности.", "Дар ин ҷо раиси тасдиқшуда, аъзоён, муассисаҳои онҳо ва вазифаҳои ташкилӣ нашр мешаванд.")}
              icon={<PeopleIcon className="h-7 w-7" aria-hidden="true" />}
            />
            <StatusPanel
              label={text("Awaiting approval", "Ожидает утверждения", "Дар интизори тасдиқ")}
              title={text("Scientific Committee", "Научный комитет", "Кумитаи илмӣ")}
              description={text("The confirmed scientific chair, reviewers, experts and institutional affiliations will be published here.", "Здесь будут опубликованы утверждённые научный руководитель, рецензенты, эксперты и их организации.", "Дар ин ҷо роҳбари илмӣ, муқарризон, коршиносон ва муассисаҳои онҳо пас аз тасдиқ нашр мешаванд.")}
              icon={<PeopleIcon className="h-7 w-7" aria-hidden="true" />}
            />
          </div>
          <div className="conference-note mt-8"><LocalizedText value={text("Names and roles are intentionally not inferred from the working programme. This prevents unconfirmed institutional participation from being presented as formal committee membership.", "Имена и роли намеренно не выводятся из рабочей программы, чтобы неподтверждённое участие учреждений не представлялось как официальное членство в комитетах.", "Номҳо ва нақшҳо қасдан аз рӯзномаи корӣ бароварда намешаванд, то иштироки тасдиқнашудаи муассисаҳо ҳамчун узвияти расмии кумитаҳо нишон дода нашавад.")} /></div>
        </Container>
      </section>
    </main>
  );
}
