import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AdmissionSection from "../components/admission/AdmissionSection";

export default function AdmissionPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <AdmissionSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
