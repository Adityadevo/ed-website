import Image from 'next/image';

export default function AboutOurSchoolSection() {
  return (
    <section className="py-16 px-4 md:pl-[100px] bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Text Container - Fixed Width 734px, Height 500px - RELATIVE */}
          <div className="relative w-[734px] h-[500px] flex flex-col gap-12">
            <h2 className="text-[36px] font-bold text-[#4C231A]">
              ABOUT OUR SCHOOL
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Princeton Public School is a KG to 10th co-educational school established to make children well-rounded and self dependent individuals, founded in the year 2007 ever since we are committed to quality education. We have a wonderful environment and facilities for active learning physical and mental development of every student. A team of well qualified and experienced teachers and support staff who are committed to serving our school in becoming a leading educational institute. The entire gamut of activities at PPS reflects its objective of nurturing young children and making them responsible adults who can make a positive contribution to the world.
            </p>

            {/* Images Container - Absolute Position relative to text container */}
            <div className="absolute top-0 -right-[600px]  w-[600px] h-[500px]">
              {/* Top Right Image - Classroom Scene */}
              <div className="absolute top-0 right-4 w-[347px] h-[295px]  overflow-hidden z-30">
                <Image
                  src="/images/school1.svg"
                  alt="Classroom activity"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Middle Image - Student Writing */}
              <div className="absolute top-[400px] right-[350px] w-[520px] h-[178px]  overflow-hidden z-20">
                <Image
                  src="/images/school2.svg"
                  alt="Student writing"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Left Image - Rock Climbing */}
              <div className="absolute top-[280px] right-4 w-[347px] h-[295px]  overflow-hidden z-10">
                <Image
                  src="/images/school3.svg"
                  alt="Rock climbing activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex flex-col lg:hidden gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[36px] font-bold text-[#4C231A]">
              ABOUT OUR SCHOOL
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Princeton Public School is a KG to 10th co-educational school established to make children well-rounded and self dependent individuals, founded in the year 2007 ever since we are committed to quality education. We have a wonderful environment and facilities for active learning physical and mental development of every student. A team of well qualified and experienced teachers and support staff who are committed to serving our school in becoming a leading educational institute. The entire gamut of activities at PPS reflects its objective of nurturing young children and making them responsible adults who can make a positive contribution to the world.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full h-[250px] overflow-hidden">
              <Image
                src="/images/school1.svg"
                alt="Classroom activity"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[200px]  overflow-hidden">
              <Image
                src="/images/school2.svg"
                alt="Student writing"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[250px] border-6  overflow-hidden">
              <Image
                src="/images/school3.svg"
                alt="Rock climbing activity"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
