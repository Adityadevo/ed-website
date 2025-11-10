import React from "react";
import Link from "next/link";

const StayConnectedGallery: React.FC = () => {
  return (
    <section className="px-4 md:px-8 bg-white lg:px-[100px] py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A2F26]">Stay Connected</h3>
        <p className="text-gray-700 mt-3 max-w-3xl mx-auto">
          Keep up with all things Princeton Public School by following us on social channels. Explore our gallery to see how experiential learning connects to our curriculum.
        </p>

        {/* Single connected image */}
        <div className="mt-10">
          <div className="w-full overflow-hidden rounded-lg">
            <img
              src="/images/connected.svg"
              alt="Stay Connected"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <Link href="/gallery" className="mt-10 inline-flex items-center px-6 py-3 rounded-full bg-[#4A2F26] text-white hover:bg-[#3c241d] transition-colors">
          View Our Gallery
        </Link>
      </div>
    </section>
  );
};

export default StayConnectedGallery;
