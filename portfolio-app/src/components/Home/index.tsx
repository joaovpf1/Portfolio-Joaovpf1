import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ProjectList } from "../ProjectsList";
import githubicon from "../../assets/githubicon.png"
import htmlicon from "../../assets/html.png"
import cssicon from "../../assets/css.png"
import jsicon from "../../assets/js.png"
import nodeicon from "../../assets/node.png"
import reacticon from "../../assets/react.png"
import whatsappicon from "../../assets/whatsappicon.png"
import emailicon from "../../assets/emailicon.png"
import linkedinicon from "../../assets/linkedinicon.png"
import fotoperfil from "../../assets/fotoperfil.jpg"
import styles from "./home.module.scss"

export function HomePage(){
    return(
        <>
        <Header/>
        <main className={styles.homeContainer}>
            <section className={styles.welcomeSection}>
                <div>
                    <div className={styles.ownerDiv}>
                        <img src={fotoperfil} alt="Owner's photo" />
                        <h2>Oi, meu nome é João Victor.</h2>
                    </div>
                    <div className={styles.textDiv}>
                        <h1>Dev full-stack dedicado à <b>desenvolver</b> projetos que entregam soluções de programação web <b>eficientes</b>.</h1>
                        <p>Fique a vontade para dar uma olhada nos meus projetos e tecnologias. </p>
                    </div>
                    <div className={styles.bttnDiv}>
                        <Link to="/projects">
                        <button>Ver Projetos</button>
                        </Link>
                        <a href="https://github.com/joaovpf1">
                        <img src={githubicon} alt="Github icon" />
                        </a>
                    </div>
                    <div className={styles.techDiv}>
                        <img src={htmlicon} alt="Html icon" />
                        <img src={cssicon} alt="Css icon" />
                        <img src={jsicon} alt="Javascript icon" />
                        <img src={nodeicon} alt="Node icon" />
                        <img src={reacticon} alt="React Icon" />
                    </div>
                </div>
            </section>
            <section className={styles.projectSection}>
                <div className={styles.titleDiv}>
                    <h1>Meus projetos</h1>
                </div>
                <ProjectList/>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.msgDiv}>
                    <h1>Vamos conversar e <b>desenvolver</b> nossa <b>criatividade</b> juntos?</h1>
                    <p>Acesse meu currículo clicando <a href="https://docs.google.com/document/d/17wJRlESOE7CJH4cpRj7eudcV8WLB6zEqJu8Bng0Z1vQ/edit?usp=sharing">aqui.</a></p>
                </div>
                <div className={styles.netDiv}>
                    <div className={styles.iconDiv}>
                        <img src={whatsappicon} alt="Whatsapp icon" />
                        <div>
                            <h2>Meu Whatsapp</h2>
                            <p>Me mande uma menasgem.</p>
                            <button><a href="mailto:jvictorpf@outlook.com">Mandar email</a></button>
                        </div>
                    </div>
                    <div className={styles.iconDiv}>
                        <img src={emailicon} alt="Email icon" />
                        <div>
                            <h2>Meu email</h2>
                            <p>Me mande um email com seus feedbacks, sugestões e ideias.</p>
                            <button><a href="mailto:jvictorpf@outlook.com">Mandar email</a></button>
                        </div>
                    </div>
                    <div className={styles.iconDiv}>
                        <img src={linkedinicon} alt="LinkedIn icon" />
                        <div>
                            <h2>Meu LinkedIn</h2>
                            <p>Podemos nos conectar para criar mais interação.</p>
                            <button><a href="www.linkedin.com/in/joão-victor-possidônio-ferreira-6aa891181">Ir para o LinkedIn</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
)
}