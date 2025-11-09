import React from 'react'
import AboutHeroSection from '../components/about/AboutHeroSection'
import AboutContentSection from '../components/about/AboutContentSection'
import FromTheDeskSection from '../components/about/Fromdesk'
import AboutOurSchoolSection from '../components/about/AboutSchool'
import HolisticLearningSection from '../components/about/Holistic'
import OutsideClassroomSection from '../components/about/OutsideClassroomSection'
import Footer from '../components/home/Footer'
import TestimonialsSection from '../components/home/TestimonialsSection'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
    <Navbar/>
      <AboutHeroSection />
      <AboutContentSection />
      <FromTheDeskSection   />
      <AboutOurSchoolSection />
      <HolisticLearningSection/>
      <OutsideClassroomSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}

export default page
