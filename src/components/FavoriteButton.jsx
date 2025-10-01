import { useState } from 'react';
import '../css/FavoriteButton.css';

export default function FavoriteButton() {
    const [favorite, setFavorite] = useState(false);

    function handleFavoriteToggle() {
        e.preventDefault();
        e.stopPropagation();
        setFavorite(!favorite);
    }

    return (
        <div className='favorite-button'>
            <button onClick={handleFavoriteToggle}>{favorite ? '♥' : '♡'}</button>
        </div>
    );
}
