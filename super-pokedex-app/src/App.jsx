import React from "react";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";

function App() {
  /* These lines are using the useState hook to initialize two state
  variables: loading, which indicates whether data is 
  currently being fetched, and pokemons,
  which will store an array of Pokémon data. */
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);


  /*fetchPokemons is a function responsible for fetching Pokémon data
    It sets loading to true to indicate that data is being fetched. 
    Then it calls getPokemons function to get a list of Pokémon URL*/
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      /*.map() method is used here to iterate over each Pokémon object
      in data.result. For each Pokémon object, it calls an asynchronous
      function that fetches more detailed data about that
      Pokémon using its URL  */
      const promises = data.result.map(async (pokemon) => {
        /* .map() method is used to transform each Pokémon object into
        a promise that resolves with detailed Pokémon data fetched from
        an API. These promises are stored in the promises array.
        Later, Promise.all(promises) is used to wait for all these
        promises to resolve concurrently, enabling efficient fetching of
        Pokémon data for multiple Pokémon simultaneously. */
        return await getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
