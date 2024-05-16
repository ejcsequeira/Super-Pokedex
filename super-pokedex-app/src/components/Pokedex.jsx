import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, toggleFavorite, deletePokemon, favorites, showEditPokemon }) => {
  return (
    <div className="pokedex-grid">
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          favorites={favorites}
          pokemon={pokemon}
          deletePokemon={deletePokemon}
          showEditPokemon={showEditPokemon}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default Pokedex;

