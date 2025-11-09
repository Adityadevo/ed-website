import Image from 'next/image';

export default function WhyPrincetonSection() {
  const features = [
    {
      image: '/images/edu.svg',
      title: 'Progressive Education',
      borderColor: 'border-[#10B981]', // green
    },
    {
      image: '/images/campus.svg',
      title: 'City Campus',
      borderColor: 'border-[#3B82F6]', // blue
    },
    {
      image: '/images/child.svg',
      title: 'A School for Children',
      borderColor: 'border-[#4C231A]', // brown
    },
    {
      image: '/images/strong.svg',
      title: 'A Strong Foundation',
      borderColor: 'border-[#FF6B6B]', // red
    },
  ];

  return (
    <section className="py-16 px-4 md:px-[100px] bg-[#FAFAF0]">
      <div className="flex flex-col gap-16 items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-[36px] font-bold text-[#4C231A] text-center">
          Why Princeton Public School?
        </h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full max-w-7xl">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className={`rounded-full overflow-hidden  w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[290px] lg:h-[290px]`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={290}
                  height={290}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#4C231A] text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#4C231A] text-white px-8 py-4 rounded-full text-sm md:text-base font-medium uppercase tracking-wide hover:bg-[#3A1B13] transition-colors shadow-lg">
          Learn More About What Makes Us Special
        </button>
      </div>
    </section>
  );
}
