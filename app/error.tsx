"use client";

import { useEffect } from "react";
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import { text } from "@/lib/conference-i18n";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-sand-50 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-sand-200 bg-white p-8 text-center shadow-soft sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800"><LocalizedText value={text("Temporary error", "Временная ошибка", "Хатои муваққатӣ")} /></p>
        <h1 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.04em] text-ink-900 sm:text-5xl"><LocalizedText value={text("This page could not be displayed", "Не удалось отобразить страницу", "Саҳифа намоиш дода нашуд")} /></h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-600"><LocalizedText value={text("Please try loading the page again. If the problem continues, return to the Conference homepage.", "Попробуйте загрузить страницу ещё раз. Если проблема сохраняется, вернитесь на главную страницу конференции.", "Саҳифаро дубора бор кунед. Агар мушкил идома ёбад, ба саҳифаи асосии конфронс баргардед.")} /></p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}><LocalizedText value={text("Try again", "Повторить", "Аз нав кӯшиш кунед")} /></Button>
          <Button href="/" variant="secondary"><LocalizedText value={text("Back to home", "На главную", "Ба саҳифаи асосӣ")} /></Button>
        </div>
      </div>
    </main>
  );
}
