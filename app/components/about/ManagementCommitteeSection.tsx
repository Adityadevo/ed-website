import Image from "next/image";

const managementMembersTop = [
  {
    name: "Mr Anwar Pasha",
    role: "President",
    image: "/images/members/anwar.png",
  },
  {
    name: "Mrs Sheba Reuben",
    role: "Secretary",
    image: "/images/members/sheeba.png",
  },
  {
    name: "Dr. Rudal Dubey",
    role: "Member SMC",
    image: "/images/members/rudal.png",
  },
];

const managementMembersBottom = [
  {
    name: "Mrs. M Shobha",
    role: "Member, Parent Representative",
    image: "/images/members/shobha.png",
  },
  {
    name: "Mrs. Roopa K",
    role: "Member, Teacher Representative",
    image: "/images/members/roopa.png",
  },
  {
    name: "Mrs. Sameena Kausar I",
    role: "Member, Teacher Representative",
    image: "/images/members/sameena.png",
  },
  {
    name: "Mr. Meesala Lokeswara",
    role: "Member, Parent Representative",
    image: "/images/members/meesala.png",
  },
];

const pocsoMembers = [
  { id: 1, name: "Sheba Reuben", designation: "Principal" },
  {
    id: 2,
    name: "Razia Sultana",
    designation: "Academic Head / Grievance Redressal Officer",
  },
  { id: 3, name: "Pavithra H V", designation: "Teacher" },
  { id: 4, name: "Subramani C", designation: "Social Worker / Lawyer" },
  { id: 5, name: "Shaik Safurah Falakh", designation: "Member (Head Girl)" },
  { id: 6, name: "Karthik", designation: "Member (Head Boy)" },
];

export default function ManagementCommitteeSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* School Management Committee Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4C231A]">
            School Management Committee
          </h2>
        </div>

        {/* Image Grid Section */}
        <div className="flex flex-col gap-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1">
            {managementMembersTop.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="w-[360px] h-[360px] max-w-full relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {managementMembersBottom.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-[#F5F1EB]"
              >
                <div className="w-[360px] h-[360px] max-w-full relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POCSO / POSCO Committee Table Section */}
        <div className="relative px-0 md:px-4 lg:px-0">
          {/* Overlapping logo on the right */}
          <div className="hidden md:block absolute -top-10 right-0 lg:-top-8 md:right-6 z-10 w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] rounded-full  flex items-center justify-center ">
            <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]">
              <Image
                src="/images/members/posco.png"
                alt="POCSO Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className=" rounded-lg  pt-6 pb-8 px-4 lg:pr-32">
            <h3 className="text-2xl  w-full bg- md:text-3xl font-bold text-[#4C231A] mb-4">
              POCSO Committee
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-x-1 border-spacing-y-3 text-sm md:text-base">
                <thead>
                  <tr className="bg-[#E79A58]">
                    <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-l-lg w-[70px]">
                      Sl. No.
                    </th>
                    <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base">
                      Names of the Members
                    </th>
                    <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-r-lg">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pocsoMembers.map((member, i) => (
                    <tr
                      key={member.id}
                      className={`${
                        i % 2 === 1 ? "bg-blue-50/60" : "bg-amber-50/60"
                      } rounded-lg text-center`}
                    >
                      <td className="px-6 py-4 md:py-5 lg:py-6 align-middle font-semibold text-black">
                        {member.id}
                      </td>
                      <td className="px-6 py-4 md:py-5 lg:py-6 align-middle text-black">
                        {member.name}
                      </td>
                      <td className="px-6 py-4 md:py-5 lg:py-6 align-middle text-black">
                        {member.designation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
