import type { Metadata } from "next";
import ConferenceImportantDates from "@/components/conference/ConferenceImportantDates";
import PageHero from "@/components/conference/PageHero";
import { conferenceI18n, text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Important Dates",
  description: "Key submission, notification and Conference milestones."
};

export default function ImportantDatesPage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Planning information", "Информация для планирования", "Маълумот барои банақшагирӣ")}
        title={text("Important dates", "Важные даты", "Санаҳои муҳим")}
        description={text("A simple timeline of the key milestones for submissions, author notifications and participation.", "Краткая хронология ключевых этапов подачи материалов, уведомления авторов и участия.", "Ҷадвали мухтасари марҳилаҳои асосии пешниҳоди мавод, огоҳ намудани муаллифон ва иштирок.")}
        meta={conferenceI18n.dates}
      />
      <ConferenceImportantDates />
    </main>
  );
}
