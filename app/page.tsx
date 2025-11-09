import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/home/hero'
import WhyPrincetonSection from './components/home/whyprinceton'
import FeaturesSection from './components/home/imagesection'
import ProgramsAndStayConnected from './components/home/stay'
import TestimonialsSection from './components/home/TestimonialsSection'
import Footer from './components/home/Footer'

const page = () => {
  return (
   <div >
<Navbar/>
<HeroSection/>
<WhyPrincetonSection/>
<FeaturesSection/>
<ProgramsAndStayConnected/>
<TestimonialsSection/>
<Footer/>


</div>



  )

}

export default page
