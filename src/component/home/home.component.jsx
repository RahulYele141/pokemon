import React, { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
    const [pokemons, setPokemon] = useState([])
    useEffect(() => {
        fetch(`${API_URL}?limit=20`)
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
        <div>{pokemons.map((pokemon, key) => {
            return (
                <div key={key} style={{
                    display: 'flex', flexDirection: 'row'
                }}>
                    <div style={{ padding: '10px' }}>
                        <h1>
                            {('00' + (key + 1)).slice(-3)} {" "} {pokemon.name}
                        </h1>
                    </div>
                    {" "}
                    <div style={{ padding: '10px' }}>
                        <h1 href='' >
                            {pokemon.url}
                        </h1>
                        <img src={`${pokemon.sprites.other.dream_world.front_default}`} alt={pokemon.name} />
                    </div>
                </div>
            )
        })}</div>
    )
};

export default Home;
