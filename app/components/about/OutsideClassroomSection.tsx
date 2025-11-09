import Image from 'next/image';

export default function OutsideClassroomSection() {
  const activities = [
    {
      image: '/images/classroom1.svg',
      bgColor: 'bg-[#B08D7D]',
      text: 'Yoga, meditation and prayer form an integral part of the school curriculum so that students have a calm and unburdened mind to start a fresh day.',
    },
    {
      image: '/images/classroom2.svg',
      bgColor: 'bg-[#C5D64D]',
      text: 'A mandatory co-curricular programme ensures that children step out of their comfort zones and endeavor to learn new skills.',
    },
    {
      image: '/images/classroom3.svg',
      bgColor: 'bg-[#F3A661]',
      text: 'Celebrations of cultural festivals and historic occasions both national and international foster a spirit of togetherness amongst children.',
    },
    {
      image: '/images/classroom4.svg',
      bgColor: 'bg-[#A8D47E]',
      text: 'Inter-house and school wide events are organized to inculcate a spirit of loyalty and healthy competition in the children and to explore and showcase their talents.',
    },
    {
      image: '/images/classroom5.svg',
      bgColor: 'bg-[#F3A661]',
      text: 'Eminent guests/motivational speakers/ career counselors frequently visit the campus to hold meaningful interactions with students.',
    },
    {
      image: '/images/classroom6.svg',
      bgColor: 'bg-[#F5C4D8]',
      text: 'Excursions, field trips and off campus activities are organized frequently to explore varied areas of interest and learning.',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A] text-center">
          Outside the Classroom
        </h2>

        {/* Grid of 6 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col w-full max-w-[380px] mx-auto h-[500px] rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Image Part - 300px */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={activity.image}
                  alt={`Activity ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Part with Background Color - 200px */}
              <div
                className={`${activity.bgColor} flex items-center justify-center p-6 h-[200px]`}
              >
                <p className="text-center text-base md:text-lg text-gray-800 leading-relaxed">
                  {activity.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
