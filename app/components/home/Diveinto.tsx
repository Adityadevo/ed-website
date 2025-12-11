import Image from 'next/image';


export default function DiveIntoOurProgram() {
  const programs = [
    {
      description: `Our kindergarten students lead, teach, interact, and learn through collaboration, cooperation, and observation.`,
      title: 'Foundation Program',
      subtitle: 'Nursery to Grade II',
      bgColor: '#A64253',
      image: '/images/basic.svg',
      headingColor: '#fff',
      paraColor: '#fff',
      subColor: '#fff',
    },
    {
      description: `We capture our Lower School students' enthusiasm and excitement and channel it into a program that emphasizes learning, community involvement, and global understanding.`,
      title: 'Preparatory Program',
      subtitle: 'Grade III to V',
      bgColor: '#C5D64D',
      image: '/images/nurture.svg',
      headingColor: '#2C5234',
      paraColor: '#2C5234',
      subColor: '#08594C',
    },
    {
      description: `Our Middle School program is geared to meet the needs of our students, acknowledging and appreciating their requirement for structure and autonomy, as well as their desire for acceptance and success.`,
      title: 'Middle School Program',
      subtitle: 'Grade VI to VIII',
      bgColor: '#F3A661',
      image: '/images/prek.svg',
      headingColor: '#2C5234',
      paraColor: '#2C5234',
      subColor: '#08594C',
    },
    {
      description: `Our Secondary School program is designed to support students by balancing their need for structure with opportunities for independence, while fostering a sense of belonging and guiding them toward success`,
      title: 'Secondary School Program',
      subtitle: 'Grade IX to X',
      bgColor: '#A8D47E',
      image: '/images/communityy.svg',
      headingColor: '#2C5234',
      paraColor: '#2C5234',
      subColor: '#08594C',
    },
  ];


  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#FAFAF0]">
      <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A] text-center">
          Dive Into Our Program
        </h2>


        <p className="text-center text-base md:text-lg text-gray-700 max-w-4xl">
          Take a moment to explore our rigorous and joyful program that nurtures each student's curiosity for learning.
         
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6 justify-items-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-sm shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden"
              style={{
                backgroundColor: program.bgColor,
                width: 290,
                height: 290,
                padding: 24,
              }}
            >
              {/* Pattern/image overlay */}
              {program.image && (
                <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )}


              <div className="relative z-10 flex flex-col h-full justify-between">
                <p
                  style={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 14,
                    color: program.paraColor,
                  }}
                >
                  {program.description}
                </p>
                <div>
                  <h3
                    className="mb-1"
                    style={{
                      // fontFamily: ', serif',
                      fontWeight: 800,
                      fontSize: 18,
                      color: program.headingColor,
                    }}
                  >
                    {program.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: ' sans-serif',
                      fontWeight: 700,
                      fontSize: 14,
                      color: program.subColor,
                    }}
                  >
                    {program.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
