import React from "react";
import Image from "next/image";


export interface DocumentRow {
  sl: number;
  title: string;
  href?: string;
}


const defaultDocs: DocumentRow[] = [
  {
    sl: 1,
    title: "Copy of Affiliation Grant Letter",
    href: "/pdf/PPS Affiliation Grant Letter.pdf",
  },
  { sl: 2, title: "Copy of Land Certificate", href: "/pdf/PPS Land Certificate.pdf" },
  { sl: 3, title: "No Objection Certificate (NOC)", href: "/pdf/PPS NOC.pdf" },
  {
    sl: 4,
    title: "Copy of Recognition Certificate",
    href: "/pdf/PPS Recognition Certificate.pdf",
  },
  {
    sl: 5,
    title: "Copy of Building Safety Certificate",
    href: "/pdf/PPS Building Safety Certificate.pdf",
  },
  {
    sl: 6,
    title: "Copy of Fire Safety Certificate",
    href: "/pdf/PPS Fire Safety Certificate.pdf",
  },
  {
    sl: 7,
    title: "Copy of Drinking Water Test Certificate",
    href: "/pdf/PPS Drinking Water Test Report.pdf",
  },
  {
    sl: 8,
    title: "Copy of Fee Structure of the School",
    href: "/pdf/PPS Fee Structure.pdf",
  },
  {
    sl: 9,
    title: "Copy of Current Academic Calendar",
    href: "/pdf/PPS Academic Calendar.pdf",
  },
  { sl: 10, title: "Copy of Parent Teacher Association", href: "/pdf/PPS PTA.pdf" },
  { sl: 11, title: "Copy of Staff Details", href: "/pdf/PPS Staff Details.pdf" },
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
        <h2 className="text-xl md:text-4xl font-bold text-[#4A2F26] text-center mb-8">
          B : {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-3">
            <thead>
              <tr className="bg-[#E79A58]">
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-l-lg">
                  SL. No
                </th>
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base">
                  Document Name
                </th>
                <th className="px-6 py-4 text-center text-[#4A2F26] font-bold text-base rounded-r-lg">
                  Download
                </th>
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
                  <td className="px-6 py-6 align-middle text-black font-semibold">
                    {row.sl}
                  </td>
                  <td className="px-6 py-6 align-middle text-black font-normal">
                    {row.title}
                  </td>
                  <td className="px-6 py-6 align-middle">
                    {row.href ? (
                      <div className="flex items-center justify-center space-x-2">
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity text-[#4A2F26] underline"
                          title="Open in new tab"
                        >
                          {row.title}
                        </a>
                        {/* <a
                        href={row.href}
                        download
                        className="text-gray-600 hover:text-[#4A2F26] transition-colors"
                        title="Download"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </a> */}
                      </div>
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
