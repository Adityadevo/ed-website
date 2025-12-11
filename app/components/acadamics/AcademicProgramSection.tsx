export default function AcademicProgramSection() {
  const kindergartenSchedule = [
    { timing: '08:45 AM – 09:00 AM', duration: '15 min', details: 'Class Assembly' },
    { timing: '09:00 AM – 09:40 AM', duration: '40 min', details: 'Class Works' },
    { timing: '09:40 AM – 10:20 AM', duration: '40 Min', details: 'Skill Development' },
    { timing: '10:20 AM – 10:30 AM', duration: '10 Min', details: 'Snack Break' },
    { timing: '10:30 AM – 11:10 AM', duration: '40 Min', details: 'Indoor Outdoor Activity' },
    { timing: '11:10 AM – 11:50 PM', duration: '40 Min', details: 'Handwriting' },
    { timing: '11:50 AM – 12:30 PM', duration: '40 Min', details: 'Story Telling/Mutlimedia' },
    { timing: '12:30 PM', duration: '-', details: 'Long Bell Departure of Students' },
  ];


  const schoolSchedule = [ 
    { timing: '8:45 AM – 9:00 AM', duration: '15 min', details: 'Assembly' },
    { timing: '9:00 AM – 9:40 AM', duration: '40 min', details: '1st Period' },
    { timing: '9:40 AM – 10:20 AM', duration: '40 min', details: '2nd Period' },
    { timing: '10:20 AM – 10:30 AM', duration: '10 min', details: 'Snack Break' },
    { timing: '10:30 AM – 11:10 AM', duration: '40 min', details: '3rd Period' },
    { timing: '11:10 AM – 11:50 AM', duration: '40 min', details: '4th Period' },
    { timing: '11:50 AM – 12:30 PM', duration: '40 min', details: '5th Period' },
    { timing: '12:30 PM – 1:10 PM', duration: '40 min', details: 'Lunch Break' },
    { timing: '1:10 PM – 1:50 PM', duration: '40 min', details: '6th Period' },
    { timing: '1:50 PM – 2:30 PM', duration: '40 min', details: '7th Period' },
    { timing: '2:30 PM – 3:10 PM', duration: '40 min', details: '8th Period' },
    { timing: '3:10 PM', duration: '-', details: 'Long Bell-Departure of students' },
    { timing: '4:00 PM', duration: '-', details: 'Departure of staffs' },
  ];



  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#4C231A] text-center mb-4">
          ACADEMIC PROGRAM
        </h2>


        {/* Kindergarten Table */}
        <div className="w-full">
          {/* Table Heading */}
          <div className="bg-[#EAA05B] text-[#4C231A] font-bold text-[14px] md:text-[20px] lg:text-[24px] py-3 md:py-4 px-3 md:px-6 rounded-t-lg">
            Kindergarten School Timings - Pre KG, LKG, UKG
          </div>


          {/* Table Headers */}
          <div className="grid grid-cols-3 bg-[#F4CFAD] text-[#4C231A] font-semibold text-[12px] md:text-[16px] lg:text-[18px]">
            <div className="py-2 md:py-3 px-2 md:px-4 text-center border-r border-white">Timings</div>
            <div className="py-2 md:py-3 px-2 md:px-4 text-center border-r border-white">Duration</div>
            <div className="py-2 md:py-3 px-2 md:px-4 text-center">Details</div>
          </div>


          {/* Table Rows */}
          {kindergartenSchedule.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 text-[10px] md:text-[16px] lg:text-[18px] text-gray-800 ${
                index % 2 === 0 ? 'bg-[#FAFAF0]' : 'bg-[#E9F3FF]'
              }`}
            >
              <div className="py-2 md:py-3 px-1 md:px-4 text-center border-r border-white text-[9px] md:text-[14px] lg:text-[16px]">
                {row.timing}
              </div>
              <div className="py-2 md:py-3 px-1 md:px-4 text-center border-r border-white">
                {row.duration}
              </div>
              <div className="py-2 md:py-3 px-1 md:px-4 text-center text-[10px] md:text-[14px] lg:text-[16px]">
                {row.details}
              </div>
            </div>
          ))}
        </div>


        {/* School Timings Table */}
        <div className="w-full mt-8">
          {/* Table Heading */}
          <div className="bg-[#A5D465] text-[#4C231A] font-bold text-[14px] md:text-[20px] lg:text-[24px] py-3 md:py-4 px-3 md:px-6 rounded-t-lg">
            School Timings - Middle School & High School
          </div>


          {/* Table Headers */}
          <div className="grid grid-cols-3 bg-[#D6F4AD] text-[#4C231A] font-semibold text-[12px] md:text-[16px] lg:text-[18px]">
            <div className="py-2 md:py-3 px-2 md:px-4 text-center border-r border-white">Timings</div>
            <div className="py-2 md:py-3 px-2 md:px-4 text-center border-r border-white">Duration</div>
            <div className="py-2 md:py-3 px-2 md:px-4 text-center">Details</div>
          </div>


          {/* Table Rows */}
          {schoolSchedule.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 text-[10px] md:text-[16px] lg:text-[18px] text-gray-800 ${
                index % 2 === 0 ? 'bg-[#FAFAF0]' : 'bg-[#E9F3FF]'
              }`}
            >
              <div className="py-2 md:py-3 px-1 md:px-4 text-center border-r border-white text-[9px] md:text-[14px] lg:text-[16px]">
                {row.timing}
              </div>
              <div className="py-2 md:py-3 px-1 md:px-4 text-center border-r border-white">
                {row.duration}
              </div>
              <div className="py-2 md:py-3 px-1 md:px-4 text-center text-[10px] md:text-[14px] lg:text-[16px]">
                {row.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
