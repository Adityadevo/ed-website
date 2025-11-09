import React from "react";

export interface InfraRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

const defaultInfra: InfraRow[] = [
  { sl: 1, label: "Total Campus Area (sq m)", value: "—" },
  { sl: 2, label: "No. & Size of Classrooms", value: "—" },
  { sl: 3, label: "No. & Size of Laboratories", value: "—" },
  { sl: 4, label: "Internet Facility (Y / N)", value: "—" },
  { sl: 5, label: "No. of Girls Toilet", value: "—" },
  { sl: 6, label: "No. of Boys Toilet", value: "—" },
  { sl: 7, label: "Link of YouTube Video of School Inspection", value: <a className="text-red-700 hover:underline" href="#">Click here for Video</a> },
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
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4A2F26] text-center mb-8">
          {title}
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-[#E79A58] text-white">
                <th className="px-4 py-3 w-20">SL. No</th>
                <th className="px-4 py-3">Information</th>
                <th className="px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.sl} className={i % 2 === 1 ? "bg-blue-50/60" : "bg-amber-50/60"}>
                  <td className="px-4 py-3 align-top text-gray-700">{row.sl}</td>
                  <td className="px-4 py-3 align-top font-medium text-gray-800">{row.label}</td>
                  <td className="px-4 py-3 align-top text-gray-800 break-words">{row.value}</td>
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
