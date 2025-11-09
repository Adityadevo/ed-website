import React from 'react'
import ProcedureSection from '../components/acadamics/Procedure'
import Navbar from '../components/Navbar'
import AcademicProgramSection from '../components/acadamics/AcademicProgramSection'
import ProgramsAndStayConnected from '../components/home/stay'
import StayConnected from '../components/home/stay'
import TestimonialsSection from '../components/home/TestimonialsSection'
import Footer from '../components/home/Footer'
import AdmissionsHero from '../components/home/AdmissionHero'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AdmissionsHero />
      <ProcedureSection />
      <AcademicProgramSection   />
      <StayConnected/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}

export default page
