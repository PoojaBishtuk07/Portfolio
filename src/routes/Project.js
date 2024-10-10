import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'
import ProjectCard from '../components/ProjectCard'
import Work from '../components/Work'
const Project = () => {
  return (
    <div>
  <Navbar/>
<HeroImgProject heading="PROJECTS" text="Some of my most recent  works "/>
<Work></Work>
  <Footer/>
    </div>
  )
}

export default Project
