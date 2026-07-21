"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LocalizedText from "@/components/LocalizedText";
import type { GalleryImage, LocalizedString } from "@/lib/types";
import { cn } from "@/lib/utils";

interface HomeGalleryShowcaseProps {
  images: GalleryImage[];
}

const masonryAspectClasses = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[16/10]",
  "aspect-[5/6]",
  "aspect-[1/1]",
  "aspect-[16/9]"
] as const;

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-full w-full">
      <path d="m14.5 5.5-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-full w-full">
      <path d="m9.5 5.5 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-full w-full">
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

function GalleryTile({
  image,
  index,
  total,
  onOpen,
  className,
  sizes,
  priority = false,
  highlight = false
}: {
  image: GalleryImage;
  index: number;
  total: number;
  onOpen: (index: number) => void;
  className: string;
  sizes: string;
  priority?: boolean;
  highlight?: boolean;
}) {
  const frameLabel: LocalizedString = {
    en: `Frame ${String(index + 1).padStart(2, "0")}`,
    ru: `Кадр ${String(index + 1).padStart(2, "0")}`,
    tg: `Кадр ${String(index + 1).padStart(2, "0")}`
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={cn(
        "group relative block w-full overflow-hidden rounded-[30px] border border-white/60 bg-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.18)]",
        className
      )}
      aria-label={`Open gallery image ${index + 1} of ${total}`}
    >
      <Image
        src={image.src}
        alt={`Summer University gallery image ${index + 1}`}
        fill
        priority={priority}
        sizes={sizes}
        quality={highlight ? 84 : 80}
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.12)_35%,rgba(2,6,23,0.72)_100%)]" />

      {highlight ? (
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-left text-white sm:p-6">
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
            
            
          </div>
          <div className="max-w-xl">
            <p className="text-2xl font-semibold leading-tight sm:text-[2rem]">
              <LocalizedText value={{ en: "Summer University in frames", ru: "Summer University в кадрах", tg: "Summer University дар кадрҳо" }} />
            </p>
            <p className="mt-2 max-w-lg text-sm leading-6 text-white/78 sm:text-base">
              <LocalizedText
                value={{
                  en: "Open any photograph to view it in full screen and browse the whole gallery.",
                  ru: "Откройте любой кадр, чтобы посмотреть его на весь экран и пролистать всю галерею.",
                  tg: "Ҳар аксро кушоед, то онро дар тамоми экран бубинед ва тамоми галереяро варақ занед."
                }}
              />
            </p>
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left text-white">
          {/* <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm">
            <LocalizedText value={frameLabel} />
          </span> */}
          <span className="translate-y-2 text-sm font-medium text-white/0 transition duration-300 group-hover:translate-y-0 group-hover:text-white/85">
            <LocalizedText value={{ en: "Open", ru: "Открыть", tg: "Кушодан" }} />
          </span>
        </div>
      )}
    </button>
  );
}

export default function HomeGalleryShowcase({ images }: HomeGalleryShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (images.length < 2) return;

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current + 1) % images.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current - 1 + images.length) % images.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const heroImage = images[0];
  const featuredSideImages = images.slice(1, 3);
  const masonryImages = images.slice(3);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const currentIndex = activeIndex ?? 0;

  if (!heroImage) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  };

  const goToNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  };

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[1.5fr,0.78fr]">
        <GalleryTile
          image={heroImage}
          index={0}
          total={images.length}
          onOpen={setActiveIndex}
          className="h-[22rem] sm:h-[28rem] lg:h-[35rem]"
          sizes="(min-width: 1024px) 56vw, 100vw"
          highlight
        />

        {featuredSideImages.length > 0 ? (
          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {featuredSideImages.map((image, offset) => (
              <GalleryTile
                key={image.src}
                image={image}
                index={offset + 1}
                total={images.length}
                onOpen={setActiveIndex}
                className="h-[16rem] sm:h-[17rem] lg:h-[17rem]"
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 48vw, 100vw"
              />
            ))}
          </div>
        ) : null}
      </div>

      {masonryImages.length > 0 ? (
        <div className="mt-4 columns-1 gap-4 sm:columns-2 xl:columns-3">
          {masonryImages.map((image, index) => {
            const imageIndex = index + 3;

            return (
              <div key={image.src} className="mb-4 break-inside-avoid">
                <GalleryTile
                  image={image}
                  index={imageIndex}
                  total={images.length}
                  onOpen={setActiveIndex}
                  className={masonryAspectClasses[index % masonryAspectClasses.length]}
                  sizes="(min-width: 1280px) 28vw, (min-width: 640px) 44vw, 92vw"
                />
              </div>
            );
          })}
        </div>
      ) : null}

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-slate-950/92 px-4 py-5 text-white backdrop-blur-md sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <div className="relative mx-auto flex h-full max-w-7xl flex-col">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(null);
                }}
                className="absolute right-0 top-[60px] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-black shadow-[0_16px_45px_rgba(2,6,23,0.45)] transition hover:bg-white/22"
                aria-label="Close gallery"
              >
                <span className="h-5 w-5">
                  <CloseIcon />
                </span>
              </button>
              <div className="flex items-center justify-between gap-3 pr-16">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">
                    <LocalizedText value={{ en: "Gallery", ru: "Галерея", tg: "Галерея" }} />
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                      <LocalizedText
                      value={{
                        en: `Image ${currentIndex + 1} of ${images.length}`,
                        ru: `Изображение ${currentIndex + 1} из ${images.length}`,
                        tg: `Тасвири ${currentIndex + 1} аз ${images.length}`
                      }}
                    />
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {images.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          goToPrevious();
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 transition hover:bg-white/14"
                        aria-label="Previous image"
                      >
                        <span className="h-5 w-5">
                          <ArrowLeftIcon />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          goToNext();
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 transition hover:bg-white/14"
                        aria-label="Next image"
                      >
                        <span className="h-5 w-5">
                          <ArrowRightIcon />
                        </span>
                      </button>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="relative mt-5 flex min-h-0 flex-1 items-center justify-center" onClick={(event) => event.stopPropagation()}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage.src}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative h-full w-full"
                  >
                    <div className="relative h-full min-h-[18rem] w-full">
                      <Image
                        src={activeImage.src}
                        alt={`Summer University gallery image ${currentIndex + 1}`}
                        fill
                        priority
                        sizes="100vw"
                        quality={90}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={goToPrevious}
                      className="absolute left-0 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 text-white/90 transition hover:bg-slate-900/70 md:flex"
                      aria-label="Previous image"
                    >
                      <span className="h-6 w-6">
                        <ArrowLeftIcon />
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="absolute right-0 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 text-white/90 transition hover:bg-slate-900/70 md:flex"
                      aria-label="Next image"
                    >
                      <span className="h-6 w-6">
                        <ArrowRightIcon />
                      </span>
                    </button>
                  </>
                ) : null}
              </div>

              {images.length > 1 ? (
                <div className="mt-4 overflow-x-auto pb-1">
                  <div className="flex min-w-max gap-2">
                    {images.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveIndex(index);
                        }}
                        className={cn(
                          "relative h-16 w-24 overflow-hidden rounded-2xl border transition sm:h-20 sm:w-28",
                          index === activeIndex
                            ? "border-white/70 ring-2 ring-white/40"
                            : "border-white/10 opacity-65 hover:opacity-100"
                        )}
                        aria-label={`Open gallery image ${index + 1}`}
                      >
                        <Image
                          src={image.src}
                          alt={`Gallery thumbnail ${index + 1}`}
                          fill
                          sizes="112px"
                          quality={60}
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
