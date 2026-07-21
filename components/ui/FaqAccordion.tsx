import LocalizedText from "@/components/LocalizedText";
import { ChevronIcon } from "@/components/ui/LineIcons";
import type { FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
  defaultOpen?: boolean;
  layout?: "stack" | "grid";
}

export default function FaqAccordion({ items, className, defaultOpen = false, layout = "stack" }: FaqAccordionProps) {
  return (
    <div className={cn(layout === "grid" ? "grid gap-4 lg:grid-cols-2 items-start" : "space-y-4", className)}>
      {items.map((item, index) => (
        <details
          key={item.question.en}
          className="group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-soft open:border-accent-500/25"
          open={defaultOpen}
        >
          <summary className="flex min-h-[76px] cursor-pointer items-center justify-between gap-4 px-5 py-4 sm:px-6">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-base font-semibold leading-7 text-ink-900 sm:text-lg">
                <LocalizedText value={item.question} />
              </span>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-ink-600 transition duration-200 group-open:rotate-90 group-open:border-accent-500/25 group-open:bg-accent-500/10 group-open:text-accent-600">
              <ChevronIcon className="h-5 w-5" />
            </span>
          </summary>
          <div className="border-t border-sand-200 bg-sand-50/70 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <p className="whitespace-pre-line text-sm leading-7 text-ink-700 sm:text-[15px]">
              <LocalizedText value={item.answer} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
