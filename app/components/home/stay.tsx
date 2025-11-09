import Image from 'next/image';

export default function ProgramsAndStayConnected() {
  const programs = [
    {
      title: 'Early Childhood Program',
      subtitle: 'Pre KG  |  LKG  |  UKG',
      bgColor: 'bg-[#A64253]',
    },
    {
      title: 'Elementary Program',
      subtitle: 'Grade 1 to 4',
      bgColor: 'bg-[#C5D64D]',
    },
    {
      title: 'Upper Grade Program',
      subtitle: 'Grade 5 to 7',
      bgColor: 'bg-[#F3A661]',
    },
    {
      title: 'High School Program',
      subtitle: 'Grade 8 to 10',
      bgColor: 'bg-[#A8D47E]',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#FAFAF0]">
      <div className="flex flex-col gap-12 items-center max-w-7xl mx-auto">
        {/* Dive Into Our Program Section */}
        <div className="flex flex-col gap-6 items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A] text-center">
            Dive Into Our Program
          </h2>

          <p className="text-center text-base md:text-lg text-gray-700 max-w-4xl">
            Take a moment to explore our rigorous and joyful program that nurtures each student's curiosity for learning. Interested in learning more?{' '}
            <span className="underline font-semibold cursor-pointer">Download our Viewbook.</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${program.bgColor} w-full h-[290px] flex flex-col items-start justify-end p-6 rounded-sm shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              >
                <h3 className="text-white text-xl font-bold mb-2">
                  {program.title}
                </h3>
                <p className="text-white text-sm font-medium">
                  {program.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="flex flex-col gap-6 items-center w-full mt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A] text-center">
            Stay Connected
          </h2>

          <p className="text-center text-base md:text-lg text-gray-700 max-w-4xl">
            Keep up with all things Capitol Hill Day School by following us on{' '}
            <span className="font-semibold">Instagram</span> and liking us on{' '}
            <span className="font-semibold">Facebook</span>. You can also follow our{' '}
            <span className="font-semibold">Field Education Instagram</span> to see how experiential learning connects to our curriculum.
          </p>

          <div className="relative w-full max-w-[1240px] h-auto mt-12">
            <Image
              src="/images/stay.svg"
              alt="Stay Connected Gallery"
              width={1240}
              height={695.29}
              className="w-full h-auto object-contain"
            />
          </div>

          <button className="bg-[#4C231A] text-white px-8 py-4 rounded-full text-sm md:text-base font-medium uppercase tracking-wide hover:bg-[#3A1B13] transition-colors shadow-lg mt-6">
            View Our Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
