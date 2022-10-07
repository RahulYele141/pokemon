import React, { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const collectData = async (url, response) => {
  let i = 0;
  let pokemons = [];

  for (i = 0; i < response.results.length; i++) {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }
};

const API = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?limit=05`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // collectData(,response);
        console.log(response.results);
        const pokemon = response.results.map((url) => {
          setPokemonList(url.url);
        });
        // setPokemonList(pokemon);
      });
    console.log(pokemonList);
  }, []);
};

export default API;
