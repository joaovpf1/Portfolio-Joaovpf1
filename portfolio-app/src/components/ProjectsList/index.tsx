import { projectList } from "../../database"
import styles from "./projectList.module.scss"
import githubIcon from "../../assets/github.png"
import share from "../../assets/share.png"

export function ProjectList(){
    return(
        <ul className={styles.listContainer}>
           {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p className={styles.techList}>Tecnologias: 
              <b>{project.technologies.join(', ')}</b> 
            </p>
            <p>{project.description}</p>
            <div>
              <a href={project.github}><img src={githubIcon} alt="Github icon" />GitHub</a>
              {project.link.length > 0 && 
              <a href={project.link}> <img src={share} alt="Share icon"/>Link</a>}
            </div>
          </li> 
          ))}
        </ul>
)
}