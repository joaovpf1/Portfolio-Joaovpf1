import { Link } from 'react-router-dom';
import styles from "./header.module.scss"

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <h1>João Victor</h1>
            <div>
                <Link to="/">
                <button>Home</button>
                </Link>
                <Link to="/projects">
                <button>Projetos</button>
                </Link>
                <Link to="/aboutme">
                <button>Sobre mim</button>
                </Link>
            </div>
        </header>
)
}