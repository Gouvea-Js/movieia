import '../../css/header.css'
import { Link } from 'react-router-dom';
import logoApp from '../../img/Logo.svg';
import { FaBolt } from 'react-icons/fa';

function Header(){
    return(
        <header>
            <Link to="/" className={'logo'}>
                <img src={logoApp} alt="Logo" />
            </Link>
            <Link to="/favoritos" className={'favoritos'} alt="Favoritos">Meus Filmes <span className={'bg-icon'} ><FaBolt className={'faBoltE'}/></span> </Link>
        </header>
    )
}
export default Header;