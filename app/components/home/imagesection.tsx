import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    '/images/image2.png',
    '/images/image.png',
    '/images/image2.png',
    '/images/image.png',
    '/images/image.png',
    '/images/image2.png',
    '/images/image.png',
    '/images/image2.png',
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] md:h-[360px] lg:h-[360px]"
          >
            <Image
              src={image}
              alt={`Feature ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
