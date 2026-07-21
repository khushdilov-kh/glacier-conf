import type { Metadata } from "next";
import ConferenceUpdates from "@/components/conference/ConferenceUpdates";
import PageHero from "@/components/conference/PageHero";
import { text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Conference Updates",
  description: "Current publication status and announcements for the Conference programme, registration and Call for Papers."
};

export default function NewsPage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Announcements", "Объявления", "Эълонҳо")}
        title={text("Conference updates", "Новости конференции", "Навсозиҳои конфронс")}
        description={text("Verified information and transparent status updates for programme, participation and scientific submissions.", "Проверенная информация и актуальный статус программы, участия и подачи научных материалов.", "Маълумоти санҷидашуда ва ҳолати ҷории рӯзнома, иштирок ва пешниҳоди маводи илмӣ.")}
        meta={text("Official information will be added as it is confirmed", "Официальная информация будет добавляться по мере подтверждения", "Маълумоти расмӣ бо тасдиқ шудан илова мегардад")}
      />
      <ConferenceUpdates />
    </main>
  );
}
