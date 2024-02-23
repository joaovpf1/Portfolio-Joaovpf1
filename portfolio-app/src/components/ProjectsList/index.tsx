import { projects } from "../../database"

export function ProjectList(){
    return(
        <ul>
           {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Tecnologias:
                <p>{project.technologies.join(', ')}</p> 
            </p>
            <div>
              <a href={project.github}>GitHub</a>
              {project.link.length > 0 && 
              <a href={project.link}>Link</a>}
            </div>
          </li> 
          ))}
        </ul>
)
}