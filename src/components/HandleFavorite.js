const favoriteDevices = [];

export function addFavorites(id) {
    if (!favoriteDevices.includes(id)) {
        favoriteDevices.push(id);
    }
}

export function removeFavorites(id) {
    const index = favoriteDevices.findIndex(favId => favId === id);
    if (index !== -1) {
        favoriteDevices.splice(index, 1);
    }
}

export function getFavoriteDevices() {
    return favoriteDevices;
}