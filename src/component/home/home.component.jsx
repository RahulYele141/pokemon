import React, { useEffect, useState } from "react";
import { fetchPokemonData, fetchPokemonTypes } from "../constants/api";
import Card from "../pokecard/card.component";
import "./home.style.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetchPokemonData();
      const types = await fetchPokemonTypes();
      setPokemons(response);
      setTypes(types);
    }
    getData();
  }, []);

  return (
    <div className="home">
      {pokemons.map((pokemon, key) => {
        const pokemonKindList = pokemon.types.slice(0, 1);
        const pokemonKindName1 = pokemonKindList[0]?.type?.name;

        // const pokemonKindName2 = pokemonKindList[1]?.type?.name;

        const pokemonTypes = types.filter((type) => {
          const isTypeExist =
            type.hasOwnProperty(pokemonKindName1)
          //||type.hasOwnProperty(pokemonKindName2);
          return isTypeExist;
        });

        console.log(pokemonTypes, pokemonKindList);

        const color1 = pokemonTypes[0][pokemonKindName1]

        //const color2 = pokemonTypes[1][pokemonKindName2]? pokemonTypes[1][pokemonKindName2]: '';

        return (
          <div className="cards" key={key}>
            <Card
              color1={`${color1}`}
              color2={`${color1}`}
              img={`${pokemon.sprites.other.dream_world.front_default}`}
              pokemon={pokemon.name}
              index={key}
            ></Card>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
