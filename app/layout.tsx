import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import LocalizedText from "@/components/LocalizedText";
import { conference } from "@/lib/conference";

const headingFont = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${conference.shortName} | Tajikistan`,
    template: `%s | ${conference.shortName}`
  },
  description: conference.summary,
  icons: {
    icon: "/images/conference/hydromet-agency.png"
  },
  openGraph: {
    title: conference.title,
    description: conference.summary,
    siteName: conference.shortName,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: conference.title,
    description: conference.summary
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const initialLang = "en";

  return (
    <html lang={initialLang} className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body text-ink-900 antialiased">
        <LanguageProvider initialLang={initialLang}>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
          >
            <LocalizedText value={{ en: "Skip to content", ru: "Перейти к содержанию", tg: "Гузариш ба муҳтаво" }} />
          </a>
          <Header />
          <div id="content">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
