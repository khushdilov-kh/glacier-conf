import type { ReactNode } from "react";
import LocalizedText from "@/components/LocalizedText";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: LocalizedString | string;
  title: LocalizedString | string;
  description?: LocalizedString | string;
  align?: "left" | "center";
  action?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow ? (
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink-500">
          <span className="h-px w-10 bg-accent-500/60" />
          <LocalizedText value={eyebrow} />
        </p>
      ) : null}
      <h2 className="text-3xl font-heading tracking-tight text-ink-900 sm:text-4xl">
        <LocalizedText value={title} />
      </h2>
      {description ? (
        <p className=" text-base text-ink-600 sm:text-lg">
          <LocalizedText value={description} />
        </p>
      ) : null}
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}