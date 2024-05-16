import React, { useState } from "react";
import Pokemon from "./Pokemon";

const Favorites = ({ favorites, removeFromFavorites, editFavoriteName }) => {
  const [editdNames, setEditdNames] = useState({});

  const handleNameChange = (id, newName) => {
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
            <Pokemon pokemon={pokemon} />
            <input
              type="text"
              value={editdNames[pokemon.id] || pokemon.name}
              onChange={(e) => handleNameChange(pokemon.id, e.target.value)}
            />
            <button onClick={() => handleSaveName(pokemon.id)}>Save</button>
            <button onClick={() => removeFromFavorites(pokemon.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;