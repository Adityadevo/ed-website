import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import TestimonialsSection from "../components/home/TestimonialsSection";
import GeneralInfoTable from "../components/mandatory/GeneralInfoTable";
import DocumentsTable from "../components/mandatory/DocumentsTable";
import ResultAcademicsTable from "../components/mandatory/ResultAcademicsTable";
import OtherDocumentsTable from "../components/mandatory/OtherDocumentsTable";
import StaffTeachingTable from "../components/mandatory/StaffTeachingTable";
import InfrastructureTable from "../components/mandatory/InfrastructureTable";
import AdmissionsHero from "../components/home/AdmissionHero";
import TeacherDetailsTable from "../components/mandatory/TeacherDetailsTable";

export default function MandatoryDisclosurePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Hero: pass your image later via imageSrc prop or change default */}

      <AdmissionsHero
        title1="Mandatory Public"
        title2="Disclosure"
        subtitle={undefined}
        showLead={false}
      />
      {/* Sections */}
      <GeneralInfoTable />
      <DocumentsTable />
      <ResultAcademicsTable />
     
      <StaffTeachingTable />
      <InfrastructureTable />
      <TeacherDetailsTable/>
       <OtherDocumentsTable />

      {/* Testimonials + Footer */}
      <section className="px-4 md:px-8 lg:px-[100px]">
        <TestimonialsSection />
      </section>
      <Footer />
    </main>
  );
}
