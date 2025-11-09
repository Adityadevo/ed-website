import React from "react";

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
      "State of the art classrooms and dedicated labs for experiential learning.",
    mockIndex: 1,
    image: "/images/classroom.svg",
  },
  {
    title: "Modern Library",
    description:
      "Well stocked library to facilitate independent research and learning.",
    mockIndex: 2,
    image: "/images/library.svg",
  },
  {
    title: "Indoor Sports",
    description: "Play area for ages 3–10 to learn through fun.",
    mockIndex: 4,
    image: "/images/indoor.svg",
  },
  {
    title: "Multimedia Room",
    description: "Visual learning space for every subject.",
    mockIndex: 3,
    image: "/images/multimedia.svg",
  },
  {
    title: "Music Room",
    description: "Equipped music room with trained instructors.",
    mockIndex: 6,
    image: "/images/music.svg",
  },
  {
    title: "Arts Studio",
    description: "Studios for drawing, painting and artistic interests.",
    mockIndex: 5,
    image: "/images/arts.svg",
  },
  
  {
    title: "In Campus Cafeteria",
    description: "Fully furnished cafeteria with a special care for hygiene.",
    mockIndex: 7,
    image: "/images/cafeteria.svg",
  },
  {
    title: "Personality Development",
    description: "Moral and ethical development programme.",
    mockIndex: 8,
    image: "/images/personality.svg",
  },
  {
    title: "School Bus",
    description: "Transport with caretaker to ensure safe travel.",
    mockIndex: 9,
    image: "/images/bus.svg",
  },
  {
    title: "CCTV",
    description: "24/7 CCTV to monitor daily activities and ensure safety.",
    mockIndex: 10,
    image: "/images/cctv.svg",
  },
  {
    title: "Security",
    description: "Tight campus security to prevent intrusions.",
    mockIndex: 11,
    image: "/images/security.svg",
  },
  {
    title: "Fire Safety",
    description: "Prepared environment for any emergency.",
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
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#4A2F26]">
                  {a.title}
                </h4>
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
