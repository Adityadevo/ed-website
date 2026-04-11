import React from "react";

export interface DocumentRow {
  sl: number;
  title: string;
  href?: string;
}

const defaultDocs: DocumentRow[] = [
  {
    sl: 1,
    title:
      "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
    href: "/www.princetonpublicschool.com/Affiliation Grant Letter.pdf",
  },
  {
    sl: 2,
    title:
      "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    href: "/www.princetonpublicschool.com/Trust Deed.pdf",
  },
  {
    sl: 3,
    title:
      "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    href: "/www.princetonpublicschool.com/No Objection Certificate.pdf",
  },
  {
    sl: 4,
    title:
      "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE",
    href: "/www.princetonpublicschool.com/Recognition Certificate.pdf",
  },
  {
    sl: 5,
    title:
      "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    href: "/www.princetonpublicschool.com/PPS Building Safety Certificatee.pdf",
  },
  {
    sl: 6,
    title:
      "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    href: "/www.princetonpublicschool.com/PPS Fire Safety Certificatee.pdf",
  },

   {
    sl: 7,
    title:
      "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
    href: "/www.princetonpublicschool.com/Self Certification.pdf",
  },
  {
    sl: 8,
    title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    href: "/www.princetonpublicschool.com/PPS Drinking Water Test Reportt.pdf",
  },
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
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          B : {title} :
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
                    {row.title}
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

        {/* <div className="mt-6"> */}
        {/* <h3 className="text-sm font-semibold text-blue-700 underline mb-2">
            NOTE:
          </h3>
          <p className="text-sm text-gray-900 leading-relaxed">
            THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED
            DOCUMENTS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL. IN CASE, IT
            IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE
            THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.
          </p> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default DocumentsTable;
