import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pokemon = ({
  favorites,
  setFavorites,
  pokemon,
  deletePokemon,
  showEditPokemon,
  toggleFavorite,
  updatePokemonNickname,
}) => {
  const [input, setInput] = useState(pokemon.nickname);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //antigo a funcionar
  /* const handleUpdateNickname = (id) => {
    const updateFavorites = favorites.map((favorite) => {
      if (favorite.id === id) {
        return {
          ...favorite,
          nickname: input,
        };
      }
      return favorite;
    });
    setFavorites(updateFavorites);
  }; */

  //novo
  const handleUpdateNickname = () => {
    updatePokemonNickname(pokemon.id, input);
  };

  const handleDelete = () => {
    deletePokemon(pokemon.id);
  };

  const handleFavorite = () => {
    toggleFavorite(pokemon);
  };

  console.log(pokemon)

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
          {pokemon.isFavorite ? "★" : "☆"}
        </button>
        <Link  to={`/pokemon/${pokemon.name}`} state={{poke: pokemon}} className="btn-details">
          Details
        </Link>
      </div>
      {showEditPokemon && (
        <>
          <input type="text" value={input} onChange={handleInputChange} />
          {/* <button onClick={() => handleUpdateNickname(pokemon.id)}>Edit</button> antigo */}
          <button onClick={handleUpdateNickname}>Edit</button>
        </>
      )}
    </>
  );
};

export default Pokemon;
