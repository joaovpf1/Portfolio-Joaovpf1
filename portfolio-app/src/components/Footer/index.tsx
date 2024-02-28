import linkedinIcon from "../../assets/Bt-Circle.png"
import fotoperfil from "../../assets/fotoperfil.jpg"
import styles from "./footer.module.scss"

export function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.textDiv}>
                <img src={fotoperfil} alt="Owner's photo" />
                <div>
                    <h1>Obrigado!</h1>
                    <p>Me segue no LinkedIn e vamos conversar.</p>
                </div>
            </div>
            <div className={styles.iconDiv}>
                <a href="https://www.linkedin.com/in/joão-victor-possidônio-ferreira-6aa891181">
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </div>
        </footer>
)
}