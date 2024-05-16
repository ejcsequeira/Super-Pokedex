import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { singlePokemon } from "../api";

const PokemonDetail = () => {
  const location = useLocation()
  const { poke } = location.state

  return (
    <div className="pokemon-detail">
      <h1>{poke.name}</h1>
      <img src={poke.sprites.front_default} alt={poke.name} />
      <h2><p>Type: {poke.types[0].type.name}</p></h2>
      <h2><p>Height: {poke.height}</p></h2>
      <h2><p>Weight: {poke.weight}</p></h2>
    </div>
  );
};

export default PokemonDetail;
