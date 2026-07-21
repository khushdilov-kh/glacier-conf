import type { ReactNode } from "react";
import LocalizedText from "@/components/LocalizedText";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { LocalizedString } from "@/lib/types";

type StatusPanelProps = {
  label: LocalizedString | string;
  title: LocalizedString | string;
  description: LocalizedString | string;
  icon?: ReactNode;
  actions?: ReactNode;
  status?: "neutral" | "info" | "success" | "pending";
  className?: string;
};

export default function StatusPanel({
  label,
  title,
  description,
  icon,
  actions,
  status = "pending",
  className
}: StatusPanelProps) {
  return (
    <Card className={`p-7 sm:p-9 ${className ?? ""}`}>
      <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <Badge variant={status}><LocalizedText value={label} /></Badge>
          <h2 className="mt-5 font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] text-ink-900 sm:text-3xl">
            <LocalizedText value={title} />
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-ink-600"><LocalizedText value={description} /></p>
          {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {icon ? (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sand-100 text-accent-600">
            {icon}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
