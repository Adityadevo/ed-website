'use client';

import React from 'react';
import { FileText, UserCheck, BookCheck, Award } from 'lucide-react';
import Link from 'next/link';

export default function AdmissionSection() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A2F26] mb-12 text-center">
          Admission Process
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We are elated to receive enquiries regarding admission. Parents or guardians seeking admission for their children are asked to apply by completing the official application form. Please ensure that whilst submitting the application form all relevant documents along with 2 color passport size photographs (Recently taken). Each and every applicant will be interviewed and will have to sit through an admission test that will be conducted prior to their admission. Please note that there will be an age restriction, only students who have the minimum age limit may apply. Transfer students must enclose official transfer certificates and transcripts from their last school.
          </p>
          
        
        </div>
      </div>
    </section>
  );
}
