import fs from "fs";
import path from "path";
import { cache } from "react";
import { remark } from "remark";
import html from "remark-html";
import type {
  FaqItem,
  ProgramContent,
  SiteContent,
  Speaker,
  Sponsor,
  Track,
  LocalizedString
} from "@/lib/types";

const contentRoot = path.join(process.cwd(), "content");

function readText(relativePath: string) {
  return fs.readFileSync(path.join(contentRoot, relativePath), "utf8");
}

function readTextIfExists(relativePath: string) {
  const fullPath = path.join(contentRoot, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, "utf8");
}

function readJson<T>(relativePath: string): T {
  const raw = readText(relativePath);
  return JSON.parse(raw) as T;
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Content validation error: ${message}`);
  }
}

function isLocalizedString(value: unknown): value is LocalizedString {
  return Boolean(value && typeof value === "object" && typeof (value as LocalizedString).en === "string");
}

function validateSite(data: SiteContent) {
  assert(data && typeof data === "object", "site.json must be an object");
  ["en", "ru", "tg"].forEach((lang) => {
    const entry = data[lang as "en" | "ru" | "tg"];
    assert(entry, `site.${lang} is missing`);
    assert(typeof entry.name === "string", `site.${lang}.name must be a string`);
    assert(typeof entry.tagline === "string", `site.${lang}.tagline must be a string`);
    assert(Array.isArray(entry.facts), `site.${lang}.facts must be an array`);
  });
}

function validateTracks(data: Track[]) {
  assert(Array.isArray(data), "tracks.json must be an array");
  data.forEach((track, index) => {
    assert(typeof track.id === "string", `tracks[${index}].id must be string`);
    assert(isLocalizedString(track.title), `tracks[${index}].title must be localized`);
    assert(isLocalizedString(track.description), `tracks[${index}].description must be localized`);
  });
}

function validateSpeakers(data: Speaker[]) {
  assert(Array.isArray(data), "speakers.json must be an array");
  data.forEach((speaker, index) => {
    assert(typeof speaker.id === "string", `speakers[${index}].id must be string`);
    assert(typeof speaker.name === "string", `speakers[${index}].name must be string`);
    assert(isLocalizedString(speaker.title), `speakers[${index}].title must be localized`);
    assert(isLocalizedString(speaker.bio), `speakers[${index}].bio must be localized`);
  });
}

function validateSponsors(data: Sponsor[]) {
  assert(Array.isArray(data), "sponsors.json must be an array");
  data.forEach((sponsor, index) => {
    assert(typeof sponsor.id === "string", `sponsors[${index}].id must be string`);
    assert(typeof sponsor.name === "string", `sponsors[${index}].name must be string`);
    assert(typeof sponsor.tier === "string", `sponsors[${index}].tier must be string`);
  });
}

function validateProgram(data: ProgramContent) {
  assert(Array.isArray(data), "program.json must be an array");
  data.forEach((day, index) => {
    assert(typeof day.date === "string", `program[${index}].date must be string`);
    assert(isLocalizedString(day.label), `program[${index}].label must be localized`);
    assert(Array.isArray(day.sessions), `program[${index}].sessions must be array`);
  });
}

async function renderMarkdown(markdown: string) {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

function parseFaqMarkdown(markdown: string) {
  const items: Array<{ question: string; answer: string }> = [];
  const lines = markdown.split(/\r?\n/);
  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];

  const pushCurrent = () => {
    if (!currentQuestion) return;
    items.push({
      question: currentQuestion.trim(),
      answer: currentAnswer.join("\n").trim()
    });
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      pushCurrent();
      currentQuestion = line.replace(/^##\s+/, "");
      currentAnswer = [];
      continue;
    }

    if (line.startsWith("# ")) {
      continue;
    }

    if (currentQuestion) {
      currentAnswer.push(line);
    }
  }

  pushCurrent();

  return items.filter((item) => item.question && item.answer);
}

export const getSite = cache(() => {
  const data = readJson<SiteContent>("site.json");
  validateSite(data);
  return data;
});

export const getTracks = cache(() => {
  const data = readJson<Track[]>("tracks.json");
  validateTracks(data);
  return data;
});

export const getSpeakers = cache(() => {
  const data = readJson<Speaker[]>("speakers.json");
  validateSpeakers(data);
  return data;
});

export const getSponsors = cache(() => {
  const data = readJson<Sponsor[]>("sponsors.json");
  validateSponsors(data);
  return data;
});

export const getProgram = cache(() => {
  const data = readJson<ProgramContent>("program.json");
  validateProgram(data);
  return data;
});

export const getFaqItems = cache(() => {
  const enRaw = readTextIfExists("pages/faq.en.md") ?? readText("pages/faq.md");
  const ruRaw = readTextIfExists("pages/faq.ru.md") ?? readText("pages/faq.md");
  const tgRaw = readTextIfExists("pages/faq.tg.md") ?? enRaw;
  const enItems = parseFaqMarkdown(enRaw);
  const ruItems = parseFaqMarkdown(ruRaw);
  const tgItems = parseFaqMarkdown(tgRaw);

  assert(enItems.length > 0, "faq content must include at least one item");
  assert(enItems.length === ruItems.length, "faq translations must contain the same number of questions");
  assert(enItems.length === tgItems.length, "faq translations must contain the same number of questions");

  return enItems.map((item, index) => ({
    question: {
      en: item.question,
      ru: ruItems[index]?.question ?? item.question,
      tg: tgItems[index]?.question ?? item.question
    },
    answer: {
      en: item.answer,
      ru: ruItems[index]?.answer ?? item.answer,
      tg: tgItems[index]?.answer ?? item.answer
    }
  })) as FaqItem[];
});

export const getMarkdownPage = cache(async (slug: "about" | "venue" | "privacy" | "faq") => {
  const enRaw = readTextIfExists(`pages/${slug}.en.md`) ?? readText(`pages/${slug}.md`);
  const ruRaw = readTextIfExists(`pages/${slug}.ru.md`) ?? readText(`pages/${slug}.md`);
  const tgRaw = readTextIfExists(`pages/${slug}.tg.md`) ?? enRaw;
  const [en, ru, tg] = await Promise.all([renderMarkdown(enRaw), renderMarkdown(ruRaw), renderMarkdown(tgRaw)]);
  return { en, ru, tg };
});
