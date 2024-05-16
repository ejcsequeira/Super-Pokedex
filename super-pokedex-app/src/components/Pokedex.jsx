import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, deletePokemon, addFavorite, favorites }) => {
  return (
    <div className="pokedex-grid">
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          pokemon={pokemon}
          deletePokemon={deletePokemon}
          addFavorite={addFavorite}
          isFavorite={favorites.some((fav) => fav.name === pokemon.name)}
        />
      ))}
    </div>
  );
};

export default Pokedex;

