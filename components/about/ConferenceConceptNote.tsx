"use client";

import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import Button from "@/components/ui/Button";
import conceptNoteEn from "@/content/conference-concept-note.json";
import conceptNoteRu from "@/content/conference-concept-note.ru.json";
import conceptNoteTg from "@/content/conference-concept-note.tg.json";
import { conferenceI18n, text } from "@/lib/conference-i18n";
import { useLanguage } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type ConceptNoteSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type ConceptNote = {
  documentLabel: string;
  eventType: string;
  eventTitle: string;
  eventDetails: Array<{ label: string; details: string[] }>;
  sections: ConceptNoteSection[];
};

const conceptNotes: Record<Lang, ConceptNote> = {
  en: conceptNoteEn,
  ru: conceptNoteRu,
  tg: conceptNoteTg
};

export default function ConferenceConceptNote() {
  const { lang, t } = useLanguage();
  const conceptNote = conceptNotes[lang];

  return (
    <main>
      <PageHero
        eyebrow={conceptNote.documentLabel}
        title={text("About the Conference", "О конференции", "Дар бораи конфронс")}
        description={conferenceI18n.summary}
        meta={conceptNote.eventDetails[0].details.join(" · ")}
        actions={
          <Button className="!bg-white !text-ink-900 hover:!bg-gold-300" href="/program-agenda/" variant="secondary">
            {t(text("View programme", "Смотреть программу", "Дидани рӯзнома"))}
          </Button>
        }
      />

      <section className="conference-content bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 xl:gap-28">
            <aside className="lg:sticky lg:top-28">
              <p className="conference-eyebrow">{conceptNote.documentLabel}</p>

              <nav className="mt-6 border-t border-sand-200" aria-label={t(text("Concept note sections", "Разделы концепции", "Бахшҳои консепсия"))}>
                {conceptNote.sections.map((section, index) => (
                  <a
                    className="grid grid-cols-[28px_1fr] gap-2 border-b border-sand-200 py-3.5 text-xs font-semibold leading-5 text-ink-600 hover:text-accent-600"
                    href={`#${section.id}`}
                    key={section.id}
                  >
                    <span className="font-bold text-accent-600">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-6 rounded-3xl bg-sand-50 p-6 ring-1 ring-inset ring-sand-200">
                {conceptNote.eventDetails.map((event) => (
                  <div key={event.label}>
                    <h2 className="font-heading text-lg font-semibold text-ink-900">{event.label}</h2>
                    <div className="mt-3 space-y-1.5 text-xs leading-5 text-ink-600">
                      {event.details.map((detail) => <p key={detail}>{detail}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="min-w-0 max-w-4xl">
              <header className="pb-14">
                <p className="conference-eyebrow">{conceptNote.eventType}</p>
                <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                  {conceptNote.eventTitle}
                </h2>
              </header>

              {conceptNote.sections.map((section, sectionIndex) => (
                <article
                  className="scroll-mt-28 border-t border-sand-200 py-14 first:pt-12 sm:py-16"
                  id={section.id}
                  key={section.id}
                >
                  <div className="grid gap-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-7">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 text-[11px] font-bold tracking-[0.12em] text-white">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 sm:text-4xl">
                        {section.title}
                      </h2>

                      {section.paragraphs?.length ? (
                        <div className="mt-7 space-y-5 text-base leading-8 text-ink-700">
                          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                      ) : null}

                      {section.items?.length ? (
                        <ol className="mt-8 grid gap-3">
                          {section.items.map((item, itemIndex) => (
                            <li
                              className="grid grid-cols-[38px_minmax(0,1fr)] gap-3 rounded-2xl border border-sand-200 bg-sand-50 px-4 py-5 text-sm leading-7 text-ink-700 sm:grid-cols-[46px_minmax(0,1fr)] sm:px-5"
                              key={item}
                            >
                              <span className="pt-0.5 text-xs font-bold tracking-[0.12em] text-accent-600">
                                {String(itemIndex + 1).padStart(2, "0")}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
