import "./ProjectCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
const ProjectCard = (props) => {
return(
    <>
    <div className="work-container">
        <div className="project-container" >
                <div className="project-card">
                <img src={props.imgsrc} alt="img1"/>
                    <h2 className="project-title">{props.title}</h2>
                        <div className="pro-details">
                            <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view} className="btn">View</NavLink>
                            <NavLink to={props.source} className="btn">Source</NavLink>

                        </div>
                        </div>
            </div>
        </div>
    </div>
    
    </>
    )
}

export default ProjectCard
   