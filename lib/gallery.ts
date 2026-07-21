import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";
import type { GalleryImage } from "@/lib/types";

const galleryRoot = path.join(process.cwd(), "public", "images", "gallery");
const imagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;
const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base"
});

export const getGalleryImages = cache(async (): Promise<GalleryImage[]> => {
  try {
    const entries = await fs.readdir(galleryRoot, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile() && imagePattern.test(entry.name))
      .map((entry) => entry.name)
      .sort((left, right) => collator.compare(left, right))
      .map((filename) => ({
        filename,
        src: `/images/gallery/${filename}`
      }));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
});
