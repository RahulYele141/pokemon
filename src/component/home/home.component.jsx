import React, { useEffect, useState } from "react";
import Card from "../pokecard/card.component";
import './home.style.css'

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
    const [pokemons, setPokemon] = useState([])
    useEffect(() => {
        fetch(`${API_URL}?limit=18`)
            .then((response) => response.json())
            .then((response) => {
                const promises = response.results.map(url => {
                    return fetch(`${url.url}`).then(response => response.json());
                });
                Promise.all(promises).then(result => {
                    setPokemon(result)
                })
            });
    }, []);

    console.log(pokemons);

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
