const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = async () => {
    const data = await fetch(`${API_URL}?limit=18`).then((response) => response.json());
    const json = await data;

    const promises = await json.results.map(url => {
        return fetch(`${url.url}`).then(response => response.json());
    });

    const data1 = await Promise.all(promises).then(result => {
        return result
    })
    return data1
}
