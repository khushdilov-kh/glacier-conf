"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import Container from "@/components/layout/Container";
import { MailIcon } from "@/components/ui/LineIcons";
import { conferenceI18n, navigationI18n, text } from "@/lib/conference-i18n";
import { useLanguage } from "@/lib/i18n";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/#home") return pathname === "/";
  if (href.startsWith("/#")) return false;
  const normalize = (value: string) => value.replace(/\/+$/, "") || "/";
  const currentPath = normalize(pathname);
  const targetPath = normalize(href);

  if (targetPath === "/") return currentPath === "/";
  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && mobileMenuRef.current) {
        const menuItems = Array.from(mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
        const focusable = [menuButtonRef.current, ...menuItems].filter((item): item is HTMLElement => Boolean(item));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="conference-header">
      <Container className="conference-header__inner">
        <Link href="/" className="conference-brand" aria-label={`${t(conferenceI18n.shortName)} — ${t(text("home", "главная", "асосӣ"))}`}>
          
          <span>
            <strong>{t(conferenceI18n.shortName)}</strong>
            <small>{t(text("International Conference · 2026", "Международная конференция · 2026", "Конфронси байналмилалӣ · 2026"))}</small>
          </span>
        </Link>

        <nav className="conference-nav" aria-label={t(text("Primary navigation", "Основная навигация", "Паймоиши асосӣ"))}>
          {navigationI18n.map((item) => {
            const current = isCurrentPath(pathname, item.href);
            return (
              <Link
                aria-current={current ? "page" : undefined}
                className={current ? "is-active" : ""}
                href={item.href}
                key={item.href}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        <div className="conference-header__actions">
          <LanguageToggle />
          <a className="conference-header__email" href="mailto:info@glacersconf.tj" aria-label={`${t(text("Email", "Электронная почта", "Почтаи электронӣ"))} info@glacersconf.tj`}>
            <MailIcon aria-hidden="true" />
            <span>info@glacersconf.tj</span>
          </a>
          <Link className="conference-header__programme" href="/registration/">
            {t(text("Registration", "Регистрация", "Бақайдгирӣ"))}
          </Link>
          <button
            className={open ? "conference-menu-button is-open" : "conference-menu-button"}
            type="button"
            aria-expanded={open}
            aria-controls="conference-mobile-menu"
            aria-label={open ? t(text("Close menu", "Закрыть меню", "Пӯшидани меню")) : t(text("Open menu", "Открыть меню", "Кушодани меню"))}
            onClick={() => setOpen((value) => !value)}
            ref={menuButtonRef}
          >
            <span />
            <span />
          </button>
        </div>
      </Container>

      {open ? (
        <div id="conference-mobile-menu" className="conference-mobile-menu" role="dialog" aria-modal="true" aria-label={t(text("Site navigation", "Навигация по сайту", "Паймоиши сомона"))} ref={mobileMenuRef}>
          <div className="conference-mobile-menu__content">
            <nav aria-label={t(text("Mobile primary navigation", "Мобильная навигация", "Паймоиши мобилӣ"))}>
              {navigationI18n.map((item, index) => {
                const current = isCurrentPath(pathname, item.href);
                return (
                  <Link
                    aria-current={current ? "page" : undefined}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {t(item.label)}
                  </Link>
                );
              })}
            </nav>

          </div>

          <div className="conference-mobile-menu__meta">
            <div>
              <p>{t(conferenceI18n.dates)}</p>
              <p>{t(text("Dushanbe · Rasht District", "Душанбе · Раштский район", "Душанбе · ноҳияи Рашт"))}</p>
            </div>
            <a href="mailto:info@glacersconf.tj" onClick={() => setOpen(false)}>info@glacersconf.tj</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
