export default function DiveIntoOurProgram() {
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
      <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto">
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
    </section>
  );
}
