import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

type FactItem = {
  label: LocalizedString;
  value: LocalizedString;
};

type FactIcon = ComponentType<SVGProps<SVGSVGElement>>;

type FactTheme = {
  icon: FactIcon;
  accent: string;
  badge: string;
  glow: string;
};

interface KeyFactsSectionProps {
  facts: FactItem[];
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro: LocalizedString;
  venue: LocalizedString;
  format: LocalizedString;
  fieldVisit: LocalizedString;
  workingLanguages: LocalizedString;
  support: LocalizedString;
}

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

function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19a4 4 0 0 1 8 0m1.5 0a4 4 0 0 1 7.5-1.5" />
    </svg>
  );
}

function FundingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}

function RouteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="6.5" r="2.5" />
      <path d="M8.8 15.8c2.1-2.1 2.7-2.7 4.8-4.8M9.5 6.5h3.2a3 3 0 0 1 3 3v1.2" />
    </svg>
  );
}

function BroadcastIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="5.5" width="11" height="13" rx="2.5" />
      <path d="M8.5 18.5v2m2-2v2m7-11.5A4.5 4.5 0 0 1 22 13.5M17.5 5a8.5 8.5 0 0 1 0 17M8 9.5h3m-3 3h3" />
    </svg>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" />
    </svg>
  );
}

const factThemes: FactTheme[] = [
  {
    icon: CalendarIcon,
    accent: "from-sky-500 to-cyan-500",
    badge: "bg-sky-100 text-sky-800",
    glow: "bg-sky-100/90"
  },
  {
    icon: PinIcon,
    accent: "from-amber-500 to-orange-500",
    badge: "bg-amber-100 text-amber-900",
    glow: "bg-amber-100/90"
  },
  {
    icon: PeopleIcon,
    accent: "from-emerald-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    glow: "bg-emerald-100/90"
  },
  {
    icon: FundingIcon,
    accent: "from-fuchsia-500 to-violet-500",
    badge: "bg-fuchsia-100 text-fuchsia-900",
    glow: "bg-fuchsia-100/90"
  }
];


function FactCard({ fact, theme, index }: { fact: FactItem; theme: FactTheme; index: number }) {
  const Icon = theme.icon;

  return (
    <Card className="relative h-full  overflow-hidden rounded-[30px] border-white/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", theme.accent)} />
      <div className={cn("absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl", theme.glow)} />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-slate-900/10",
              theme.accent
            )}
          >
            <Icon className="h-6 w-6" />
          </span>
          <span className={cn("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]", theme.badge)}>
            0{index + 1}
          </span>
        </div>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-500">
          <LocalizedText value={fact.label} />
        </p>
        <p className="mt-3 text-xl font-semibold leading-tight text-ink-900">
          <LocalizedText value={fact.value} />
        </p>
      </div>
    </Card>
  );
}


export function KeyFactsSection({
  facts,
  eyebrow,
  title,
  intro,
  venue,
  format,
  fieldVisit,
  workingLanguages,
  support
}: KeyFactsSectionProps) {
 

  return (
    <section id="snapshot" className="relative overflow-hidden py-10 sm:py-20 sm:pb-0">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(8,145,178,0.10),transparent)]" />
      {/* <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full bg-cyan-100/90 blur-3xl" /> */}
      <div className="absolute right-[8%] top-16 h-44 w-44 rounded-full bg-amber-100/80 blur-3xl" />

      <Container className="relative">
        <Reveal className="mb-9">
          <SectionHeading  eyebrow={eyebrow} title=""   />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-4 mb-10">
              {facts.map((fact, index) => (
                <Reveal key={fact.label.en} delay={0.1 + index * 0.04}>
                  <FactCard fact={fact} theme={factThemes[index % factThemes.length]} index={index} />
                </Reveal>
              ))}
        </div>
        
      </Container>
    </section>
  );
}
