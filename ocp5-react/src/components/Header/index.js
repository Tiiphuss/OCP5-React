import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo Header.png'
import '../../styles/Header.scss'

function Header() {
    return (
        <header> 
            <img src={Logo} alt="Logo KASA" />
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/APropos">A Propos</Link>
                </nav>
        </header>
    )
}

export default Header
