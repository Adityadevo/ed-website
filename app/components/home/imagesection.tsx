import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      image: '/images/apple.svg',
      text: '',
      bgColor: '',
    },
    {
      image: '/images/basic.svg',
      text: 'Beyond the Basics - Arts, Language, PE and more',
      bgColor: '#8F2133',
      textColor: 'text-white',
    },
    {
      image: '/images/girl.svg',
      text: '',
      bgColor: '',
    },
    {
      image: '/images/nurture.svg',
      text: 'Children are known and nurtured',
      bgColor: '#DAE06F',
      textColor: 'text-[#2C5234]',
    },
    {
      image: '/images/communityy.svg',
      text: 'An intentionally diverse, inclusive community',
      bgColor: '#A5D465',
      textColor: 'text-[#2C5234]',
    },
    {
      image: '/images/childern.svg',
      text: '',
      bgColor: '',
    },
    {
      image: '/images/prek.svg',
      text: 'The PreK to X Advantage',
      bgColor: '#EAA05B',
      textColor: 'text-white',
    },
    {
      image: '/images/colour.svg',
      text: '',
      bgColor: '',
    },
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] md:h-[360px] lg:h-[360px]"
            style={{ backgroundColor: feature.bgColor || 'transparent' }}
          >
            {/* Background Image (with pattern already in it) */}
            <Image
              src={feature.image}
              alt={`Feature ${index + 1}`}
              fill
              className="object-cover"
            />

            {/* Text Overlay - 24px */}
            {feature.text && (
              <div className={`absolute  inset-0 z-10 flex items-center justify-center p-8 ${feature.textColor}`}>
                <h3 className="text-xl md:text-[20px] max-w-[200px] font-bold text-center leading-normal">
                  {feature.text}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
