import type { Metadata } from "next";
import Image from "next/image";
import LocalizedText from "@/components/LocalizedText";
import Container from "@/components/layout/Container";
import PageHero from "@/components/conference/PageHero";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusPanel from "@/components/ui/StatusPanel";
import { MountainIcon, PinIcon } from "@/components/ui/LineIcons";
import { text } from "@/lib/conference-i18n";

export const metadata: Metadata = {
  title: "Venue and Field Visit",
  description: "Conference location in Dushanbe and the field visit to Rasht District."
};

export default function VenuePage() {
  return (
    <main>
      <PageHero
        eyebrow={text("Location", "Место проведения", "Макон")}
        title={text("Dushanbe and Rasht District", "Душанбе и Раштский район", "Душанбе ва ноҳияи Рашт")}
        description={text("The main Conference convenes in the capital of Tajikistan, followed by a field visit that brings the scientific programme into a mountain context.", "Основная конференция пройдёт в столице Таджикистана, после чего состоится выездное мероприятие, связывающее научную программу с горными условиями.", "Конфронси асосӣ дар пойтахти Тоҷикистон баргузор шуда, сипас чорабинии сайёри саҳроӣ рӯзномаи илмиро бо шароити кӯҳӣ мепайвандад.")}
        meta={text("18 August · Dushanbe / 19 August · Rasht District", "18 августа · Душанбе / 19 августа · Раштский район", "18 август · Душанбе / 19 август · ноҳияи Рашт")}
        actions={<Button className="!bg-white !text-ink-900 hover:!bg-gold-300" href="/program-agenda/" variant="secondary"><LocalizedText value={text("View programme", "Смотреть программу", "Дидани рӯзнома")} /></Button>}
      />

      <section className="conference-content bg-white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-100 text-accent-600"><PinIcon className="h-6 w-6" aria-hidden="true" /></span>
                <Badge variant="success"><LocalizedText value={text("18 August", "18 августа", "18 август")} /></Badge>
              </div>
              <h2 className="mt-10 font-heading text-3xl font-semibold tracking-[-0.035em] text-ink-900"><LocalizedText value={text("Conference day · Dushanbe", "День конференции · Душанбе", "Рӯзи конфронс · Душанбе")} /></h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-600"><LocalizedText value={text("The International Scientific and Practical Conference will take place in Dushanbe, Republic of Tajikistan. The precise venue address will be published once confirmed by the organizers.", "Международная научно-практическая конференция состоится в городе Душанбе, Республика Таджикистан. Точный адрес будет опубликован после подтверждения организаторами.", "Конфронси байналмилалии илмӣ-амалӣ дар шаҳри Душанбе, Ҷумҳурии Тоҷикистон баргузор мегардад. Суроғаи дақиқ пас аз тасдиқи ташкилкунандагон нашр мешавад.")} /></p>
            </Card>
            <Card className="p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-100 text-accent-600"><MountainIcon className="h-6 w-6" aria-hidden="true" /></span>
                <Badge variant="success"><LocalizedText value={text("19 August", "19 августа", "19 август")} /></Badge>
              </div>
              <h2 className="mt-10 font-heading text-3xl font-semibold tracking-[-0.035em] text-ink-900"><LocalizedText value={text("Field visit · Rasht District", "Выездное мероприятие · Раштский район", "Чорабинии сайёри саҳроӣ · ноҳияи Рашт")} /></h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-600"><LocalizedText value={text("The programme continues at 08:30 with a field visit connecting scientific and policy dialogue with practical hydrometeorological and cryosphere realities.", "В 08:30 программа продолжится выездным мероприятием, связывающим научный и политический диалог с практическими реалиями гидрометеорологии и криосферы.", "Соати 08:30 рӯзнома бо чорабинии сайёри саҳроӣ идома меёбад, ки муколамаи илмӣ ва сиёсиро бо воқеияти амалии обуҳавошиносӣ ва криосфера мепайвандад.")} /></p>
            </Card>
          </div>

          <figure className="relative mt-8 h-[360px] overflow-hidden rounded-[28px] bg-sand-200 md:h-auto md:aspect-[16/7]">
            <Image src="/images/barsem.jpg" alt="Mountain landscape in Tajikistan" fill sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052f3d]/85 via-[#052f3d]/10 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 max-w-2xl p-7 font-heading text-xl font-semibold leading-8 text-white sm:p-9 sm:text-2xl"><LocalizedText value={text("Tajikistan’s mountain environment is central to the Conference’s climate and cryosphere agenda.", "Горная среда Таджикистана занимает центральное место в климатической и криосферной повестке конференции.", "Муҳити кӯҳии Тоҷикистон дар рӯзномаи иқлимӣ ва криосфераи конфронс ҷойгоҳи марказӣ дорад.")} /></figcaption>
          </figure>

          <StatusPanel
            className="mt-8"
            label={text("Logistics pending", "Логистика уточняется", "Логистика дақиқ мешавад")}
            title={text("Detailed access and transport guidance will follow", "Подробная информация о доступе и транспорте будет опубликована позднее", "Маълумоти муфассал оид ба дастрасӣ ва нақлиёт баъдтар нашр мешавад")}
            description={text("The exact Dushanbe venue, transport arrangements, access requirements, field itinerary and online participation links will be shared after confirmation.", "После подтверждения будут опубликованы точный адрес в Душанбе, транспортные условия, требования доступа, маршрут выездного мероприятия и ссылки для онлайн-участия.", "Пас аз тасдиқ суроғаи дақиқ дар Душанбе, нақлиёт, талаботи дастрасӣ, масири чорабинии саҳроӣ ва пайвандҳои иштироки онлайн нашр мешаванд.")}
            icon={<PinIcon className="h-7 w-7" aria-hidden="true" />}
          />
        </Container>
      </section>
    </main>
  );
}
