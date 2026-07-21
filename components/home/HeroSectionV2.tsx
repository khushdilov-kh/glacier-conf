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
    glow: "from-sky-800/45 via-cyan-400/20 to-transparent",
    border: "border-sky-300/30",
    value: "text-sky-100",
    iconWrap: "bg-sky-400/58 text-sky-50",
    icon: CalendarIcon
  },
  // {
  //   glow: "from-emerald-500/30 via-teal-300/10 to-transparent",
  //   border: "border-emerald-300/30",
  //   value: "text-emerald-50",
  //   iconWrap: "bg-emerald-400/20 text-emerald-50",
  //   icon: PeopleIcon
  // },
  // {
  //   glow: "from-amber-300/30 via-orange-200/10 to-transparent",
  //   border: "border-amber-200/30",
  //   value: "text-amber-50",
  //   iconWrap: "bg-amber-300/20 text-amber-50",
  //   icon: GridIcon
  // }
] as const;

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
    </>
  );
}

function MetricCard({ item, index }: { item: HeroMetric; index: number }) {
  const theme = metricThemes[index % metricThemes.length];
  const Icon = theme.icon;

  return (
    <div className={cn("relative overflow-hidden rounded-[24px] border bg-black/35 p-4 backdrop-blur-sm", theme.border)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme.glow)} />
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <p className={cn("text-2xl font-bold sm:text-3xl", theme.value)}>
            <LocalizedText value={item.value} />
          </p>
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 shadow-lg shadow-black/10",
              theme.iconWrap
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <p className="text-sm leading-6 text-white/88 sm:text-[0.95rem]">
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
  dateCity,
  timezone,
  workingLanguages,
  registrationUrl,
  metrics
}: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <HeroBackgroundSlides />
        <div className="absolute inset-0 bg-black/50" />
        
      </div>

      <Container className="relative flex min-h-[100svh] items-end py-24 sm:py-28 lg:py-32">
        <div className="w-full">
          <Reveal className="space-y-7 text-sand-50">
            <div className="space-y-4 sm:space-y-5">
              <h1 className="max-w-4xl text-[2.7rem] font-heading font-extrabold leading-[0.98] tracking-[0.02em] text-white sm:text-[3.6rem] md:text-[4.3rem] lg:text-6xl">
                <LocalizedText value={title} />
              </h1>
              <p className="max-w-3xl text-lg font-medium text-white/88 sm:text-[1.45rem] lg:text-[1.7rem]">
                <LocalizedText value={tagline} />
              </p>
              <p className="max-w-3xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
                <LocalizedText value={subtitle} />
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={registrationUrl} className="w-full bg-sky-600 text-ink-900 hover:bg-sky-700 sm:w-auto">
                <LocalizedText value={applicationClosedLabel} />
              </Button>
              <Button
                href="/program"
                className="w-full border-white/20 bg-rose-700 text-white hover:bg-rose-800 sm:w-auto"
              >
                <LocalizedText
                  value={{ en: "Explore program", ru: "Смотреть программу", tg: "Смотреть программу" }}
                />
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {metrics.map((item, index) => (
                <MetricCard key={`${item.label.en}-${item.value.en}`} item={item} index={index} />
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/85 sm:flex-row sm:flex-wrap">
              <Badge className="justify-center border-white/20 bg-slate-950/25 px-4 py-2 text-center text-white/90 backdrop-blur-md sm:w-auto sm:justify-start">
                <LocalizedText value={dateCity} />
              </Badge>
              <Badge className="justify-center border-white/20 bg-slate-950/25 px-4 py-2 text-center text-white/90 backdrop-blur-md sm:w-auto sm:justify-start">
                <LocalizedText value={workingLanguages} />
              </Badge>
              <Badge className="justify-center border-white/20 bg-slate-950/25 px-4 py-2 text-center text-white/90 backdrop-blur-md sm:w-auto sm:justify-start">
                <LocalizedText value={timezone} />
              </Badge>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
