import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import { text } from "@/lib/conference-i18n";

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading Conference page">
      <section className="bg-[#052f3d] py-24 sm:py-28">
        <Container>
          <div className="h-3 w-40 animate-pulse rounded-full bg-white/15" />
          <div className="mt-7 h-14 max-w-3xl animate-pulse rounded-2xl bg-white/12" />
          <div className="mt-4 h-14 max-w-2xl animate-pulse rounded-2xl bg-white/12" />
          <div className="mt-8 h-4 max-w-xl animate-pulse rounded-full bg-white/10" />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((item) => <div className="h-56 animate-pulse rounded-3xl border border-sand-200 bg-white" key={item} />)}
          </div>
          <p className="sr-only"><LocalizedText value={text("Loading content", "Загрузка содержимого", "Муҳтаво бор мешавад")} /></p>
        </Container>
      </section>
    </main>
  );
}
