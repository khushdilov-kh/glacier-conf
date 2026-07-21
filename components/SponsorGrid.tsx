import Image from "next/image";
import LocalizedText from "@/components/LocalizedText";
import Reveal from "@/components/ui/Reveal";
import type { Sponsor, SponsorTier } from "@/lib/types";
import { labels } from "@/lib/labels";

const tiers: SponsorTier[] = ["platinum", "gold", "silver", "community"];

export default function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="space-y-10">
      {tiers.map((tier) => {
        const group = sponsors.filter((sponsor) => sponsor.tier === tier);
        if (!group.length) return null;

        return (
          <div key={tier} className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
              <LocalizedText value={labels.sponsorTiers[tier]} />
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.map((sponsor, index) => (
                <Reveal key={sponsor.id} delay={index * 0.04}>
                  <a
                    href={sponsor.url ?? "#"}
                    target={sponsor.url ? "_blank" : undefined}
                    rel={sponsor.url ? "noreferrer" : undefined}
                    className="flex min-h-28 items-center justify-center rounded-2xl border border-sand-200/70 bg-white/80 p-6 text-center shadow-soft transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    {!sponsor.logo || sponsor.logo.includes("placeholder") ? (
                      <span className="text-sm font-semibold leading-6 text-ink-800">{sponsor.name}</span>
                    ) : (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={160}
                        height={64}
                        className="h-10 w-auto opacity-80 transition duration-300 hover:opacity-100"
                      />
                    )}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
