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

export function HomePage(){
    return(
        <>
        <Header/>
        <main>
            <section>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h2>Oi, meu nome é João Victor.</h2>
                    </div>
                    <div>
                        <h1></h1>
                        <p>Fique a vontade para dar uma olhada nos meus projetos e tecnologias. </p>
                    </div>
                    <div>
                        <Link to="/projects">
                        <button>Ver Projetos</button>
                        </Link>
                        <a href="https://github.com/joaovpf1">
                        <img src={githubicon} alt="Github icon" />
                        </a>
                    </div>
                    <div>
                        <img src={htmlicon} alt="Html icon" />
                        <img src={cssicon} alt="Css icon" />
                        <img src={jsicon} alt="Javascript icon" />
                        <img src={nodeicon} alt="Node icon" />
                        <img src={reacticon} alt="React Icon" />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1>Meus projetos</h1>
                </div>
                <ul>
                    <ProjectList/>
                </ul>
            </section>
            <section>
                <div>
                    <h1>Vamos conversar e desenvolver nossa criatividade juntos?</h1>
                    <p>Acesse meu curricúlo clicando <a href="https://docs.google.com/document/d/17wJRlESOE7CJH4cpRj7eudcV8WLB6zEqJu8Bng0Z1vQ/edit?usp=sharing">aqui</a></p>
                </div>
                <div>
                <div>
                        <img src={whatsappicon} alt="Whatsapp icon" />
                        <div>
                            <h2>Meu Whatsapp</h2>
                            <p>Me mande uma menasgem.</p>
                            <button><a href="mailto:jvictorpf@outlook.com">Mandar email</a></button>
                        </div>
                    </div>
                    <div>
                        <img src={emailicon} alt="Email icon" />
                        <div>
                            <h2>Meu email</h2>
                            <p>Me mande um email com seus feedbacks, sugestões e ideias.</p>
                            <button><a href="mailto:jvictorpf@outlook.com">Mandar email</a></button>
                        </div>
                    </div>
                    <div>
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