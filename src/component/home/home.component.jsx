import React, { useEffect, useState } from "react";
import { fetchPokemonData, fetchPokemonTypes } from "../constants/api";
import Card from "../pokecard/card.component";
import './home.style.css'

//const colors = ['#DDCBD0', '#FCC1B0', '#B2D2E8', '#CFB7ED', '#F4D1A6', '#C5AEA8', '#C1E0C8', '#D7C2D7', '#C2D4CE', '#EDC2C4', '#CBD5ED', '#C0D4C8', '#E2E2A0', '#DDC0CF', '#C7D7DF', '#CADCDF', '#C6C5E3', '#E4C0CF', '#CODFDD', '#CACACA']

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetchPokemonData()
            setPokemons(response)
            const types = await fetchPokemonTypes()
            setTypes(types)
        }
        getData()
    }, []);


    console.log(types);
    return (
        <div className="home">
            {pokemons.map((pokemon, key) => {

                console.log(types[`${pokemon.types[0].type.name}`])
                console.log(types['grass'])
                console.log(pokemon.types[0].type.name)
                let color1 = types[pokemon.types[0].type.name]
                let color2 = types[pokemon.types[0].type.name]

                return (
                    <div className="cards" key={key}>
                        <Card color1={`${color1}`} color2={`${color2}`} img={`${pokemon.sprites.other.dream_world.front_default}`} pokemon={pokemon.name} index={key} ></Card>
                    </div>
                )
            })}
        </div>
    )
};

export default Home;
