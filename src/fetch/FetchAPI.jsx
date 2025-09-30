export default function FetchAPI() {
    const urlAPI = 'http://localhost:3001/smartphones'
    const getAPI = async (urlAPI) => {
        try {
            const response = await fetch(urlAPI);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return { getAPI };
}