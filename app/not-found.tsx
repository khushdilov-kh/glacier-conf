import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import { text } from "@/lib/conference-i18n";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-sand-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[28px] border border-sand-200 bg-white p-8 text-center shadow-soft sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Error 404</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.04em] text-ink-900 sm:text-5xl"><LocalizedText value={text("Page not found", "Страница не найдена", "Саҳифа ёфт нашуд")} /></h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-600"><LocalizedText value={text("The requested Conference page may have moved, or the address may be incorrect.", "Запрашиваемая страница конференции могла быть перемещена, либо адрес указан неверно.", "Саҳифаи дархостшудаи конфронс шояд кӯчонида шуда бошад ё суроға нодуруст аст.")} /></p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/"><LocalizedText value={text("Back to home", "На главную", "Ба саҳифаи асосӣ")} /></Button>
            <Button href="/contact/" variant="secondary"><LocalizedText value={text("Conference information", "Информация о конференции", "Маълумот дар бораи конфронс")} /></Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
