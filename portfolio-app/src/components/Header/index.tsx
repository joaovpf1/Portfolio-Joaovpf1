import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header>
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