export const conference = {
  shortName: "Hydromet & Glaciers 2026",
  type: "International Scientific and Practical Conference",
  tagline: "Advancing hydrometeorological monitoring and glacier protection in the context of climate change",
  title:
    "35 Years of the State Independence of the Republic of Tajikistan: Advancing and Strengthening Hydrometeorological Monitoring and Glacier Protection in the Context of Climate Change",
  dates: "18–19 August 2026",
  city: "Dushanbe, Republic of Tajikistan",
  fieldVisit: "Rasht District, Republic of Tajikistan",
  format: "Hybrid — in person and online",
  languages: "Tajik, Russian and English, with simultaneous interpretation",
  summary:
    "An international platform for science, policy and practical cooperation on hydrometeorological monitoring, cryosphere research, glacier preservation and climate resilience.",
  background: [
    'The International Scientific and Practical Conference entitled "35 Years of the State Independence of the Republic of Tajikistan: Advancing and Strengthening Hydrometeorological Monitoring and Glacier Protection in the Context of Climate Change" is organized to support the implementation of the state policy of the Republic of Tajikistan in the fields of hydrometeorology, climate change, environmental protection, sustainable water resources management, and cryosphere conservation, while promoting international scientific and technical cooperation.',
    "The Conference is dedicated to the celebration of the 35th Anniversary of the State Independence of the Republic of Tajikistan and aims to showcase the country's achievements in the development of the hydrometeorological sector, the promotion of international initiatives for glacier preservation, and the advancement of climate science.",
    "The Conference will serve as an international platform for constructive dialogue among representatives of government institutions, scientific and academic organizations, international organizations, financial institutions, the expert community, and development partners to discuss the enhancement of hydrometeorological monitoring systems, advancement of cryosphere research, application of modern observation and forecasting technologies, strengthening resilience to climate-related risks, and fostering international cooperation in the context of global climate change."
  ],
  context: [
    {
      value: "35",
      label: "years of State Independence",
      text: "A national milestone and a moment to present progress, partnerships and future priorities."
    },
    {
      value: "100",
      label: "years of hydrometeorological service",
      text: "A century of monitoring, forecasting and climate research in the Republic of Tajikistan."
    },
    {
      value: "93%",
      label: "mountainous territory",
      text: "Climate and cryosphere change directly affect communities, water resources and the economy."
    },
    {
      value: "2025–34",
      label: "International Decade of Action",
      text: "A global framework for advancing cryospheric sciences and coordinated international action."
    }
  ],
  objectives: [
    "Present contemporary scientific research, innovative developments and practical experience in hydrometeorological monitoring, climatology, cryosphere research and glacier preservation.",
    "Develop proposals to improve observation networks, forecasting, climate services and early warning systems through modern technologies.",
    "Identify priority areas for international scientific, technical and investment cooperation in hydrometeorology, climate change and cryosphere research.",
    "Promote partnerships among government authorities, scientific institutions, international organizations, financial institutions and the private sector.",
    "Prepare final recommendations on monitoring, innovative technologies, scientific capacity, glacier preservation and climate resilience."
  ],
  themes: [
    {
      number: "01",
      title: "Hydrometeorological monitoring",
      text: "Modern observation networks, forecasting, digital services, Earth observation and early warning systems."
    },
    {
      number: "02",
      title: "Glaciers and the cryosphere",
      text: "Scientific advances, monitoring technologies, data exchange and international cooperation for glacier preservation."
    },
    {
      number: "03",
      title: "Climate resilience and the SDGs",
      text: "Adaptation, green development, resilient economic sectors and practical pathways toward sustainable development."
    },
    {
      number: "04",
      title: "Investment and partnership",
      text: "Climate finance, scientific infrastructure, innovation and partnerships for regional resilience."
    }
  ],
  participantGroups: [
    "Government authorities and national hydrometeorological services",
    "Scientific, academic and educational institutions",
    "International and regional organizations",
    "Financial institutions and development partners",
    "Centres of excellence and expert communities",
    "Practitioners in climate, water, cryosphere and disaster risk reduction"
  ],
  outcomes: [
    "Final recommendations on hydrometeorological monitoring, glacier preservation and climate change adaptation",
    "Priority areas for international scientific, technical and investment cooperation",
    "New partnerships among public institutions, science, international organizations and finance partners",
    "Joint scientific, educational and technical initiatives for monitoring, forecasting and cryosphere preservation",
    "A collection of presentations and papers, a final document and materials for continued cooperation"
  ]
} as const;

export type ProgrammeSession = {
  time: string;
  title: string;
  kind: "arrival" | "plenary" | "parallel" | "break" | "panel" | "field" | "closing";
  description?: string;
  tracks?: Array<{ title: string; description: string }>;
  details?: string[];
};

export const programme: Array<{
  date: string;
  label: string;
  location: string;
  sessions: ProgrammeSession[];
}> = [
  {
    date: "18 August 2026",
    label: "Conference day",
    location: "Dushanbe, Republic of Tajikistan",
    sessions: [
      {
        time: "08:00–09:00",
        title: "Arrival of participants and registration",
        kind: "arrival"
      },
      {
        time: "09:00–09:30",
        title: "Opening of the Conference and welcome remarks",
        kind: "plenary",
        description:
          "Welcome remarks from national authorities and invited international development partners."
      },
      {
        time: "09:30–10:30",
        title: "Plenary session: current challenges and practical solutions",
        kind: "plenary",
        description:
          "Hydrometeorological monitoring, glacier preservation, modern observation and forecasting technologies, scientific infrastructure and regional climate resilience.",
        details: [
          "Regional Coordination Center for Glaciology of the World Meteorological Organization: goals and objectives",
          "Regional perspectives from Central Asian countries",
          "Q&A — 10 minutes"
        ]
      },
      {
        time: "10:30–11:00",
        title: "Group photo and coffee break",
        kind: "break"
      },
      {
        time: "11:00–12:30",
        title: "Parallel sessions I",
        kind: "parallel",
        tracks: [
          {
            title: "100 years of hydrometeorological observations",
            description:
              "Modern monitoring, forecasting and early warning systems — technologies, innovations and best practices."
          },
          {
            title: "Glacier preservation and cryosphere research",
            description:
              "Scientific advances, monitoring systems, data exchange and international cooperation."
          }
        ]
      },
      {
        time: "12:30–13:30",
        title: "Lunch break",
        kind: "break"
      },
      {
        time: "13:30–15:30",
        title: "Parallel sessions II",
        kind: "parallel",
        tracks: [
          {
            title: "Reducing the negative impacts of climate change",
            description:
              "Adaptation, green economy, resilient sectors, climate finance and pathways to the Sustainable Development Goals."
          },
          {
            title: "Investment, innovation and international cooperation",
            description:
              "Financing, partnerships, technologies, scientific capacity and hydrometeorological infrastructure."
          }
        ]
      },
      {
        time: "15:30–15:50",
        title: "Coffee break",
        kind: "break"
      },
      {
        time: "15:50–16:50",
        title: "Panel discussion: global challenges, national solutions and international partnership",
        kind: "panel",
        description:
          "A regional exchange on practical solutions, investment, knowledge and technology transfer, and stronger cooperation in hydrometeorology and climate change."
      },
      {
        time: "16:50–17:00",
        title: "Final session and adoption of recommendations",
        kind: "closing"
      }
    ]
  },
  {
    date: "19 August 2026",
    label: "Field visit",
    location: "Rasht District, Republic of Tajikistan",
    sessions: [
      {
        time: "08:30",
        title: "Field visit to Rasht District",
        kind: "field",
        description:
          "A practical visit connecting the Conference’s scientific dialogue with hydrometeorological and cryosphere realities in the field. Detailed logistics will be shared with confirmed participants."
      }
    ]
  }
];

export const programmeContributors = [
  "Agency for Hydrometeorology of the Committee for Environmental Protection under the Government of the Republic of Tajikistan",
  "Glaciology Center of the Agency for Hydrometeorology",
  "National Academy of Sciences of Tajikistan",
  "Representatives of Kazakhstan, the Kyrgyz Republic, Tajikistan, Turkmenistan and Uzbekistan",
  "World Meteorological Organization and United Nations organizations",
  "International financial institutions, research organizations and development partners"
] as const;

export const importantDates = [
  {
    date: "15 June 2026",
    title: "Abstract submissions and Registration open",
    detail: "The submission period begins for scientific papers and practice-focused contributions."
  },
  {
    date: "10 August 2026",
    title: "Abstract submission and Registration deadline",
    detail: "Final day to submit an abstract for consideration by the scientific committee."
  },
  {
    date: "20 May 2026",
    title: "Author notifications",
    detail: "Contributors receive the review outcome and next-step guidance."
  },
  {
    date: "18–19 August 2026",
    title: "Conference and field visit",
    detail: "Scientific programme in Dushanbe followed by a field visit to Rasht District."
  }
] as const;

export const conferenceUpdates = [
  {
    label: "Programme",
    title: "Working programme available",
    text: "The current agenda includes plenary dialogue, parallel scientific sessions, a panel discussion and a field visit.",
    href: "/program-agenda/"
  },
  {
    label: "Registration",
    title: "Participation details in preparation",
    text: "Registration, online access and logistical instructions will be published after official confirmation.",
    href: "/registration/"
  },
  {
    label: "Call for Papers",
    title: "Submission guidance forthcoming",
    text: "Abstract format, requirements, review arrangements and deadlines are currently awaiting approval.",
    href: "/#call-for-papers"
  }
] as const;
