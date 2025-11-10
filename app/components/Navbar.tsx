'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5C3A2E] px-4 md:px-8 lg:px-[100px] text-white py-4">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo and Heading */}
        <div className="flex flex-row justify-start items-center gap-2 md:gap-4">
          <Link href="/" aria-label="Go to Home" className="flex items-center gap-2 md:gap-4">
            <Image
              src="/images/logo.svg"
              alt="Princeton Public School Logo"
              width={60}
              height={75}
              className="object-contain md:w-[80px] md:h-[100px] lg:w-[96px] lg:h-[100px]"
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-[#FFD700] text-[20px] md:text-[28px] lg:text-[36px] font-bold">
                Princeton
              </h1>
              <h1 className="text-[#FFD700] text-[20px] md:text-[28px] lg:text-[36px] font-bold">
                Public School
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop - Right Side - Admissions Button and Nav Items */}
        <div className="hidden lg:flex flex-col items-end justify-start gap-4">
          {/* Admissions Button */}
          <Link href="/#admissions" className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
            <GraduationCap size={24} />
            <span className="font-medium">Admissions</span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/acadamics" className="hover:text-gray-300 transition-colors">
              Academics
            </Link>
            <Link href="/features" className="hover:text-gray-300 transition-colors">
              Features
            </Link>
            {/* <Link href="/gallery" className="hover:text-gray-300 transition-colors">
              Gallery
            </Link> */}
            <Link href="/mandatory-disclosure" className="hover:text-gray-300 transition-colors">
              Mandatory Disclosure
            </Link>
          </div>
        </div>

        {/* Mobile - Hamburger Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 pb-4">
          {/* Admissions Button - Mobile */}
          <Link href="/#admissions" className="bg-white text-black px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full">
            <GraduationCap size={24} />
            <span className="font-medium">Admissions</span>
          </Link>

          {/* Nav Items - Mobile */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors py-2 border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors py-2 border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/acadamics"
              className="hover:text-gray-300 transition-colors py-2 border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/features"
              className="hover:text-gray-300 transition-colors py-2 border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/gallery"
              className="hover:text-gray-300 transition-colors py-2 border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/mandatory-disclosure"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mandatory Disclosure
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
