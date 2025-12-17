'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import GalleryHero from "../components/gallery/GalleryHero";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function GalleryPage() {
  return (
    <main className="bg-[#FAF7EF] min-h-screen flex flex-col">
      <Navbar />
      <GalleryHero />
      <InfrastructureSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

// Infrastructure Section Component
function InfrastructureSection() {
  const infrastructureImages = [
    { src: '/images/infra1.jpg', alt: 'Playground', rotation: '-rotate-3' },
    { src: '/images/infra2.jpg', alt: 'Computer Lab', rotation: 'rotate-2' },
    { src: '/images/infra3.jpg', alt: 'Assembly Hall', rotation: '-rotate-1' },
    { src: '/images/ramp.jpeg', alt: 'Science Lab', rotation: 'rotate-3' },
    { src: '/images/infra5.jpg', alt: 'Classroom', rotation: '-rotate-2' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % infrastructureImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + infrastructureImages.length) % infrastructureImages.length);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / infrastructureImages.length;
      scrollRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: 'smooth'
      });
    }
  }, [currentSlide, infrastructureImages.length]);

  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-12 md:py-16 bg-[#FAF7EF]">
      <h2 className="text-[#4C231A] text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
        Our Infrastructure
      </h2>

      {/* Desktop: Grid Layout with Tilted Images */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 items-end justify-items-center">
        {infrastructureImages.map((image, index) => (
          <div
            key={index}
            className={`relative bg-white p-3 shadow-2xl transition-transform duration-300 hover:scale-110 hover:rotate-0 cursor-pointer ${image.rotation}`}
            style={{ aspectRatio: '3/4', width: '100%', maxWidth: '280px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Carousel with Arrow Navigation */}
      <div className="md:hidden relative">
        <div 
          ref={scrollRef}
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          <div className="flex">
            {infrastructureImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 bg-white p-3 shadow-xl snap-center mx-2"
                style={{ width: 'calc(100vw - 80px)', height: '400px' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4C231A] rounded-full p-3 shadow-lg z-10 transition-all"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4C231A] rounded-full p-3 shadow-lg z-10 transition-all"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {infrastructureImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#4C231A] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Activities Section Component
function ActivitiesSection() {
  const activitiesImages = [
    { src: '/images/ind1.jpg', alt: 'Student performance' },
    { src: '/images/ind2.jpg', alt: 'Cultural activity' },
    { src: '/images/ind3.jpg', alt: 'Group activity' },
    { src: '/images/ind4.jpg', alt: 'Independence celebration' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activitiesImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activitiesImages.length) % activitiesImages.length);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / activitiesImages.length;
      scrollRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: 'smooth'
      });
    }
  }, [currentSlide, activitiesImages.length]);

  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-12 md:py-16 bg-[#FAF7EF]">
      <h2 className="text-[#4C231A] text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
        Co-Curricular & Extra Curricular Activities
      </h2>

      {/* Desktop: Custom Grid Layout */}
      <div className="hidden md:block">
        {/* First Row */}
        <div className="flex gap-6 mb-6 items-start justify-center">
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '326px', height: '458px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/ind1.jpg" alt="Student performance" fill className="object-cover" />
            </div>
          </div>
          <div className="relative flex-shrink-0 p-3" style={{ width: '281px', height: '281px' }}>
            {/* Empty space */}
          </div>
          <div className="flex-1 flex items-center justify-center max-w-md">
            <h3 className="text-4xl lg:text-5xl font-serif italic text-[#4C231A] text-center">
              Independence Day 2025
            </h3>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-6 items-start justify-center">
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '390px', height: '261px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/ind2.jpg" alt="Group activity" fill className="object-cover" />
            </div>
          </div>
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '438px', height: '295px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/ind3.jpg" alt="Independence celebration" fill className="object-cover" />
            </div>
          </div>
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '436px', height: '291px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/ind4.jpg" alt="Stage performance" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Carousel with Arrow Navigation */}
      <div className="md:hidden relative">
        <div 
          ref={scrollRef}
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          <div className="flex">
            {activitiesImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 bg-white p-3 shadow-xl snap-center mx-2"
                style={{ width: 'calc(100vw - 80px)', height: '400px' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4C231A] rounded-full p-3 shadow-lg z-10 transition-all"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4C231A] rounded-full p-3 shadow-lg z-10 transition-all"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {activitiesImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#4C231A] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
