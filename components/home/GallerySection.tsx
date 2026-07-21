import Container from "@/components/layout/Container";
import LocalizedText from "@/components/LocalizedText";
import GeoPatternBackdrop from "@/components/ui/GeoPatternBackdrop";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import HomeGalleryShowcase from "@/components/home/HomeGalleryShowcase";
import { getGalleryImages } from "@/lib/gallery";

export default async function GallerySection() {
  const images = await getGalleryImages();

  if (!images.length) {
    return null;
  }

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-24">
      <GeoPatternBackdrop variant="topography" className="text-sky-700 opacity-15" />

      <Container className="relative">
        
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={{ en: "Visual gallery", ru: "Визуальная галерея", tg: "АКСҲО" }}
                title={{ en: "", ru: "" }}
                
              />
            </div>

            
          </div>
       

        <div  className="mt-10">
          <HomeGalleryShowcase images={images} />
        </div>
      </Container>
    </section>
  );
}
