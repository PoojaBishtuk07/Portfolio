import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'
import Form from "../components/Form"
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject  heading="Contact Me." text="Lets have a chat     "></HeroImgProject>
<Form></Form>

  <Footer/>
    </div>
  )
}

export default Contact
