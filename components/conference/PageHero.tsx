import type { ReactNode } from "react";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import type { LocalizedString } from "@/lib/types";

type PageHeroProps = {
  eyebrow: LocalizedString | string;
  title: LocalizedString | string;
  description: LocalizedString | string;
  meta?: LocalizedString | string;
  actions?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, meta, actions }: PageHeroProps) {
  return (
    <section className="conference-page-hero" aria-labelledby="page-title">
      <div className="conference-page-hero__contours" aria-hidden="true" />
      <Container className="conference-page-hero__inner">
        <div className="conference-page-hero__copy">
          <p className="conference-eyebrow conference-eyebrow--light"><LocalizedText value={eyebrow} /></p>
          <h1 id="page-title"><LocalizedText value={title} /></h1>
          <p className="conference-page-hero__description"><LocalizedText value={description} /></p>
        </div>
        {meta || actions ? (
          <div className="conference-page-hero__footer">
            {meta ? <p className="conference-page-hero__meta"><LocalizedText value={meta} /></p> : <span />}
            {actions ? <div className="conference-page-hero__actions">{actions}</div> : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
