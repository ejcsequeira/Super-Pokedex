import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import Favorites from "./components/Favorites";
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
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchPokemonData(pokemons).then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  const deletePokemon = (name) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.name !== name));
  };

  const addFavorite = (pokemon) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.name === pokemon.name)) {
        return [...prevFavorites, pokemon];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (name) => {
    setFavorites(favorites.filter((pokemon) => pokemon.name !== name));
  };

  if (loading) {
    return <div><h1>Loading the beast ...</h1></div>;
  }

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
                addFavorite={addFavorite}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            }
          />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

