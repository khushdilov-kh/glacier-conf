# International Conference Website (Variant A)

Production-ready conference website built with Next.js (App Router), TypeScript, and Tailwind CSS. All content is stored locally in `/content` as JSON + Markdown for easy updates.

## Setup

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Content Editing

All content is local and can be edited without touching React components.

- Global settings + hero content: `content/site.json`
- Tracks: `content/tracks.json`
- Speakers: `content/speakers.json`
- Program: `content/program.json`
- Sponsors: `content/sponsors.json`
- Pages (Markdown): `content/pages/about.md`, `content/pages/venue.md`, `content/pages/privacy.md`
- Optional RU overrides for Markdown pages: `content/pages/about.ru.md`, `content/pages/venue.ru.md`, `content/pages/privacy.ru.md`

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Framework preset: Next.js.
4. Deploy.
5. Update `content/site.json` → `seo.siteUrl` to your production URL.

## Notes

- Registration button uses `registrationUrl` from `content/site.json` and opens an external form.
- Language toggle is lightweight and stored in a cookie/localStorage.
