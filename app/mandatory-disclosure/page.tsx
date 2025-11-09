import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import TestimonialsSection from "../components/home/TestimonialsSection";
import DisclosureHero from "../components/mandatory/DisclosureHero";
import GeneralInfoTable from "../components/mandatory/GeneralInfoTable";
import DocumentsTable from "../components/mandatory/DocumentsTable";
import InfrastructureTable from "../components/mandatory/InfrastructureTable";

export default function MandatoryDisclosurePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Hero: pass your image later via imageSrc prop or change default */}
      <DisclosureHero />

      {/* Sections */}
      <GeneralInfoTable />
      <DocumentsTable />
      <InfrastructureTable />

      {/* Testimonials + Footer */}
      <section className="px-4 md:px-8 lg:px-[100px]">
        <TestimonialsSection />
      </section>
      <Footer />
    </main>
  );
}
