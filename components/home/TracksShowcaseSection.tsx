import type { ReactElement, SVGProps } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import GeoPatternBackdrop from "@/components/ui/GeoPatternBackdrop";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LocalizedString, Track } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TracksShowcaseSectionProps {
  tracks: Track[];
  intro: LocalizedString;
  participantsUrl: string;
}

type TrackVisual = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  kicker: LocalizedString;
  accent: string;
  chip: string;
};

function GlacierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m3.5 17.5 4.8-6.5 2.8 3.4 4-5.9 5.4 9H3.5Z" />
      <path d="M9.5 17.5v2m5-2v2" />
    </svg>
  );
}

function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

function LakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3.5 15.5c1.7 1.2 3.2 1.8 4.7 1.8s3-.6 4.7-1.8c1.7 1.2 3.2 1.8 4.7 1.8s3-.6 4.7-1.8" />
      <path d="M5 11.5c1.8-3.5 4.1-5.2 7-5.2s5.2 1.7 7 5.2" />
      <path d="M7.5 9.5h9" />
    </svg>
  );
}

function TerrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m3.5 18.5 4.7-5.4 3 3 3.8-6.1 5.5 8.5H3.5Z" />
      <path d="M8.5 6.5h7" />
    </svg>
  );
}

function RadarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 12 18.2 8.3M12 3v2.5M3 12h2.5M12 18.5V21M18.5 12H21" />
    </svg>
  );
}

function BeaconIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 4v5m0 0 4 4m-4-4-4 4M9.5 20h5M10.5 16h3l1 4h-5l1-4Zm7-8.5a7.5 7.5 0 0 1 0 9m-11-9a7.5 7.5 0 0 0 0 9" />
    </svg>
  );
}

function getTrackVisual(trackId: string): TrackVisual {
  const map: Record<string, TrackVisual> = {
    "cryosphere-processes": {
      icon: GlacierIcon,
      kicker: { en: "Core science", ru: "Научная основа", tg: "Асоси илмӣ" },
      accent: "from-sky-500 to-cyan-500",
      chip: "01"
    },
    "gis-remote-sensing": {
      icon: GridIcon,
      kicker: { en: "Spatial tools", ru: "Пространственные инструменты", tg: "Воситаҳои фазоӣ" },
      accent: "from-indigo-500 to-sky-500",
      chip: "02"
    },
    "glacial-lakes-glof": {
      icon: LakeIcon,
      kicker: { en: "Lake systems", ru: "Озерные системы", tg: "Системаҳои кӯлӣ" },
      accent: "from-emerald-500 to-teal-500",
      chip: "03"
    },
    "permafrost-stability": {
      icon: TerrainIcon,
      kicker: { en: "Terrain resilience", ru: "Устойчивость рельефа", tg: "Устувории релеф" },
      accent: "from-amber-500 to-orange-500",
      chip: "04"
    },
    "risk-vulnerability": {
      icon: RadarIcon,
      kicker: { en: "Risk layers", ru: "Слои риска", tg: "Қабатҳои хавф" },
      accent: "from-fuchsia-500 to-violet-500",
      chip: "05"
    },
    "early-warning-planning": {
      icon: BeaconIcon,
      kicker: { en: "Action pathways", ru: "Пути к действию", tg: "Роҳҳо ба амал" },
      accent: "from-teal-500 to-cyan-500",
      chip: "06"
    }
  };

  return (
    map[trackId] ?? {
      icon: RadarIcon,
      kicker: { en: "Module", ru: "Модуль", tg: "Модул" },
      accent: "from-slate-600 to-slate-800",
      chip: "00"
    }
  );
}

export default function TracksShowcaseSection({
  tracks,
  intro,
  participantsUrl
}: TracksShowcaseSectionProps) {
  return (
    <section id="tracks" className="relative overflow-hidden py-20 sm:py-20 sm:pb-10 ">
      <GeoPatternBackdrop variant="topography" className="text-blue-700 opacity-55" />
      {/* <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(18,78,102,0.08),transparent)]" /> */}
      {/* <div className="absolute right-[10%] top-12 h-40 w-40 rounded-full bg-amber-100/80 blur-3xl" /> */}

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={{ en: "Learning program", ru: "Программа обучения", tg: "Барномаи омӯзишӣ" }}
            title={{ en: "Modules", ru: "Модули", tg: "Модулҳо" }}
         
          />
        </Reveal>
        <p className="text-base mt-3 text-ink-600">
          <LocalizedText
            value={{
              en: "The curriculum moves from understanding cryosphere processes to using GIS, interpreting risk, and producing practical recommendations for planners and practitioners.",
              ru: "Учебная программа ведет участников от понимания криосферных процессов к использованию ГИС, интерпретации риска и подготовке практических рекомендаций для планировщиков и специалистов.",
              tg: "Барнома иштирокчиёнро аз фаҳмиши равандҳои криосфера ба истифодаи GIS, тафсири хавф ва омода намудани тавсияҳои амалӣ барои банақшагирон ва мутахассисон мебарад."
            }}
          />
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-1">         

          <div className="grid gap-5 sm:grid-cols-3">
            {tracks.map((track, index) => {
              const visual = getTrackVisual(track.id);
              const Icon = visual.icon;

              return (
                <Reveal key={track.id} delay={0.08 + index * 0.04}>
                  <Card className="relative h-full overflow-hidden rounded-[30px] border-white/80 bg-white/88 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                    <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", visual.accent)} />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-slate-900/10",
                            visual.accent
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
                          {visual.chip}
                        </span>
                      </div>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-500">
                        <LocalizedText value={visual.kicker} />
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-tight text-ink-900">
                        <LocalizedText value={track.title} />
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink-600">
                        <LocalizedText value={track.description} />
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}
