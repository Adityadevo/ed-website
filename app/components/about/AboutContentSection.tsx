import Image from 'next/image';

export default function AboutContentSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Welcome to Princeton Culture Section */}
        <div className="flex flex-col gap-12 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A]">
            WELCOME TO PRINCETON CULTURE
          </h2>
          <p className="text-base  md:text-[18px] font-normal text-gray-800 leading-relaxed max-w-7xl">
            PRINCETON PUBLIC SCHOOL was founded in the year 2007 and ever since the institution has provided quality education with sustained commitment and dedication. We have a wonderful environment and various facilities in our school to help develop your child's skills and academics. We have a team of well qualified and experienced teachers and support staff who are committed to serving our school in becoming a leading educational begin with excellence. We have a passion for education and at the same time make sure that we cater to the needs of every child in our institution. We also assure parents of a safe and secure schooling environment for their children. Enroll your child with us and build their future with confidence.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col gap-12 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A]">
            Our Vision
          </h2>
          <p className="text-base md:text-lg lg:text-[18px] font-normal text-gray-800 leading-relaxed max-w-5xl">
            To create the most respected civilized citizens by providing highest quality education to students in a sustained and scalable way
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col gap-12 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A]">
            Our Mission
          </h2>
          <p className="text-base md:text-lg lg:text-[18px] font-normal text-gray-800 leading-relaxed max-w-5xl">
            To provide each student a diverse education that promotes self-discipline, sense of responsibility, social and global consciousness and excellence in learning
          </p>
        </div>

        {/* The School Emblem Section */}
        <div className="flex flex-col gap-12 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A]">
            The School Emblem
          </h2>
          <div className="flex flex-col gap-12 items-center">
            <Image
              src="/images/logo.svg"
              alt="Princeton Public School Emblem"
              width={193}
              height={240}
              className="object-contain"
            />
            <p className="text-base md:text-lg lg:text-[18px] font-normal text-gray-800 leading-relaxed max-w-5xl">
              On the surface every child entering the school might appear similar but our focus is not identifying and nurturing the uniqueness of every individual child. Every child who joins PPS leaves having explored the various facets of his/her inner potential to the fullest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
