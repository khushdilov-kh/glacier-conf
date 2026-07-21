import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { MailIcon } from "@/components/ui/LineIcons";
import type { FaqItem } from "@/lib/types";
import { text } from "@/lib/conference-i18n";

const questions: FaqItem[] = [
  { question: text("When and where is the Conference?", "Когда и где состоится конференция?", "Конфронс кай ва дар куҷо баргузор мешавад?"), answer: text("The main Conference takes place on 18 August 2026 in Dushanbe, Republic of Tajikistan. A field visit to Rasht District follows on 19 August 2026.", "Основная конференция состоится 18 августа 2026 года в городе Душанбе, Республика Таджикистан. 19 августа 2026 года пройдёт выездное полевое мероприятие в Раштском районе.", "Конфронси асосӣ 18 августи соли 2026 дар шаҳри Душанбе, Ҷумҳурии Тоҷикистон баргузор мешавад. 19 августи соли 2026 чорабинии сайёри саҳроӣ дар ноҳияи Рашт доир мегардад.") },
  { question: text("Can I participate online?", "Можно ли участвовать онлайн?", "Оё иштироки онлайн имконпазир аст?"), answer: text("Yes. The Conference is planned in a hybrid format with both in-person and remote participation. Online access details will be announced later.", "Да. Конференция будет проводиться в смешанном (гибридном) формате с очным и дистанционным участием. Данные для онлайн-подключения будут опубликованы позднее.", "Бале. Конфронс дар шакли омехта бо иштироки ҳузурӣ ва маҷозӣ баргузор мегардад. Маълумоти пайвастшавии онлайн баъдтар нашр мешавад.") },
  { question: text("What are the working languages?", "Каковы рабочие языки?", "Забонҳои корӣ кадомҳоянд?"), answer: text("Tajik, Russian and English. Simultaneous interpretation will be provided.", "Таджикский, русский и английский языки. Будет обеспечен синхронный перевод.", "Забонҳои тоҷикӣ, русӣ ва англисӣ. Тарҷумаи ҳамзамон таъмин карда мешавад.") },
  { question: text("Who is the Conference for?", "Для кого предназначена конференция?", "Конфронс барои кӣ пешбинӣ шудааст?"), answer: text("Government authorities, hydrometeorological services, scientific and educational institutions, international organizations, financial institutions, experts, development partners and relevant practitioners.", "Для представителей государственных органов, гидрометеорологических служб, научных и образовательных учреждений, международных организаций, финансовых институтов, экспертов, партнёров по развитию и профильных специалистов.", "Барои намояндагони мақомоти давлатӣ, хадамотҳои обуҳавошиносӣ, муассисаҳои илмӣ ва таълимӣ, созмонҳои байналмилалӣ, институтҳои молиявӣ, коршиносон, шарикони рушд ва мутахассисони соҳавӣ.") },
  { question: text("How do I register?", "Как зарегистрироваться?", "Чӣ гуна бақайдгирӣ кардан мумкин аст?"), answer: text("Open the Registration page, complete the official participant form and submit it. The form supports both in-person and online participation.", "Откройте страницу регистрации, заполните официальную форму участника и отправьте её. Форма предусматривает очное и онлайн-участие.", "Саҳифаи бақайдгириро кушоед, шакли расмии иштирокчиро пур карда, ирсол намоед. Шакл иштироки ҳузурӣ ва онлайнро пешбинӣ мекунад.") },
  { question: text("How do I submit an abstract?", "Как подать тезисы?", "Фишурдаи маърӯзаро чӣ гуна пешниҳод кардан мумкин аст?"), answer: text("See the Call for Papers section on this page for the draft format, requirements, review process and Conference contact details.", "Ознакомьтесь с разделом приглашения к подаче материалов на этой странице: там указаны формат, требования, порядок рассмотрения и контакты конференции.", "Дар бахши даъват барои пешниҳоди мавод бо шакл, талабот, тартиби баррасӣ ва маълумоти тамоси конфронс шинос шавед.") },
  { question: text("Is the programme final?", "Программа окончательная?", "Оё рӯзнома ниҳоӣ аст?"), answer: text("The programme is a working version. Some speakers and institutional representatives remain subject to confirmation, so timing and details may be refined.", "Программа является рабочей версией. Некоторые выступающие и представители учреждений ещё согласовываются, поэтому время и детали могут уточняться.", "Рӯзнома нусхаи корӣ мебошад. Баъзе сухангӯён ва намояндагони муассисаҳо ҳанӯз тасдиқ мешаванд, аз ин рӯ вақт ва ҷузъиёт метавонанд дақиқ гарданд.") },
  { question: text("Is the field visit open to all participants?", "Выездное мероприятие доступно всем участникам?", "Оё чорабинии саҳроӣ барои ҳамаи иштирокчиён дастрас аст?"), answer: text("Participation and logistics for the Rasht District field visit will be communicated to registered participants by the organizers.", "Условия участия и логистика выездного мероприятия в Раштском районе будут сообщены зарегистрированным участникам организаторами.", "Шартҳои иштирок ва логистикаи чорабинии саҳроӣ дар ноҳияи Рашт аз ҷониби ташкилкунандагон ба иштирокчиёни бақайдгирифташуда хабар дода мешаванд.") }
];

export default function HomeFaqSection() {
  return (
    <section className="conference-section bg-[#f5f9f8]" id="faq" aria-labelledby="faq-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="conference-eyebrow">FAQ</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-ink-900 sm:text-5xl" id="faq-title">
              <LocalizedText value={text("Questions, answered clearly.", "Чёткие ответы на важные вопросы.", "Ҷавобҳои равшан ба саволҳои муҳим.")} />
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-ink-600">
              <LocalizedText value={text("Everything you need to know about attendance, submissions, languages and the field programme.", "Всё, что нужно знать об участии, подаче материалов, языках и выездной программе.", "Ҳамаи маълумоти зарурӣ оид ба иштирок, пешниҳоди мавод, забонҳо ва барномаи саҳроӣ.")} />
            </p>

            <a
              className="mt-8 flex max-w-md items-center gap-4 rounded-[22px] bg-[#052f3d] p-5 text-white shadow-[0_18px_45px_rgba(6,43,58,0.16)] transition hover:-translate-y-0.5 hover:bg-[#084a5b]"
              href="mailto:info@glacersconf.tj"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#f0ca69]">
                <MailIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <small className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#94c9cd]"><LocalizedText value={text("Conference enquiries", "Вопросы о конференции", "Саволҳо оид ба конфронс")} /></small>
                <strong className="mt-1 block break-all font-heading text-base font-semibold sm:text-lg">info@glacersconf.tj</strong>
              </span>
            </a>
          </div>

          <FaqAccordion className="!space-y-3" items={questions} />
        </div>
      </Container>
    </section>
  );
}
