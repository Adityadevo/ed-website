'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Headphones, Facebook, Instagram, Youtube, SquarePen } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setSubmitting(true);
      // Placeholder submit. You can wire to an API route later.
      await new Promise((r) => setTimeout(r, 800));
      alert('Thanks! Your message has been submitted.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#FAF7EF]">
      {/* Top band with gradient title and socials */}
      <div className="bg-linear-to-b from-[#4C231A] to-[#26110D] px-4 md:px-8 lg:px-[100px] py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Looking for a school to nurture your kid
            </p>

            {/* Socials */}
            <div className="flex items-center gap-10 mt-2 my-5">
              <Link href="#" aria-label="Facebook" className="w-12 h-12 grid place-items-center bg-white/10 rounded-sm hover:bg-white/20 transition">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="X" className="w-12 h-12 grid place-items-center bg-white/10 rounded-sm hover:bg-white/20 transition">
                {/* Using SquarePen as a placeholder for X logo */}
                <SquarePen className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="w-12 h-12 grid place-items-center bg-white/10 rounded-sm hover:bg-white/20 transition">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="w-12 h-12 grid place-items-center bg-white/10 rounded-sm hover:bg-white/20 transition">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Card header part */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Content area */}
      <div className="px-4 md:px-8 lg:px-[100px] -mt-12 md:-mt-14 pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 md:gap-20">
          {/* Left column - details */}
          <div className="bg-[#FBF7EE] rounded-xl p-8 md:p-9 border border-[#E7D8C8] h-fit">
            <ul className="flex flex-col gap-16">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-[#F1E6D8] text-[#4C231A] grid place-items-center">
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-[#4A2F26] text-lg">
                  <span>8861290882</span>
                  <span>7259839993</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-[#F1E6D8] text-[#4C231A] grid place-items-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-[#4A2F26] text-lg">
                  <Link href="mailto:princeton2011@hotmail.com" className="hover:underline">princeton2011@hotmail.com</Link>
                  <Link href="mailto:45979@cbseishiksha.in" className="hover:underline">45979@cbseishiksha.in</Link>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-[#F1E6D8] text-[#4C231A] grid place-items-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-[#4A2F26] text-lg">
                  <span>#96, Jyothinagar, Medahalli,</span>
                  <span>Virgonagar Post, Bengaluru - 560049</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right column - form card */}
          <div className="bg-white rounded-2xl border shadow-md overflow-hidden">
            <div className="bg-[#E9CDBB] text-[#4C231A] px-7 py-6 flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <p className="font-medium text-lg">Write us a few words about your concerns and queries and our team shall reach out to you</p>
            </div>
            <form onSubmit={onSubmit} className="p-7 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col gap-1">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name *"
                  className={`w-full rounded-md border px-4 py-3.5 text-lg bg-[#FBF7EE] placeholder:text-[#876] focus:outline-none focus:ring-2 focus:ring-[#7A4638] ${errors.name ? 'border-red-400' : 'border-[#E7D8C8]'}`}
                />
                {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email ID *"
                  className={`w-full rounded-md border px-4 py-3.5 text-lg bg-[#FBF7EE] placeholder:text-[#876] focus:outline-none focus:ring-2 focus:ring-[#7A4638] ${errors.email ? 'border-red-400' : 'border-[#E7D8C8]'}`}
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
              </div>
              <div className="md:col-span-2">
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full rounded-md border px-4 py-3.5 text-lg bg-[#FBF7EE] placeholder:text-[#876] focus:outline-none focus:ring-2 focus:ring-[#7A4638] border-[#E7D8C8]"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-1">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your Message *"
                  rows={6}
                  className={`w-full rounded-md border px-4 py-3.5 text-lg bg-[#FBF7EE] placeholder:text-[#876] focus:outline-none focus:ring-2 focus:ring-[#7A4638] ${errors.message ? 'border-red-400' : 'border-[#E7D8C8]'} `}
                />
                {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
              </div>
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#4C231A] hover:bg-[#3A1B13] text-white rounded-lg py-3.5 text-lg font-semibold shadow-md transition disabled:opacity-60"
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="px-4 md:px-8 lg:px-[100px] pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden border-2 border-[#4C231A] shadow-md">
            <iframe
              title="School Location Map"
              src="https://www.google.com/maps?q=Princeton%20Public%20School%2C%20%2396%2C%20Jyothinagar%2C%20Medahalli%2C%20Virgonagar%20Post%2C%20Bengaluru%20-%20560049&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
