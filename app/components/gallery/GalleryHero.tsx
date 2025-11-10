import React from 'react';
import Image from 'next/image';

interface GalleryHeroProps {
  /**
   * Optional background image URL you can set later, e.g. "/images/your-hero.jpg".
   * You can also remove this prop and directly replace the wrapper with your own <Image/>.
   */
  backgroundUrl?: string;
}

export default function GalleryHero({ backgroundUrl }: GalleryHeroProps) {
  const src = backgroundUrl || '/images/gellery.svg'; // replace with your real hero image
  return (
    <section className="relative w-full">
      <div className="relative h-[260px] md:h-[360px] lg:h-[420px] w-full">
        {/* Mock image tag - swap the src with your real image */}
        <Image
          src={src}
          alt="Gallery Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* <div className="relative z-1 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Gallery</h1>
        </div> */}
      </div>
    </section>
  );
}
