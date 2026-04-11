import React from "react";

export interface OtherDocumentRow {
  sl: number;
  label: string;
  href?: string;
}

const defaultRows: OtherDocumentRow[] = [
  // {
  //   sl: 1,
  //   label: "SELF CERTIFICATION",
  //   href: "/www.princetonpublicschool.com/Self Certification.pdf",
  // },
  {
    sl: 2,
    label: "ANNUAL REPORT 2025-26 WITH SIGNATURES",
    href: "/www.princetonpublicschool.com/Annual Report 2025-26 with signatures.pdf",
  },
  {
    sl: 3,
    label: "INFRASTRUCTURE DETAILS",
    href: "/www.princetonpublicschool.com/Infrastructure Details.pdf",
  },
  // {
  //   sl: 4,
  //   label: "LAND CERTIFICATE ANNEXURE B WITH SIGNATURES",
  //   href: "/www.princetonpublicschool.com/Land Certificate Annexure B with signatures.pdf",
  // },
  {
    sl: 4,
    label: "LIST OF BOOKS PRESCRIBED 2026-27",
    href: "/www.princetonpublicschool.com/List of books prescribed 2026-27.pdf",
  },
  {
    sl: 5,
    label: "NON-PROPRIETARY CHARACTER",
    href: "/www.princetonpublicschool.com/Non-propretiary character.pdf",
  },
  // {
  //   sl: 7,
  //   label: "PPS STAFF DETAILS",
  //   href: "/www.princetonpublicschool.com/PPS Staff Details.pdf",
  // },
  // {
  //   sl: 8,
  //   label: "PTA",
  //   href: "/www.princetonpublicschool.com/PTA.pdf",
  // },
  {
    sl: 6,
    label: "SAMPLE TC",
    href: "/www.princetonpublicschool.com/Sample TC.pdf",
  },
  {
    sl: 7,
    label: "TEACHER DETAILS",
    href: "/www.princetonpublicschool.com/Teacher Details.pdf",
  },
  // {
  //   sl: 8,
  //   label: "TRUST DEED",
  //   href: "/www.princetonpublicschool.com/Trust Deed.pdf",
  // },
];

interface Props {
  title?: string;
  rows?: OtherDocumentRow[];
}

const OtherDocumentsTable: React.FC<Props> = ({
  title = "OTHER DOCUMENTS",
  rows = defaultRows,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          D : {title} :
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
                        className="block w-full border border-blue-400 px-3 py-2 text-sm text-gray-900 hover:underline"
                      >
                        {row.href}
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

export default OtherDocumentsTable;
