import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ favorites, setFavorites, pokemon, deletePokemon, addFavorite, isFavorite, showEditPokemon }) => {
  const [input, setInput] = useState(pokemon.nickname);

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleUpdateNickname = (id) => {
    const updateFavorites = favorites.map(favorite => {
      if (favorite.id === id) {
        return {
          ...favorite,
          nickname: input
        }
      }
      return favorite;
    })
    setFavorites(updateFavorites)
  }

  const handleDelete = () => {
    deletePokemon(pokemon.name);
  };

  const handleFavorite = () => {
    addFavorite(pokemon);
  };

  return (
    <>
      <div className="pokemon-card">
        <div className="poke-img-container">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div>Name: {pokemon.name}</div>
        <div>Nickname: {pokemon.nickname}</div>
        <button onClick={handleDelete} className="btn-delete">
          🗑
        </button>
        <button onClick={handleFavorite} className="btn-favorite">
          {isFavorite ? "★" : "☆"}
        </button>
        <Link to={`/pokemon/${pokemon.name}`} className="btn-details">
          Details
        </Link>
      </div>
      {showEditPokemon && (
        <>
          <input
          type="text"
          value={input}
          onChange={handleInputChange}
          />
          <button onClick={() => handleUpdateNickname(pokemon.id)}>Save</button>
          <button onClick={() => removeFromFavorites(pokemon.id)}>
            Remove
          </button>
        </>
      )}
    </>
  );
};

export default Pokemon;
