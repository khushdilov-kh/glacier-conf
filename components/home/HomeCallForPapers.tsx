import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/ui/Button";
import {
  BookIcon,
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  MountainIcon,
  TargetIcon
} from "@/components/ui/LineIcons";
import { conferenceI18n, text } from "@/lib/conference-i18n";
import GeoPatternBackdrop from "../ui/GeoPatternBackdrop";

const formats = [
  {
    icon: BookIcon,
    title: text("Research abstract", "Научные тезисы", "Фишурдаи таҳқиқоти илмӣ"),
    meta: text("300–500 words", "300–500 слов", "300–500 калима"),
    text: text("Original research, methods, datasets or results relevant to hydrometeorology, glaciers and climate resilience.", "Оригинальные исследования, методы, наборы данных или результаты по гидрометеорологии, ледникам и климатической устойчивости.", "Таҳқиқоти аслӣ, усулҳо, маҷмуаҳои маълумот ё натиҷаҳои марбут ба обуҳавошиносӣ, пиряхҳо ва устувории иқлимӣ.")
  },
  {
    icon: TargetIcon,
    title: text("Applied case study", "Прикладной пример", "Намунаи амалӣ"),
    meta: text("Practice focused", "Практическая направленность", "Таваҷҷуҳ ба амалия"),
    text: text("Lessons from operational services, adaptation projects, early-warning systems or institutional partnerships.", "Опыт оперативных служб, проектов по адаптации, систем раннего предупреждения или институционального партнёрства.", "Таҷрибаи хадамоти амалӣ, лоиҳаҳои мутобиқшавӣ, низомҳои огоҳсозии бармаҳал ё шарикии институтсионалӣ.")
  },
  {
    icon: MountainIcon,
    title: text("Poster contribution", "Постерный доклад", "Маърӯзаи постерӣ"),
    meta: text("Visual presentation", "Визуальная презентация", "Муаррифии визуалӣ"),
    text: text("Concise scientific or technical work presented through maps, field evidence, diagrams and key findings.", "Краткая научная или техническая работа, представленная с помощью карт, полевых материалов, диаграмм и ключевых выводов.", "Кори мухтасари илмӣ ё техникӣ бо харитаҳо, далелҳои саҳроӣ, диаграммаҳо ва хулосаҳои асосӣ.")
  }
] as const;

const requirements = [
  text("A clear title and a concise statement of the problem", "Чёткое название и краткая постановка проблемы", "Унвони равшан ва баёни мухтасари масъала"),
  text("Purpose, methodology or practical approach", "Цель, методология или практический подход", "Ҳадаф, методология ё равиши амалӣ"),
  text("Key results, lessons learned and expected relevance", "Ключевые результаты, извлечённые уроки и ожидаемая значимость", "Натиҷаҳои асосӣ, дарсҳои омӯхташуда ва аҳамияти пешбинишуда"),
  text("Author names, affiliations, country and contact email", "Имена авторов, организации, страна и контактный адрес электронной почты", "Номи муаллифон, муассисаҳо, кишвар ва почтаи электронӣ барои тамос"),
  text("Three to five keywords and the preferred Conference theme", "От трёх до пяти ключевых слов и предпочтительная тема конференции", "Аз се то панҷ калимаи калидӣ ва мавзӯи афзалиятноки конфронс")
] as const;

const reviewSteps = [
  ["01", "Submit", "Send your abstract and author details through the official Conference channel."],
  ["02", "Scientific review", "The committee evaluates relevance, clarity, originality and practical value."],
  ["03", "Decision", "Authors receive the outcome together with presentation and formatting guidance."],
  ["04", "Present", "Accepted contributions join an oral, poster or practice-focused Conference session."]
] as const;

export default function HomeCallForPapers() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36" id="call-for-papers" aria-labelledby="call-for-papers-title">
       <GeoPatternBackdrop variant="network" className="text-sky-600 opacity-50" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="conference-eyebrow"><LocalizedText value={text("Call for Papers", "Приглашение к подаче материалов", "Даъват барои пешниҳоди мавод")} /></p>
            </div>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink-900 sm:text-5xl lg:text-[4rem]" id="call-for-papers-title">
              <LocalizedText value={text("Turn research and field experience into shared climate action.", "Превратим исследования и полевой опыт в совместные действия в интересах климата.", "Таҳқиқот ва таҷрибаи саҳроиро ба амали муштараки иқлимӣ табдил медиҳем.")} />
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-8 text-ink-600">
              <LocalizedText value={text("Researchers, public institutions, practitioners and development partners are invited to contribute evidence, tools and practical lessons across the Conference’s four scientific themes.", "Исследователи, государственные учреждения, практики и партнёры по развитию приглашаются представить данные, инструменты и практические уроки по четырём научным темам конференции.", "Муҳаққиқон, муассисаҳои давлатӣ, мутахассисон ва шарикони рушд даъват мешаванд, ки дар чор мавзӯи илмии конфронс далелҳо, воситаҳо ва таҷрибаи амалиро пешниҳод намоянд.")} />
            </p>           
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[30px] bg-[#052f3d] text-white shadow-[0_28px_80px_rgba(6,43,58,0.16)]">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3 text-[#f0ca69]">
                <ClockIcon className="h-6 w-6" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]"><LocalizedText value={text("Submission essentials", "Основные условия подачи", "Шартҳои асосии пешниҳод")} /></span>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
                {[
                  [text("Deadline", "Срок подачи", "Муҳлати пешниҳод"), text("12 August 2026", "12 августа 2026 года", "12 августи соли 2026")],
                  [text("Abstract", "Тезисы", "Фишурдаи маърӯза"), text("300–500 words", "300–500 слов", "300–500 калима")],
                  [text("Language", "Язык", "Забон"), text("Tajik, Russian or English", "Таджикский, русский или английский", "Тоҷикӣ, русӣ ё англисӣ")],
                  [text("Decision", "Решение", "Қарор"), text("15 August 2026", "15 августа 2026 года", "15 августи соли 2026")]
                ].map(([label, value]) => (
                  <div className="bg-[#0a3b49] p-5" key={label.en}>
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8fc4c9]"><LocalizedText value={label} /></dt>
                    <dd className="mt-2 font-heading text-sm font-semibold text-white sm:text-base"><LocalizedText value={value} /></dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8fc4c9]"><LocalizedText value={text("Choose the closest theme", "Выберите наиболее подходящую тему", "Мавзӯи мувофиқтаринро интихоб кунед")} /></p>
              <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {conferenceI18n.themes.map((theme) => (
                  <div className="flex gap-4 border-t border-white/10 py-4" key={theme.number}>
                    <span className="font-heading text-sm font-semibold text-[#f0ca69]">{theme.number}</span>
                    <p className="font-heading text-sm font-semibold leading-6 text-white"><LocalizedText value={theme.title} /></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="conference-eyebrow"><LocalizedText value={text("Contribution formats", "Форматы участия", "Шаклҳои иштирок")} /></p>
            <h3 className="mt-4 max-w-xl font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 sm:text-4xl">
              <LocalizedText value={text("Different ways to contribute valuable knowledge.", "Разные способы поделиться ценными знаниями.", "Роҳҳои гуногуни пешниҳоди дониши арзишманд.")} />
            </h3>
            <div className="mt-8 grid gap-4">
              {formats.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 rounded-[24px] border border-sand-200 bg-[#f8fbfa] p-5 transition hover:border-accent-500/25 hover:bg-white hover:shadow-soft" key={item.title.en}>
                    <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#e3f2f1] text-accent-600">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-heading text-lg font-semibold text-ink-900"><LocalizedText value={item.title} /></h4>
                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-accent-600"><LocalizedText value={item.meta} /></span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-ink-600"><LocalizedText value={item.text} /></p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[30px] border border-sand-200 bg-[#f3f8f7] p-7 sm:p-9 lg:p-10">
            <p className="conference-eyebrow"><LocalizedText value={text("What to include", "Что включить", "Чиро дохил кардан лозим аст")} /></p>
            <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-ink-900"><LocalizedText value={text("A clear, review-ready abstract.", "Чёткие тезисы, готовые к рассмотрению.", "Фишурдаи равшан ва омода барои баррасӣ.")} /></h3>
            <p className="mt-4 text-sm leading-7 text-ink-600"><LocalizedText value={text("Use this provisional checklist to shape a concise contribution that reviewers can assess consistently.", "Используйте этот предварительный перечень, чтобы подготовить краткий материал для последовательной оценки экспертами.", "Аз ин рӯйхати пешакӣ истифода баред, то маводи мухтасаре таҳия намоед, ки коршиносон онро пайваста арзёбӣ карда тавонанд.")} /></p>
            <ul className="mt-8">
              {requirements.map((requirement) => (
                <li className="flex gap-4 border-t border-sand-200 py-4 text-sm font-semibold leading-6 text-ink-800" key={requirement.en}>
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                  <LocalizedText value={requirement} />
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl border border-[#ddb54b]/35 bg-[#fff9e9] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#795a13]"><LocalizedText value={text("Selection criteria", "Критерии отбора", "Меъёрҳои интихоб")} /></p>
              <p className="mt-2 text-sm leading-7 text-[#665522]"><LocalizedText value={text("Relevance to the Conference, scientific or practical quality, clarity, originality and potential regional value.", "Соответствие тематике конференции, научное или практическое качество, ясность, оригинальность и потенциальная ценность для региона.", "Мутобиқат ба мавзӯи конфронс, сифати илмӣ ё амалӣ, возеҳӣ, асолат ва арзиши эҳтимолӣ барои минтақа.")} /></p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 border-t border-sand-200 pt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="conference-eyebrow">Review journey</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-ink-900">From abstract to presentation.</h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-600">A simple four-step process keeps authors informed from submission through the Conference programme.</p>
          </div>

          <ol className="mt-9 grid gap-4 md:grid-cols-4">
            {reviewSteps.map(([number, title, text]) => (
              <li className="relative rounded-[24px] border border-sand-200 bg-white p-6 shadow-[0_12px_36px_rgba(6,43,58,0.05)]" key={number}>
                <span className="text-xs font-bold tracking-[0.16em] text-accent-600">{number}</span>
                <h4 className="mt-7 font-heading text-xl font-semibold text-ink-900">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-ink-600">{text}</p>
              </li>
            ))}
          </ol>
        </div> */}

        <div className="mt-12 flex flex-col gap-6 rounded-[28px] bg-[#e7f2f1] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-accent-600 shadow-soft">
              <MailIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink-900"><LocalizedText value={text("Questions about your contribution?", "Есть вопросы по вашему материалу?", "Оид ба маводи шумо саволе ҳаст?")} /></h3>
              <p className="mt-1 text-sm leading-6 text-ink-600"><LocalizedText value={text("Contact the Conference team at info@glacersconf.tj.", "Свяжитесь с командой конференции: info@glacersconf.tj.", "Бо гурӯҳи конфронс тавассути info@glacersconf.tj тамос гиред.")} /></p>
            </div>
          </div>
          <Button className="shrink-0" href="mailto:info@glacersconf.tj?subject=Call%20for%20Papers%20enquiry" size="lg">
            <LocalizedText value={text("Ask the organizers", "Задать вопрос организаторам", "Ба ташкилкунандагон савол диҳед")} /> <MailIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
