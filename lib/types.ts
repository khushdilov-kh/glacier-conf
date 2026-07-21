export type Lang = "en" | "ru" | "tg";

export type LocalizedString = {
  en: string;
  ru?: string;
  tg?: string;
};

export type FaqItem = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type SiteLocale = {
  name: string;
  shortName?: string;
  tagline: string;
  heroSubtitle: string;
  dateRange: string;
  city: string;
  venue: string;
  format: string;
  timezone: string;
  registrationUrl: string;
  registrationFormUrl?: string;
  registrationEmbedUrl?: string;
  cfpUrl?: string;
  deadlineCfp?: string;
  contactEmail: string;
  pressEmail?: string;
  phone?: string;
  socials: {
    x?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
    website?: string;
  };
  languages: Lang[];
  aboutPreview: string;
  registrationHighlight: string;
  venueMapUrl?: string;
  seo: {
    siteUrl: string;
    defaultOgImage: string;
    twitterHandle?: string;
  };
  facts: Array<{ label: string; value: string }>;
};

export type SiteContent = {
  en: SiteLocale;
  ru: SiteLocale;
  tg: SiteLocale;
};

export type Track = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type Speaker = {
  id: string;
  name: string;
  title: LocalizedString;
  bio: LocalizedString;
  company?: string;
  country?: string;
  email?: string;
  photo?: string;
  tracks?: string[];
  tags?: string[];
  aliases?: string[];
};

export type SponsorTier = "platinum" | "gold" | "silver" | "community";

export type Sponsor = {
  id: string;
  name: string;
  tier: SponsorTier;
  logo?: string;
  url?: string;
};

export type ProgramSession = {
  time: string;
  title: LocalizedString;
  type: LocalizedString;
  location?: LocalizedString;
  speakers?: string[];
  track?: string;
};

export type ProgramDay = {
  date: string;
  label: LocalizedString;
  sessions: ProgramSession[];
};

export type ProgramContent = ProgramDay[];

export type GalleryImage = {
  filename: string;
  src: string;
};
