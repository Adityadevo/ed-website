import Image from 'next/image';
import Link from 'next/link';

export default function StayConnected() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#FAFAF0]">
      <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A] text-center">
          Stay Connected
        </h2>

        <p className="text-center text-base md:text-lg text-gray-700 max-w-4xl">
          Keep up with all things Capitol Hill Day School by following us on{' '}
          <span className="font-semibold">Instagram</span> and liking us on{' '}
          <span className="font-semibold">Facebook</span>. You can also follow our{' '}
          <span className="font-semibold">Field Education Instagram</span> to see how experiential learning connects to our curriculum.
        </p>

        <div className="relative w-full max-w-[1240px] h-auto mt-6">
          <Image
            src="/images/stay.svg"
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
