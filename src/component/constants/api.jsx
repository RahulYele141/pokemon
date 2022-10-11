const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";
const API_TYPES = "https://pokeapi.co/api/v2/type";
const API_STATS = "https://pokeapi.co/api/v2/stat";

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
  const response = await fetch(`${API_POKEMON}?limit=18`).then((response) =>
    response.json()
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
