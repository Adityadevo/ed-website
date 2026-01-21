import React from "react";
import Image from "next/image";

type Amenity = {
  title: string;
  description: string;
  mockIndex: number;
  image: string; // per-item image URL
};

const AMENITIES: Amenity[] = [
  {
    title: "Classrooms & Laboratories",
    description:
      "State of the art classrooms, separate laboratories for chemistry, biology, physics, computer, mathematics to encourage experiential learning.",
    mockIndex: 1,
    image: "/images/classlab.webp",
  },
  {
    title: "Modern Library",
    description:
      "Well stocked library to facilitate independent research and learning of an individual.",
    mockIndex: 2,
    image: "/images/library.webp",
  },
  {
    title: "Indoor Sports",
    description:
      "A well-equipped computer lab with modern systems to help students develop essential computer and technology skills in a practical learning environment.",
    mockIndex: 4,
    image: "/images/computerlab.webp",
  },
  {
    title: "Multimedia Room",
    description: "Multimedia room for visual learning of every subject.",
    mockIndex: 3,
    image: "/images/multimedia.webp",
  },
  {
    title: "Personality Development",
    description: "Moral and ethical development programme.",
    mockIndex: 8,
    image: "/images/personaldev.webp",
  },
  {
    title: "School Bus",
    description:
      "Transport facility with a caretaker available till your kid reach safely",
    mockIndex: 9,
    image: "/images/bus.webp",
  },
  {
    title: "CCTV",
    description:
      "24/7 CCTV in each classroom to monitor day to day activities and ensuring the safety of your wards.",
    mockIndex: 10,
    image: "/images/cctv.svg",
  },
  {
    title: "Security",
    description:
      "Tight security system in the campus so that no outsider can swoop-in.",
    mockIndex: 11,
    image: "/images/security.webp",
  },
  {
    title: "Fire Safety",
    description:
      "Fire safety environment in case of any emergency - we are prepared.",
    mockIndex: 12,
    image: "/images/fire.svg",
  },
];

const AmenitiesGrid: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-12 md:py-16 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A2F26]">
            Our Amenities
          </h3>
          <p className="text-gray-700 mt-3 max-w-3xl mx-auto">
            From well equipped classrooms, laboratories, library etc. Our campus
            has all that is required for a child to grow intellectually,
            physically and spiritually.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="w-full">
                {/* mock image tag - replace src with your real images */}
                <Image
                  src={a.image}
                  alt={a.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mt-1">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;
