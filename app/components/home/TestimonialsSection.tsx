import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const thumbnails = [
    '/images/test.svg',
    '/images/man.svg',
   '/images/women.svg',
    '/images/man2.svg',
  ];

  return (
    <section className="pt-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#4C231A] leading-tight mb-12">
          Don't take our word for it!<br />
          Hear it from our <span className="italic">Parents!</span>
        </h2>

        {/* Main Content - Image and Text */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
          {/* Left Side - Main Image */}
          <div className="flex-shrink-0">
            <div className="relative w-full lg:w-[362px] h-[400px] lg:h-[488px] rounded-3xl overflow-hidden ">
              <Image
                src="/images/founder.svg"
                alt="Parent Testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-between flex-1">
            {/* Testimonial Text */}
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
              Princeton school is one of the best institution setting higher standards of education. The School is committed to provide education and also co curricular activities make students as well as teacher's extra mind of creativity knowledge . Always focus in holistic development of students. Good and co-operative staffs. Management is always supportive. Feeling pleasured.
            </p>

            {/* Name and Next Button */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#4C231A]">Mrs. Savithri Shivakumar</h3>
                <p className="text-sm text-gray-600 italic">Parent: Nandan Shivakumar, X 'C', 2024 Batch</p>
              </div>
              <button className="flex items-center gap-2 text-[#4C231A] font-semibold hover:gap-4 transition-all">
                NEXT
                <ArrowRight size={24} className="font-bold" strokeWidth={3} />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="relative w-full h-[150px] sm:h-[196px] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform "
                >
                  <Image
                    src={thumb}
                    alt={`Testimonial ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
