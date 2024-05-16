import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, /* useEffect */ } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import Favorites from "./components/Favorites";
/* import { fetchPokemonData } from "./api"; */

function App() {
  /* These lines are using the useState hook to initialize two state
  variables: loading, which indicates whether data is 
  currently being fetched, and pokemons,
  which will store an array of Pokémon data. */
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [lowerCaseSearch, setlowerCaseSearch] = useState("");

  /* useEffect(() => {
    fetchPokemonData(pokemons).then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []); */

  const deletePokemon = (id) => {

    // delete pokemons from pokemons state
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
  };

 

  const toggleFavorite = (pokemon) => {
    setPokemons(pokemons.map(p => {
      if(p.id === pokemon.id) {
        return {
          ...p,
          isFavorite: !p.isFavorite
        }
      } else {
        return p;
      }
    }))
  };

  /* const removeFavorite = (name) => {
    setFavorites(favorites.filter((pokemon) => pokemon.name !== name));
  }; */

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

