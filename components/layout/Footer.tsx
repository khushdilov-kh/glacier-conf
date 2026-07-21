"use client";

import Container from "@/components/layout/Container";
import OfficialMarks from "@/components/conference/OfficialMarks";
import { conferenceI18n, text } from "@/lib/conference-i18n";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="conference-footer">
      <Container>
        <div className="conference-footer__navigation">
          <div className="conference-footer__identity">
            <p className="conference-footer__name">{t(conferenceI18n.type)}</p>
            <p className="conference-footer__title">{t(conferenceI18n.tagline)}</p>
            <p className="conference-footer__summary">{t(conferenceI18n.dates)} · {t(conferenceI18n.city)}</p>
          </div>
          <div className="conference-footer__status">
            <p>{t(text("Conference enquiries", "Вопросы о конференции", "Саволҳо оид ба конфронс"))}</p>
            <strong><a href="mailto:info@glacersconf.tj">info@glacersconf.tj</a></strong>
            <span>{t(text("Contact the organizing team for participation, submissions and general information.", "Свяжитесь с организационной группой по вопросам участия, подачи материалов и общей информации.", "Барои масъалаҳои иштирок, пешниҳоди мавод ва маълумоти умумӣ бо гурӯҳи ташкилӣ тамос гиред."))}</span>
            <OfficialMarks compact />
          </div>
        </div>

        <div className="conference-footer__bottom">
          <p>© 2026 {t(conferenceI18n.type)}</p>
        </div>
      </Container>
    </footer>
  );
}
