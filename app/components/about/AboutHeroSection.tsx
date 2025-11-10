import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 flex-1">
          <h1 className="text-5xl md:text-7xl lg:text-[96px] font-bold text-[#4C231A] leading-tight">
            It all started in 2007
          </h1>
          <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-700 leading-relaxed">
            18 years of imparting excellence in education
          </p>
        </div>

        {/* Right Side - Overlapping Circular Images */}
        <div className="relative flex-shrink-0 w-full lg:w-auto flex items-center justify-center lg:justify-end">
          <div className="relative w-[500px] h-[400px] md:w-[600px] md:h-[450px]">
            {/* Yellow Circle - Top */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[290px] md:h-[290px] rounded-full  overflow-hidden z-30">
              <Image
                src="/images/about1.svg"
                alt="Teacher teaching"
                fill
                className="object-cover"
              />
            </div>

            {/* Blue Circle - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[290px] md:h-[290px] rounded-full border-8 border-[#4A90E2] overflow-hidden z-20">
              <Image
                src="/images/image.png"
                alt="School building"
                fill
                className="object-cover"
              />
            </div>

            {/* Green Circle - Right Middle */}
            <div className="absolute top-[120px] right-[50px] md:top-[140px] md:right-[70px] w-[250px] h-[250px] md:w-[290px] md:h-[290px] rounded-full border-8 border-[#10B981] overflow-hidden z-10">
              <Image
                src="/images/about2.svg"
                alt="Teacher at blackboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
