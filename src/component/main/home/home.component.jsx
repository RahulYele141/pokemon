import React, { useEffect, useState } from "react";
import Filters from "../filters/filters.component";
import Header from "../header/header.component";
import Card from "../../helpers/pokecard/card.component";
import {
  fetchPokemonData,
  fetchPokemonTypes,
  fetchPokemonStats,
  fetchPokemonDesc,
  fetchPokemonEvolution,
} from "../../constants/api";
import "./home.style.css";
import InfoModal from "../modal/modal.component";

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
  const [descriptionAll, setDescriptionAll] = useState([]);
  const [description, setDescription] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [evolPokemons, setEvolPokemons] = useState([]);

  const handleOpen = () => setOpenInfoModal(!openInfoModal);
  const handleClose = () => setOpenInfoModal(false);
  useEffect(() => {
    async function getData() {
      const response = await fetchPokemonData();
      const { types, values } = await fetchPokemonTypes();
      const stats = await fetchPokemonStats();
      const desc = await fetchPokemonDesc();
      //  const evolve = await fetchPokemonEvolution();
      setDescriptionAll(desc);
      setStats(stats);
      setPokemons(response);
      setPokemonTypes(types);
      setTypes(values);
    }
    getData();

    getDesc();
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
  const getDesc = () => {
    let newArr = [];
    descriptionAll.map((des) => {
      let filteredText = [];
      des.flavor_text_entries.map((text) => {
        if (text.language.name === "en") {
          const data = filteredText.filter((t) => {
            return t.includes(text.flavor_text);
          });
          if (!data.length) {
            filteredText.push(text.flavor_text);
          }
        }
      });
      newArr.push(filteredText);
    });
    setDescription(newArr);
  };

  const openModal = async (e, id) => {
    await getDesc();

    await setInfoModalPokemon(
      pokemons.find((pk) => {
        setCurrentId(pk.id);
        return id === pk.id;
      })
    );
    const pokemon = pokemons.find((pk) => id === pk.id);
    const { firstSpec, secondSec, thirdSpec } = await fetchPokemonEvolution(
      pokemon.id
    );
    const firstPokemon = pokemons.find((pk) => {
      return pk.name === firstSpec;
    });

    const secondPokemon = pokemons.find((pk) => {
      return pk.name === secondSec;
    });

    const thirdPokemon = pokemons.find((pk) => {
      return pk.name === thirdSpec;
    });

    setEvolPokemons([firstPokemon, secondPokemon, thirdPokemon]);

    handleOpen();
  };
  const prevPokemon = async (e) => {
    if (currentId === 1) {
      setInfoModalPokemon(pokemons[0]);
    } else {
      setCurrentId(currentId - 1);
      setInfoModalPokemon(pokemons[currentId]);
    }
  };

  const nextPokemon = async (e) => {
    const lastItemIndex = pokemons.lastIndexOf(pokemons.slice(-1).pop());
    if (currentId === lastItemIndex) {
      setCurrentId(lastItemIndex);
      setInfoModalPokemon(pokemons[currentId]);
    } else {
      setCurrentId(currentId + 1);
      setInfoModalPokemon(pokemons[currentId]);
    }
  };

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
              const pokemonKindList = pokemon?.types;
              const pokemonKindName1 = pokemonKindList[0]?.type?.name;
              const pokemonKindName2 = pokemonKindList[1]?.type?.name;

              const pokemonTypes = types.filter((type) => {
                const isTypeExist =
                  type.hasOwnProperty(pokemonKindName1) ||
                  type.hasOwnProperty(pokemonKindName2);
                return isTypeExist;
              });
              // console.log(pokemonTypes);
              const color1 = pokemonTypes.find((color) => {
                return color[pokemonKindName1];
              });
              const color2 = pokemonTypes.find((color) => {
                return color[pokemonKindName2] || color[pokemonKindName1];
              });

              const colorFinal = () => {
                if (!color2[pokemonKindName1]) {
                  return `${`linear-gradient(${color1[pokemonKindName1]}, ${color2[pokemonKindName2]})`}`;
                } else {
                  return `${`linear-gradient(${color1[pokemonKindName1]}, ${color1[pokemonKindName1]})`}`;
                }
              };

              console.log(colorFinal());
              return (
                <div className="cards" key={key}>
                  <Card
                    openModal={openModal}
                    color={colorFinal()}
                    img={`${pokemon.sprites.other.dream_world.front_default}`}
                    pokemon={pokemon.name}
                    index={pokemon.id}
                  ></Card>
                </div>
              );
            })
          : filteredPokemons.map((pokemon, key) => {
              const pokemonKindList = pokemon.types.slice(0, 1);
              const pokemonKindName1 = pokemonKindList[0]?.type?.name;

              const pokemonTypes = types.filter((type) => {
                const isTypeExist = type.hasOwnProperty(pokemonKindName1);
                return isTypeExist;
              });

              const color1 = pokemonTypes[0][pokemonKindName1];

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
                </div>
              );
            })}

        <InfoModal
          description={description}
          handleClose={handleClose}
          open={openInfoModal}
          infoModalPokemon={infoModalPokemon}
          prevPokemon={prevPokemon}
          nextPokemon={nextPokemon}
          evolPokemons={evolPokemons}
        />
      </div>
    </div>
  );
};

export default Home;
