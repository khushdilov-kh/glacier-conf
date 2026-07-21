import { color } from "framer-motion";
import type { ReactNode } from "react";

const linkClassName = "text-current text-sky-800 underline underline-offset-4 transition-opacity hover:opacity-80";

const organizationDefinitions = [
  {
    href: "https://www.ucentralasia.org/",
    patterns: [
      "University of Central Asia (UCA)",
      "University of Central Asia",
      "Университет Центральной Азии (UCA)",
      "Университет Центральной Азии",
      "Донишгоҳи Осиёи Марказӣ (UCA)",
      "Донишгоҳи Осиёи Марказӣ",
    ]
  },
  {
    href: "https://akf.org/country/tajikistan/",
    patterns: [
      "Aga Khan Foundation Tajikistan",
      "Aga Khan Foundation (AKF)",
      "Aga Khan Foundation",
      "Фонд Ага Хана (AKF)",
      "Фонд Ага Хана",
      "Фонди Оғохон (AKF)",
      "Фонди Оғохон",
    ]
  },
  {
    href: "https://www.eda.admin.ch/countries/tajikistan/en/home.html",
    patterns: [
      "Swiss Agency for Development and Cooperation (SDC)",
      "Swiss Agency for Development and Cooperation",
      "Швейцарское агентство по развитию и сотрудничеству (SDC)",
      "Швейцарское агентство по развитию и сотрудничеству",
    ]
  },
  {
    href: "https://khogu.tj/",
    patterns: [
      "Khorog State University",
      "Khorog State University (KSU)",
      "KSU",
      "Хорогский государственный университет",
      "Хорогский государственный университет (ХГУ)",
      "Донишгоҳи давлатии Хоруғ",
    ]
  }
] as const;

type OrganizationPattern = {
  href: string;
  pattern: string;
};

const organizationPatterns: OrganizationPattern[] = organizationDefinitions
  .flatMap((definition) => definition.patterns.map((pattern) => ({ href: definition.href, pattern })))
  .sort((left, right) => right.pattern.length - left.pattern.length);

const patternByNormalizedText = new Map(
  organizationPatterns.map((entry) => [entry.pattern.toLowerCase(), entry])
);

const matcher = new RegExp(organizationPatterns.map((entry) => escapeRegExp(entry.pattern)).join("|"), "gi");

export function linkifyOrganizationText(text: string, keyPrefix = "org"): ReactNode {
  if (!text) {
    return text;
  }

  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(matcher)) {
    const matchText = match[0];
    const matchIndex = match.index ?? 0;
    const entry = patternByNormalizedText.get(matchText.toLowerCase());

    if (!entry) {
      continue;
    }

    if (matchIndex > lastIndex) {
      parts.push(text.slice(lastIndex, matchIndex));
    }

    parts.push(
      <a
        key={`${keyPrefix}-${entry.href}-${matchIndex}`}
        href={entry.href}
        target="_blank"
        rel="noreferrer"
        className={linkClassName}
        style={{color: "#075985"}}
      >
        {matchText}
      </a>
    );

    lastIndex = matchIndex + matchText.length;
  }

  if (!parts.length) {
    return text;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function linkifyOrganizationsInHtml(html: string): string {
  if (!html) {
    return html;
  }

  return html.replace(matcher, (matchText) => {
    const entry = patternByNormalizedText.get(matchText.toLowerCase());

    if (!entry) {
      return matchText;
    }

    return `<a href="${entry.href}" target="_blank" rel="noreferrer" class="${linkClassName}" style={{color: "#075985"}}>${matchText}</a>`;
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
