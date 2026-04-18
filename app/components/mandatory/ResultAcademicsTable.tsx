import React from "react";

export interface ResultAcademicsRow {
  sl: number;
  label: string;
  linkText?: string;
  href?: string;
}

const defaultRows: ResultAcademicsRow[] = [
  {
    sl: 1,
    label: "FEE STRUCTURE OF THE SCHOOL",
    linkText: "www.princetonpublicschool.com/FeeStructure",
    href: "/www.princetonpublicschool.com/Fees Structure.pdf",
  },
  {
    sl: 2,
    label: "ANNUAL ACADEMIC CALENDER",
    linkText: "www.princetonpublicschool.com/AcademicCalendar",
    href: "/www.princetonpublicschool.com/AcademicCalendar.pdf",
  },
  {
    sl: 3,
    label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
    linkText: "www.princetonpublicschool.com/SMC",
    href: "/www.princetonpublicschool.com/SMC List 2025-26.pdf",
  },
  {
    sl: 4,
    label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    linkText: "www.princetonpublicschool.com/PTA",
    href: "/www.princetonpublicschool.com/PTA.pdf",
  },
  {
    sl: 5,
    label:
      "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    linkText: "www.princetonpublicschool.com/ThreeYearsResult",
    href: "/www.princetonpublicschool.com/Three Year Result.pdf",
  },
];

interface Props {
  title?: string;
  rows?: ResultAcademicsRow[];
}

const ResultAcademicsTable: React.FC<Props> = ({
  title = "RESULT AND ACADEMICS",
  rows = defaultRows,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          C : {title} :
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                  SL NO.
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                  DOCUMENTS/INFORMATION
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide">
                  LINKS OF UPLOADED DOCUMENTS
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
                    {row.label}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900">
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full border border-blue-400 px-3 py-2 text-xs md:text-sm text-gray-900 hover:underline break-words"
                      >
                        {row.linkText ?? row.href}
                      </a>
                    ) : (
                      <span className="text-gray-500">NA</span>
                    )}
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

export default ResultAcademicsTable;
