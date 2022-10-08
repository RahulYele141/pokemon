import React, { useEffect, useState } from "react";
import Filters from "../../filters/filters.component";
import Header from "../header/header.component";
import Card from "../pokecard/card.component";
import { fetchPokemonData, fetchPokemonTypes, fetchPokemonStats } from "../constants/api";
import "./home.style.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchField, setSearchField] = useState('')
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [stats, setStats] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetchPokemonData();
      const { types, values } = await fetchPokemonTypes();
      const stats = await fetchPokemonStats();
      console.log(stats);
      setStats(stats);
      setPokemons(response);
      setPokemonTypes(types)
      setTypes(values);
    }
    getData();
  }, []);

  const serachPokemon = (e) => {
    setSearchField(e.target.value);
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.includes(e.target.value)
    })
    setFilteredPokemons(filteredPokemons)

    if (e.target.value === "") {
      setFilteredPokemons([]);
      setSearchField("");
    }
  }
  const filterByType = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value)
    const filteredPokemons = pokemons.filter((pokemon) => {
      return (pokemon.types[0].type.name.includes(e.target.value) || pokemon.types[0].type.name.includes(e.target.value))
    })
    console.log(filteredPokemons);
    setFilteredPokemons(filteredPokemons)

  }


  console.log(pokemons);
  return (
    <div>
      <div>
        <Header ></Header>
      </div>
      <div>
        <Filters filterByType={filterByType} types={pokemonTypes} stats={stats} searchPokemon={serachPokemon} ></Filters>
      </div>
      <div className="home">
        {
          filteredPokemons.length === 0 || searchField === "" ?
            pokemons.map((pokemon, key) => {
              const pokemonKindList = pokemon.types.slice(0, 1);
              const pokemonKindName1 = pokemonKindList[0]?.type?.name;
              // const pokemonKindName2 = pokemonKindList[1]?.type?.name;

              const pokemonTypes = types.filter((type) => {
                const isTypeExist =
                  type.hasOwnProperty(pokemonKindName1)
                //||type.hasOwnProperty(pokemonKindName2);
                return isTypeExist;
              });

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
            }) : filteredPokemons.map((pokemon, key) => {
              const pokemonKindList = pokemon.types.slice(0, 1);
              const pokemonKindName1 = pokemonKindList[0]?.type?.name;
              // const pokemonKindName2 = pokemonKindList[1]?.type?.name;

              const pokemonTypes = types.filter((type) => {
                const isTypeExist =
                  type.hasOwnProperty(pokemonKindName1)
                //||type.hasOwnProperty(pokemonKindName2);
                return isTypeExist;
              });

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
            })
        }
      </div>
    </div>
  );
};

export default Home;
