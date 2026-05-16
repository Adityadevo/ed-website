import React from "react";

export interface StaffTeachingRow {
  sl: number;
  label: string;
  value: React.ReactNode;
}

interface ResultRow {
  sl: number;
  year?: string;
  registered?: string;
  passed?: string;
  passPercentage?: string;
  remarks: string;
}

const defaultRows: StaffTeachingRow[] = [
  { sl: 1, label: "PRINCIPAL", value: "ONE" },
  {
    sl: 2,
    label: "TOTAL NO. OF TEACHERS",
    value: (
      <table className="w-full table-fixed border border-gray-300 border-collapse">
        <colgroup>
          <col className="w-[45%]" />
          <col className="w-[55%]" />
        </colgroup>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-sm">
              TOTAL NO. OF TEACHERS
            </td>
            <td className="border border-gray-300 px-4 py-3 text-sm">26</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-sm">PGT</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">01</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-sm">TGT</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">15</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-sm">PRT</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">04</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  { sl: 3, label: "TEACHERS SECTION RATIO", value: "1:1.5" },
  {
    sl: 4,
    label: "DETAILS OF SPECIAL EDUCATOR",
    value: "Ms PETRICIA PREETHI, BA, DIP IN SPECIAL EDUCATION (MR)",
  },
  {
    sl: 5,
    label: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
    value:
      "Mrs Sheba Suchitra, M.Sc Counselling, B.Ed, Mrs Shailavathy, M.Sc Nursing",
  },
];

const defaultResultClassX: ResultRow[] = [
  {
    sl: 1,
    year: "2025",
    registered: "27",
    passed: "27",
    passPercentage: "100",
    remarks: "CENT PERCENT",
  },
];

const defaultResultClassXII: ResultRow[] = [
  {
    sl: 1,
    year: "",
    registered: "",
    passed: "",
    passPercentage: "",
    remarks: "NA",
  },
];

interface Props {
  title?: string;
  rows?: StaffTeachingRow[];
  resultClassX?: ResultRow[];
  resultClassXII?: ResultRow[];
}

const StaffTeachingTable: React.FC<Props> = ({
  title = "STAFF (TEACHING)",
  rows = defaultRows,
  resultClassX = defaultResultClassX,
  resultClassXII = defaultResultClassXII,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          D : {title} :
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-300 border-collapse">
            <colgroup>
              <col className="w-[72px]" />
              <col className="w-[45%]" />
              <col className="w-[55%]" />
            </colgroup>
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
              {rows.map((row) => {
                if (row.sl === 2) {
                  return (
                    <tr key={row.sl} className="bg-white">
                      <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                        {row.sl}
                      </td>
                      <td className="border border-gray-300 p-0" colSpan={2}>
                        {row.value}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={row.sl} className="bg-white">
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {row.sl}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 font-medium">
                      {row.label}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {row.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h3 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
            RESULT CLASS: X
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    YEAR
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    NO. OF REGISTERED STUDENTS
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    NO. OF STUDENTS PASSED
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    PASS PERCENTAGE
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    REMARKS
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultClassX.map((r) => (
                  <tr key={`x-${r.sl}`} className="bg-white">
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.sl}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.registered}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.passed}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.passPercentage}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 font-medium">
                      {r.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="mt-10">
          <h3 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
            RESULT CLASS: XII
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    YEAR
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    NO. OF REGISTERED STUDENTS
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    NO. OF STUDENTS PASSED
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    PASS PERCENTAGE
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                    REMARKS
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultClassXII.map((r) => (
                  <tr key={`xii-${r.sl}`} className="bg-white">
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.sl}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.registered}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.passed}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                      {r.passPercentage}
                    </td>
                    <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 font-medium">
                      {r.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default StaffTeachingTable;
