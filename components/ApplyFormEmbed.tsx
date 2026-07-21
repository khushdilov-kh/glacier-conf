"use client";

import { useEffect, useRef, useState } from "react";
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import { CheckCircleIcon } from "@/components/ui/LineIcons";
import { text } from "@/lib/conference-i18n";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SURVEY_ORIGIN = "https://survey123.arcgis.com";
const MIN_FORM_HEIGHT = 980;
const MAX_FORM_HEIGHT = 5200;

type SurveyMessage = {
  event?: string;
  contentHeight?: number | string;
};

function parseSurveyMessage(value: unknown): SurveyMessage | null {
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as SurveyMessage;
    } catch {
      return null;
    }
  }

  return value && typeof value === "object" ? value as SurveyMessage : null;
}

export default function ApplyFormEmbed({ embedUrl, formUrl }: { embedUrl: string; formUrl: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [slowLoading, setSlowLoading] = useState(false);
  const [formHeight, setFormHeight] = useState(1380);
  const { t } = useLanguage();

  useEffect(() => {
    const handleMessage = (message: MessageEvent) => {
      if (message.origin !== SURVEY_ORIGIN || message.source !== iframeRef.current?.contentWindow) return;

      const payload = parseSurveyMessage(message.data);
      if (!payload || !["survey123:webform:formLoaded", "survey123:onFormLoaded"].includes(payload.event ?? "")) return;

      const reportedHeight = Number(payload.contentHeight);
      if (Number.isFinite(reportedHeight) && reportedHeight > 0) {
        setFormHeight(Math.min(MAX_FORM_HEIGHT, Math.max(MIN_FORM_HEIGHT, Math.ceil(reportedHeight) + 24)));
      }
      setLoading(false);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (!loading) {
      setSlowLoading(false);
      return;
    }

    const timeout = window.setTimeout(() => setSlowLoading(true), 8000);
    return () => window.clearTimeout(timeout);
  }, [loading]);

  return (
    <div className="overflow-hidden rounded-[30px] border border-sand-200 bg-white shadow-[0_28px_80px_rgba(6,43,58,0.12)]">
      <div className="flex flex-col gap-5 border-b border-sand-200 bg-[#f4f9f8] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          
          <h2 className="mt-2 font-heading text-2xl font-semibold text-ink-900 sm:text-3xl">
            <LocalizedText value={text("Conference participant form", "Форма участника конференции", "Шакли иштирокчии конфронс")} />
          </h2>
        </div>
        
      </div>

      <div className="relative" aria-busy={loading}>
        <iframe
          ref={iframeRef}
          name="conference-registration-form"
          src={embedUrl}
          title={t(text("International Scientific and Practical Conference 2026 registration form", "Форма регистрации на Международную научно-практическую конференцию 2026", "Шакли бақайдгирии Конфронси байналмилалии илмӣ-амалӣ 2026"))}
          className={cn("block w-full border-0 bg-white transition-opacity duration-500", loading ? "opacity-0" : "opacity-100")}
          style={{ height: `${formHeight}px` }}
          allow="geolocation https://survey123.arcgis.com; camera https://survey123.arcgis.com; microphone https://survey123.arcgis.com; local-network-access"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setLoading(false)}
        />

        {loading ? (
          <div className="absolute inset-0 z-10 flex min-h-[760px] items-start justify-center bg-[linear-gradient(180deg,#f4f9f8,#ffffff)] px-5 py-16 sm:py-24">
            <div className="w-full max-w-xl text-center">
              <div className="mx-auto h-11 w-11 animate-spin rounded-full border-[3px] border-accent-600/20 border-t-accent-600" aria-hidden="true" />
              <h3 className="mt-6 font-heading text-2xl font-semibold text-ink-900">
                <LocalizedText value={text("Loading registration form", "Загрузка формы регистрации", "Шакли бақайдгирӣ бор мешавад")} />
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-600">
                <LocalizedText value={text("Please wait while the participant form is prepared.", "Пожалуйста, подождите, пока загружается форма участника.", "Лутфан интизор шавед, то шакли иштирокчӣ бор шавад.")} />
              </p>

              {slowLoading ? (
                <div className="mt-7">
                  <p className="mb-4 text-sm text-ink-600">
                    <LocalizedText value={text("The form is taking longer than expected to load.", "Форма загружается дольше обычного.", "Боршавии шакл аз вақти муқаррарӣ бештар давом дорад.")} />
                  </p>
                  <Button href={formUrl} target="_blank" variant="secondary">
                    <LocalizedText value={text("Open registration form", "Открыть форму регистрации", "Кушодани шакли бақайдгирӣ")} />
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
