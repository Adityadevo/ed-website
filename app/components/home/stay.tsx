import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function StayConnected() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#FAFAF0]">
      <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A] text-center">
          Stay Connected
        </h2>

        <div className="text-center text-base md:text-lg text-gray-700 max-w-4xl">
          <p className="mb-4">Stay connected with us through our social media channels:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.facebook.com/share/1A9RxyKniK/" target="_blank" rel="noopener noreferrer" className="text-[#4C231A] hover:underline font-semibold flex items-center gap-2">
              <Facebook className="w-5 h-5" /> Facebook
            </a>
            <a href="https://www.instagram.com/princetonpublicschool?igsh=MXVyb2l1eXl0aXoyYQ==" target="_blank" rel="noopener noreferrer" className="text-[#4C231A] hover:underline font-semibold flex items-center gap-2">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a href="https://youtu.be/pY-qc-ybe28?si=GpG-uDGOtv1vUhEH" target="_blank" rel="noopener noreferrer" className="text-[#4C231A] hover:underline font-semibold flex items-center gap-2">
              <Youtube className="w-5 h-5" /> YouTube
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[1240px] h-auto mt-6">
          <Image
            src="/images/stay2.svg"
            alt="Stay Connected Gallery"
            width={1240}
            height={695.29}
            className="w-full h-auto object-contain"
          />
        </div>

        <Link href="/gallery" className="bg-[#4C231A] text-white px-8 py-4 rounded-full text-sm md:text-base font-medium uppercase tracking-wide hover:bg-[#3A1B13] transition-colors shadow-lg mt-6">
          View Our Gallery
        </Link>
      </div>
    </section>
  );
}
