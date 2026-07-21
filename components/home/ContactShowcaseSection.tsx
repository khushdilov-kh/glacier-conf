import type { SVGProps } from "react";
import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LocalizedString } from "@/lib/types";
import { cn, isPlaceholder } from "@/lib/utils";

type ContactItem = {
  label: LocalizedString;
  value: LocalizedString;
  note?: LocalizedString;
  kind: "email" | "phone" | "topics" | "messenger";
  href?: string;
};

interface ContactShowcaseSectionProps {
  items: ContactItem[];
  city: LocalizedString;
  timezone: LocalizedString;
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="6.5" width="16" height="11" rx="2.5" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </svg>
  );
}

function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 17.5H5a2 2 0 0 1-2-2V7.8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.7a2 2 0 0 1-2 2h-5.4L9 21z" />
      <path d="M8 10.5h8M8 13.5h5" />
    </svg>
  );
}

function RouteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="6.5" cy="7" r="2.5" />
      <circle cx="17.5" cy="17" r="2.5" />
      <path d="M8.8 8.2h3.7a3.5 3.5 0 0 1 3.5 3.5v1.1" />
      <path d="m13.8 14.3 2.2 2.2 2.2-2.2" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M8 4.5h2.5l1.2 4-1.6 1.6c1.1 2.2 2.6 3.8 4.8 4.8l1.6-1.6 4 1.2V17a2 2 0 0 1-2 2c-7.2 0-13-5.8-13-13a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

const subjectTags = [
  { en: "Application", ru: "Заявка", tg: "Ариза" },
  { en: "Program", ru: "Программа", tg: "Барнома" },
  { en: "Logistics", ru: "Логистика", tg: "Логистика" },
  { en: "Partnerships", ru: "Партнерства", tg: "Шарикӣ" },
  { en: "Media", ru: "Медиа", tg: "Медиа" },
  { en: "Faculty", ru: "Эксперты", tg: "Коршиносон" }
];

const panelCopy = {
  en: "Use the main inbox for official communication and add a clear subject line so your message reaches the right coordinator quickly.",
  ru: "Используйте основной email для официальной связи и добавляйте понятную тему письма, чтобы запрос быстрее дошел до нужного координатора.",
  tg: "Барои муоширати расмӣ аз суроғаи асосии email истифода баред ва мавзӯи равшан илова кунед, то паёми шумо зудтар ба ҳамоҳангсози дуруст расад."
};

const pendingBadge = {
  en: "Details updating",
  ru: "Детали обновляются",
  tg: "Маълумот нав мешавад"
};

function getContactHref(item: ContactItem) {
  if (item.href) return item.href;
  if (isPlaceholder(item.value.en)) return undefined;
  if (item.kind === "email") return `mailto:${item.value.en}`;
  if (item.kind === "phone") return `tel:${item.value.en}`;
  return undefined;
}

function getContactIcon(kind: ContactItem["kind"]) {
  if (kind === "email") return MailIcon;
  if (kind === "phone") return PhoneIcon;
  if (kind === "messenger") return MessageIcon;
  return RouteIcon;
}

export default function ContactShowcaseSection({
  items,
  city,
  timezone
}: ContactShowcaseSectionProps) {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-emerald-200/45 blur-3xl" />
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={{ en: "Stay in touch", ru: "Оставайтесь на связи", tg: "Дар тамос бошед" }}
            title={{ en: "Contact", ru: "Контакты", tg: "Тамос" }}
            description=""
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.86fr,1.14fr]">
          <Reveal delay={0.05}>
            <Card className="relative overflow-hidden rounded-[34px] border-white/80 bg-white/88 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.14),transparent_30%)]" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg shadow-slate-900/10">
                  <MailIcon className="h-7 w-7" />
                </span>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-500">
                  <LocalizedText value={{ en: "Contact desk", ru: "Контактный центр", tg: "Маркази тамос" }} />
                </p>
                <h3 className="mt-3 text-2xl font-heading leading-tight text-ink-900 sm:text-[2rem]">
                  <LocalizedText
                    value={{
                      en: "Everything important in one clear place.",
                      ru: "Все важное в одном понятном месте.",
                      tg: "Маълумотҳои муҳим ва дастрас дар як ҷо."
                    }}
                  />
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink-600 sm:text-base">
                  <LocalizedText value={panelCopy} />
                </p>

                

               
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = getContactIcon(item.kind);
              const href = getContactHref(item);
              const muted = !href && isPlaceholder(item.value.en);
              const accent =
                index % 4 === 0
                  ? "from-sky-500 to-cyan-500"
                  : index % 4 === 1
                    ? "from-emerald-500 to-teal-500"
                    : index % 4 === 2
                      ? "from-amber-500 to-orange-500"
                      : "from-fuchsia-500 to-rose-500";

              return (
                <Reveal key={item.label.en} delay={0.08 + index * 0.04}>
                  <Card className="relative h-full overflow-hidden rounded-[28px] border-white/80 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <div className={cn("absolute inset-x-6 top-0 h-px bg-gradient-to-r", accent)} />
                    <div className="relative">
                      <span
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-slate-900/10",
                          accent
                        )}
                      >
                        <Icon className="h-6 w-6" />
                      </span>

                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-500">
                        <LocalizedText value={item.label} />
                      </p>

                      {href ? (
                        <a
                          className="mt-3 block text-lg font-semibold leading-snug text-ink-900 transition hover:text-ink-700"
                          href={href}
                        >
                          <LocalizedText value={item.value} />
                        </a>
                      ) : (
                        <p className="mt-3 text-lg font-semibold leading-snug text-ink-900">
                          <LocalizedText value={item.value} />
                        </p>
                      )}

                      {item.note ? (
                        <p className="mt-3 text-sm leading-7 text-ink-600">
                          <LocalizedText value={item.note} />
                        </p>
                      ) : null}

                      {muted ? (
                        <span className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                          <LocalizedText value={pendingBadge} />
                        </span>
                      ) : null}
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
