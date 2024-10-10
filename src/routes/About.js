import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject  heading="ABOUT." text="I am a full Stack Developer. "></HeroImgProject>
  <AboutContent/>
  <Footer/>
    </div>
  )
}

export default About
