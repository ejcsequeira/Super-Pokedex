import React from "react";
import { useState, useEffect } from "react";
/* import { getPokemonData, getPokemons } from "./api"; */
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { fetchPokemonData, fetchAllPokemonData } from "./api";

function App() {
  /* These lines are using the useState hook to initialize two state
  variables: loading, which indicates whether data is 
  currently being fetched, and pokemons,
  which will store an array of Pokémon data. */
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [lowerCaseSearch, setlowerCaseSearch] = useState("");


  const initialPokemons = ["charmander", "ditto", "squirtle"];


  useEffect(() => {
    fetchPokemonData(initialPokemons).then((data) =>{
      setPokemons(data)
      setLoading(false)
    });

    
  }, []);

  const deletePokemon = (name) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.name !== name));
  }

  const fetchAllPokemons = async () => {
    setLoading(true);
    const allPokemons = await fetchAllPokemonData();
    setPokemons(allPokemons);
    setLoading(false);
  }

  console.log(pokemons)

  if(loading){
    return (
      <div>
        Loading the beast ...
      </div>
    )
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
      <button onClick={fetchAllPokemons}>Fetch All Pokémon</button>
    </div>
  );
}

export default App;
