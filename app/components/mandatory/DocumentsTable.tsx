import React from "react";

export interface DocumentRow {
  sl: number;
  title: string;
  href?: string; // you will add real links later
}

const defaultDocs: DocumentRow[] = [
  { sl: 1, title: "Appendix IX" },
  { sl: 2, title: "Affiliation Letter" },
  { sl: 3, title: "Trust Certificate" },
  { sl: 4, title: "No Objection Certificate (NOC)" },
  { sl: 5, title: "Recognition Certificate" },
  { sl: 6, title: "Building Safety Certificate" },
  { sl: 7, title: "Fire Safety Certificate" },
  { sl: 8, title: "Water, Health and Sanitation Certificate" },
  { sl: 9, title: "Certification of Land" },
  { sl: 10, title: "Affidavit" },
  { sl: 11, title: "Fee Structure of the School" },
  { sl: 12, title: "Academic Calendar" },
  { sl: 13, title: "School Management Committee" },
  { sl: 14, title: "List of PTA Members" },
  { sl: 15, title: "3-year Results of Board Examination" },
  { sl: 16, title: "Teachers Details" },
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
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4A2F26] text-center mb-8">
          {title}
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-[#F6E3D6] text-[#4A2F26]">
                <th className="px-4 py-3 w-20">SL.</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3 w-28 text-center">File</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.sl} className={i % 2 === 0 ? "bg-amber-50/50" : "bg-white"}>
                  <td className="px-4 py-3 align-top text-gray-700">{row.sl}</td>
                  <td className="px-4 py-3 align-top text-gray-800">{row.title}</td>
                  <td className="px-4 py-3 align-top">
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-rose-300 text-rose-600 px-3 py-1 hover:bg-rose-50"
                      >
                        PDF
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-md border border-gray-200 text-gray-400 px-3 py-1">
                        PDF
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
