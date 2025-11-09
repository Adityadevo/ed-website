import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/home/hero'
import WhyPrincetonSection from './components/home/whyprinceton'
import FeaturesSection from './components/home/imagesection'
import ProgramsAndStayConnected from './components/home/stay'
import TestimonialsSection from './components/home/TestimonialsSection'
import Footer from './components/home/Footer'
import DiveIntoOurProgram from './components/home/Diveinto'
import StayConnected from './components/home/stay'
import AdmissionsHero from './components/home/AdmissionHero'

const page = () => {
  return (
   <div >
<Navbar/>
<AdmissionsHero/>
<HeroSection/>
<WhyPrincetonSection/>
<FeaturesSection/>
<DiveIntoOurProgram/>
<StayConnected/>
<TestimonialsSection/>
<Footer/>


</div>



  )

}

export default page
