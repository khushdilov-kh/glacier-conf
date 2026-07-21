"use client";

import { useLanguage } from "@/lib/i18n";
import { linkifyOrganizationText } from "@/lib/organizationLinks";
import type { LocalizedString } from "@/lib/types";

export default function LocalizedText({ value }: { value?: LocalizedString | string | null }) {
  const { t } = useLanguage();
  return <>{linkifyOrganizationText(t(value))}</>;
}
