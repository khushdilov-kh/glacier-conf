import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  interactive = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-sand-200 bg-white shadow-soft",
        interactive && "transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-500/30 hover:shadow-lift",
        className
      )}
      {...props}
    />
  );
}
