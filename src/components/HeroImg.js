import "./HeroImgStyles.css"
import React from 'react'
import bgpic from "../assets/bgportfolio.jpg"
import {Link} from "react-router-dom"
const HeroImg = () => {
return (
<div className="heroImg">
    <div className="mask">
        <img className="bg-Img" src={bgpic} alt="bgimg"/>
    </div>
        <div className="content">
            <p>Hi, I am Pooja Bisht 

            </p>
                <h1>A Full Stack Developer.

                </h1>
        <div>
                    <Link to="/project" className="btn">PROJECTS
                    </Link>
                            <Link to="/contact" className="btn-light">CONTACT 
                            </Link>

        </div>
    </div>
</div>
)
}

export default HeroImg
