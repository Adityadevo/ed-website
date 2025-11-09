import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import FacilitiesHero from "../components/features/FacilitiesHero";
import AmenitiesGrid from "../components/features/AmenitiesGrid";
import StayConnectedGallery from "../components/features/StayConnectedGallery";
import TestimonialsSection from "../components/home/TestimonialsSection";

const FeaturesPage = () => {
  return (
    <div>
      <Navbar />
      <FacilitiesHero />
      <AmenitiesGrid />
      <StayConnectedGallery />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
