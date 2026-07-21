"use client";

import { useLanguage } from "@/lib/i18n";
import { linkifyOrganizationsInHtml } from "@/lib/organizationLinks";
import type { LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MarkdownContentProps {
  html: LocalizedString;
  className?: string;
}

export default function MarkdownContent({ html, className }: MarkdownContentProps) {
  const { t } = useLanguage();
  const content = linkifyOrganizationsInHtml(t(html));

  return (
    <div
      className={cn(
        "prose max-w-none prose-headings:font-heading prose-headings:text-ink-900 prose-p:text-black prose-li:text-black prose-strong:text-ink-900 prose-a:text-ink-900 prose-a:underline prose-a:decoration-accent-500/40 prose-a:underline-offset-4",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
