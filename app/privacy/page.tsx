import type { Metadata } from "next";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import { text } from "@/lib/conference-i18n";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow={text("Website information", "Информация о сайте", "Маълумот дар бораи сомона")} title={text("Privacy", "Конфиденциальность", "Махфият")} description={text("The website includes an embedded registration form and does not provide user accounts or analytics integrations.", "На сайте размещена встроенная форма регистрации; учётные записи пользователей и интеграции аналитики не используются.", "Дар сомона шакли дарунсохти бақайдгирӣ ҷойгир аст; ҳисобҳои корбарӣ ва ҳамгироии таҳлилӣ истифода намешаванд.")} />
      <section className="conference-content">
        <Container>
          <div className="conference-prose">
            <aside className="conference-prose__aside"><LocalizedText value={text("Current site status", "Текущий статус сайта", "Ҳолати ҷории сомона")} /></aside>
            <div className="conference-prose__body">
              <h2><LocalizedText value={text("Information collection", "Сбор информации", "Ҷамъоварии маълумот")} /></h2>
              <p><LocalizedText value={text("The Registration page embeds an external form used to collect the information that a participant chooses to submit for Conference participation. This website itself does not create user accounts.", "На странице регистрации встроена внешняя форма для сбора сведений, которые участник добровольно отправляет для участия в конференции. Сам сайт не создаёт учётные записи пользователей.", "Дар саҳифаи бақайдгирӣ шакли беруна ҷойгир шудааст, ки маълумоти аз ҷониби иштирокчӣ барои иштирок дар конфронс пешниҳодшударо ҷамъоварӣ мекунад. Худи сомона ҳисобҳои корбарӣ эҷод намекунад.")} /></p>
              <h2><LocalizedText value={text("External form", "Внешняя форма", "Шакли беруна")} /></h2>
              <p><LocalizedText value={text("Information submitted through the registration form is handled under the form owner’s data-management arrangements. This notice should be updated if additional analytics or interactive services are introduced.", "Сведения, отправленные через регистрационную форму, обрабатываются в соответствии с порядком управления данными владельца формы. При добавлении аналитики или других интерактивных сервисов это уведомление необходимо обновить.", "Маълумоте, ки тавассути шакли бақайдгирӣ ирсол мешавад, тибқи тартиби идоракунии маълумоти соҳиби шакл коркард мегардад. Ҳангоми илова кардани таҳлил ё дигар хизматрасониҳои интерактивӣ ин огоҳӣ бояд нав карда шавад.")} /></p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
