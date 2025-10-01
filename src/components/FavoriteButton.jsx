import { useEffect, useState } from 'react';
import { getFavoriteDevices, addFavorites, removeFavorites } from './HandleFavorite';
import '../css/FavoriteButton.css';

export default function FavoriteButton({ id }) {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        getFavoriteDevices().includes(id) ? setFavorite(true) : setFavorite(false);
    }, []);

    function handleFavoriteToggle(e) {
        e.preventDefault();
        e.stopPropagation();
        setFavorite(!favorite);
    }

    return (
        <div className='favorite-button'>
            <button
                onClick={handleFavoriteToggle}
                className={favorite ? 'active' : ''}
            >
                {favorite ? '♥' : '♡'}
            </button>
        </div>
    );
}
