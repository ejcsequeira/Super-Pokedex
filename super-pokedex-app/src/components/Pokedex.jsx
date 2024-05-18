import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, toggleFavorite, deletePokemon, favorites, updatePokemonNickname, showEditPokemon }) => {
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
          updatePokemonNickname={updatePokemonNickname}
        />
      ))}
    </div>
  );
};

export default Pokedex;

