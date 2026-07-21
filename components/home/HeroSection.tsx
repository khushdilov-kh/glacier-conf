import type { SVGProps } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { applicationClosedLabel } from "@/lib/applicationStatus";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

type HeroMetric = {
  value: LocalizedString;
  label: LocalizedString;
};

type HeroSessionPreview = {
  time: string;
  title: LocalizedString;
  type: LocalizedString;
};

interface HeroSectionProps {
  title: LocalizedString;
  tagline: LocalizedString;
  subtitle: LocalizedString;
  format: LocalizedString;
  dateCity: LocalizedString;
  venue: LocalizedString;
  timezone: LocalizedString;
  fieldVisit: LocalizedString;
  workingLanguages: LocalizedString;
  registrationHighlight: LocalizedString;
  registrationUrl: string;
  cfpUrl?: string;
  metrics: HeroMetric[];
  openingDayLabel: LocalizedString;
  schedulePreview: HeroSessionPreview[];
  trackHighlights: LocalizedString[];
}

const metricThemes = [
  {
    glow: "from-sky-400/35 via-cyan-300/10 to-transparent",
    border: "border-sky-300/30",
    value: "text-sky-100",
    iconWrap: "bg-sky-400/18 text-sky-50",
    icon: CalendarIcon
  },
  {
    glow: "from-emerald-400/35 via-teal-300/10 to-transparent",
    border: "border-emerald-300/30",
    value: "text-emerald-100",
    iconWrap: "bg-emerald-400/18 text-emerald-50",
    icon: PeopleIcon
  },
  {
    glow: "from-amber-300/35 via-orange-200/10 to-transparent",
    border: "border-amber-200/30",
    value: "text-amber-100",
    iconWrap: "bg-amber-300/18 text-amber-50",
    icon: GridIcon
  }
];

type HeroSlide = {
  src: string;
  position: string;
  accent: string;
};

const heroSlides: HeroSlide[] = [
  {
    src: "/images/12.JPG",
    position: "center 52%",
    accent: "bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.16),transparent_34%)]"
  },
  {
    src: "/images/DSC01977.JPG",
    position: "center 46%",
    accent: "bg-[radial-gradient(circle_at_75%_20%,rgba(14,165,233,0.2),transparent_30%)]"
  },
  {
    src: "/images/DSC02525.JPG",
    position: "center 42%",
    accent: "bg-[radial-gradient(circle_at_68%_32%,rgba(250,204,21,0.18),transparent_36%)]"
  },
  {
    src: "/images/DSC02585.JPG",
    position: "center 40%",
    accent: "bg-[radial-gradient(circle_at_30%_28%,rgba(16,185,129,0.2),transparent_38%)]"
  },
  {
    src: "/images/645.jpg",
    position: "center 38%",
    accent: "bg-[radial-gradient(circle_at_82%_18%,rgba(34,197,94,0.14),transparent_34%)]"
  }
];

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="3" />
      <path d="M7 3.5v4M17 3.5v4M3.5 9.5h17M8 13h2.5M13.5 13H16M8 17h2.5M13.5 17H16" />
    </svg>
  );
}

function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19a4 4 0 0 1 8 0m1.5 0a4 4 0 0 1 7.5-1.5" />
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

function HeroBackgroundSlides() {
  const cycleSeconds = heroSlides.length * 6;

  return (
    <>
      {heroSlides.map((slide, index) => {
        const delay = `${index * 6}s`;

        return (
          <div
            key={slide.src}
            aria-hidden="true"
            className="absolute inset-0 opacity-0 will-change-[opacity]"
            style={{ animation: `hero-slide-fade ${cycleSeconds}s linear infinite`, animationDelay: delay }}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover will-change-transform"
              style={{
                objectPosition: slide.position,
                animation: `hero-slide-zoom ${cycleSeconds}s ease-in-out infinite`,
                animationDelay: delay
              }}
            />
            <div className={cn("absolute inset-0", slide.accent)} />
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-8 hidden justify-center lg:flex">
        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-3 py-2 backdrop-blur-md">
          {heroSlides.map((slide, index) => (
            <span key={slide.src} className="h-1.5 w-10 overflow-hidden rounded-full bg-white/20">
              <span
                className="block h-full origin-left rounded-full bg-white/80"
                style={{
                  animation: `hero-indicator ${cycleSeconds}s linear infinite`,
                  animationDelay: `${index * 6}s`
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function MetricCard({ item, index }: { item: HeroMetric; index: number }) {
  const theme = metricThemes[index % metricThemes.length];
  const Icon = theme.icon;

  return (
    <div className={cn("relative overflow-hidden rounded-[24px] border bg-white/[0.08] p-4 backdrop-blur-sm", theme.border)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", theme.glow)} />
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
      <div className="relative flex  flex-col">
        <div  className="flex items-start justify-between gap-4">
          <p className={cn("text-3xl font-semibold sm:text-4xl", theme.value)}>
            <LocalizedText value={item.value} />
          </p>
          <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 shadow-lg shadow-black/10", theme.iconWrap)}>
            <Icon className="h-5 w-5" />
          </span>
          
        </div>
        <p className="mt-2 text-sm leading-6 text-white/70">
            <LocalizedText value={item.label} />
        </p>
        
      </div>
    </div>
  );
}

export default function HeroSection({
  title,
  tagline,
  subtitle,
  format,
  dateCity,
  timezone,
  fieldVisit,
  workingLanguages,
  registrationUrl,
  metrics,
  trackHighlights
}: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <HeroBackgroundSlides />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-hero-soft" />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(56,189,248,0.18),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.12),transparent_24%)]" /> */}
        <div className="absolute inset-0 fine-grid opacity-35" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl" />
        <div className="absolute -right-12 top-24 h-56 w-56 rounded-full bg-amber-200/12 blur-3xl" />
      </div>

      <Container className="relative py-24 sm:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-12">
          <Reveal className="space-y-7 text-sand-50">
            <Badge className="border-white/20 bg-white/10 px-4 py-1.5 text-white/85 backdrop-blur-md">
              <LocalizedText value={format} />
            </Badge>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-heading leading-[1.02] text-white sm:text-5xl lg:text-5xl">
                <LocalizedText value={title} />
              </h1>
              <p className="max-w-3xl text-xl text-white/82 sm:text-2xl">
                <LocalizedText value={tagline} />
              </p>
              <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
                <LocalizedText value={subtitle} />
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button href={registrationUrl} className="bg-sky-600 text-ink-900 hover:bg-sky-700">
                <LocalizedText value={applicationClosedLabel} />
              </Button>
              <Button
                href="/program"
                className="border-white/20 bg-rose-700 text-white hover:bg-rose-800"
              >
                <LocalizedText value={{ en: "Explore program", ru: "Смотреть программу", tg: "Барномаро бинед" }} />
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <MetricCard key={`${item.label.en}-${item.value.en}`} item={item} index={index} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <Badge className="border-white/20 bg-slate-950/25 px-4 py-1.5 text-white/90 backdrop-blur-md">
                <LocalizedText value={dateCity} />
              </Badge>           
              <Badge className="border-white/20 bg-slate-950/25 px-4 py-1.5 text-white/90 backdrop-blur-md">
                <LocalizedText value={workingLanguages} />
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-slate-950/35 p-6 text-white shadow-[0_24px_80px_rgba(2,8,23,0.35)] backdrop-blur-xl sm:p-7">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,173,255,0.45),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,179,156,0.3),transparent_30%),linear-gradient(180deg,rgba(3,12,35,0.08),rgba(15,23,42,0.48))]" />
              <div className="absolute inset-0 fine-grid opacity-15" />
              <div className="absolute right-4 top-4 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-2xl" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/58">
                  <LocalizedText value={{ en: "Why it feels different", ru: "Чем программа отличается", tg: "Чӣ чиз онро фарқ мекунад" }} />
                </p>
                <h2 className="mt-4 text-2xl font-heading leading-tight sm:text-3xl">
                  <LocalizedText
                    value={{
                      en: "A small group, field-based observation, and evidence turned into action.",
                      ru: "Небольшая группа, полевые наблюдения и перевод данных в действие.",
                      tg: "Гурӯҳи хурд, мушоҳидаҳои саҳроӣ ва табдили далелҳо ба амал."
                    }}
                  />
                </h2>
                 <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                  <LocalizedText
                    value={{
                      en: "Participants learn how to understand cryosphere hazards and prepare a short, map-based risk briefing for a real case site.",
                      ru: "Участники изучают криосферные опасности и готовят короткий риск-бриф с картами для реального кейса.",
                      tg: "Иштирокчиён меомӯзанд, ки хатарҳои криосфераро чӣ гуна фаҳманд ва барои як мавзеъи воқеӣ risk briefing-и кӯтоҳи бо харита асосёфтаро омода кунанд."
                    }}
                  />
                </p>
                 <div className="mt-6 rounded-[26px] border border-white/12 bg-slate-950/32 p-5 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/56">
                      <LocalizedText value={{ en: "Main topics", ru: "Основные темы", tg: "Мавзӯъҳои асосӣ" }} />
                    </p>
                    <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                      {trackHighlights.length} <LocalizedText value={{ en: "topics", ru: "темы", tg: "мавзӯъҳо" }} />
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {trackHighlights.map((track) => (
                      <span
                        key={track.en}
                        className="rounded-full px-3 py-2 text-xs  text-white"
                      >
                        <LocalizedText value={track} />
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

    </section>
  );
}
