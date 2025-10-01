import { Link } from "react-router-dom";
import '../css/NavBar.css'

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Preferiti</Link></li>
            </ul>
        </nav>
    );
}