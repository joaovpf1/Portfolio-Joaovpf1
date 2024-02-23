import { Footer } from "../Footer";
import { Header } from "../Header";
import { ProjectList } from "../ProjectsList";

export function ProjectsPage(){
    return(
    <>
        <Header/>
        <main>
            <section>
                <div>
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