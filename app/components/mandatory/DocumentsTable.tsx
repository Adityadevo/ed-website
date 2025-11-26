import React from "react";

export interface DocumentRow {
  sl: number;
  title: string;
  href?: string;
}

const defaultDocs: DocumentRow[] = [
  { sl: 1, title: "Affiliation Grant Letter", href: "/pdf/PPS Affiliation Grant Letter.pdf" },
  { sl: 2, title: "Affiliation Letter", href: "/pdf/PPS Land Certificate.pdf" },
  { sl: 3, title: "No Objection Certificate (NOC)", href: "/pdf/PPS NOC.pdf" },
  { sl: 4, title: "Recognition Certificate", href: "/pdf/PPS Recognition Certificate.pdf" },
  { sl: 5, title: "Building Safety Certificate", href: "/pdf/PPS Building Safety Certificate.pdf" },
  { sl: 6, title: "Fire Safety Certificate", href: "/pdf/PPS Fire Safety Certificate.pdf" },
  { sl: 7, title: "Drinking Water Test Certificate", href: "/pdf/PPS Drinking Water Test Report.pdf" },
  { sl: 8, title: "Fee Structure of the School", href: "/pdf/PPS Fee Structure.pdf" },
  { sl: 9, title: "Current Academic Calendar", href: "/pdf/PPS Academic Calendar.pdf" },
  { sl: 10, title: "Parent Teacher Association", href: "/pdf/PPS PTA.pdf" },
  { sl: 11, title: "Staff Details", href: "/pdf/PPS Staff Details.pdf" },
  // { sl: 12, title: "Academic Calendar", href: "/pdf/academic-calendar.pdf" },
  // { sl: 13, title: "School Management Committee", href: "/pdf/smc.pdf" },
  // { sl: 14, title: "List of PTA Members", href: "/pdf/pta-members.pdf" },
  // { sl: 15, title: "3-year Results of Board Examination", href: "/pdf/board-results.pdf" },
  // { sl: 16, title: "Teachers Details", href: "/pdf/teachers-details.pdf" },
];

interface Props {
  title?: string;
  rows?: DocumentRow[];
}

const DocumentsTable: React.FC<Props> = ({
  title = "Documents and Information",
  rows = defaultDocs,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A2F26] text-center mb-8">
          {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-3">
            <thead>
              <tr className="bg-[#E79A58]">
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-l-lg">SL. No</th>
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base">Document Name</th>
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-r-lg">Download</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.sl}
                  className={`${
                    i % 2 === 1 ? "bg-blue-50/60" : "bg-amber-50/60"
                  } rounded-lg text-center`}
                >
                  <td className="px-6 py-6 align-middle font-semibold">{row.sl}</td>
                  <td className="px-6 py-6 align-middle font-normal">{row.title}</td>
                  <td className="px-6 py-6 align-middle">
                    {row.href ? (
                      <a
                        href={row.href}
                        download
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                      >
                        <img src="/images/pdf.svg" alt="PDF Icon" className="h-10 w-10" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center text-gray-500">
                        N/A
                      </span>
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

export default DocumentsTable;
