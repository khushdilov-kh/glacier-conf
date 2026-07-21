import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
  applicationClosedBody,
  applicationClosedLabel,
  applicationClosedTitle
} from "@/lib/applicationStatus";

export default function ApplicationClosedNotice() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-[30px] border border-amber-100 bg-white p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-10">
        <p className="mx-auto inline-flex rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-950">
          <LocalizedText value={applicationClosedLabel} />
        </p>
        <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
          <LocalizedText value={applicationClosedTitle} />
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-600 sm:text-lg">
          <LocalizedText value={applicationClosedBody} />
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/program-agenda">
            <LocalizedText value={{ en: "View program", ru: "Посмотреть программу", tg: "Барномаро бинед" }} />
          </Button>
          <Button href="/#contact" variant="secondary">
            <LocalizedText value={{ en: "Contact organizers", ru: "Связаться с организаторами", tg: "Тамос бо ташкилкунандагон" }} />
          </Button>
        </div>
      </div>
    </Container>
  );
}
