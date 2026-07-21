import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "info" | "success" | "pending";

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "border-sand-200 bg-white text-ink-700",
  info: "border-accent-500/20 bg-accent-500/10 text-accent-600",
  success: "border-emerald-600/20 bg-emerald-50 text-emerald-800",
  pending: "border-gold-500/25 bg-amber-50 text-amber-900"
};

export default function Badge({
  className,
  variant = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
