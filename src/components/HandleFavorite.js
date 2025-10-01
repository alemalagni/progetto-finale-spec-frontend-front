export function addFavorites(id) {
    const favorites = getFavoriteDevices();
    if (!favorites.includes(id)) {
        favorites.push(id);
        updateStorage(favorites);
    }
}

export function removeFavorites(id) {
    const favorites = getFavoriteDevices();
    const index = favorites.findIndex(favId => favId === id);
    if (index !== -1) {
        favorites.splice(index, 1);
        updateStorage(favorites);
    }
}

export function getFavoriteDevices() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

function updateStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}