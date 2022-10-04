import React, { useEffect, useState } from 'react'

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const Home = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonInfo, setPokemonInfo] = useState([])

    useEffect(() => {
        fetch(`${API_URL}?limit=20`).then(response => {
            return response.json()
        }).then(response => {
            // response.results
            const pokemon = response.results.map((url) => {
                console.log(url);
                return url.url
            })
            setPokemonInfo(pokemon)
            setPokemonList(response.results)
        })
    }, [])
    console.log(pokemonInfo);

    const fetchPokemon = (index) => {
        console.log(index);
        fetch(`${API_URL}/${index}`).then(response => response.json()).then(response => {
            console.log(response);

        })
    }

    return (
        <div>{pokemonList.map((pokemon, key) => {
            return (
                <div key={key} style={{
                    display: 'flex', flexDirection: 'row'
                }}>
                    <div style={{ padding: '10px' }}>
                        <h1>
                            {key + 1} {" "} {pokemon.name}
                        </h1>
                    </div>
                    {" "}
                    <div style={{ padding: '10px' }}>
                        <h1 onClick={() => fetchPokemon(key + 1)} href=''>
                            {pokemon.url}
                        </h1>
                    </div>
                </div>
            )
        })}</div >
    )
}

export default Home