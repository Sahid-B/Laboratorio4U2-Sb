const BASE_URL = import.meta.env.VITE_API_URL;

export const obtenerPersonajes = async () => {
    try {
        const [response1, response2] = await Promise.all([
            fetch(`${BASE_URL}?page=1`),
            fetch(`${BASE_URL}?page=2`)
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();

        const todosLosPersonajes = [...data1.results, ...data2.results];
        return todosLosPersonajes;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
}
