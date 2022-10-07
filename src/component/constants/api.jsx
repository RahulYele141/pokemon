const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon';
const API_TYPES = 'https://pokeapi.co/api/v2/type'

const colors = ['#DDCBD0', '#FCC1B0', '#B2D2E8', '#CFB7ED', '#F4D1A6', '#C5AEA8', '#C1E0C8', '#D7C2D7', '#C2D4CE', '#EDC2C4', '#CBD5ED', '#COD4C8', '#E2E2A0', '#DDCOCF', '#C7D7DF', '#CADCDF', '#C6C5E3', '#E4C0CF', '#CODFDD', '#CACACA']

export const fetchPokemonData = async () => {
    const response = await fetch(`${API_POKEMON}?limit=03`).then((response) => response.json());
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
    const types = json.map((type, ind) => {
        const name = type.name
        return name
    })
    const values = types.map((type, ind) => {
        let abc = {}
        abc[`${type}`] = colors[ind]
        return abc
    })
    console.log(values);
    return values
}