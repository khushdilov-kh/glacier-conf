import type { LocalizedString } from "@/lib/types";

export type ProgramAgendaScheduleItem = {
  topic: LocalizedString;
  time: string;
  who?: LocalizedString;
};

export type ProgramAgendaDay = {
  id: string;
  dayLabel: string;
  date: LocalizedString;
  theme: LocalizedString;
  introduction: LocalizedString[];
  trainers?: LocalizedString[];
  sessionDuration?: string;
  methods?: LocalizedString[];
  aims?: LocalizedString[];
  schedule: ProgramAgendaScheduleItem[];
};

const l = (en: string, ru: string, tg: string): LocalizedString => ({ en, ru, tg });

const allParticipants = l("All participants", "Все участники", "Ҳамаи иштирокчиён");
const allFaculty = l("All faculty (facilitated)", "Весь преподавательский состав (с фасилитацией)", "Ҳайати омӯзгорон (бо фасилитатсия)");
const fieldTeam = l("Field team", "Полевая команда", "Гурӯҳи саҳроӣ");
const groupWork = l("Group work", "Групповая работа", "Кори гурӯҳӣ");
const endOfDay = l("End of the day", "Завершение дня", "Анҷоми рӯз");
const breakLabel = l("Break", "Перерыв", "Танаффус");
const coffeeBreak = l("Coffee break", "Кофе-брейк", "Танаффуси қаҳва");
const lunchBreak = l("Lunch break", "Обеденный перерыв", "Танаффуси нисфирӯзӣ");
const qna = l("Q/A", "Вопросы и ответы", "Саволу ҷавоб");

export const programTravelNote = l(
  "Sunday, 2 August 2026: travel from Dushanbe to Khorog.",
  "Воскресенье, 2 августа 2026 года: поездка из Душанбе в Хорог.",
  "Якшанбе, 2 августи соли 2026: сафар аз Душанбе ба Хоруғ."
);

export const programAgenda: ProgramAgendaDay[] = [
  {
    id: "day-1",
    dayLabel: "Day 1",
    date: l("Monday, 3 August 2026", "Понедельник, 3 августа 2026 года", "Душанбе, 3 августи соли 2026"),
    theme: l("Opening and introduction", "Открытие и введение", "Ифтитоҳ ва муқаддима"),
    introduction: [
      l(
        "Participants will be welcomed to the first day of the Summer University program. Day 1 begins with an opening ceremony featuring welcome remarks from representatives of Khorog State University, the University of Central Asia (UCA), the Swiss Government, and the Aga Khan Foundation (AKF).",
        "Участников приветствуют в первый день программы Summer University. День 1 начинается с церемонии открытия с приветственными выступлениями представителей Хорогского государственного университета, University of Central Asia (UCA), Правительства Швейцарии и Aga Khan Foundation (AKF).",
        "Иштирокчиён дар рӯзи аввали барномаи Summer University истиқбол карда мешаванд. Рӯзи 1 бо маросими ифтитоҳ оғоз мегардад, ки дар он намояндагони Донишгоҳи давлатии Хоруғ, University of Central Asia (UCA), Ҳукумати Швейтсария ва Aga Khan Foundation (AKF) суханронӣ мекунанд."
      ),
      l(
        "This is followed by an overview of the program and initial networking activities. The day sets the tone for the week ahead, helps participants connect with one another, and lays the groundwork for a meaningful learning journey.",
        "Затем следует обзор программы и первые нетворкинговые активности. Этот день задает тон всей последующей неделе, помогает участникам познакомиться друг с другом и закладывает основу для содержательного учебного процесса.",
        "Пас аз он шарҳи барнома ва фаъолиятҳои аввалини шиносоӣ баргузор мешаванд. Ин рӯз барои ҳафтаи оянда замина мегузорад, ба иштирокчиён имкон медиҳад бо ҳам шинос шаванд ва оғози саёҳати пурмазмуни омӯзиширо фароҳам меорад."
      )
    ],
    sessionDuration: "9:00-17:00",
    schedule: [
      {
        topic: l("Opening ceremony, program overview, and objectives", "Церемония открытия, обзор программы и цели", "Маросими ифтитоҳ, шарҳи барнома ва ҳадафҳо"),
        time: "9:00-10:30",
        who: l(
          "GBAO Government - TBD\nUCA - Dr. Kholiknazar Kuchakshoev, Professor Mohssen Moazzen\nKSU - Professor Komilbek Amid\nAKF - Kishvar Abdulalishoev\nSDC - TBD",
          "Правительство ГБАО - TBD\nUCA - Dr. Kholiknazar Kuchakshoev, Professor Mohssen Moazzen\nKSU - Professor Komilbek Amid\nAKF - Kishvar Abdulalishoev\nSDC - TBD",
          "Ҳукумати ВМКБ - TBD\nUCA - Dr. Kholiknazar Kuchakshoev, Professor Mohssen Moazzen\nKSU - Professor Komilbek Amid\nAKF - Kishvar Abdulalishoev\nSDC - TBD"
        )
      },
      { topic: coffeeBreak, time: "10:30-10:45", who: allParticipants },
      { topic: l("ARCH Project", "Проект ARCH", "Лоиҳаи ARCH"), time: "10:45-12:00", who: l("Sattor Dustmadov", "Sattor Dustmadov", "Sattor Dustmadov") },
      { topic: lunchBreak, time: "12:00-13:00", who: allParticipants },
      {
        topic: l(
          "Keynote: Cryosphere Monitoring in Central Asia (University of Fribourg)",
          "Ключевой доклад: мониторинг криосферы в Центральной Азии (University of Fribourg)",
          "Маърузаи асосӣ: мониторинги криосфера дар Осиёи Марказӣ (University of Fribourg)"
        ),
        time: "13:00-13:30",
        who: l("Dr. Tomas Saks", "Dr. Tomas Saks", "Dr. Tomas Saks")
      },
      {
        topic: l("Keynote: National expert", "Ключевой доклад: национальный эксперт", "Маърузаи асосӣ: коршиноси миллӣ"),
        time: "13:30-14:00",
        who: l("Professor TBD", "Professor TBD", "Professor TBD")
      },
      {
        topic: l(
          "Keynote: Climate change effects on the cryosphere in HMA",
          "Ключевой доклад: влияние изменения климата на криосферу в HMA",
          "Маърузаи асосӣ: таъсири тағйирёбии иқлим ба криосфера дар HMA"
        ),
        time: "14:00-15:15",
        who: l("Professor Denis Samyn", "Professor Denis Samyn", "Professor Denis Samyn")
      },
      { topic: coffeeBreak, time: "15:15-15:30", who: allParticipants },
      {
        topic: l(
          "Icebreaker and case carousel (regional cryosphere cases)",
          "Айсбрейкер и обзор кейсов (региональные криосферные кейсы)",
          "Icebreaker ва гардиши кейсҳо (кейсҳои минтақавии криосфера)"
        ),
        time: "15:30-17:00",
        who: allFaculty
      }
    ]
  },
  {
    id: "day-2",
    dayLabel: "Day 2",
    date: l("Tuesday, 4 August 2026", "Вторник, 4 августа 2026 года", "Сешанбе, 4 августи соли 2026"),
    theme: l(
      "Practical applications of GIS, GPS, and mapping tools",
      "Практическое применение ГИС, GPS и картографических инструментов",
      "Истифодаи амалии GIS, GPS ва абзорҳои харитасозӣ"
    ),
    introduction: [
      l(
        "Day 2 begins with a presentation on Geographic Information Systems (GIS), where participants are introduced to the core concepts of spatial analysis and mapping.",
        "День 2 начинается с презентации по Geographic Information Systems (GIS), где участников знакомят с базовыми понятиями пространственного анализа и картирования.",
        "Рӯзи 2 бо презентатсия оид ба Geographic Information Systems (GIS) оғоз мешавад, ки дар он иштирокчиён бо мафҳумҳои асосии таҳлили фазоӣ ва харитасозӣ шинос мешаванд."
      ),
      l(
        "This is followed by a session on GPS technology, covering its basic principles and including practical field exercises for spatial data collection.",
        "После этого проходит сессия по технологии GPS, охватывающая ее базовые принципы и включающая практические полевые упражнения по сбору пространственных данных.",
        "Пас аз он ҷаласа оид ба технологияи GPS мегузарад, ки принсипҳои асосии онро фаро гирифта, машқҳои амалии саҳроиро барои ҷамъоварии маълумоти фазоӣ дар бар мегирад."
      ),
      l(
        "Next, participants explore the use of Google Earth for basic mapping and visualization of geospatial data.",
        "Затем участники изучают использование Google Earth для базового картирования и визуализации геопространственных данных.",
        "Сипас иштирокчиён истифодаи Google Earth-ро барои харитасозии ибтидоӣ ва визуализатсияи маълумоти геофазоӣ меомӯзанд."
      ),
      l(
        "The day concludes with an introductory session on QGIS, including an overview of its key functions for processing and analyzing spatial information. Together, the sessions build essential practical skills for using geospatial data in disaster risk reduction and management.",
        "День завершается вводной сессией по QGIS с обзором его ключевых функций для обработки и анализа пространственной информации. В совокупности эти занятия формируют базовые практические навыки использования геопространственных данных в снижении риска бедствий и управлении ими.",
        "Рӯз бо ҷаласаи муқаддимавӣ оид ба QGIS анҷом меёбад, ки шарҳи вазифаҳои асосии онро барои коркард ва таҳлили маълумоти фазоӣ дар бар мегирад. Дар маҷмӯъ, ин машғулиятҳо малакаҳои амалии заруриро барои истифодаи маълумоти геофазоӣ дар коҳиш ва идоракунии хатари офатҳои табиӣ ташаккул медиҳанд."
      )
    ],
    trainers: [l("Amiraidar Ghulomaidarov, Dilovar Qurbonmamadov, Inom Zikillobekov", "Amiraidar Ghulomaidarov, Dilovar Qurbonmamadov, Inom Zikillobekov", "Amiraidar Ghulomaidarov, Dilovar Qurbonmamadov, Inom Zikillobekov")],
    sessionDuration: "9:00-17:30",
    methods: [l("Presentation, group work, Q/A", "Презентация, групповая работа, вопросы и ответы", "Презентатсия, кори гурӯҳӣ, саволу ҷавоб")],
    aims: [
      l("By the end of the session participants will be able to:", "К концу занятия участники смогут:", "Дар анҷоми ҷаласа иштирокчиён метавонанд:"),
      l("Understand the fundamental principles of Geographic Information Systems (GIS) and spatial analysis", "Понимать базовые принципы Geographic Information Systems (GIS) и пространственного анализа", "Принсипҳои асосии Geographic Information Systems (GIS) ва таҳлили фазоиро дарк кунанд"),
      l("Explain the core concepts and functioning of GPS technology", "Объяснять ключевые понятия и принципы работы технологии GPS", "Мафҳумҳои асосӣ ва тарзи кори технологияи GPS-ро шарҳ диҳанд"),
      l("Conduct basic field data collection using GPS devices", "Выполнять базовый сбор полевых данных с использованием GPS-устройств", "Бо истифода аз дастгоҳҳои GPS ҷамъоварии ибтидоии маълумоти саҳроиро анҷом диҳанд"),
      l("Use Google Earth for visualization and simple mapping tasks", "Использовать Google Earth для визуализации и простых задач картирования", "Google Earth-ро барои визуализатсия ва вазифаҳои соддаи харитасозӣ истифода баранд"),
      l("Demonstrate introductory skills in QGIS for processing and analyzing spatial data", "Демонстрировать базовые навыки работы в QGIS для обработки и анализа пространственных данных", "Малакаҳои ибтидоии QGIS-ро барои коркард ва таҳлили маълумоти фазоӣ нишон диҳанд"),
      l("Apply geospatial tools and methods to support disaster risk reduction and decision-making", "Применять геопространственные инструменты и методы для поддержки снижения риска бедствий и принятия решений", "Абзорҳо ва усулҳои геофазоиро барои дастгирии коҳиши хатари офатҳои табиӣ ва қабули қарор истифода баранд")
    ],
    schedule: [
      { topic: l("GIS fundamentals and spatial thinking", "Основы GIS и пространственное мышление", "Асосҳои GIS ва тафаккури фазоӣ"), time: "9:00-10:15", who: l("AKF", "AKF", "AKF") },
      { topic: breakLabel, time: "10:15-10:30" },
      { topic: l("Introduction to GPS technology\nField mission for GPS data collection", "Введение в технологию GPS\nПолевое задание по сбору GPS-данных", "Муқаддима ба технологияи GPS\nМиссияи саҳроӣ барои ҷамъоварии маълумоти GPS"), time: "10:30-12:00", who: l("AKF", "AKF", "AKF") },
      { topic: lunchBreak, time: "12:00-13:00" },
      { topic: l("Using Google Earth for basic mapping", "Использование Google Earth для базового картирования", "Истифодаи Google Earth барои харитасозии ибтидоӣ"), time: "13:00-15:45", who: l("AKF", "AKF", "AKF") },
      { topic: breakLabel, time: "15:45-16:00" },
      { topic: l("Introduction to QGIS", "Введение в QGIS", "Муқаддима ба QGIS"), time: "16:00-17:00", who: l("AKF", "AKF", "AKF") },
      { topic: qna, time: "17:00-17:30", who: l("AKF", "AKF", "AKF") },
      { topic: endOfDay, time: "17:30", who: l("AKF", "AKF", "AKF") }
    ]
  },
  {
    id: "day-3",
    dayLabel: "Day 3",
    date: l("Wednesday, 5 August 2026", "Среда, 5 августа 2026 года", "Чоршанбе, 5 августи соли 2026"),
    theme: l("Theory of hazard assessments", "Теория оценки опасностей", "Назарияи арзёбии хатарҳо"),
    introduction: [
      l(
        "Day 3 provides a comprehensive understanding of different hazard assessment approaches in mountain regions. Through presentations and group work, participants explore HVRA, bathymetric assessments, permafrost assessments, and integrated habitat assessments (IHA). This knowledge is critical for assessing and reducing risks in vulnerable areas.",
        "День 3 дает комплексное понимание различных подходов к оценке опасностей в горных регионах. Через презентации и групповую работу участники знакомятся с HVRA, батиметрической оценкой, оценкой мерзлоты и integrated habitat assessment (IHA). Эти знания необходимы для оценки и снижения рисков в уязвимых территориях.",
        "Рӯзи 3 фаҳмиши ҳамаҷонибаи равишҳои гуногуни арзёбии хатарҳоро дар минтақаҳои кӯҳистон фароҳам меорад. Тавассути презентатсияҳо ва кори гурӯҳӣ иштирокчиён бо HVRA, арзёбии батиметрӣ, арзёбии яхбандии абадӣ ва integrated habitat assessment (IHA) шинос мешаванд. Ин дониш барои арзёбӣ ва коҳиши хавф дар минтақаҳои осебпазир муҳим аст."
      )
    ],
    trainers: [
      l("Ubaidullo Pirmamadov, Yusuf Raimbekov, Amiraidar Ghulomaidarov", "Ubaidullo Pirmamadov, Yusuf Raimbekov, Amiraidar Ghulomaidarov", "Ubaidullo Pirmamadov, Yusuf Raimbekov, Amiraidar Ghulomaidarov"),
      l("Inom Zikillobekov", "Inom Zikillobekov", "Inom Zikillobekov")
    ],
    sessionDuration: "9:00-17:30",
    methods: [l("Presentation, group work, Q/A", "Презентация, групповая работа, вопросы и ответы", "Презентатсия, кори гурӯҳӣ, саволу ҷавоб")],
    aims: [
      l("By the end of the day participants will:", "К концу дня участники будут:", "Дар анҷоми рӯз иштирокчиён:"),
      l("Build understanding of multi-hazard assessment methods (HVRA, bathymetry, permafrost, IHA)", "Формировать понимание методов многофакторной оценки опасностей (HVRA, батиметрия, мерзлота, IHA)", "Фаҳмиши усулҳои арзёбии бисёрхатарӣ (HVRA, батиметрия, яхбандии абадӣ, IHA)-ро ташаккул медиҳанд"),
      l("Be able to assess risks and apply integrated approaches for hazard mitigation in mountainous areas", "Смогут оценивать риски и применять интегрированные подходы к снижению опасностей в горных районах", "Қодир мешаванд хавфҳоро арзёбӣ кунанд ва равишҳои ҳамгироро барои коҳиши хатарҳо дар минтақаҳои кӯҳистон татбиқ намоянд")
    ],
    schedule: [
      { topic: l("HVRA - presentation\nGroup work", "HVRA - презентация\nГрупповая работа", "HVRA - презентатсия\nКори гурӯҳӣ"), time: "9:00-9:30\n9:30-10:15", who: l("Ubaidullo Pirmamadov", "Ubaidullo Pirmamadov", "Ubaidullo Pirmamadov") },
      { topic: breakLabel, time: "10:15-10:30" },
      { topic: l("IHA\nGroup work", "IHA\nГрупповая работа", "IHA\nКори гурӯҳӣ"), time: "10:30-11:00\n11:00-12:00", who: l("Ubaidullo Pirmamadov", "Ubaidullo Pirmamadov", "Ubaidullo Pirmamadov") },
      { topic: lunchBreak, time: "12:00-13:00" },
      { topic: l("Bathymetric assessment", "Батиметрическая оценка", "Арзёбии батиметрӣ"), time: "13:00-13:45", who: l("Amiraidar Ghulomaidarov\nYusuf Raimbekov\nInom Zikillobekov", "Amiraidar Ghulomaidarov\nYusuf Raimbekov\nInom Zikillobekov", "Amiraidar Ghulomaidarov\nYusuf Raimbekov\nInom Zikillobekov") },
      { topic: breakLabel, time: "15:45-16:00" },
      { topic: groupWork, time: "16:00-17:30", who: l("Amiraidar Ghulomaidarov\nInom Zikillobekov", "Amiraidar Ghulomaidarov\nInom Zikillobekov", "Amiraidar Ghulomaidarov\nInom Zikillobekov") },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-4",
    dayLabel: "Day 4",
    date: l("Thursday, 6 August 2026", "Четверг, 6 августа 2026 года", "Панҷшанбе, 6 августи соли 2026"),
    theme: l("High-Mountain Hydrology and Water Balance", "Высокогорная гидрология и водный баланс", "Гидрологияи баландкӯҳ ва тавозуни об"),
    introduction: [
      l(
        "This day focuses on hydrological processes linking snow, ice, and precipitation to runoff generation, which is critical for hazard assessment and water management.",
        "Этот день посвящен гидрологическим процессам, связывающим снег, лед и осадки с формированием стока, что имеет ключевое значение для оценки опасностей и управления водными ресурсами.",
        "Ин рӯз ба равандҳои гидрологие бахшида мешавад, ки барф, ях ва боришотро бо ташаккули ҷараёни об мепайванданд ва барои арзёбии хатарҳо ва идоракунии захираҳои обӣ аҳамияти калидӣ доранд."
      )
    ],
    trainers: [l("Sanjar Sadyrov, Vitalii Zaginaev", "Sanjar Sadyrov, Vitalii Zaginaev", "Sanjar Sadyrov, Vitalii Zaginaev")],
    sessionDuration: "9:00-17:00",
    methods: [
      l(
        "Conceptual lectures, forecasting demonstrations, and applied basin-scale modeling.",
        "Концептуальные лекции, демонстрации прогнозирования и прикладное моделирование на уровне бассейна.",
        "Лексияҳои консептуалӣ, намоишҳои пешгӯӣ ва моделсозии амалии сатҳи ҳавза."
      )
    ],
    aims: [
      l(
        "Understand runoff formation and forecasting approaches in glacierized basins.",
        "Понять формирование стока и подходы к прогнозированию в оледенелых бассейнах.",
        "Ташаккули ҷараёни об ва равишҳои пешгӯиро дар ҳавзаҳои пиряхпӯш дарк кунанд."
      ),
      l(
        "Interpret runoff processes and apply basic hydrological models.",
        "Интерпретировать процессы стока и применять базовые гидрологические модели.",
        "Равандҳои ҷараёни обро тафсир намуда, моделҳои асосии гидрологиро татбиқ кунанд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Snow-ice-rain partitioning; runoff generation",
          "Разделение снега, льда и дождя; формирование стока",
          "Тақсимоти барф, ях ва борон; ташаккули ҷараёни об"
        ),
        time: "9:00-10:15",
        who: l("Sanjar Sadyrov", "Sanjar Sadyrov", "Sanjar Sadyrov")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Monitoring and forecasting; thresholds and nowcasting",
          "Мониторинг и прогнозирование; пороговые значения и краткосрочный прогноз",
          "Мониторинг ва пешгӯӣ; ҳадҳо ва пешгӯии фаврӣ"
        ),
        time: "10:30-12:00",
        who: l("Vitalii Zaginaev", "Vitalii Zaginaev", "Vitalii Zaginaev")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Modeling lab: basin rainfall-runoff and snowmelt",
          "Моделирование: осадки-сток в бассейне и снеготаяние",
          "Лабораторияи моделсозӣ: боришот-ҷараёни об дар ҳавза ва обшавии барф"
        ),
        time: "13:00-15:45",
        who: l("Sanjar Sadyrov", "Sanjar Sadyrov", "Sanjar Sadyrov")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Monitoring and forecasting; thresholds and nowcasting",
          "Мониторинг и прогнозирование; пороговые значения и краткосрочный прогноз",
          "Мониторинг ва пешгӯӣ; ҳадҳо ва пешгӯии фаврӣ"
        ),
        time: "16:00-17:00",
        who: l("Vitalii Zaginaev", "Vitalii Zaginaev", "Vitalii Zaginaev")
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-5",
    dayLabel: "Day 5",
    date: l("Friday, 7 August 2026", "Пятница, 7 августа 2026 года", "Ҷумъа, 7 августи соли 2026"),
    theme: l(
      "GLOFs and Debris Flows - Assessment and Mitigation",
      "GLOF и селевые потоки - оценка и снижение риска",
      "GLOF ва селҳо - арзёбӣ ва коҳиши хатар"
    ),
    introduction: [
      l(
        "Day 5 addresses glacier lake outburst floods and debris flows as major threats to mountain communities, emphasizing assessment and mitigation strategies.",
        "День 5 посвящен прорывам ледниковых озер и селевым потокам как основным угрозам для горных сообществ с акцентом на стратегии оценки и снижения риска.",
        "Рӯзи 5 ба прорыв-и кӯлҳои пиряхӣ ва селҳо ҳамчун таҳдидҳои асосӣ барои ҷомеаҳои кӯҳистон бахшида шуда, ба стратегияҳои арзёбӣ ва коҳиши хатар тамаркуз мекунад."
      )
    ],
    trainers: [l("Vitalii Zaginaev, Sanjar Sadyrov, Arnaud Caiserman", "Vitalii Zaginaev, Sanjar Sadyrov, Arnaud Caiserman", "Vitalii Zaginaev, Sanjar Sadyrov, Arnaud Caiserman")],
    sessionDuration: "9:00-17:00",
    methods: [
      l(
        "Lectures, comparative case studies, and water balance analysis.",
        "Лекции, сравнительные кейсы и анализ водного баланса.",
        "Лексияҳо, муқоисаи кейсҳо ва таҳлили тавозуни об."
      )
    ],
    aims: [
      l(
        "Identify GLOF mechanisms and evaluate debris-flow hazards.",
        "Определять механизмы GLOF и оценивать опасности селевых потоков.",
        "Механизмҳои GLOF-ро муайян намуда, хатарҳои селро арзёбӣ кунанд."
      ),
      l(
        "Assess hazard triggers and mitigation options.",
        "Оценивать триггеры опасностей и варианты их снижения.",
        "Омилҳои барангезандаи хатар ва роҳҳои коҳиши онро арзёбӣ кунанд."
      )
    ],
    schedule: [
      {
        topic: l(
          "GLOF mechanisms, lake evolution, triggers",
          "Механизмы GLOF, эволюция озер, триггеры",
          "Механизмҳои GLOF, рушди кӯлҳо ва омилҳои барангезанда"
        ),
        time: "9:00-10:15",
        who: l("Vitalii Zaginaev", "Vitalii Zaginaev", "Vitalii Zaginaev")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Water balance assessment; closure and uncertainty",
          "Оценка водного баланса; замыкание и неопределенность",
          "Арзёбии тавозуни об; пӯшиш ва номуайянӣ"
        ),
        time: "10:30-12:00",
        who: l("Sanjar Sadyrov", "Sanjar Sadyrov", "Sanjar Sadyrov")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Avalanche fundamentals; hazard mapping",
          "Основы лавин и картирование опасностей",
          "Асосҳои тарма ва харитасозии хатар"
        ),
        time: "13:00-15:45",
        who: l("Arnaud Caiserman", "Arnaud Caiserman", "Arnaud Caiserman")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Numerical modelling and simulation of snow avalanche dynamics using the RAMMS application",
          "Численное моделирование и симуляция динамики снежных лавин с использованием RAMMS",
          "Моделсозӣ ва симулятсияи ададии динамикаи тармаҳои барфӣ бо истифода аз RAMMS"
        ),
        time: "16:00-17:30",
        who: l("Arnaud Caiserman", "Arnaud Caiserman", "Arnaud Caiserman")
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-6",
    dayLabel: "Day 6",
    date: l("Saturday, 8 August 2026", "Суббота, 8 августа 2026 года", "Шанбе, 8 августи соли 2026"),
    theme: l(
      "Fieldwork at the Barsem debris-flow site: hazard mapping based on HVRA and IHA",
      "Полевые работы на селевом участке Барсем: картирование опасностей на основе HVRA и IHA",
      "Корҳои саҳроӣ дар мавзеъи сели Барсем: харитасозии хатар дар асоси HVRA ва IHA"
    ),
    introduction: [
      l(
        "Mountainous regions such as Barsem are highly exposed to multiple natural hazards, including floods, landslides, glacial lake outburst floods (GLOFs), permafrost degradation, and ecosystem disturbances. These hazards are intensified by climate change, geomorphological instability, and increasing human pressure.",
        "Горные районы, такие как Барсем, в высокой степени подвержены множеству природных опасностей, включая наводнения, оползни, прорывы ледниковых озер (GLOF), деградацию мерзлоты и нарушения экосистем. Эти опасности усиливаются изменением климата, геоморфологической нестабильностью и растущим антропогенным давлением.",
        "Минтақаҳои кӯҳистон, аз ҷумла Барсем, ба хатарҳои зиёди табиӣ, аз қабили обхезиҳо, ярчҳо, прорыв-и кӯлҳои пиряхӣ (GLOF), таназзули яхбандии абадӣ ва вайроншавии экосистемаҳо, бисёр осебпазиранд. Ин хатарҳо бо тағйирёбии иқлим, ноустувории геоморфологӣ ва афзоиши фишори инсонӣ бештар мешаванд."
      ),
      l(
        "The Summer University fieldwork program focuses on hands-on field investigations and hazard mapping to build participants' capacity in identifying, analyzing, and assessing risks in complex mountain environments. By combining theoretical sessions, field measurements, participatory mapping, and group work, participants gain practical experience in modern hazard and vulnerability assessment methods relevant for Central Asian mountain regions.",
        "Программа полевых работ Summer University ориентирована на практические полевые исследования и картирование опасностей, чтобы развить у участников навыки выявления, анализа и оценки рисков в сложной горной среде. Сочетая теоретические занятия, полевые измерения, партисипативное картирование и групповую работу, участники получают практический опыт современных методов оценки опасностей и уязвимости, актуальных для горных регионов Центральной Азии.",
        "Барномаи корҳои саҳроии Summer University ба таҳқиқоти амалӣ дар саҳро ва харитасозии хатарҳо равона шудааст, то тавонмандиҳои иштирокчиёнро дар муайян кардан, таҳлил ва арзёбии хавфҳо дар муҳити мураккаби кӯҳистон тақвият диҳад. Бо ҳамгироии ҷаласаҳои назариявӣ, ченкуниҳои саҳроӣ, харитасозии иштирокчӣ ва кори гурӯҳӣ, иштирокчиён дар усулҳои муосири арзёбии хатар ва осебпазирӣ, ки барои минтақаҳои кӯҳистонии Осиёи Марказӣ муҳиманд, таҷрибаи амалӣ ба даст меоранд."
      )
    ],
    trainers: [
      l(
        "Amiraidar Ghulomaidarov, Dilovar Qurbonmamadov, Inom Zikillobekov, Muslim Azimshoev, Azamat Abdulloev",
        "Amiraidar Ghulomaidarov, Dilovar Qurbonmamadov, Inom Zikillobekov, Muslim Azimshoev, Azamat Abdulloev",
        "Amiraidar Ghulomaidarov, Dilovar Qurbonmamadov, Inom Zikillobekov, Muslim Azimshoev, Azamat Abdulloev"
      )
    ],
    sessionDuration: "9:00-17:30",
    methods: [l("Presentation, group work, Q/A", "Презентация, групповая работа, вопросы и ответы", "Презентатсия, кори гурӯҳӣ, саволу ҷавоб")],
    aims: [
      l("The main aim of the fieldwork is to:", "Основная цель полевых работ состоит в том, чтобы:", "Ҳадафи асосии корҳои саҳроӣ аз ин иборат аст, ки:"),
      l(
        "Develop participants' practical skills in hazard identification, mapping, and risk assessment in mountainous terrain",
        "Развить у участников практические навыки выявления опасностей, картирования и оценки рисков в горной местности",
        "Малакаҳои амалии иштирокчиёнро дар муайян кардани хатар, харитасозӣ ва арзёбии хавф дар муҳити кӯҳистон рушд диҳад"
      ),
      l(
        "Strengthen understanding of multi-hazard interactions and their impacts on communities and ecosystems",
        "Укрепить понимание взаимодействия различных опасностей и их влияния на сообщества и экосистемы",
        "Фаҳмиши ҳамтаъсирии хатарҳои гуногун ва таъсири онҳо ба ҷомеаҳо ва экосистемаҳо тақвият ёбад"
      ),
      l(
        "Support evidence-based decision-making for risk reduction and sustainable land-use planning in Barsem and similar regions",
        "Поддержать принятие решений на основе данных для снижения риска и устойчивого землепользования в Барсеме и схожих регионах",
        "Қабули қарорҳои далелнокро барои коҳиши хавф ва банақшагирии устувори истифодаи замин дар Барсем ва минтақаҳои монанд дастгирӣ кунад"
      )
    ],
    schedule: [
      {
        topic: l(
          "Road to Barsem\nHVRA (Hazard, Vulnerability, and Risk Assessment)\nConcepts, frameworks, and practical relevance\nApplication in mountainous and rural settings",
          "Дорога в Барсем\nHVRA (оценка опасности, уязвимости и риска)\nПонятия, рамки и практическая значимость\nПрименение в горных и сельских условиях",
          "Роҳ ба сӯи Барсем\nHVRA (арзёбии хатар, осебпазирӣ ва хавф)\nМафҳумҳо, чорчӯбаҳо ва аҳамияти амалӣ\nТатбиқ дар шароити кӯҳистонӣ ва деҳот"
        ),
        time: "9:00-10:30",
        who: fieldTeam
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "HVRA (Hazard, Vulnerability, and Risk Assessment)",
          "HVRA (оценка опасности, уязвимости и риска)",
          "HVRA (арзёбии хатар, осебпазирӣ ва хавф)"
        ),
        time: "10:30-12:00",
        who: fieldTeam
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Integrated Habitat Assessment (IHA)",
          "Интегрированная оценка среды обитания (IHA)",
          "Арзёбии ҳамгирои муҳити зист (IHA)"
        ),
        time: "13:00-15:45",
        who: fieldTeam
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Integrated Habitat Assessment (IHA)",
          "Интегрированная оценка среды обитания (IHA)",
          "Арзёбии ҳамгирои муҳити зист (IHA)"
        ),
        time: "16:00-17:30",
        who: fieldTeam
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-7",
    dayLabel: "Day 7",
    date: l("Sunday, 9 August 2026", "Воскресенье, 9 августа 2026 года", "Якшанбе, 9 августи соли 2026"),
    theme: l("Avalanche Hazards and Group Consolidation", "Лавинные опасности и консолидация групп", "Хатарҳои тарма ва ҳамоҳангсозии гурӯҳҳо"),
    introduction: [
      l(
        "This day introduces avalanche dynamics and numerical simulation while consolidating learning and forming project teams.",
        "Этот день знакомит с динамикой лавин и численным моделированием, одновременно помогая закрепить обучение и сформировать проектные команды.",
        "Ин рӯз шиносоӣ бо динамикаи тарма ва моделсозии ададиро фароҳам оварда, ҳамзамон омӯзишро мустаҳкам мекунад ва гурӯҳҳои лоиҳавиро шакл медиҳад."
      )
    ],
    trainers: [l("Arnaud Caiserman", "Arnaud Caiserman", "Arnaud Caiserman")],
    sessionDuration: "9:00-17:00",
    methods: [
      l(
        "Lectures, RAMMS modeling labs, and facilitated group work.",
        "Лекции, лаборатории моделирования RAMMS и фасилитируемая групповая работа.",
        "Лексияҳо, лабораторияҳои моделсозии RAMMS ва кори гурӯҳии фасилитатсияшуда."
      )
    ],
    aims: [
      l(
        "Prepare participants for applied collaborative projects.",
        "Подготовить участников к прикладным совместным проектам.",
        "Иштирокчиёнро ба лоиҳаҳои амалии муштарак омода созад."
      ),
      l(
        "Form groups with clear research themes and methods.",
        "Сформировать группы с четкими исследовательскими темами и методами.",
        "Гурӯҳҳоро бо мавзуъҳо ва усулҳои равшани таҳқиқотӣ ташкил намояд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Active tectonics and fault measurements",
          "Активная тектоника и измерения разломов",
          "Тектоникаи фаъол ва ченкунии шикастҳо"
        ),
        time: "9:00-10:15",
        who: l("Nalan Lom", "Nalan Lom", "Nalan Lom")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Statistical analysis of fault/slip data",
          "Статистический анализ данных о разломах и смещениях",
          "Таҳлили омории маълумоти шикаст ва лағзиш"
        ),
        time: "10:30-12:00",
        who: l("Nalan Lom", "Nalan Lom", "Nalan Lom")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Avalanche fundamentals; hazard mapping",
          "Основы лавин и картирование опасностей",
          "Асосҳои тарма ва харитасозии хатар"
        ),
        time: "13:00-15:45",
        who: l("Arnaud Caiserman", "Arnaud Caiserman", "Arnaud Caiserman")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Numerical modelling and simulation of snow avalanche dynamics using the RAMMS application",
          "Численное моделирование и симуляция динамики снежных лавин с использованием RAMMS",
          "Моделсозӣ ва симулятсияи ададии динамикаи тармаҳои барфӣ бо истифода аз RAMMS"
        ),
        time: "16:00-17:00",
        who: l("Arnaud Caiserman", "Arnaud Caiserman", "Arnaud Caiserman")
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-8",
    dayLabel: "Day 8",
    date: l("Monday, 10 August 2026", "Понедельник, 10 августа 2026 года", "Душанбе, 10 августи соли 2026"),
    theme: l(
      "Glacial Geomorphology, Climate Linkages and R Coding",
      "Ледниковая геоморфология, климатические связи и программирование на R",
      "Геоморфологияи пиряхҳо, робитаҳои иқлимӣ ва барномасозӣ дар R"
    ),
    introduction: [
      l(
        "This day focuses on understanding glacier landforms as indicators of past and present climate variability. Participants explore geomorphological evidence of glacier retreat since the Little Ice Age and learn to analyze climate time series using R. The aim is to link physical glacier features with climate drivers and build analytical capacity in climate data analysis. Expected results include the ability to interpret glacial landforms and conduct basic climate anomaly analyses.",
        "Этот день посвящен пониманию ледниковых форм рельефа как индикаторов прошлой и современной климатической изменчивости. Участники изучают геоморфологические свидетельства отступления ледников со времен Малого ледникового периода и учатся анализировать климатические временные ряды в R. Цель состоит в том, чтобы связать физические особенности ледников с климатическими факторами и развить аналитические навыки в работе с климатическими данными. Ожидаемые результаты включают способность интерпретировать ледниковые формы рельефа и проводить базовый анализ климатических аномалий.",
        "Ин рӯз ба дарки шаклҳои рельефии пиряхҳо ҳамчун нишондиҳандаҳои тағйирёбии иқлими гузашта ва имрӯз бахшида шудааст. Иштирокчиён далелҳои геоморфологии ақибнишинии пиряхҳоро аз замони Давраи хурди яхбандӣ меомӯзанд ва таҳлили силсилаҳои вақтҳои иқлимиро бо истифода аз R меомӯзанд. Ҳадаф пайваст кардани хусусиятҳои физикии пиряхҳо бо омилҳои иқлимӣ ва рушди қобилияти таҳлилии кор бо маълумоти иқлимӣ мебошад. Натиҷаҳои интизоршаванда қобилияти тафсири шаклҳои пиряхӣ ва анҷом додани таҳлили ибтидоии аномалияҳои иқлимиро дар бар мегиранд."
      )
    ],
    trainers: [l("Denis Samyn, Tomas Saks, Haniyeh Asadi", "Denis Samyn, Tomas Saks, Haniyeh Asadi", "Denis Samyn, Tomas Saks, Haniyeh Asadi")],
    sessionDuration: "9:00-17:00",
    methods: [l("Mapping and modeling exercises", "Упражнения по картированию и моделированию", "Машқҳои харитасозӣ ва моделсозӣ")],
    aims: [
      l(
        "Align participants around shared objectives, introduce core cryosphere concepts, and establish a common analytical language and learning environment.",
        "Согласовать участников вокруг общих целей, познакомить с базовыми понятиями криосферы и сформировать общий аналитический язык и учебную среду.",
        "Иштирокчиёнро атрофи ҳадафҳои муштарак ҳамоҳанг созад, мафҳумҳои асосии криосфераро муаррифӣ кунад ва забони умумии таҳлилӣ ва муҳити омӯзиширо ташаккул диҳад."
      ),
      l(
        "Participants understand the program scope, acquire familiarity with tools and datasets, and form an initial professional network for collaborative learning.",
        "Участники понимают охват программы, знакомятся с инструментами и наборами данных и формируют первоначальную профессиональную сеть для совместного обучения.",
        "Иштирокчиён доираи барномаро дарк мекунанд, бо абзорҳо ва маҷмӯаҳои маълумот шинос мешаванд ва барои омӯзиши муштарак шабакаи ибтидоии касбӣ ташкил медиҳанд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Glacial geomorphology and process indicators",
          "Ледниковая геоморфология и индикаторы процессов",
          "Геоморфологияи пиряхҳо ва нишондиҳандаҳои равандҳо"
        ),
        time: "9:00-10:15",
        who: l("Denis Samyn", "Denis Samyn", "Denis Samyn")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Acceleration of the Pamir-Alay glaciers retreat since the Little Ice Age",
          "Ускорение отступления ледников Памиро-Алая со времен Малого ледникового периода",
          "Суръат гирифтани ақибнишинии пиряхҳои Помиру Олой аз замони Давраи хурди яхбандӣ"
        ),
        time: "10:30-12:00",
        who: l("UniFr", "UniFr", "UniFr")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "R lab: climate time series and anomalies",
          "Лаборатория R: климатические временные ряды и аномалии",
          "Лабораторияи R: силсилаҳои вақтҳои иқлимӣ ва аномалияҳо"
        ),
        time: "13:00-15:45",
        who: l("Denis Samyn", "Denis Samyn", "Denis Samyn")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Introduction to suspended sediment modelling using machine learning",
          "Введение в моделирование взвешенных наносов с использованием машинного обучения",
          "Муқаддима ба моделсозии таҳшинҳои овезон бо истифода аз омӯзиши мошинӣ"
        ),
        time: "16:00-17:00",
        who: l("Haniyeh Asadi", "Haniyeh Asadi", "Haniyeh Asadi")
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-9",
    dayLabel: "Day 9",
    date: l("Tuesday, 11 August 2026", "Вторник, 11 августа 2026 года", "Сешанбе, 11 августи соли 2026"),
    theme: l("Glacier Mass Balance - Methods and Modeling", "Баланс массы ледников - методы и моделирование", "Тавозуни массаи пиряхҳо - усулҳо ва моделсозӣ"),
    introduction: [
      l(
        "This day introduces fundamental glacier mass balance theory and applied methods essential for understanding glacier response to climate change and water resource implications.",
        "Этот день знакомит с базовой теорией баланса массы ледников и прикладными методами, необходимыми для понимания реакции ледников на изменение климата и последствий для водных ресурсов.",
        "Ин рӯз назарияи асосии тавозуни массаи пиряхҳо ва усулҳои амалиро муаррифӣ мекунад, ки барои дарки вокуниши пиряхҳо ба тағйирёбии иқлим ва паёмадҳои он барои захираҳои об муҳиманд."
      )
    ],
    trainers: [l("Aslam Qadamov, Hofiz Navruzshoev", "Aslam Qadamov, Hofiz Navruzshoev", "Aslam Qadamov, Hofiz Navruzshoev")],
    sessionDuration: "9:00-17:00",
    methods: [
      l(
        "Lectures, field-oriented methodological training, and practical laboratory calculations using regional datasets.",
        "Лекции, методическая подготовка с полевой ориентацией и практические лабораторные расчеты на основе региональных данных.",
        "Лексияҳо, омӯзиши методии ба саҳро равонашуда ва ҳисобҳои амалии лабораторӣ бо истифода аз маълумоти минтақавӣ."
      )
    ],
    aims: [
      l(
        "Build technical capacity in glacier mass balance assessment and data interpretation.",
        "Развить технические навыки в оценке баланса массы ледников и интерпретации данных.",
        "Иқтидори техникиро дар арзёбии тавозуни массаи пиряхҳо ва тафсири маълумот тақвият диҳад."
      ),
      l(
        "Apply standard mass balance methods and calculate glacier mass changes using real data.",
        "Применять стандартные методы баланса массы и рассчитывать изменения массы ледников на реальных данных.",
        "Усулҳои стандартии тавозуни масса ва ҳисобкунии тағйироти массаи пиряхҳоро бо маълумоти воқеӣ татбиқ кунанд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Climate change at high altitudes: impacts on snowpack, glacier melt, and water availability",
          "Изменение климата в высокогорье: влияние на снежный покров, таяние ледников и водообеспеченность",
          "Тағйирёбии иқлим дар баландкӯҳ: таъсир ба қабати барф, обшавии пиряхҳо ва дастрасии об"
        ),
        time: "9:00-10:15",
        who: l("Aslam Qadamov", "Aslam Qadamov", "Aslam Qadamov")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Direct glaciological method (stakes, pits)",
          "Прямой гляциологический метод (рейки, шурфы)",
          "Усули мустақими глятсиологӣ (рейкаҳо, шурфҳо)"
        ),
        time: "10:30-12:00",
        who: l("Hofiz Navruzshoev", "Hofiz Navruzshoev", "Hofiz Navruzshoev")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Practical lab: mass balance calculations (local data)",
          "Практическая лаборатория: расчеты баланса массы (местные данные)",
          "Лабораторияи амалӣ: ҳисобҳои тавозуни масса (маълумоти маҳаллӣ)"
        ),
        time: "13:00-15:45",
        who: l("Hofiz Navruzshoev", "Hofiz Navruzshoev", "Hofiz Navruzshoev")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Glacier monitoring in Central Asia",
          "Мониторинг ледников в Центральной Азии",
          "Мониторинги пиряхҳо дар Осиёи Марказӣ"
        ),
        time: "16:00-17:30",
        who: l("European colleagues", "European colleagues", "European colleagues")
      }
    ]
  },
  {
    id: "day-10",
    dayLabel: "Day 10",
    date: l("Wednesday, 12 August 2026", "Среда, 12 августа 2026 года", "Чоршанбе, 12 августи соли 2026"),
    theme: l("Permafrost Hazards Assessment", "Оценка опасностей, связанных с мерзлотой", "Арзёбии хатарҳои вобаста ба яхбандии абадӣ"),
    introduction: [
      l(
        "This module combines theory and field practice to introduce permafrost monitoring in Central Asia. Participants learn key methods such as ERT and InSAR and gain hands-on experience using the Syscal R1 Plus and Emlid Reach RS2.",
        "Этот модуль сочетает теорию и полевую практику, знакомя участников с мониторингом мерзлоты в Центральной Азии. Участники изучают ключевые методы, такие как ERT и InSAR, и получают практический опыт работы с Syscal R1 Plus и Emlid Reach RS2.",
        "Ин модул назария ва таҷрибаи саҳроиро муттаҳид намуда, иштирокчиёнро бо мониторинги яхбандии абадӣ дар Осиёи Марказӣ шинос мекунад. Иштирокчиён усулҳои калидӣ, аз ҷумла ERT ва InSAR-ро меомӯзанд ва дар кори амалӣ бо Syscal R1 Plus ва Emlid Reach RS2 таҷриба мегиранд."
      ),
      l(
        "The training focuses on field data collection, processing, and basic interpretation, enabling participants to apply geophysical techniques for permafrost assessment and hazard monitoring.",
        "Обучение сосредоточено на сборе полевых данных, их обработке и базовой интерпретации, что позволяет участникам применять геофизические методы для оценки мерзлоты и мониторинга опасностей.",
        "Омӯзиш ба ҷамъоварии маълумоти саҳроӣ, коркард ва тафсири ибтидоии он равона шудааст, то иштирокчиён усулҳои геофизикиро барои арзёбии яхбандии абадӣ ва мониторинги хатарҳо татбиқ карда тавонанд."
      )
    ],
    trainers: [l("Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev")],
    sessionDuration: "9:00-17:30",
    methods: [l("Presentation, group work, Q/A", "Презентация, групповая работа, вопросы и ответы", "Презентатсия, кори гурӯҳӣ, саволу ҷавоб")],
    aims: [
      l("By the end of the day, participants:", "К концу дня участники:", "Дар анҷоми рӯз иштирокчиён:"),
      l(
        "Develop practical skills in permafrost monitoring, including data collection, processing, and use of ERT and GPS methods",
        "Разовьют практические навыки мониторинга мерзлоты, включая сбор данных, обработку и использование методов ERT и GPS",
        "Малакаҳои амалиро дар мониторинги яхбандии абадӣ, аз ҷумла ҷамъоварии маълумот, коркард ва истифодаи усулҳои ERT ва GPS рушд медиҳанд"
      ),
      l(
        "Collect, process, and interpret geophysical data for permafrost assessment and hazard monitoring",
        "Смогут собирать, обрабатывать и интерпретировать геофизические данные для оценки мерзлоты и мониторинга опасностей",
        "Маълумоти геофизикиро барои арзёбии яхбандии абадӣ ва мониторинги хатарҳо ҷамъоварӣ, коркард ва тафсир карда метавонанд"
      )
    ],
    schedule: [
      {
        topic: l(
          "Permafrost in Central Asia: monitoring methods (ERT, InSAR), distribution, thaw processes",
          "Мерзлота в Центральной Азии: методы мониторинга (ERT, InSAR), распространение, процессы оттаивания",
          "Яхбандии абадӣ дар Осиёи Марказӣ: усулҳои мониторинг (ERT, InSAR), паҳншавӣ ва равандҳои обшавӣ"
        ),
        time: "9:00-10:30",
        who: l("Muslim Azimshoev", "Muslim Azimshoev", "Muslim Azimshoev")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Permafrost assessment at the UCA campus",
          "Оценка мерзлоты на кампусе UCA",
          "Арзёбии яхбандии абадӣ дар кампуси UCA"
        ),
        time: "10:30-12:00",
        who: l("Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Field work with Syscal R1 Plus and GPS Emlid Reach RS2",
          "Полевые работы с Syscal R1 Plus и GPS Emlid Reach RS2",
          "Корҳои саҳроӣ бо Syscal R1 Plus ва GPS Emlid Reach RS2"
        ),
        time: "13:00-15:45",
        who: l("Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      { topic: l("Field work", "Полевые работы", "Корҳои саҳроӣ"), time: "16:00-17:30", who: fieldTeam },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-11",
    dayLabel: "Day 11",
    date: l("Thursday, 13 August 2026", "Четверг, 13 августа 2026 года", "Панҷшанбе, 13 августи соли 2026"),
    theme: l(
      "Permafrost Field Data Processing and Simple Instrumentation Demo",
      "Обработка полевых данных по мерзлоте и демонстрация базового оборудования",
      "Коркарди маълумоти саҳроӣ оид ба яхбандии абадӣ ва намоиши таҷҳизоти оддӣ"
    ),
    introduction: [
      l(
        "This day focuses on hands-on field experience and data interpretation. Participants operate geophysical equipment, process field data, and learn how to combine ERT results with GPS measurements. The session concludes with practical exercises on data analysis, strengthening skills in electrical resistivity tomography (ERT) for permafrost assessment.",
        "Этот день посвящен практическому полевому опыту и интерпретации данных. Участники работают с геофизическим оборудованием, обрабатывают полевые данные и учатся совмещать результаты ERT с GPS-измерениями. Сессия завершается практическими упражнениями по анализу данных, укрепляющими навыки электротомографии сопротивления (ERT) для оценки мерзлоты.",
        "Ин рӯз ба таҷрибаи амалии саҳроӣ ва тафсири маълумот бахшида шудааст. Иштирокчиён бо таҷҳизоти геофизикӣ кор мекунанд, маълумоти саҳроиро коркард менамоянд ва меомӯзанд, ки чӣ гуна натиҷаҳои ERT-ро бо ченкуниҳои GPS якҷо намоянд. Ҷаласа бо машқҳои амалӣ оид ба таҳлили маълумот анҷом меёбад, ки малакаҳоро дар томографияи муқовимати барқӣ (ERT) барои арзёбии яхбандии абадӣ тақвият медиҳад."
      )
    ],
    trainers: [l("Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev", "Muslim Azimshoev, Azamat Abdulloev")],
    sessionDuration: "9:00-17:00",
    methods: [l("Mapping and modeling exercises", "Упражнения по картированию и моделированию", "Машқҳои харитасозӣ ва моделсозӣ")],
    aims: [
      l(
        "By the end of the training, participants will strengthen practical skills in data collection, processing, and interpretation and be able to apply geophysical and hazard assessment methods in practice.",
        "К концу тренинга участники укрепят практические навыки сбора, обработки и интерпретации данных и смогут применять геофизические методы и подходы к оценке опасностей на практике.",
        "Дар анҷоми омӯзиш иштирокчиён малакаҳои амалии ҷамъоварӣ, коркард ва тафсири маълумотро тақвият медиҳанд ва метавонанд усулҳои геофизикӣ ва арзёбии хатарро дар амал татбиқ намоянд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Hands-on experience in operating both sets of equipment",
          "Практическая работа с обоими комплектами оборудования",
          "Таҷрибаи амалӣ дар кор бо ҳар ду маҷмӯи таҷҳизот"
        ),
        time: "9:00-10:15",
        who: groupWork
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Data collection and processing: downloading field data with software",
          "Сбор и обработка данных: загрузка полевых данных с помощью программного обеспечения",
          "Ҷамъоварӣ ва коркарди маълумот: боргирии маълумоти саҳроӣ бо истифода аз нармафзор"
        ),
        time: "10:30-12:00",
        who: groupWork
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Data analysis and interpretation\nElectrical resistivity tomography (ERT) module exercises",
          "Анализ и интерпретация данных\nУпражнения модуля по электротомографии сопротивления (ERT)",
          "Таҳлил ва тафсири маълумот\nМашқҳои модул оид ба томографияи муқовимати барқӣ (ERT)"
        ),
        time: "13:00-15:45",
        who: groupWork
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Analysis of the collected data",
          "Анализ собранных данных",
          "Таҳлили маълумоти ҷамъоваришуда"
        ),
        time: "16:00-17:30",
        who: groupWork
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-12",
    dayLabel: "Day 12",
    date: l("Friday, 14 August 2026", "Пятница, 14 августа 2026 года", "Ҷумъа, 14 августи соли 2026"),
    theme: l(
      "On-site GLOF, debris-flow, avalanche geomorphology and rapid mapping",
      "Полевое изучение геоморфологии GLOF, селевых потоков и лавин, а также экспресс-картирование",
      "Омӯзиши саҳроии геоморфологияи GLOF, селҳо ва тармаҳо ва харитасозии фаврӣ"
    ),
    introduction: [
      l(
        "A field-based day linking theory to real-world hazard environments in the Pamirs.",
        "Полевой день, связывающий теорию с реальными опасными средами Памира.",
        "Рӯзи саҳроие, ки назарияро бо муҳитҳои воқеии хатарноки Помир мепайвандад."
      )
    ],
    trainers: [l("Yusuf Raimbekov, Arnaud Caiserman, Mohssen Moazzen, Denis Samyn", "Yusuf Raimbekov, Arnaud Caiserman, Mohssen Moazzen, Denis Samyn", "Yusuf Raimbekov, Arnaud Caiserman, Mohssen Moazzen, Denis Samyn")],
    sessionDuration: "9:00-17:00",
    methods: [
      l(
        "On-site observation, rapid mapping, and team-based interpretation.",
        "Полевое наблюдение, экспресс-картирование и командная интерпретация.",
        "Мушоҳида дар маҳал, харитасозии фаврӣ ва тафсири даставӣ."
      )
    ],
    aims: [
      l(
        "Develop applied field skills in hazard assessment.",
        "Развить прикладные полевые навыки оценки опасностей.",
        "Малакаҳои амалии саҳроиро дар арзёбии хатарҳо рушд диҳад."
      ),
      l(
        "Recognize hazard indicators and interpret geomorphological evidence.",
        "Распознавать индикаторы опасностей и интерпретировать геоморфологические свидетельства.",
        "Нишондиҳандаҳои хатарро шинохта, далелҳои геоморфологиро тафсир кунанд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Field briefing; site access and safety\nRoad to Midenved, Shakhdara Valley",
          "Полевой инструктаж; доступ к площадке и безопасность\nДорога в Миденвед, долина Шахдара",
          "Дастурдиҳии саҳроӣ; дастрасӣ ба мавзеъ ва амният\nРоҳ ба Миденвед, водии Шоҳдара"
        ),
        time: "9:00-10:15",
        who: fieldTeam
      },
      { topic: l("Field break", "Полевой перерыв", "Танаффуси саҳроӣ"), time: "10:15-10:30" },
      {
        topic: l(
          "Information on debris flow in Medenved",
          "Информация о селевом потоке в Меденведе",
          "Маълумот дар бораи сел дар Меденвед"
        ),
        time: "10:30-12:00",
        who: fieldTeam
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Information on the Dashtdara GLOF",
          "Информация о GLOF в Даштидара",
          "Маълумот дар бораи GLOF-и Даштдара"
        ),
        time: "13:00-15:45",
        who: fieldTeam
      },
      { topic: breakLabel, time: "15:45-16:00" },
      {
        topic: l(
          "Road to campus from Shakhdara Valley",
          "Дорога на кампус из долины Шахдара",
          "Роҳ ба кампус аз водии Шоҳдара"
        ),
        time: "16:00-17:30",
        who: fieldTeam
      },
      { topic: endOfDay, time: "17:30" }
    ]
  },
  {
    id: "day-13",
    dayLabel: "Day 13",
    date: l("Saturday, 15 August 2026", "Суббота, 15 августа 2026 года", "Шанбе, 15 августи соли 2026"),
    theme: l(
      "Integrated Hazard Mapping and Knowledge Synthesis - Final Group Presentations and Closing",
      "Интегрированное картирование опасностей и синтез знаний - финальные групповые презентации и закрытие",
      "Харитасозии ҳамгирои хатарҳо ва ҷамъбасти дониш - презентатсияҳои ниҳоии гурӯҳӣ ва пӯшидашавӣ"
    ),
    introduction: [
      l(
        "The final day of the Summer University is dedicated to synthesis, knowledge integration, and knowledge transfer. Participants present the outcomes of their applied group work, demonstrating how scientific methods, data analysis, and modeling tools introduced throughout the program can be combined into practical hazard mapping packages. The day highlights interdisciplinary learning across cryosphere domains and formally concludes the Summer University through reflection, evaluation, and an official closing ceremony.",
        "Последний день Summer University посвящен синтезу, интеграции знаний и их передаче. Участники представляют результаты своей прикладной групповой работы, демонстрируя, как научные методы, анализ данных и инструменты моделирования, представленные в ходе программы, могут быть объединены в практические пакеты картирования опасностей. Этот день подчеркивает междисциплинарное обучение в рамках различных направлений криосферы и официально завершает Summer University через рефлексию, оценку и церемонию закрытия.",
        "Рӯзи ниҳоии Summer University ба ҷамъбаст, ҳамгироии дониш ва интиқоли он бахшида шудааст. Иштирокчиён натиҷаҳои кори амалии гурӯҳии худро пешниҳод мекунанд ва нишон медиҳанд, ки чӣ гуна усулҳои илмӣ, таҳлили маълумот ва абзорҳои моделсозии муаррифишуда дар тӯли барнома метавонанд ба маҷмӯаҳои амалии харитасозии хатар муттаҳид шаванд. Ин рӯз омӯзиши байнисоҳавиро дар бахшҳои гуногуни криосфера таъкид намуда, Summer University-ро тавассути рефлексия, арзёбӣ ва маросими расмии пӯшидашавӣ ба анҷом мерасонад."
      )
    ],
    trainers: [l("Trainers and organising committee", "Тренеры и организационный комитет", "Мураббиён ва кумитаи ташкилӣ")],
    sessionDuration: "9:00-17:00",
    methods: [
      l(
        "Group-based project work, hazard mapping presentations, peer and expert review, moderated discussion, and formal institutional closing.",
        "Групповая проектная работа, презентации по картированию опасностей, взаимная и экспертная оценка, модерируемое обсуждение и официальное институциональное закрытие.",
        "Кори лоиҳавии гурӯҳӣ, презентатсияҳои харитасозии хатар, арзёбии ҳамдигарӣ ва коршиносӣ, муҳокимаи модератсияшуда ва маросими расмии пӯшидашавӣ."
      )
    ],
    aims: [
      l(
        "Consolidate learning outcomes, demonstrate applied competencies in cryosphere science and hazard assessment, and showcase community-relevant hazard mapping products developed by participants.",
        "Закрепить результаты обучения, продемонстрировать прикладные компетенции в науке о криосфере и оценке опасностей, а также представить созданные участниками продукты картирования опасностей, значимые для сообществ.",
        "Натиҷаҳои омӯзишро мустаҳкам созад, салоҳиятҳои амалиро дар илми криосфера ва арзёбии хатарҳо нишон диҳад ва маҳсулоти харитасозии хатареро, ки барои ҷомеаҳо муҳиманд, пешниҳод намояд."
      ),
      l(
        "Present integrated hazard mapping packages, receive expert feedback, demonstrate interdisciplinary understanding, and formally complete the Summer University equipped with practical and transferable skills.",
        "Представить интегрированные пакеты картирования опасностей, получить экспертную обратную связь, продемонстрировать междисциплинарное понимание и официально завершить Summer University с практическими и переносимыми навыками.",
        "Маҷмӯаҳои ҳамгирои харитасозии хатарро пешниҳод намоянд, фикру мулоҳизаи коршиносонро гиранд, фаҳмиши байнисоҳавиро нишон диҳанд ва Summer University-ро бо малакаҳои амалӣ ва интиқолшаванда расман анҷом диҳанд."
      )
    ],
    schedule: [
      {
        topic: l(
          "Day introduction and presentation guidelines\nGroup 1: Glacier Systems - glacier change analysis, mass balance concepts, and related hazard implications",
          "Введение в день и рекомендации по презентациям\nГруппа 1: Ледниковые системы - анализ изменений ледников, концепции баланса массы и связанные риски",
          "Муқаддимаи рӯз ва дастурҳои презентатсия\nГурӯҳи 1: Системаҳои пиряхӣ - таҳлили тағйироти пиряхҳо, мафҳумҳои тавозуни масса ва паёмадҳои вобастаи хатар"
        ),
        time: "9:00-10:15",
        who: l("Participant Group (Glacier Track)", "Группа участников (трек по ледникам)", "Гурӯҳи иштирокчиён (трек оид ба пиряхҳо)")
      },
      { topic: breakLabel, time: "10:15-10:30" },
      {
        topic: l(
          "Group 2: Cryosphere Hazards - GLOFs, debris flows, avalanches, and integrated hazard mapping, IHA, HVRA",
          "Группа 2: Опасности криосферы - GLOF, селевые потоки, лавины и интегрированное картирование опасностей, IHA, HVRA",
          "Гурӯҳи 2: Хатарҳои криосфера - GLOF, селҳо, тармаҳо ва харитасозии ҳамгирои хатар, IHA, HVRA"
        ),
        time: "10:30-12:00",
        who: l("Participant Group (Hazards Track)", "Группа участников (трек по опасностям)", "Гурӯҳи иштирокчиён (трек оид ба хатарҳо)")
      },
      { topic: lunchBreak, time: "12:00-13:00" },
      {
        topic: l(
          "Group 3: Permafrost Systems - permafrost indicators, mapping approaches, and infrastructure implications",
          "Группа 3: Системы мерзлоты - индикаторы мерзлоты, подходы к картированию и последствия для инфраструктуры",
          "Гурӯҳи 3: Системаҳои яхбандии абадӣ - нишондиҳандаҳои яхбандӣ, равишҳои харитасозӣ ва паёмадҳо барои зерсохтор"
        ),
        time: "13:00-14:00",
        who: l("Participant Group (Permafrost Track)", "Группа участников (трек по мерзлоте)", "Гурӯҳи иштирокчиён (трек оид ба яхбандии абадӣ)")
      },
      {
        topic: l(
          "Official closing of the Summer University: certificates, acknowledgements, closing remarks",
          "Официальное закрытие Summer University: сертификаты, благодарности, заключительные слова",
          "Пӯшидашавии расмии Summer University: сертификатҳо, сипосномаҳо ва суханони ҷамъбастӣ"
        ),
        time: "14:00-15:45",
        who: l("UCA, AKF, SDC, Program Leadership", "UCA, AKF, SDC, руководство программы", "UCA, AKF, SDC, роҳбарияти барнома")
      },
      { topic: breakLabel, time: "15:45-16:00" },
      { topic: l("Group dinner in the city", "Групповой ужин в городе", "Шоми гурӯҳӣ дар шаҳр"), time: "18:00" }
    ]
  },
];
