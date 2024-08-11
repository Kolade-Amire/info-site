import logoSrc from './assets/logo.svg';
import './App.css'

const Header = () => {
    return (
        <header className="header">
            <div id="logo-container">
                <img src={logoSrc} id="logo" alt="Logo" />
            </div>
            <nav id="header-nav">
                <ul className="header-nav-list">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Stories</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Music</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Login</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header