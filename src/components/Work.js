import "./WorkDataStyles.css"
import "./ProjectCardStyles.css"
import React from 'react'
import ProjectCard from "./ProjectCard"
import WorkData from "./WorkData"
const Work = () => {
return(
    <>
   
        <div className="project-container" > 
            {
                WorkData.map((val,index)=>{
                    return (
                        <ProjectCard 
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}
                        ></ProjectCard>
                    )
                })
            }
            
        </div>
  
    
    </>
    )
}

export default  Work 
