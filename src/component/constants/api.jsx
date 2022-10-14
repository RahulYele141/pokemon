const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";
const API_TYPES = "https://pokeapi.co/api/v2/type";
const API_STATS = "https://pokeapi.co/api/v2/stat";
const API_SPEC = "https://pokeapi.co/api/v2/pokemon-species/";
const numberOfPokemon = 24;

const colors = [
  "#DDCBD0",
  "#FCC1B0",
  "#B2D2E8",
  "#CFB7ED",
  "#F4D1A6",
  "#C5AEA8",
  "#C1E0C8",
  "#D7C2D7",
  "#C2D4CE",
  "#EDC2C4",
  "#CBD5ED",
  "#C0D4C8",
  "#E2E200",
  "#DDC0CF",
  "#C7D7DF",
  "#CADCDF",
  "#C6C5E3",
  "#E4C0CF",
  "#C0DFDD",
  "#CACACA",
];

export const fetchPokemonData = async () => {
  const response = await fetch(`${API_POKEMON}?limit=${numberOfPokemon}`).then(
    (response) => response.json()
  );
  const json = await response.results;

  const promises = await json.map((url) => {
    return fetch(`${url.url}`).then((response) => response.json());
  });

  const allPokemons = await Promise.all(promises).then((result) => {
    return result;
  });
  return allPokemons;
};

export const fetchPokemonTypes = async () => {
  const response = await fetch(`${API_TYPES}`).then((response) =>
    response.json()
  );
  const json = await response.results;
  const types = json.map((type) => {
    const name = type.name;
    return name;
  });
  const values = types.map((type, ind) => {
    let abc = {};
    abc[`${type}`] = colors[ind];
    return abc;
  });
  return { values, types };
};

export const fetchPokemonStats = async () => {
  const response = await fetch(`${API_STATS}`).then((response) =>
    response.json()
  );
  const json = await response.results;
  const stats = json.map((type) => {
    const name = type.name;
    return name;
  });

  return stats.slice(0, 6);
};

export const fetchPokemonDesc = async () => {
  const response = await fetch(`${API_SPEC}?limit=${numberOfPokemon}`).then(
    (response) => response.json()
  );
  const json = await response.results;

  const promises = await json.map((url) => {
    return fetch(`${url.url}`).then((response) => response.json());
  });

  const allPokemonsDescriptions = await Promise.all(promises).then((result) => {
    return result;
  });
  return allPokemonsDescriptions;
};

export const fetchPokemonEvolution = async (id) => {
  console.log(id);
  const response = await fetch(`${API_SPEC}${id}`).then((response) =>
    response.json()
  );
  const evolve = response.evolution_chain.url;

  const evolResponse = await fetch(`${evolve}`).then((response) =>
    response.json()
  );
  const firstSpec = evolResponse?.chain?.species.name;
  const secondSec = evolResponse?.chain?.evolves_to[0]?.species.name;
  const thirdSpec =
    evolResponse?.chain?.evolves_to[0]?.evolves_to[0]?.species.name;

  return { firstSpec, secondSec, thirdSpec };
};
