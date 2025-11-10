import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import ContactSection from "../components/contact/ContactSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <ContactSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
