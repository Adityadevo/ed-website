import Image from "next/image";

export default function StateOfArtFacilities() {
  const leftFacilities = [
    {
      id: 1,
      alt: "Classroom",
      borderColor: "border-green-500",
      src: "/images/classroom.svg",
    },
    {
      id: 2,
      alt: "Play Area",
      borderColor: "border-blue-500",
      src: "/images/play-area.svg",
    },
    {
      id: 3,
      alt: "School Building",
      borderColor: "border-red-500",
      src: "/images/school-building.svg",
    },
  ];

  const rightFacilities = [
    {
      id: 4,
      alt: "Playground",
      borderColor: "border-blue-600",
      src: "/images/playground.svg",
    },
    {
      id: 5,
      alt: "Microscope",
      borderColor: "border-yellow-400",
      src: "/images/microscope.svg",
    },
    {
      id: 6,
      alt: "Sports Facility",
      borderColor: "border-red-400",
      src: "/images/sports.svg",
    },
  ];

  return (
    <section className="relative bg-[#FDF8F3] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A2416] text-center mb-16">
          State of Art Facilities
        </h1>

        {/* Desktop Layout - Three Columns */}
        <div className="hidden lg:flex items-center justify-between gap-8 xl:gap-16">
          {/* Left Column - 3 Circles */}
          <div className="flex flex-col gap-8 xl:gap-12">
            {leftFacilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-8 ${
                  facility.borderColor
                } ${
                  index === 1
                    ? "ml-16 xl:ml-20"
                    : index === 2
                    ? "ml-8 xl:ml-12"
                    : ""
                }`}
              >
                <Image
                  src={facility.src}
                  alt={facility.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center px-8 xl:px-12 max-w-2xl">
            <p className="text-2xl xl:text-3xl text-gray-800 leading-relaxed">
              School is equipped with all essential amenities and infra for
              imparting good and effective education
            </p>
          </div>

          {/* Right Column - 3 Circles */}
          <div className="flex flex-col gap-8 xl:gap-12 items-end">
            {rightFacilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-8 ${
                  facility.borderColor
                } ${
                  index === 1
                    ? "mr-16 xl:mr-20"
                    : index === 2
                    ? "mr-8 xl:mr-12"
                    : ""
                }`}
              >
                <Image
                  src={facility.src}
                  alt={facility.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View - Grid */}
        <div className="grid grid-cols-2 gap-6 lg:hidden">
          {[...leftFacilities, ...rightFacilities].map((facility) => (
            <div
              key={`mobile-${facility.id}`}
              className={`relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-6 ${facility.borderColor}`}
            >
              <Image
                src={facility.src}
                alt={facility.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
