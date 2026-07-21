import type { SVGProps } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
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
    src: "/images/32423.jpg",
    position: "center 46%",
    accent: "bg-[radial-gradient(circle_at_75%_20%,rgba(14,165,233,0.2),transparent_30%)]"
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

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.6" />
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
            {/* <div className={cn("absolute inset-0", slide.accent)} /> */}
          </div>
        );
      })}
    </>
  );
}

function HeroInfoItem({
  icon: Icon,
  text
}: {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: LocalizedString;
}) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-1 text-sm text-white/92  sm:px-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/14 text-white">
        <Icon className="h-4.2 w-4.2 " />
      </span>
      <span className="text-left leading-6 text-white text-base sm:text-xl ">
        <LocalizedText value={text} />
      </span>
    </div>
  );
}

export default function HeroSection({
  title,
  tagline,
  dateCity
}: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <HeroBackgroundSlides />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <Container className="relative flex min-h-[100svh] items-center justify-end flex-col pb-8 pt-20 sm:pb-12 sm:pt-28 lg:pb-10">
         {/* <h1 className="font-heading text-center text-[2.6rem] font-extrabold leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
              <LocalizedText value={title} />
            </h1> */}

        <Reveal className="w-full max-w-6xl">
          <div className="mx-auto flex  flex-col items-center pb-16">
            <h1 className="font-heading text-center text-[2.6rem] font-extrabold leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
              <LocalizedText value={title} />
            </h1>

            <p className="mt-4 text-center text-base font-extrabold leading-7 text-white/100 tracking-wide  sm:mt-5 sm:text-xl sm:leading-8 lg:text-2xl">
              <LocalizedText value={tagline} />
            </p>

            <div className="mt-3 text-sm flex flex-wrap items-center justify-center gap-3 sm:mt-4 sm:text-xl">
              <HeroInfoItem icon={CalendarIcon} text={dateCity} />              
            </div>

            

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
              <Button
                href="/apply"
                className="min-w-[190px] border-white/22 !bg-yellow-700 !text-white-950 shadow-[0_18px_42px_rgba(0,0,0,0.28)] ring-1 hover:!bg-yellow-600 hover:!text-white-950"
              >
                <LocalizedText value={applicationClosedLabel} />
              </Button>
              <Button
                href="/program"                
                className="min-w-[190px] border-white/22 bg-sky-800 text-white backdrop-blur-sm hover:bg-sky-600 hover:text-white"
              >
                <LocalizedText value={{ en: "Explore program", ru: "Смотреть программу", tg: "Барномаро бинед" }} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
