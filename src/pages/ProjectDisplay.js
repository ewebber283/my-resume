import React from "react";
import { useParams } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectList } from "../helpers/ProjectList";
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    //destructure id
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <a href={project.website}><h3>{project.website}</h3></a>
            <img src={project.image} />
            <p>
                Skills: {project.skills}
            </p>
            <a href={project.github}><GitHubIcon /></a>
        </div>

    );
}

export default ProjectDisplay;