import Image from 'next/image';
import FeaturesSection from '../home/imagesection';


export default function HolisticLearningSection() {
  const features = [
    '/images/holistic1.png',
    '/images/holistic2.png',
    '/images/holistic3.png',
    '/images/holistic4.png',
    '/images/holistic5.png',
    '/images/holistic6.png',
    '/images/holistic7.png',
    '/images/holistic8.png',
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5E8]">
      
        {/* Heading */}
        <div className='max-w-7xl mx-auto flex flex-col gap-16'>
            <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A] text-center">
          Holistic Learning Environment
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-800 text-center leading-relaxed max-w-5xl mx-auto">
          PPS offers a comprehensive learning programme that extends far beyond the confines of a classroom. Students have countless opportunities to assimilate knowledge, discover hidden talents, follow dreams and grow into well-rounded individuals.
        </p>
        </div>
        
     
        {/* Images Grid Component - gap-4 (16px) */}
        <div className="">
          <FeaturesSection  />
        </div>
      </div>
    </section>
  );
}
