export default function FetchAPI() {
    const urlAPI = 'http://localhost:3001/smartphones'
    async function getAPI() {
        try {
            const response = await fetch(urlAPI);
            if (!response.ok) {
                throw new Error('Errore nel server');
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('L\'operazione non è andata a buon fine:', error);
        }
    };

    async function getAPIById(id) {
        try {
            const response = await fetch(`${urlAPI}/${id}`);
            if (!response.ok) {
                throw new Error('Errore nel server');
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('L\'operazione non è andata a buon fine:', error);
        }
    };

    return { getAPI, getAPIById };
}