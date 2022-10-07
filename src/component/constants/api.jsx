const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon';
const API_TYPES = 'https://pokeapi.co/api/v2/type'

export const fetchPokemonData = async () => {
    const response = await fetch(`${API_POKEMON}?limit=04`).then((response) => response.json());
    const json = await response.results;

    const promises = await json.map(url => {
        return fetch(`${url.url}`).then(response => response.json());
    });

    const allPokemons = await Promise.all(promises).then(result => {
        return result
    })
    return allPokemons
}


export const fetchPokemonTypes = async () => {
    const response = await fetch(`${API_TYPES}`).then(response => response.json())
    const json = await response.results
    const types = json.map((type) => {
        return type.name
    })
    return types
}