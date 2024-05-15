import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemon, deletePokemon } = props;

  const handleDelete = () => {
    deletePokemon(pokemon.name);
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
      <Link to={`/pokemon/${pokemon.name}`} className="btn-details">
        Details
      </Link>
    </div>
  );
};

export default Pokemon;
