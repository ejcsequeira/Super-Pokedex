import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singlePokemon } from "../api";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    singlePokemon(name).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, [name]);

  if (loading) {
    return <div>Loading the beast...</div>;
  }

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2><p>Type: {pokemon.types[0].type.name}</p></h2>
      <h2><p>Height: {pokemon.height}</p></h2>
      <h2><p>Weight: {pokemon.weight}</p></h2>
    </div>
  );
};

export default PokemonDetail;
