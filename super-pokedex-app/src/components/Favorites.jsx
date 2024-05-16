import React, { useState } from "react";
import Pokemon from "./Pokemon";

const Favorites = ({ favorites, setFavorites, removeFromFavorites, editFavoriteName, showEditPokemon }) => {
  const [editdNames, setEditdNames] = useState({});

  const handleInputChange = (id, newName) => {
    const foundPokemon = favorites.find(favorite => favorite.id === id)
    setEditdNames({ ...editdNames, [id]: newName });
  };

  const handleSaveName = (id) => {
    if (editdNames[id]) {
      editFavoriteName(id, editdNames[id]);
      setEditdNames({ ...editdNames, [id]: "" });
    }
  };

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((pokemon) => (
          <div key={pokemon.id} className="favorites-card">
            <Pokemon favorites={favorites} setFavorites={setFavorites} pokemon={pokemon} showEditPokemon={showEditPokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;