import React, { useEffect, useState } from "react";
import Filters from "../filters/filters.component";
import Header from "../header/header.component";
import Card from "../../helpers/pokecard/card.component";
import {
  fetchPokemonData,
  fetchPokemonTypes,
  fetchPokemonStats,
} from "../../constants/api";
import "./home.style.css";
import Modal from "../modal/modal.component";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [typeField, setTypeField] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [infoModalPokemon, setInfoModalPokemon] = useState();

  const handleOpen = () => setOpenInfoModal(!openInfoModal);
  const handleClose = () => setOpenInfoModal(false);

  useEffect(() => {
    async function getData() {
      const response = await fetchPokemonData();
      const { types, values } = await fetchPokemonTypes();
      const stats = await fetchPokemonStats();
      setStats(stats);
      setPokemons(response);
      setPokemonTypes(types);
      setTypes(values);
    }
    getData();
  }, []);

  const serachPokemon = (e) => {
    setSearchField(e.target.value);
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.includes(e.target.value);
    });
    setFilteredPokemons(filteredPokemons);

    if (e.target.value === "") {
      setFilteredPokemons([]);
      setSearchField("");
    }
  };
  const filterByType = (e) => {
    const val = e.target.labels[0].innerText.toLocaleLowerCase();
    let selectedTypes = [];
    if (!typeField.includes(val)) {
      selectedTypes = [...typeField, val];
    } else {
      selectedTypes = typeField.filter((tp) => tp !== val);
    }
    setTypeField(selectedTypes);

    const filtered = pokemons.filter((pk) => {
      const typesMatched = pk.types.filter((tp) => {
        return selectedTypes.includes(tp.type.name);
      });
      if (typesMatched.length === selectedTypes.length) {
        return pk;
      }
    });
    setFilteredPokemons(filtered);
    setSearchField();
  };

  const filterByStats = (values) => {
    let filtered = [];
    pokemons.forEach((pk, index) => {
      values.filter((val) => {
        if (
          pk.stats[index]?.base_stat > val.value[0] &&
          pk.stats[index]?.base_stat < val.value[1]
        ) {
          const data = filtered.filter((p) => p.name.includes(pk.name));
          if (!data.length) {
            filtered.push(pk);
          }
        }
      });
    });
    setFilteredPokemons(filtered);
    setSearchField();
  };

  const openModal = async (e, id) => {
    await setInfoModalPokemon(pokemons.find((pk) => id === pk.id));
    handleOpen();
  };

  console.log(infoModalPokemon);

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Filters
          filterByType={filterByType}
          filterByStats={filterByStats}
          types={pokemonTypes}
          stats={stats}
          searchPokemon={serachPokemon}
        ></Filters>
      </div>
      <div className="home">
        {filteredPokemons.length === 0 || searchField === ""
          ? pokemons.map((pokemon, key) => {
              const pokemonKindList = pokemon.types.slice(0, 1);
              const pokemonKindName1 = pokemonKindList[0]?.type?.name;
              // const pokemonKindName2 = pokemonKindList[1]?.type?.name;

              const pokemonTypes = types.filter((type) => {
                const isTypeExist = type.hasOwnProperty(pokemonKindName1);
                //||type.hasOwnProperty(pokemonKindName2);
                return isTypeExist;
              });

              const color1 = pokemonTypes[0][pokemonKindName1];
              //const color2 = pokemonTypes[1][pokemonKindName2]? pokemonTypes[1][pokemonKindName2]: '';

              return (
                <div className="cards" key={key}>
                  <Card
                    openModal={openModal}
                    color1={`${color1}`}
                    color2={`${color1}`}
                    img={`${pokemon.sprites.other.dream_world.front_default}`}
                    pokemon={pokemon.name}
                    index={pokemon.id}
                  ></Card>
                  <Modal
                    handleClose={handleClose}
                    records={pokemons}
                    open={openInfoModal}
                    infoModalPokemon={infoModalPokemon}
                  ></Modal>
                </div>
              );
            })
          : filteredPokemons.map((pokemon, key) => {
              const pokemonKindList = pokemon.types.slice(0, 1);
              const pokemonKindName1 = pokemonKindList[0]?.type?.name;
              // const pokemonKindName2 = pokemonKindList[1]?.type?.name;

              const pokemonTypes = types.filter((type) => {
                const isTypeExist = type.hasOwnProperty(pokemonKindName1);
                //||type.hasOwnProperty(pokemonKindName2);
                return isTypeExist;
              });

              const color1 = pokemonTypes[0][pokemonKindName1];
              //const color2 = pokemonTypes[1][pokemonKindName2]? pokemonTypes[1][pokemonKindName2]: '';

              return (
                <div className="cards" key={key}>
                  <Card
                    openModal={openModal}
                    color1={`${color1}`}
                    color2={`${color1}`}
                    img={`${pokemon.sprites.other.dream_world.front_default}`}
                    pokemon={pokemon.name}
                    index={pokemon.id}
                  ></Card>
                  <Modal
                    handleClose={handleClose}
                    records={pokemons}
                    open={openInfoModal}
                    infoModalPokemon={infoModalPokemon}
                  ></Modal>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
