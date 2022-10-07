import React, { useEffect, useState } from "react";
import { fetchPokemonData, fetchPokemonTypes } from "../constants/api";
import Card from "../pokecard/card.component";
import "./home.style.css";

//const colors = ['#DDCBD0', '#FCC1B0', '#B2D2E8', '#CFB7ED', '#F4D1A6', '#C5AEA8', '#C1E0C8', '#D7C2D7', '#C2D4CE', '#EDC2C4', '#CBD5ED', '#C0D4C8', '#E2E2A0', '#DDC0CF', '#C7D7DF', '#CADCDF', '#C6C5E3', '#E4C0CF', '#CODFDD', '#CACACA']

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
        const pokemonKindList = pokemon.types.slice(0, 2);

        const pokemonKindName1 = pokemonKindList[0]?.type?.name;
        const pokemonKindName2 = pokemonKindList[1]?.type?.name;

        const pokemonTypes = types.filter((type) => {
          const isTypeExist =
            type.hasOwnProperty(pokemonKindName1) ||
            type.hasOwnProperty(pokemonKindName2);
          return isTypeExist;
        });

        // console.log(pokemonTypes);

        const color1 = pokemonTypes[0]?.[pokemonKindName1]
          ? pokemonTypes[0][pokemonKindName1]
          : "#DDCBD0";

        const color2 = pokemonTypes[1]?.[pokemonKindName2]
          ? pokemonTypes[1][pokemonKindName2]
          : color1;

        console.log(
          pokemonTypes,
          "color1",
          pokemonTypes[0]?.[pokemonKindName1],
          "color2",
          pokemonTypes[1]?.[pokemonKindName2]
        );
        console.log(color1, "&&", color2);

        return (
          <div className="cards" key={key}>
            <Card
              color1={`${color1}`}
              color2={`${color2}`}
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
