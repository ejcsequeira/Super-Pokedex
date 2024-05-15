import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { fetchPokemonData } from "./api";

function App() {
  /* These lines are using the useState hook to initialize two state
  variables: loading, which indicates whether data is 
  currently being fetched, and pokemons,
  which will store an array of Pokémon data. */
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [lowerCaseSearch, setlowerCaseSearch] = useState("");

  useEffect(() => {
    fetchPokemonData(pokemons).then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  console.log(pokemons);

  const deletePokemon = (name) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.name !== name));
  };

  if (loading) {
    return <div>Loading the beast ...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Searchbar
        setPokemons={setPokemons}
        search={search}
        setSearch={setSearch}
        lowerCaseSearch={lowerCaseSearch}
        setlowerCaseSearch={setlowerCaseSearch}
      />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        deletePokemon={deletePokemon}
      />
    </div>
  );
}

export default App;
