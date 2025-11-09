import React from "react";

interface DisclosureHeroProps {
  imageSrc?: string; // you can pass your image path later
  title?: string;
}

const DisclosureHero: React.FC<DisclosureHeroProps> = ({
  imageSrc = "/images/placeholder-hero.jpg", // replace after you add image
  title = "Mandatory Public Disclosure",
}) => {
  return (
    <section className="relative w-full h-[280px] md:h-[380px] lg:h-[460px] overflow-hidden rounded-none">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      {/* Title */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-[100px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default DisclosureHero;
