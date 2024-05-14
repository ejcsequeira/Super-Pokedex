import React from "react";
import { useState, useEffect } from "react";
/* import { getPokemonData, getPokemons } from "./api"; */
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { fetchPokemonData, singlePokemon } from "./api";

function App() {
  /* These lines are using the useState hook to initialize two state
  variables: loading, which indicates whether data is 
  currently being fetched, and pokemons,
  which will store an array of Pokémon data. */
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");


  const initialPokemons = ["charmander", "ditto", "squirtle"];


  useEffect(() => {
    fetchPokemonData(initialPokemons).then((data) =>{
      setPokemons(data)
      setLoading(false)
    });

    
  }, []);

  console.log(pokemons)

  if(loading){
    return (
      <div>
        loading ...
      </div>
    )
  }

  

  return (
    <div className="App">
      <Navbar />
      <Searchbar setPokemons={setPokemons} search={search} setSearch={setSearch}/>
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
