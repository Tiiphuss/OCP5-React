import {NavLink} from 'react-router-dom'
import Logo from '../../assets/Logo Header.png'
import '../../styles/Header.scss'

function Header() {
    return (
        <header> 
            <img src={Logo} alt="Logo KASA" />
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/APropos">A Propos</NavLink>
                </nav>
        </header>
    )
}

export default Header
