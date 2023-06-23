import React from "react";

function ProjectList({ project })  {
    return (
        <div className="projects">
            <img src={project.img} alt='' category={project.category}/>
            {/* <p>{project.category}</p> */}
        </div>
    )
}

export default ProjectList