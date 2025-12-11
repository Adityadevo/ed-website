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
    { src: '/images/infra4.jpg', alt: 'Science Lab', rotation: 'rotate-3' },
    { src: '/images/infra5.jpg', alt: 'Classroom', rotation: '-rotate-2' },
  ];


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


      {/* Mobile: Peek Scroll - Center image full, side images peek */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
        <div className="flex gap-4">
          {infrastructureImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 bg-white p-3 shadow-xl snap-center"
              style={{ width: '85vw', height: '400px' }}
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

      {/* Mobile scroll indicator */}
      <div className="md:hidden text-center mt-4 text-sm text-gray-500">
        ← Swipe to browse →
      </div>
    </section>
  );
}


// Activities Section Component
function ActivitiesSection() {
  const activitiesImages = [
    { src: '/images/activity1.png', alt: 'Student performance' },
    { src: '/images/activity2.png', alt: 'Cultural activity' },
    { src: '/images/activity3.png', alt: 'Group activity' },
    { src: '/images/activity4.png', alt: 'Independence celebration' },
    { src: '/images/activity5.png', alt: 'Stage performance' },
  ];

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
              <Image src="/images/activity1.png" alt="Student performance" fill className="object-cover" />
            </div>
          </div>
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '281px', height: '281px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/activity2.png" alt="Cultural activity" fill className="object-cover" />
            </div>
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
              <Image src="/images/activity3.png" alt="Group activity" fill className="object-cover" />
            </div>
          </div>
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '438px', height: '295px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/activity4.png" alt="Independence celebration" fill className="object-cover" />
            </div>
          </div>
          <div className="relative flex-shrink-0 bg-white p-3 shadow-xl" style={{ width: '436px', height: '291px' }}>
            <div className="relative w-full h-full">
              <Image src="/images/activity5.png" alt="Stage performance" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>


      {/* Mobile: Peek Scroll - Center image full, side images peek */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
        <div className="flex gap-4">
          {activitiesImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 bg-white p-3 shadow-xl snap-center"
              style={{ width: '85vw', height: '400px' }}
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

      {/* Mobile scroll indicator */}
      <div className="md:hidden text-center mt-4 text-sm text-gray-500">
        ← Swipe to browse →
      </div>
    </section>
  );
}
