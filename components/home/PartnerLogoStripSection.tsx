import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import type { Sponsor } from "@/lib/types";
import { cn } from "@/lib/utils";
import LocalizedText from "@/components/LocalizedText";
interface PartnerLogoStripSectionProps {
  sponsors: Sponsor[];
}

export default function PartnerLogoStripSection({ sponsors }: PartnerLogoStripSectionProps) {
  return (
    <section id="partners" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-sand-200/90" />
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.34em] text-ink-500">
              <LocalizedText value={{ en: "Project partners", ru: "Партнеры проекта", tg: "Шарикони лоиҳа" }} />
            </p>
            <div className="h-px flex-1 bg-sand-200/90" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 overflow-hidden rounded-[30px] bg-white px-6 py-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:px-8">
            <div className="flex flex-wrap items-center justify-evenly gap-x-8 gap-y-6 sm:gap-x-10 lg:gap-x-14">
              {sponsors.map((sponsor) => {
                const content = sponsor.logo ? (
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={220}
                    height={60}
                    className="h-[45px] w-auto max-w-[160px] object-contain sm:h-[72px] sm:max-w-[190px] lg:h-[80px] lg:max-w-[220px]"
                  />
                ) : (
                  <span
                    className={cn(
                      "inline-flex min-w-0 items-center text-center text-sm font-semibold uppercase tracking-[0.08em] text-ink-700 transition duration-300 group-hover:text-ink-900",
                      sponsor.name.length > 34 ? "max-w-[220px] leading-5" : "whitespace-nowrap"
                    )}
                  >
                    {sponsor.name}
                  </span>
                );

                return sponsor.url ? (
                  <a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-w-0 items-center justify-center"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={sponsor.id} className="group flex min-w-0 items-center justify-center">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
