import { Footer } from "../Footer";
import { Header } from "../Header";
import { ProjectList } from "../ProjectsList";
import styles from "./projectPage.module.scss"

export function ProjectsPage(){

    
    return(
    <>
        <Header/>
        <main className={styles.projectContainer}>
            <section>
                <div className={styles.titleDiv}>
                    <h1>Meus projetos</h1>
                </div>
                <div>
                    <ProjectList/>
                </div>
            </section>
        </main>
        <Footer/>
    </>
)
}