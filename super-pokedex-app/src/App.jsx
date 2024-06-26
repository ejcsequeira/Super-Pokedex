import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import Favorites from "./components/Favorites";
import AddPokemon from "./components/AddPokemon";

function App() {
  
  /* These lines are using the useState hook to initialize two state
  variables: loading, which indicates whether data is 
  currently being fetched, and pokemons,
  which will store an array of Pokémon data. */
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [lowerCaseSearch, setlowerCaseSearch] = useState("");

  //This function takes a new Pokémon and adds it to our list.
  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  };

  //This function removes a Pokémon from our list.
  const deletePokemon = (id) => {

    // delete pokemons from pokemons state
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
  };

  //antigo a funcionar
  //This function lets us mark a Pokémon as a favorite or remove it from favorites.
  /* const toggleFavorite = (pokemon) => {
    setPokemons(pokemons.map(p => {
      if (p.id === pokemon.id) {
        return {
          ...p,
          isFavorite: !p.isFavorite
        }
      } else {
        return p;
      }
    }))
  }; */

  //novo
  const toggleFavorite = (pokemon) => {
    setPokemons(pokemons.map(p => p.id === pokemon.id ? { ...p, isFavorite: !p.isFavorite } : p));
  };
  //novo
  const updatePokemonNickname = (id, nickname) => {
    setPokemons(pokemons.map(p => p.id === id ? { ...p, nickname } : p));
  };


  if (loading) {
    return <div><h1>Loading the beast ...</h1></div>;
  }

  console.log(pokemons)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Searchbar
          setPokemons={setPokemons}
          search={search}
          setSearch={setSearch}
          lowerCaseSearch={lowerCaseSearch}
          setlowerCaseSearch={setlowerCaseSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Pokedex
                pokemons={pokemons}
                deletePokemon={deletePokemon}
                showEditPokemon={false}
                toggleFavorite={toggleFavorite}
                updatePokemonNickname={updatePokemonNickname}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={pokemons.filter(pokemon => pokemon.isFavorite)}
                showEditPokemon={true}
                deletePokemon={deletePokemon}
                toggleFavorite={toggleFavorite}
                updatePokemonNickname={updatePokemonNickname} //novo
              />
            }
          />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/add" element={<AddPokemon addPokemon={addPokemon} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

