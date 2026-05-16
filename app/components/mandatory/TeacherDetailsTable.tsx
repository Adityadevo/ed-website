import React from "react";

export interface TeacherRow {
  sl: number;
  teacherName: string;
  designation: string;
  qualification: string;
}

const defaultTeachers: TeacherRow[] = [
  { sl: 1, teacherName: "Anwar Pasha", designation: "HM", qualification: "B.Com, B.Ed, LLB" },
  { sl: 2, teacherName: "Shylaja.C", designation: "TGT", qualification: "BA, D.Ed" },
  { sl: 3, teacherName: "Malathi", designation: "NTT", qualification: "BA, NTT" },
  { sl: 4, teacherName: "Sameena Kousar", designation: "PRT", qualification: "B.Com, D.Ed" },
  { sl: 5, teacherName: "Jasmine.G", designation: "TGT", qualification: "B.Com, B.Ed" },
  { sl: 6, teacherName: "Dhivya Bharathi. S", designation: "TGT", qualification: "M.Sc, B.Ed" },
  { sl: 7, teacherName: "Anandhi M", designation: "PRT", qualification: "BA, D.Ed" },
  { sl: 8, teacherName: "Aruna Babu", designation: "OTHER", qualification: "BSc" },
  { sl: 9, teacherName: "Jyoti Kumari", designation: "TGT", qualification: "BA, B.Ed" },
  { sl: 10, teacherName: "Anjinappa Y S", designation: "PET", qualification: "PUC, B.PEd" },
  { sl: 11, teacherName: "Najma Nazneen", designation: "NTT", qualification: "PUC, NTT" },
  { sl: 12, teacherName: "N. Shailavathy", designation: "WELLNEES TEACHER", qualification: "MSc" },
  { sl: 13, teacherName: "S Karpagam", designation: "WELLNEES TEACHER", qualification: "MA" },
  { sl: 14, teacherName: "Sharvani T S", designation: "OTHER", qualification: "B.Lib" },
  { sl: 15, teacherName: "Monica R", designation: "TGT", qualification: "M.Sc, B.Ed" },
  { sl: 16, teacherName: "Pavithra H V", designation: "PGT", qualification: "M.Sc, B.Ed" },
  { sl: 17, teacherName: "Farheen Sultana A", designation: "PRT", qualification: "PUC, D.Ed" },
  { sl: 18, teacherName: "Lavanya.B.R", designation: "TGT", qualification: "M.Sc, B.Ed" },
  { sl: 19, teacherName: "Saraswathi.M", designation: "TGT", qualification: "MA, B.Ed" },
  { sl: 20, teacherName: "Sheba Reuben", designation: "PRINCIPAL", qualification: "M.A, B.Ed" },
  { sl: 21, teacherName: "Razia Sultana", designation: "TGT", qualification: "B.Sc, B.Ed" },
  { sl: 22, teacherName: "Sandhya S", designation: "TGT", qualification: "B.Sc, B.Ed" },
  { sl: 23, teacherName: "Sheetal Dinesh Kolhapure", designation: "PET", qualification: "BA, B.PEd" },
  { sl: 24, teacherName: "Janavi.J", designation: "TGT", qualification: "B.Com, B.Ed" },
  { sl: 25, teacherName: "Kishore Krishnan", designation: "TGT", qualification: "M-Tech" },
  { sl: 26, teacherName: "Mohammed Fairoz Beigh H", designation: "OTHER", qualification: "BE" },
  { sl: 27, teacherName: "Gayathri.K", designation: "TGT", qualification: "MA, B.Ed" },
  { sl: 28, teacherName: "Shahna.T", designation: "TGT", qualification: "MSc, B.Ed" },
  { sl: 29, teacherName: "Putul Kumari", designation: "PRT", qualification: "MSc, B.Ed" },
  { sl: 30, teacherName: "Sheba Suchitra", designation: "OTHER", qualification: "M.Sc, B.Ed" },
  { sl: 31, teacherName: "Harshitha.G.V", designation: "NTT", qualification: "B.Com, NTT" },
  { sl: 32, teacherName: "Petrisia Preethi Pius J", designation: "SPECIAL EDUCATOR", qualification: "BA, DSE (MR)" },
];

interface Props {
  title?: string;
  rows?: TeacherRow[];
}

const TeacherDetailsTable: React.FC<Props> = ({
  title = "Teacher Details",
  rows = defaultTeachers,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-[100px] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[15px] md:text-base font-semibold text-orange-500 mb-3">
          G : {title.toUpperCase()} :
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide whitespace-nowrap">
                  SL NO.
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide whitespace-nowrap">
                  TEACHER NAME
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide whitespace-nowrap">
                  DESIGNATION
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase tracking-wide whitespace-nowrap">
                  QUALIFICATION
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.sl} className="bg-white">
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 whitespace-nowrap">
                    {row.sl}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 font-medium whitespace-nowrap">
                    {row.teacherName}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 whitespace-nowrap">
                    {row.designation}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-left text-sm text-gray-900 break-words min-w-[220px]">
                    {row.qualification}
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

export default TeacherDetailsTable;