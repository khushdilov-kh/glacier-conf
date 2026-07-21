"use client";

import { Fragment, type ReactNode, useMemo } from "react";
import { useLanguage } from "@/lib/i18n";
import { linkifyOrganizationText } from "@/lib/organizationLinks";
import type { Speaker } from "@/lib/types";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

type AliasEntry = {
  alias: string;
  speakerId: string;
};

export default function ProgramAgendaSpeakerText({
  value,
  speakers,
  hrefBase = "/speakers",
  onSpeakerClick
}: {
  value?: string | { en: string; ru?: string; tg?: string } | null;
  speakers: Speaker[];
  hrefBase?: string;
  onSpeakerClick?: (speakerId: string) => void;
}) {
  const { t } = useLanguage();
  const text = t(value);

  const { aliasEntries, matcher } = useMemo(() => {
    const seen = new Set<string>();
    const entries: AliasEntry[] = [];

    speakers.forEach((speaker) => {
      const aliases = [speaker.name, ...(speaker.aliases ?? [])];

      aliases.forEach((alias) => {
        const normalized = alias.trim().toLowerCase();
        if (!normalized || seen.has(normalized)) return;
        seen.add(normalized);
        entries.push({ alias, speakerId: speaker.id });
      });
    });

    entries.sort((left, right) => right.alias.length - left.alias.length);

    return {
      aliasEntries: entries,
      matcher: entries.length
        ? new RegExp(entries.map((entry) => escapeRegExp(entry.alias)).join("|"), "gi")
        : null
    };
  }, [speakers]);

  if (!text) return null;
  if (!matcher) return <>{text}</>;

  const entryByAlias = new Map(aliasEntries.map((entry) => [entry.alias.toLowerCase(), entry]));
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, lineIndex) => {
        if (!line) {
          return <br key={`line-${lineIndex}`} />;
        }

        const parts: ReactNode[] = [];
        let lastIndex = 0;
        matcher.lastIndex = 0;

        for (const match of line.matchAll(matcher)) {
          const matchText = match[0];
          const matchIndex = match.index ?? 0;

          if (matchIndex > lastIndex) {
            parts.push(linkifyOrganizationText(line.slice(lastIndex, matchIndex), `org-${lineIndex}-${lastIndex}`));
          }

          const matchedEntry = entryByAlias.get(matchText.toLowerCase());

          if (matchedEntry) {
            parts.push(
              onSpeakerClick ? (
                <button
                  key={`${matchedEntry.speakerId}-${lineIndex}-${matchIndex}`}
                  type="button"
                  onClick={() => onSpeakerClick(matchedEntry.speakerId)}
                  className="inline cursor-pointer border-0 bg-transparent p-0 text-left align-baseline font-medium text-sky-800 underline decoration-sky-300/90 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-500"
                >
                  {matchText}
                </button>
              ) : (
                <a
                key={`${matchedEntry.speakerId}-${lineIndex}-${matchIndex}`}
                href={`${hrefBase}#${matchedEntry.speakerId}`}
                className="font-medium text-sky-800 underline decoration-sky-300/90 underline-offset-4 transition hover:text-sky-950 hover:decoration-sky-500"
              >
                {matchText}
                </a>
              )
            );
          } else {
            parts.push(linkifyOrganizationText(matchText, `org-${lineIndex}-${matchIndex}`));
          }

          lastIndex = matchIndex + matchText.length;
        }

        if (lastIndex < line.length) {
          parts.push(linkifyOrganizationText(line.slice(lastIndex), `org-${lineIndex}-${lastIndex}-tail`));
        }

        return (
          <Fragment key={`line-${lineIndex}`}>
            {parts.length ? parts : line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </Fragment>
        );
      })}
    </>
  );
}
