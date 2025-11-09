import React from "react";

export interface InfoRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

const defaultRows: InfoRow[] = [
  { sl: 1, label: "Name of the School", value: "Princeton Public School" },
  { sl: 2, label: "Affiliation No. (If Applicable)", value: "—" },
  { sl: 3, label: "School Code (If Applicable)", value: "—" },
  { sl: 4, label: "Complete Address", value: "—" },
  { sl: 5, label: "Principal Name & Qualification", value: "—" },
  { sl: 6, label: "School Email ID", value: "—" },
  { sl: 7, label: "Contact Details (Landline/Mobile)", value: "—" },
];

interface Props {
  title?: string;
  rows?: InfoRow[];
}

const GeneralInfoTable: React.FC<Props> = ({
  title = "General Information",
  rows = defaultRows,
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

export default GeneralInfoTable;
