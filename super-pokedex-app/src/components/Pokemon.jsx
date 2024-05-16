import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon, deletePokemon, addFavorite, isFavorite }) => {
  const handleDelete = () => {
    deletePokemon(pokemon.name);
  };

  const handleFavorite = () => {
    addFavorite(pokemon);
  };

  return (
    <div className="pokemon-card">
      <div className="poke-img-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div>{pokemon.name}</div>
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
  );
};

export default Pokemon;
