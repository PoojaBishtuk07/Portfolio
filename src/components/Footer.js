import { FaDog ,FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
return (
    <div className="footer">
        <div className="footer-container">
        <div className="left-side">
            <div className="location">
                <FaHome size={30} style={{color:"#fff", marginRight:"2rem"}}/>
           
                    <div>
                        <p> Pincode : 248001</p>
                        <p>Phase 3 Yamnoutri Enclave </p>
                        <p>Chandrabani road,</p>
                        <p> Dehradun (Uttarakhand)  </p>
                    </div>
                     </div>
                    <div className="phone">
                        <h4> <FaPhone  size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                        (+91)-9149219230</h4>
                    </div>
                        <div className="email">
                            <h4> <FaMailBulk  size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                            bishtpooja.uk07@gmail.com
                            </h4>
                        </div>
        </div>
            <div className="right-side">
                <h4> About me</h4>
                <p> Aspiring for a challenging career in software development as to use my learned skills and experience for best results 
along with this, when I am not working I usually spend my time playing with my pet <FaDog /> 'Obi'.
                </p>
                <div className="social">
                <a href="https://www.facebook.com/share/E4G3HnXfJf3HHire/"> <FaFacebook  size={30} style={{color:"#fff", marginRight:"1rem"}}/> </a>  
                   <a href="(@bp_uk07): https://x.com/bp_uk07?t=LXoJa1zMgTGsx5_tk9zT_Q&s=08"><FaTwitter  size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                   <a href="https://www.linkedin.com/in/pooja-bisht-641471296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin  size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                  <a href="">  <FaInstagram  size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                </div>
            </div>

        </div>
    </div>
)
}

export default Footer
