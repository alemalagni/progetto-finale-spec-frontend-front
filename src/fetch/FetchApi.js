const urlAPI = 'http://localhost:3001/smartphones'

export async function getApi() {
    try {
        const response = await fetch(urlAPI);

        if (!response.ok) {
            throw new Error('Errore nel server');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('L\'operazione non è andata a buon fine:', error);
    }
};

export async function getApiById(id) {
    try {
        const response = await fetch(`${urlAPI}/${id}`);
        if (!response.ok) {
            throw new Error('Errore nel server');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('L\'operazione non è andata a buon fine:', error);
    }
};

export async function searchApi(query) {
    try {
        const response = await fetch(`${urlAPI}?${query}`);
        if (!response.ok) {
            throw new Error('Errore nel server');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Ricerca fallita:', error);
    }
}