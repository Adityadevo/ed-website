import React from "react";

export interface InfraRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

const defaultInfra: InfraRow[] = [
  { sl: 1, label: "Total Campus Area (sq m)", value: <span className="font-semibold">4230.48</span> },
  { sl: 2, label: "No. & Size of Classrooms", value: <span className="font-semibold">24&50 sq.m</span> },
  { sl: 3, label: "No. & Size of Laboratories", value: <span className="font-semibold">5&76 sq.m</span> },
  { sl: 4, label: "Internet Facility (Y / N)", value: <span className="font-semibold">Yes</span> },
  { sl: 5, label: "No. of Girls Toilet", value: <span className="font-semibold">24</span> },
  { sl: 6, label: "No. of Boys Toilet", value: <span className="font-semibold">24</span> },
  { sl: 7, label: "Link of YouTube Video of School Inspection", value: <a className="text-[#A64253] font-semibold hover:underline" target="_blank" href="https://youtu.be/pY-qc-ybe28?si=GpG-uDGOtv1vUhEH">Click here for Video</a> },
];

interface Props {
  title?: string;
  rows?: InfraRow[];
}

const InfrastructureTable: React.FC<Props> = ({
  title = "School Infrastructure",
  rows = defaultInfra,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A2F26] text-center mb-8">
          {title}
        </h2>
        <div className="overflow-x-auto ">
          <table className="min-w-full border-separate border-spacing-x-3 border-spacing-y-4">
            <thead>
              <tr className="bg-[#E79A58]">
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-l-lg">SL. No</th>
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base">Information</th>
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-r-lg">Details</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.sl}
                  className={`${
                    i % 2 === 1 ? "bg-blue-50/60" : "bg-amber-50/60"
                  } rounded-lg text-center text-[15px]`}
                  // style={{ boxShadow: "0 1px 1px #e0e0e0" }}
                >
                  <td className="px-6 py-6 align-middle text-black font-normal">{row.sl}</td>
                  <td className="px-6 py-6 align-middle text-black font-normal">{row.label}</td>
                  <td className="px-6 py-6 align-middle text-black break-words">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureTable;
