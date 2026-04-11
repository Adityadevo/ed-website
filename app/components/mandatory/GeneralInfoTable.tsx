import React from "react";

export interface InfoRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

const defaultRows: InfoRow[] = [
  {
    sl: 1,
    label: "Name of the School",
    value: <span className="font-['Storybook']">Princeton Public School</span>,
  },
  { sl: 2, label: "Affiliation No. (If Applicable)", value: "830880" },
  { sl: 3, label: "School Code (If Applicable)", value: "45979" },
  {
    sl: 4,
    label: "Complete Address with Pin Code",
    value:
      "PRINCETON PUBLIC SCHOOL, NO. 96, JYOTHI NAGAR, MEDAHALLI, VIRGONAGAR POST, BANGALORE 560049. KARNATAKA.",
  },
  {
    sl: 5,
    label: "Principal Name",
    value: "Mrs. Sheba Reuben",
  },
  {
    sl: 6,
    label: "Principal Qualification",
    value: "M.A, B.Ed",
  },
  {
    sl: 7,
    label: "School Email ID",
    value: (
      <a
        href="mailto:45979@cbseshiksha.in"
        className="text-blue-700 underline font-semibold"
      >
        45979@cbseshiksha.in
      </a>
    ),
  },
  {
    sl: 8,
    label: "Contact Details (Landline/Mobile)",
    value: <span className="font-semibold">8861290882</span>,
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
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          A : {title} :
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

export default GeneralInfoTable;
