import React, { useEffect, useState } from 'react'
import Home from '../home/home.component'

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const API = () => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`).then(response => {
            console.log(response);
            return response.json()
        }).then(response => {
            console.log(response);
            setPokemonList(response)
        })
    }, [])

    return (
        <div>
            <Home pokemonList={pokemonList} />
        </div>
    );

}

