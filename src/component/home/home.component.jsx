import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { fetchPokemonData } from "../constants/api";
import Card from "../pokecard/card.component";
import './home.style.css'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {

        async function getData() {
            const response = await fetchPokemonData()
            console.log(response);
            setPokemons(response)
        }
        getData()

        /*  fetch(`${API_URL}?limit=18`)
              .then((response) => response.json())
              .then((response) => {
                  const promises = response.results.map(url => {
                      return fetch(`${url.url}`).then(response => response.json());
                  });
                  Promise.all(promises).then(result => {
                      setPokemons(result)
                  })
              });*/

    }, []);

    return (
        <div className="home">{pokemons.map((pokemon, key) => {
            return (
                <div className="cards" key={key} style={{
                    display: 'flex', flexDirection: 'row'
                }}>
                    <Card img={`${pokemon.sprites.other.dream_world.front_default}`} pokemon={pokemon.name} index={key} ></Card>
                </div>
            )
        })}</div>
    )
};

export default Home;
