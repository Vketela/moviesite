const API_KEY = "a7a5f604892694a0a4ada1e91da590d9";
const BASE_URL = "https://api.themoviedb.org/3";

async function getData(endpoint) {
    const url = `${BASE_URL}${endpoint}api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
export default getData;
