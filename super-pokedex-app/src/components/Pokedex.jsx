import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, deletePokemon, addFavorite, favorites, showEditPokemon }) => {
  return (
    <div className="pokedex-grid">
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          favorites={favorites}
          pokemon={pokemon}
          deletePokemon={deletePokemon}
          addFavorite={addFavorite}
          isFavorite={favorites.some((fav) => fav.name === pokemon.name)}
          showEditPokemon={showEditPokemon}
        />
      ))}
    </div>
  );
};

export default Pokedex;

