import Image from "next/image";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import MarkdownContent from "@/components/MarkdownContent";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";
import GeoPatternBackdrop from "../ui/GeoPatternBackdrop";

interface AboutPageExperienceProps {
  markdown: LocalizedString;
}

type AboutSection = {
  title: LocalizedString;
  body: LocalizedString;
};

type AboutMediaSlot = {
  src: string;
  alt: string;
  caption: LocalizedString;
  aspect: string;
};

const pageCopy = {
  eyebrow: {
    en: "About the Program",
    ru: "О программе",
    tg: "Дар бораи барнома"
  },
  title: {
    en: "A modern, practice-based summer format for mountain risk learning",
    ru: "Современный практико-ориентированный летний формат для изучения горных рисков",
    tg: "Формати муосири тобистонаи амалӣ барои омӯзиши хатарҳои кӯҳӣ"
  },
  description: {
    en: "The program connects cryosphere science, GIS and remote sensing, field observation, and disaster risk management in one focused learning journey.",
    ru: "Программа соединяет криосферную науку, ГИС и дистанционное зондирование, полевые наблюдения и управление рисками бедствий в едином учебном маршруте.",
    tg: "Барнома илми криосфера, GIS ва зондкунии фосилавӣ, мушоҳидаҳои саҳроӣ ва идоракунии хатари офатҳоро ба як масири омӯзишӣ мепайвандад."
  },
  trackOne: {
    en: "Cryosphere science",
    ru: "Криосферная наука",
    tg: "Илми криосфера"
  },
  trackTwo: {
    en: "GIS and remote sensing",
    ru: "ГИС и дистанционное зондирование",
    tg: "GIS ва зондкунии фосилавӣ"
  },
  trackThree: {
    en: "Field-based risk practice",
    ru: "Полевая практика по рискам",
    tg: "Амалиёти саҳроии арзёбии хатар"
  }
} as const satisfies Record<string, LocalizedString>;

const editorialMedia: AboutMediaSlot[] = [
  {
    src: "/images/24334.jpg",
    alt: "Applied learning environment in a mountain setting",
    caption: {
      en: "Applied sessions connected to real terrain",
      ru: "Практические занятия, связанные с реальным рельефом",
      tg: "Сессияҳои амалӣ, ки ба релефи воқеӣ пайвастанд"
    },
    aspect: "aspect-[5/4]"
  },
  {
    src: "/images/barsem.jpg",
    alt: "Regional mountain hazard context",
    caption: {
      en: "Regional hazard landscapes shape the agenda",
      ru: "Региональные опасные ландшафты задают повестку",
      tg: "Манзараҳои хатарноки минтақавӣ муҳтавои барномаро муайян мекунанд"
    },
    aspect: "aspect-[6/4]"
  },
  {
    src: "/images/topo.jpg",
    alt: "Topographic texture and terrain surface",
    caption: {
      en: "Terrain reading and spatial interpretation",
      ru: "Чтение рельефа и пространственная интерпретация",
      tg: "Хондани релеф ва тафсири фазоӣ"
    },
    aspect: "aspect-square"
  },
  {
    src: "/images/DSC02585.JPG",
    alt: "Mountain region learning context",
    caption: {
      en: "From observation to decision-ready analysis",
      ru: "От наблюдения к аналитике, готовой для решений",
      tg: "Аз мушоҳида то таҳлили омода барои қарор"
    },
    aspect: "aspect-[5/4]"
  },
  {
    src: "/images/645.jpg",
    alt: "Mountain region and community setting",
    caption: {
      en: "Community context remains part of the story",
      ru: "Контекст сообщества остается частью истории",
      tg: "Муҳити ҷомеа қисми муҳими ин ҳикоя мемонад"
    },
    aspect: "aspect-[4/5]"
  }
];

function stripTags(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function parseSectionsForLanguage(html: string) {
  const sections = html.match(/<section\b[\s\S]*?<\/section>/gi);
  const blocks = sections?.length ? sections : [html];

  return blocks.map((block) => {
    const inner = block.replace(/^<section\b[^>]*>/i, "").replace(/<\/section>\s*$/i, "").trim();
    const titleMatch = inner.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i);
    const title = stripTags(titleMatch?.[1] ?? "");
    const body = titleMatch ? inner.replace(titleMatch[0], "").trim() : inner;

    return { title, body };
  });
}

function buildLocalizedSections(markdown: LocalizedString): AboutSection[] {
  const enSections = parseSectionsForLanguage(markdown.en);
  const ruSections = parseSectionsForLanguage(markdown.ru ?? markdown.en);
  const tgSections = parseSectionsForLanguage(markdown.tg ?? markdown.en);
  const sectionCount = Math.max(enSections.length, ruSections.length, tgSections.length);

  return Array.from({ length: sectionCount }, (_, index) => ({
    title: {
      en: enSections[index]?.title ?? "",
      ru: ruSections[index]?.title ?? enSections[index]?.title ?? "",
      tg: tgSections[index]?.title ?? enSections[index]?.title ?? ""
    },
    body: {
      en: enSections[index]?.body ?? "",
      ru: ruSections[index]?.body ?? enSections[index]?.body ?? "",
      tg: tgSections[index]?.body ?? enSections[index]?.body ?? ""
    }
  })).filter((section) => section.body.en || section.body.ru || section.body.tg);
}

function MediaCard({
  media,
  priority = false
}: {
  media: AboutMediaSlot;
  priority?: boolean;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white/88 p-3 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
      <div className={cn("relative overflow-hidden rounded-[22px]", media.aspect)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
      </div>
      {/* <p className="px-2 pb-1 pt-3 text-sm leading-6 text-ink-600">
        <LocalizedText value={media.caption} />
      </p> */}
    </div>
  );
}

function InlineMediaCard({
  media,
  align = "right"
}: {
  media: AboutMediaSlot;
  align?: "left" | "right";
}) {
  return (
    <figure
      className={cn(
        "relative mb-5 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]",
        "w-full sm:max-w-md lg:w-[34%]",
        align === "right" ? "lg:float-right lg:mb-6 lg:ml-8" : "lg:float-left lg:mb-6 lg:mr-8"
      )}
    >
      <div className={cn("relative overflow-hidden", media.aspect)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-x-0 bottom-0 bg-black/60 px-4 pb-4 pt-4">
          <figcaption className="text-sm leading-6 text-white">
            <LocalizedText value={media.caption} />
          </figcaption>
        </div> */}
      </div>
    </figure>
  );
}

export default function AboutPageExperience({ markdown }: AboutPageExperienceProps) {
  const sections = buildLocalizedSections(markdown);

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f8f7_0%,#ffffff_26%,#fbfcfc_100%)] pb-20 sm:pb-24">
      <GeoPatternBackdrop variant="mesh" className="text-sky-600 opacity-50" />
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-hero-soft opacity-70" /> */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] fine-grid opacity-[0.08] [mask-image:linear-gradient(180deg,black,transparent)]" />
      {/* <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute right-0 top-12 h-[22rem] w-[22rem] rounded-full bg-emerald-200/20 blur-3xl" /> */}
      
      <section className="relative py-12 sm:py-16">
        
        <Container>
          <GeoPatternBackdrop variant="mesh" className="text-sky-600 opacity-50" />
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr),minmax(360px,0.95fr)] xl:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={pageCopy.eyebrow}
                title={pageCopy.title}
                description={pageCopy.description}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-700 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
                  <LocalizedText value={pageCopy.trackOne} />
                </span>
                <span className="rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-700 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
                  <LocalizedText value={pageCopy.trackTwo} />
                </span>
                <span className="rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-700 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
                  <LocalizedText value={pageCopy.trackThree} />
                </span>
              </div>
            </div>

            <MediaCard media={editorialMedia[1]} priority />
          </div>
        </Container>
      </section>

      <section className="relative py-4 sm:py-8">
        <Container className="space-y-8 sm:space-y-10">
          {sections.map((section, index) => {
            const media = editorialMedia[index];
            const reverse = index % 2 === 1;

            return (
              <article
                key={`${section.title.en || "section"}-${index}`}
                className="grid gap-6"
              >
                <div className="rounded-[30px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title.en ? (
                      <h2 className="text-xl font-heading tracking-tight text-ink-900 sm:text-2xl">
                        <LocalizedText value={section.title} />
                      </h2>
                    ) : null}
                  </div>

                  <div className="mt-6 flow-root">
                    {media ? <InlineMediaCard media={media} align={reverse ? "left" : "right"} /> : null}
                    <MarkdownContent
                      html={section.body}
                      className="prose-p:!text-ink-700 prose-p:!leading-8 prose-li:!text-ink-700 prose-li:!leading-7 prose-ul:!space-y-3 prose-strong:!text-ink-900"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>
    </main>
  );
}
