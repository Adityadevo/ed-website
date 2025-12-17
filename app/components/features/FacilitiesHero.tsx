import Image from "next/image";

export default function StateOfArtFacilities() {
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
            {/* Image 1 */}
            <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-6 border-green-500">
              <Image
                src="/images/eqq.jpg"
                alt="Classroom"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden   ml-16 xl:ml-20">
              <Image
                src="/images/fac2.svg"
                alt="Play Area"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden  ml-8 xl:ml-12">
              <Image
                src="/images/fac3.svg"
                alt="School Building"
                fill
                className="object-cover"
              />
            </div>
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
            {/* Image 4 */}
            <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden  border-blue-600">
              <Image
                src="/images/fac4.svg"
                alt="Playground"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 5 */}
            <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden  mr-16 xl:mr-20">
              <Image
                src="/images/fac5.svg"
                alt="Microscope"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 6 */}
            <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-6 border-red-400 mr-8 xl:mr-12">
              <Image
                src="/images/toy.jpg"
                alt="Sports Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View - Grid */}
        <div className="grid grid-cols-2 gap-6 lg:hidden">
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-green-500">
            <Image src="/images/eqq.jpg" alt="Classroom" fill className="object-cover" />
          </div>
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
            <Image src="/images/fac2.svg" alt="Play Area" fill className="object-cover" />
          </div>
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-red-500">
            <Image src="/images/fac3.svg" alt="School Building" fill className="object-cover" />
          </div>
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-blue-600">
            <Image src="/images/fac4.svg" alt="Playground" fill className="object-cover" />
          </div>
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-yellow-400">
            <Image src="/images/fac5.svg" alt="Microscope" fill className="object-cover" />
          </div>
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-red-400">
            <Image src="/images/tt.jpg" alt="Sports Facility" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
