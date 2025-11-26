import React from "react";

export interface InfoRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

const defaultRows: InfoRow[] = [
  { sl: 1, label: "Name of the School", value: "Princeton Public School" },
  { sl: 2, label: "Affiliation No. (If Applicable)", value: "3530528" },
  { sl: 3, label: "School Code (If Applicable)", value: "830880" },
  {
    sl: 4,
    label: "Complete Address",
    value: "#96, Jyothinagar, Medahalli, Virgonagar Post, Bengaluru - 560049",
  },
  {
    sl: 5,
    label: "Principal Name & Qualification",
    value: "Mrs. Sheba Reuben, M.A, B.Ed.",
  },
  {
    sl: 6,
    label: "School Email ID",
    value: (
      <>
        <a
          href="mailto:princeton2011@hotmail.com"
          className="text-blue-700 underline font-semibold"
        >
          princeton2011@hotmail.com
        </a>{" "}
        /{" "}
        <a
          href="mailto:45979@cbseshiksha.in"
          className="text-blue-700 underline font-semibold"
        >
          45979@cbseshiksha.in
        </a>
      </>
    ),
  },
  {
    sl: 7,
    label: "Contact Details (Landline/Mobile)",
    value: (
      <>
        <span className="font-semibold">8861290882</span> /{" "}
        <span className="font-semibold">7259839993</span>
      </>
    ),
  },
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
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A2F26] text-center mb-8">
          {title}
        </h2>
        <div className="overflow-x-auto ">
          <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-3">
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
                  // style={{ boxShadow: "0 2px 6px #e0e0e0" }}
                >
                  <td className="px-6 py-6 align-middle font-semibold">{row.sl}</td>
                  <td className="px-6 py-6 align-middle font-normal">{row.label}</td>
                  <td className="px-6 py-6 align-middle font-semibold break-words">{row.value}</td>
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
