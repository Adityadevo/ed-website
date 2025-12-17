import Image from 'next/image';


export default function ProcedureSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className=" flex flex-col gap-4">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A]">
              PROCEDURE
            </h2>


            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              <span className="text-[#DC143C] font-semibold">Princeton Public School</span> welcomes students to an enriching and joyful learning experience. The admission procedure is completely transparent and has been designed to ensure a suitable fit between what the parents and children expect from the school.
            </p>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Age eligibility for Grade I as per the government norms is mandatorily completion of 6 years as on 1<sup>st</sup> June of that particular academic year.
            </p>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Parents applying for admission will be required to fill out an application form which shall be given at the school premises only. A written entrance test will be given in the school campus from Grade UKG to Grade X under the observation of a teacher to assess his/her ability for higher classes. There will no formal entrance test for Nursery and LKG.
            </p>


            {/* Sub Heading */}
            {/* <h3 className="text-lg md:text-[18px] font-bold text-[#4C231A]">
              GROUPS OFFERED IN HIGHER SECONDARY
            </h3> */}


            {/* List */}
            {/* <ol className="list-decimal list-inside flex flex-col gap-2 text-base md:text-lg text-gray-800">
              <li>Physics, Chemistry, Biology, Mathematics</li>
              <li>Physics, Chemistry, Mathematics, Computer Science</li>
              <li>Physics, Chemistry, Botany, Zoology</li>
              <li>Accountancy, Commerce, Computer Applications, Economics</li>
              <li>Accountancy, Commerce, Business Mathematics, Economics</li>
            </ol> */}
          </div>


          {/* Right Side - Image with Decorative Circles */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px] lg:w-[587px] lg:h-[656px]">
              {/* Decorative Pink Circle - Background */}
              


              {/* Main Image */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[280px] h-[380px] md:w-[420px] md:h-[520px] lg:w-[550px] lg:h-[620px] rounded-[50px] z-20">
                <Image
                  src="/images/boy.png"
                  alt="Student with backpack"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
