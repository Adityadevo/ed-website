export default function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-[100px] bg-[#F5F5F5]">
      <div className="flex flex-col gap-8 max-w-7xl px-16 mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-[36px] px-6 font-bold text-center text-[#4A4A4A] uppercase leading-tight">
          WHERE CURIOUS MINDS EXPLORE, ENGAGE, AND CONNECT.
        </h1>

        {/* Paragraph Text */}
        <p className="text-center text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
          Princeton Public School is one of the Virgonagar's area's leading schools, offering a distinctive and progressive approach to learning that engages students in the classroom and with the world around them.
        </p>

        {/* YouTube Video with Red Border */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-[8px] border-[#FF6B6B] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Princeton Public School Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
