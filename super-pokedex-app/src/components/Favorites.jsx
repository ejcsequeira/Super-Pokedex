import React, { useState } from "react";
import Pokemon from "./Pokemon";


const Favorites = ({
  favorites,
  setFavorites,
  updatePokemonNickname,
  showEditPokemon,
  deletePokemon,
  toggleFavorite,
}) => {
  
  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((pokemon) => {
          return (
          <div key={pokemon.id} className="favorites-card">
            <Pokemon
              favorites={favorites}
              setFavorites={setFavorites}
              pokemon={pokemon}
              deletePokemon={deletePokemon}              
              showEditPokemon={showEditPokemon}
              toggleFavorite={toggleFavorite}
              updatePokemonNickname={updatePokemonNickname}
            />
          </div>
)}        )}
      </div>
    </div>
  );
};

export default Favorites;
