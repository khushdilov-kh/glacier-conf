import Image from "next/image";
import Link from "next/link";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import ConferenceImportantDates from "@/components/conference/ConferenceImportantDates";
import ConferenceProgramme from "@/components/conference/ConferenceProgramme";
import ConferenceThemes from "@/components/conference/ConferenceThemes";
import OfficialMarks from "@/components/conference/OfficialMarks";
import HomeCallForPapers from "@/components/home/HomeCallForPapers";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import Button from "@/components/ui/Button";
import { conferenceI18n, text } from "@/lib/conference-i18n";

export default function HomePage() {
  return (
    <main className="conference-home">
      <section className="conference-hero" id="home">
        <div className="conference-hero__image" aria-hidden="true">
          <Image src="/images/barsem.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="conference-hero__shade" aria-hidden="true" />

        <Container className="conference-hero__content">
          <div className="conference-hero__main">
            <div className="conference-hero__copy">
              <p className="conference-hero__edition">
                <span>Dushanbe</span>
                <span>2026</span>
              </p>
              <p className="conference-eyebrow conference-eyebrow--light text-lg"><LocalizedText value={conferenceI18n.type} /></p>
              <h1 className="text-2xl"><LocalizedText value={conferenceI18n.tagline} /></h1>
              <div className="conference-hero__actions">
                <Button className="!bg-[#ddb54b] !text-[#102d36] hover:!bg-[#e7c76e]" href="/registration/" size="lg">
                  <LocalizedText value={text("Registration", "Регистрация", "Бақайдгирӣ")} />
                </Button>
                <Button className="!border-white/40 !bg-white/[0.07] !text-white hover:!bg-white/[0.14]" href="#call-for-papers" size="lg" variant="secondary">
                  <LocalizedText value={text("Submit an abstract", "Подать тезисы", "Пешниҳоди фишурдаи маърӯза")} />
                </Button>
                <Link className="conference-hero__programme-link" href="/program-agenda/"><LocalizedText value={text("View programme", "Смотреть программу", "Дидани рӯзнома")} /> <span aria-hidden="true">→</span></Link>
              </div>
            </div>

            {/* <aside className="conference-hero__milestones" aria-label="Conference milestones">
              <div>
                <strong>35</strong>
                <span>Years of State Independence</span>
              </div>
              <div>
                <strong>100</strong>
                <span>Years of Hydrometeorological Service</span>
              </div>
            </aside> */}
          </div>

          <dl className="conference-hero__facts" aria-label="Conference details">
            <div>
              <dt><LocalizedText value={text("Date", "Дата", "Сана")} /></dt>
              <dd><LocalizedText value={conferenceI18n.dates} /></dd>
            </div>
            <div>
              <dt><LocalizedText value={text("Location", "Место проведения", "Макон")} /></dt>
              <dd><LocalizedText value={text("Dushanbe · Rasht District", "Душанбе · Раштский район", "Душанбе · ноҳияи Рашт")} /></dd>
            </div>
            <div>
              <dt><LocalizedText value={text("Participation", "Участие", "Иштирок")} /></dt>
              <dd><LocalizedText value={conferenceI18n.format} /></dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="official-strip" aria-label="Official conference marks">
        <Container>
          <OfficialMarks />
        </Container>
      </section>

      <section className="conference-section conference-about" id="about">
        <Container className="conference-about__layout">
          <figure className="conference-about__portrait">
            <Image
              src="/images/rahmon.jpeg"
              alt="President of the Republic of Tajikistan Emomali Rahmon"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div className="conference-about__portrait-shade" aria-hidden="true" />
            <blockquote>
              <p><LocalizedText value={text("“The accelerated melting of glaciers has become a global crisis of our time.”", "«Ускоренное таяние ледников стало глобальным кризисом нашего времени».", "«Обшавии босуръати пиряхҳо ба буҳрони ҷаҳонии замони мо табдил ёфтааст».")} /></p>
              <cite>
                Emomali Rahmon
                <a
                  href="https://mfa.tj/en/tokyo/view/17132/speech-of-the-president-of-the-republic-of-tajikistan-his-excellency-emomali-rahmon-at-the-high-level-international-conference-on-glaciers-preservation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText value={text("High-Level International Conference on Glaciers’ Preservation · 2025", "Международная конференция высокого уровня по сохранению ледников · 2025", "Конфронси байналмилалии сатҳи баланд оид ба ҳифзи пиряхҳо · 2025")} />
                </a>
              </cite>
            </blockquote>
          </figure>

          <div className="conference-about__content">
            <div className="conference-section__heading">
              <p className="conference-eyebrow"><LocalizedText value={text("About the Conference", "О конференции", "Дар бораи конфронс")} /></p>
              <h2><LocalizedText value={text("A century of observation. A new decade of action.", "Век наблюдений. Новое десятилетие действий.", "Як асри мушоҳида. Даҳсолаи нави амал.")} /></h2>
            </div>
            <div className="conference-about__narrative">
              {conferenceI18n.background.map((paragraph) => <p key={paragraph.en} className="text-justify"><LocalizedText value={paragraph} /></p>)}
              <Link className="conference-text-link" href="/about/">
                <LocalizedText value={text("More about the Conference", "Подробнее о конференции", "Маълумоти бештар дар бораи конфронс")} /> <span aria-hidden="true">→</span>
              </Link>
            </div>
            {/* <div className="conference-about__facts">
              {conference.context.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div> */}
          </div>
        </Container>
      </section>

      <ConferenceThemes />

      <ConferenceImportantDates compact />

      <HomeCallForPapers />

      <section className="conference-section conference-programme-preview" id="programme">
        <Container>
          <div className="conference-section__heading conference-section__heading--split">
            <div>
              <p className="conference-eyebrow"><LocalizedText value={text("Programme at a glance", "Краткая программа", "Рӯзнома дар як нигоҳ")} /></p>
              <h2><LocalizedText value={text("Dialogue in Dushanbe, followed by a field visit to Rasht", "Диалог в Душанбе и выездное мероприятие в Раштском районе", "Муколама дар Душанбе ва чорабинии сайёри саҳроӣ дар ноҳияи Рашт")} /></h2>
            </div>
            <div className="conference-section__heading-action">
              <p><LocalizedText value={text("The working programme may be refined as speakers and institutional representatives are confirmed.", "Рабочая программа может уточняться по мере подтверждения выступающих и представителей учреждений.", "Рӯзномаи корӣ бо тасдиқи сухангӯён ва намояндагони муассисаҳо метавонад дақиқ карда шавад.")} /></p>
              <Link className="conference-text-link" href="/program-agenda/">
                <LocalizedText value={text("View the complete programme", "Смотреть полную программу", "Дидани рӯзномаи пурра")} /> <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <ConferenceProgramme compact />
          <div className="conference-programme-preview__field">
            <div>
              <span><LocalizedText value={text("Day 02 · 19 August 2026", "День 02 · 19 августа 2026 года", "Рӯзи 02 · 19 августи соли 2026")} /></span>
              <h3><LocalizedText value={text("Field Visit to Rasht District of the Republic of Tajikistan", "Выездное полевое мероприятие в Раштский район Республики Таджикистан", "Чорабинии сайёри саҳроӣ ба ноҳияи Рашти Ҷумҳурии Тоҷикистон")} /></h3>
            </div>
            <p><LocalizedText value={text("A practical extension of the scientific programme, connecting dialogue with the realities of monitoring and climate resilience in the field.", "Практическое продолжение научной программы, связывающее диалог с реальными задачами мониторинга и климатической устойчивости на местах.", "Идомаи амалии рӯзномаи илмӣ, ки муколамаро бо воқеияти мониторинг ва устувории иқлимӣ дар саҳро мепайвандад.")} /></p>
          </div>
        </Container>
      </section>

      <HomeFaqSection />
    </main>
  );
}
