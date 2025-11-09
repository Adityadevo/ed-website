export default function AcademicProgramSection() {
  const kindergartenSchedule = [
    { timing: '08.45 am – 09.00 am', duration: '10 min', details: 'Class Assembly' },
    { timing: '09.00 am – 10.00 am', duration: '1 Hour', details: 'Rhyme Time & Activity Time' },
    { timing: '10.00 am – 10.30 am', duration: '30 Min', details: 'Snacks Time' },
    { timing: '10.30am – 11.00 am', duration: '30 Min', details: 'Story Time' },
    { timing: '11.00am – 12.00 pm', duration: '20 Min', details: 'Circle Time / Reflection Time' },
    { timing: '11.00am – 12.00 pm', duration: '40 Min', details: 'Skill Time / Play Time / Lunch Break' },
  ];

  const schoolSchedule = [
    { timing: '08.45 am – 09.00 am', duration: '10 min', details: 'Class Assembly' },
    { timing: '09.00 am – 09.45 am', duration: '45 Min', details: '1st Period' },
    { timing: '09.45 am – 10.30 am', duration: '45 Min', details: '2nd Period' },
    { timing: '10.30 am – 10.40 am', duration: '10 Min', details: 'Break' },
    { timing: '10.40 am – 11.25 am', duration: '45 Min', details: '3rd Period' },
    { timing: '11.25 am – 12.10 pm', duration: '45 Min', details: '4th Period' },
    { timing: '12.10 pm – 12.55 pm', duration: '45 Min', details: 'Lunch' },
    { timing: '12.55 pm – 01.40 pm', duration: '45 Min', details: '5th Period' },
    { timing: '01.40 pm – 02.25 pm', duration: '45 Min', details: '6th Period' },
    { timing: '02.25 pm- 03.10 pm', duration: '45 Min', details: '7th Period' },
    { timing: '03.10 pm – 03.50 pm', duration: '45 Min', details: '8th Period' },
    { timing: '4.00 pm', duration: '', details: 'Departure of Staffs and Students' },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A] text-center mb-4">
          ACADEMIC PROGRAM
        </h2>

        {/* Kindergarten Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Table Heading */}
            <div className="bg-[#EAA05B] text-[#4C231A] font-bold text-[20px] md:text-[24px] py-4 px-6 rounded-t-lg">
              Kindergarten School Timings - Pre KG, LKG, UKG
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-3 bg-[#F4CFAD] text-[#4C231A] font-semibold text-[16px] md:text-[18px]">
              <div className="py-3 px-4 text-center border-r border-white">Timings</div>
              <div className="py-3 px-4 text-center border-r border-white">Duration</div>
              <div className="py-3 px-4 text-center">Details</div>
            </div>

            {/* Table Rows */}
            {kindergartenSchedule.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 text-[16px] md:text-[18px] text-gray-800 ${
                  index % 2 === 0 ? 'bg-[#FAFAF0]' : 'bg-[#E9F3FF]'
                }`}
              >
                <div className="py-3 px-4 text-center border-r border-white">{row.timing}</div>
                <div className="py-3 px-4 text-center border-r border-white">{row.duration}</div>
                <div className="py-3 px-4 text-center">{row.details}</div>
              </div>
            ))}
          </div>
        </div>

        {/* School Timings Table */}
        <div className="overflow-x-auto mt-4">
          <div className="min-w-[600px]">
            {/* Table Heading */}
            <div className="bg-[#A5D465] text-[#4C231A] font-bold text-[20px] md:text-[24px] py-4 px-6 rounded-t-lg">
              School Timings - Middle School & High School
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-3 bg-[#D6F4AD] text-[#4C231A] font-semibold text-[16px] md:text-[18px]">
              <div className="py-3 px-4 text-center border-r border-white">Timings</div>
              <div className="py-3 px-4 text-center border-r border-white">Duration</div>
              <div className="py-3 px-4 text-center">Details</div>
            </div>

            {/* Table Rows */}
            {schoolSchedule.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 text-[16px] md:text-[18px] text-gray-800 ${
                  index % 2 === 0 ? 'bg-[#FAFAF0]' : 'bg-[#E9F3FF]'
                }`}
              >
                <div className="py-3 px-4 text-center border-r border-white">{row.timing}</div>
                <div className="py-3 px-4 text-center border-r border-white">{row.duration}</div>
                <div className="py-3 px-4 text-center">{row.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
