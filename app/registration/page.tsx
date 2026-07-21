import type { Metadata } from "next";
import ApplyFormEmbed from "@/components/ApplyFormEmbed";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CheckCircleIcon } from "@/components/ui/LineIcons";
import { conferenceI18n, text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Conference Registration",
  description: "Official registration form for in-person and online participation in the Conference."
};

const registrationFormUrl = "https://survey123.arcgis.com/share/54cb9a7e49ec4259ad2e38c147bcd258";
const registrationEmbedUrl = `${registrationFormUrl}?hide=header,footer,description`;

const registrationSteps = [
  { number: "01", title: text("Review eligibility", "Проверьте соответствие требованиям", "Мутобиқат ба талаботро санҷед"), description: text("Check the participant profile, working languages and Conference format.", "Ознакомьтесь с профилем участников, рабочими языками и форматом конференции.", "Бо профили иштирокчиён, забонҳои корӣ ва шакли конфронс шинос шавед.") },
  { number: "02", title: text("Complete registration", "Пройдите регистрацию", "Бақайдгириро анҷом диҳед"), description: text("Complete and submit the official participant form on this page.", "Заполните и отправьте официальную форму участника на этой странице.", "Шакли расмии иштирокчиро дар ин саҳифа пур карда, ирсол намоед.") },
  { number: "03", title: text("Receive confirmation", "Получите подтверждение", "Тасдиқро қабул кунед"), description: text("Confirmed participants will receive access and logistical guidance from the organizers.", "Подтверждённые участники получат от организаторов инструкции по доступу и логистике.", "Иштирокчиёни тасдиқшуда аз ташкилкунандагон дастурҳои дастрасӣ ва логистикиро мегиранд.") }
] as const;

const registrationFacts = [
  { label: text("Format", "Формат", "Шакл"), value: conferenceI18n.format },
  { label: text("Working languages", "Рабочие языки", "Забонҳои корӣ"), value: conferenceI18n.languages },
  { label: text("Conference dates", "Даты конференции", "Санаҳои конфронс"), value: conferenceI18n.dates }
] as const;

export default function RegistrationPage() {
  return (
    <main>
      {/* <PageHero
        eyebrow={text("Participation", "Участие", "Иштирок")}
        title={text("Conference registration", "Регистрация на конференцию", "Бақайдгирӣ барои конфронс")}
        description={text("Complete the official participant form below to register for in-person or online participation.", "Заполните официальную форму участника ниже, чтобы зарегистрироваться для очного или онлайн-участия.", "Барои иштироки ҳузурӣ ё онлайн шакли расмии иштирокчиро дар поён пур кунед.")}
        meta={text("Registration status · Open", "Статус регистрации · Открыта", "Ҳолати бақайдгирӣ · Кушода")}
        actions={<Button href="#registration-form" variant="secondary"><LocalizedText value={text("Open registration form", "Открыть форму регистрации", "Кушодани шакли бақайдгирӣ")} /></Button>}
      /> */}

      <section className="conference-content">
        <Container>
          <div id="registration-form" className="scroll-mt-28">
            <ApplyFormEmbed embedUrl={registrationEmbedUrl} formUrl={registrationFormUrl} />
          </div>

          
        </Container>
      </section>
    </main>
  );
}
