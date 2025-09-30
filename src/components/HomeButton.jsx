import { Link } from 'react-router-dom';

export default function HomeButton() {
    return (
        <Link to="/" className="home-button">
            <button>Ritorna alla HomePage</button>
        </Link>
    );
}
