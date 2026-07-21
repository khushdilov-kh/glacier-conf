import type { LocalizedString } from "@/lib/types";

export const labels = {
  home: { en: "Home", ru: "Главная", tg: "Асосӣ" },
  register: { en: "Apply", ru: "Подать заявку", tg: "Дархост" },
  callForPapers: { en: "Applications", ru: "Заявки", tg: "Дархостҳо" },
  about: { en: "About", ru: "О программе", tg: "Дар бораи барнома" },
  program: { en: "Program", ru: "Программа", tg: "Барнома" },
  participants: { en: "For participants", ru: "Участникам", tg: "Барои иштирокчиён" },
  speakers: { en: "Faculty & experts", ru: "Эксперты и преподаватели", tg: "Ҳайати омӯзгорон ва коршиносон" },
  venue: { en: "Location", ru: "Локация", tg: "Макон" },
  sponsors: { en: "Project partners", ru: "Партнеры проекта", tg: "Шарикони лоиҳа" },
  faq: { en: "FAQ", ru: "Вопросы и ответы", tg: "Саволу ҷавоб" },
  contact: { en: "Contact", ru: "Контакты", tg: "Тамос" },
  privacy: { en: "Privacy", ru: "Конфиденциальность", tg: "Махфият" },
  registration: { en: "Application", ru: "Подача заявки", tg: "Пешниҳоди дархост" },
  tracks: { en: "Learning modules", ru: "Учебные модули", tg: "Модулҳои омӯзишӣ" },
  keyFacts: { en: "Briefly about the program", ru: "Кратко о программе", tg: "Мухтасар дар бораи барнома" },
  aboutPreview: { en: "About the program", ru: "О программе", tg: "Дар бораи барнома" },
  speakersPreview: { en: "Teaching team", ru: "Команда экспертов", tg: "Ҳайати коршиносон" },
  programPreview: { en: "Learning program", ru: "Образовательная программа", tg: "Барномаи омӯзишӣ" },
  viewAll: { en: "View all", ru: "Смотреть все", tg: "Ҳамаро дидан" },
  learnMore: { en: "Learn more", ru: "Подробнее", tg: "Бештар" },
  registrationHighlight: { en: "Ready to apply?", ru: "Готовы подать заявку?", tg: "Омодаед ариза пешниҳод кунед?" },
  tracksIntro: {
    en: "Modules combining cryosphere science, GIS, remote sensing, and risk-informed decision-making.",
    ru: "Модули, объединяющие криосферную науку, ГИС, дистанционное зондирование и риск-ориентированное принятие решений.",
    tg: "Модулҳое, ки илмҳои криосфера, GIS, зондкунии фосилавӣ ва қабули қарорҳои ба хавф ҳассосро муттаҳид мекунанд."
  },
  filterTrack: { en: "Module", ru: "Модуль", tg: "Модул" },
  filterTag: { en: "Role", ru: "Роль", tg: "Нақш" },
  allTracks: { en: "All modules", ru: "Все модули", tg: "Ҳамаи модулҳо" },
  allTags: { en: "All roles", ru: "Все роли", tg: "Ҳамаи нақшҳо" },
  noSpeakers: { en: "No experts match these filters.", ru: "Нет совпадений по этим фильтрам.", tg: "Бо ин филтрҳо коршиносон ёфт нашуданд." },
  contactFormTitle: { en: "Write to the organizers", ru: "Напишите организаторам", tg: "Ба ташкилкунандагон нависед" },
  name: { en: "Name", ru: "Имя", tg: "Ном" },
  email: { en: "Email", ru: "Email", tg: "Email" },
  message: { en: "Message", ru: "Сообщение", tg: "Паём" },
  sendMessage: { en: "Send message", ru: "Отправить", tg: "Ирсол" },
  sponsorTiers: {
    platinum: { en: "Lead academic partner", ru: "Ведущий академический партнер", tg: "Шарики асосии академӣ" },
    gold: { en: "Implementing partner", ru: "Исполняющий партнер", tg: "Шарики татбиқкунанда" },
    silver: { en: "Financing partner", ru: "Финансирующий партнер", tg: "Шарики молиявӣ" },
    community: { en: "Project platform", ru: "Проектная платформа", tg: "Платформаи лоиҳа" }
  },
  programTable: {
    time: { en: "Time", ru: "Время", tg: "Вақт" },
    session: { en: "Session", ru: "Сессия", tg: "Ҷаласа" },
    type: { en: "Type", ru: "Тип", tg: "Навъ" },
    location: { en: "Location", ru: "Локация", tg: "Макон" },
    speakers: { en: "Contributors", ru: "Участники команды", tg: "Иштироккунандагон" }
  }
} as const satisfies Record<string, LocalizedString | Record<string, LocalizedString>>;

export const navPages = [
  { href: "/", label: labels.home },
  { href: "/about", label: labels.about },
  { href: "/program-agenda", label: labels.program },
  // { href: "/speakers", label: labels.speakers },
  { href: "/#contact", label: labels.contact }
];
