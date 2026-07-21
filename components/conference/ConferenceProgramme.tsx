import LocalizedText from "@/components/LocalizedText";
import { localizedProgramme, programmeKindLabels, text } from "@/lib/conference-i18n";

export default function ConferenceProgramme({ compact = false }: { compact?: boolean }) {
  const days = compact ? localizedProgramme.slice(0, 1) : localizedProgramme;
  const visibleSessionCount = compact ? 5 : undefined;

  return (
    <div className="programme-days">
      {days.map((day, dayIndex) => {
        const sessions = visibleSessionCount ? day.sessions.slice(0, visibleSessionCount) : day.sessions;
        const dayTitleId = `programme-day-${dayIndex + 1}`;

        return (
          <section className="programme-day" key={dayIndex} aria-labelledby={dayTitleId}>
            <header className="programme-day__header">
              <div>
                <p className="conference-eyebrow"><LocalizedText value={text("Day", "День", "Рӯз")} /> {dayIndex + 1} · <LocalizedText value={day.label} /></p>
                <h2 id={dayTitleId}><LocalizedText value={day.date} /></h2>
              </div>
              <p><LocalizedText value={day.location} /></p>
            </header>

            <div className="programme-list" role="list">
              {sessions.map((session, sessionIndex) => (
                <article className={`programme-session programme-session--${session.kind}`} key={`${dayIndex}-${sessionIndex}`} role="listitem">
                  <time className="programme-session__time">{session.time}</time>
                  <div className="programme-session__content">
                    <div className="programme-session__title-row">
                      <h3><LocalizedText value={session.title} /></h3>
                      <span><LocalizedText value={programmeKindLabels[session.kind]} /></span>
                    </div>
                    {session.description && !compact ? <p><LocalizedText value={session.description} /></p> : null}
                    {session.tracks ? (
                      <div className="programme-tracks">
                        {session.tracks.map((track, index) => (
                          <div key={index}>
                            <h4><LocalizedText value={track.title} /></h4>
                            {!compact ? <p><LocalizedText value={track.description} /></p> : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {session.details ? (
                      <ul>
                        {session.details.map((detail) => <li key={detail.en}><LocalizedText value={detail} /></li>)}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
