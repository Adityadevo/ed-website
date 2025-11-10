import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import GalleryHero from "../components/gallery/GalleryHero";
import Image from "next/image";
import TestimonialsSection from "../components/home/TestimonialsSection";

export const metadata = {
  title: "Gallery | Princeton Public School",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#FAF7EF] min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Hero (you can set background in GalleryHero later) */}
      <GalleryHero />

      {/* Sections with only headings; you will insert images later */}
      <section className="px-4 md:px-8 lg:px-[100px] py-12 md:py-16">
        <h2 className="text-[#4C231A] text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Our Infrastructure
        </h2>
        {/* Full-bleed image */}
        <div className="mt-8  left-1/2 right-1/2  w-screen">
          <div className="relative w-[90%] h-[42vh] min-h-[260px] md:h-[56vh] lg:h-[64vh] overflow-hidden">
            <Image
              src="/images/infra.svg"
              alt="Infrastructure"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-[100px] py-8 md:py-10">
        <h2 className="text-[#4C231A] text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Co-Curricular & Extra Curricular Activities
        </h2>
        {/* Full-bleed image */}
        <div className="mt-16  left-1/2 right-1/2  w-screen">
          <div className="relative w-[90%] h-[42vh] min-h-[260px] md:h-[56vh] lg:h-[72vh] overflow-hidden">
            <Image
              src="/images/independence.svg"
              alt="Activity"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
