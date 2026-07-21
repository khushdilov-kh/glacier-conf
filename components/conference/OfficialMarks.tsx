"use client";

import Image from "next/image";
import { text } from "@/lib/conference-i18n";
import { useLanguage } from "@/lib/i18n";

const marks = [
  {
    src: "/images/conference/state-emblem.png",
    alt: text("State Emblem of the Republic of Tajikistan", "Государственный герб Республики Таджикистан", "Нишони давлатии Ҷумҳурии Тоҷикистон")
  },
  {
    src: "/images/conference/environment-committee.png",
    alt: text("Committee for Environmental Protection emblem", "Эмблема Комитета по охране окружающей среды", "Нишони Кумитаи ҳифзи муҳити зист")
  },
  {
    src: "/images/conference/hydromet-agency.png",
    alt: text("Agency for Hydrometeorology emblem", "Эмблема Агентства по гидрометеорологии", "Нишони Агентии обуҳавошиносӣ")
  },
  {
    src: "/images/conference/independence-35.jpeg",
    alt: text("35 years of State Independence of Tajikistan", "35 лет государственной независимости Таджикистана", "35-солагии Истиқлоли давлатии Тоҷикистон")
  }
] as const;

export default function OfficialMarks({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <ul className={compact ? "official-marks official-marks--compact" : "official-marks"} aria-label={t(text("Official conference marks", "Официальные символы конференции", "Рамзҳои расмии конфронс"))}>
      {marks.map((mark) => (
        <li className="official-mark" key={mark.src}>
          <Image src={mark.src} alt={t(mark.alt)} width={96} height={96} className="official-mark__image" />
        </li>
      ))}
    </ul>
  );
}
