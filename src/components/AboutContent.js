import "./AboutContentStyles.css"
import React from 'react'

import { Link } from "react-router-dom"
import picture from "../assets/mernstack1.jpg"
import picture1 from "../assets/mernStack.png"

const AboutContent = () => {
return (
    <div className="about">
        <div className="left">
            <h1>Who I AM?</h1>
            <p>
                I am a dedicated full-stack developer with a passion for creating intuitive and high-performance web applications. I have experience in a wide range of technologies, including  like JavaScript, React, Node.js, Mongodb  java, etc. and I specialize in building scalable, efficient, and responsive systems across both front-end and back-end.<br></br>

 I took a gap in my professional journey to focus on preparing for competitive examinations. During this period, I got a scholarship from N.I.T.S.E I developed strong problem-solving abilities, resilience, and time management skills—qualities that I now apply to my development work. The rigorous preparation process helped me sharpen my analytical thinking, which has proven invaluable in debugging, optimizing code, and tackling complex programming challenges.

Since returning to development, I have focused on expanding my technical expertise, working on projects that showcase my skills in modern frameworks and full-stack architecture. My experience during this gap has given me a renewed perspective and discipline that I bring to every project I undertake.

Outside of coding, I enjoy staying up-to-date with the latest industry trends and exploring new technologies to keep my skills sharp and relevant.
<br></br>

            </p>
            <Link to="/contact"> <button className="btn">Contact Me</button></Link>
        </div>
        <div className="right"> <h1>Soft Skills:-</h1>
            <div className="img-container"> 
                
                <div className="img-stack top">
                    <img src={picture1} className="picture" ></img>
                </div>
                 <div className="img-stack bottom ">
                    <img src={picture} className="picture" ></img>
                </div>
            </div>
        </div>
    </div>
)
}

export default AboutContent
