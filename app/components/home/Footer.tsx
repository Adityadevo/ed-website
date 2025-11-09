import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Footer - Contact, Apply, Syllabus */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-[#C5D64D] flex items-center justify-center py-8 md:py-10 hover:opacity-90 transition-opacity cursor-pointer">
          <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
            CONTACT
          </h3>
        </div>

        <div className="bg-[#F3A661] flex items-center justify-center py-8 md:py-10 hover:opacity-90 transition-opacity cursor-pointer">
          <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
            APPLY
          </h3>
        </div>

        <div className="bg-[#A8D47E] flex items-center justify-center py-8 md:py-10 hover:opacity-90 transition-opacity cursor-pointer">
          <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
            SYLLABUS
          </h3>
        </div>
      </div>

      {/* Bottom Footer - Contact Info and Social */}
      <div className="bg-[#5C3A2E] py-16 px-4 md:px-8 lg:px-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start md:items-end justify-between gap-8">
          {/* Left Side - Logo and Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Logo and School Name */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.svg"
                alt="Princeton Public School Logo"
                width={96}
                height={120}
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <h2 className="text-[#FFD700] text-[36px] font-bold" style={{ fontFamily: 'serif' }}>
                  Princeton
                </h2>
                <h2 className="text-[#FFD700] text-[36px] font-bold" style={{ fontFamily: 'serif' }}>
                  Public School
                </h2>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-4 text-white text-base md:text-lg">
              <p className="font-semibold">
                Affiliated to CBSE, New Delhi, Code No. 830880
              </p>
              <div className="flex flex-col gap-1">
                <p>#96, Jyothinagar, Medahalli, Virgonagar Post,</p>
                <p>Bengaluru - 560049</p>
                <p className="font-semibold mt-2">Ph: 8861290882 / 7259839993</p>
              </div>
            </div>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-[56px] h-[56px] border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-[#5C3A2E] transition-all cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook size={28} className="text-white hover:text-[#5C3A2E]" />
            </a>
            <a
              href="#"
              className="w-[56px] h-[56px] border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-[#5C3A2E] transition-all cursor-pointer"
              aria-label="Twitter"
            >
              <Twitter size={28} className="text-white hover:text-[#5C3A2E]" />
            </a>
            <a
              href="#"
              className="w-[56px] h-[56px] border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-[#5C3A2E] transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={28} className="text-white hover:text-[#5C3A2E]" />
            </a>
            <a
              href="#"
              className="w-[56px] h-[56px] border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-[#5C3A2E] transition-all cursor-pointer"
              aria-label="YouTube"
            >
              <Youtube size={28} className="text-white hover:text-[#5C3A2E]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
