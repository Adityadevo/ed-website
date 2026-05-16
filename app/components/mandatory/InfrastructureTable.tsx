import React from "react";

export interface InfraRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

const defaultInfra: InfraRow[] = [
  {
    sl: 1,
    label: "Total Campus Area (sq m)",
    value: <span className="font-semibold">4230.48</span>,
  },
  {
    sl: 2,
    label: "No. & Size of Classrooms",
    value: <span className="font-semibold">24&50 sq.m</span>,
  },
  {
    sl: 3,
    label: "No. & Size of Laboratories",
    value: <span className="font-semibold">4&76 sq.m</span>,
  },
  {
    sl: 4,
    label: "Internet Facility (Y / N)",
    value: <span className="font-semibold">Yes</span>,
  },
  {
    sl: 5,
    label: "No. of Girls Toilet",
    value: <span className="font-semibold">24</span>,
  },
  {
    sl: 6,
    label: "No. of Boys Toilet",
    value: <span className="font-semibold">24</span>,
  },
  {
    sl: 7,
    label: "Link of YouTube Video of School Inspection",
    value: (
      <a
        className="text-[#A64253] font-semibold hover:underline"
        target="_blank"
        href="https://youtu.be/eqqpNOBgk9I?si=yyMw-lmAf1LL034f"
      >
        Click here for Video
      </a>
    ),
  },
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
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          F : {title} :
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                  SL NO.
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                  INFORMATION
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                  DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.sl} className="bg-white">
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                    {row.sl}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 font-medium">
                    {String(row.label).toUpperCase()}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 break-words">
                    {row.value}
                  </td>
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
