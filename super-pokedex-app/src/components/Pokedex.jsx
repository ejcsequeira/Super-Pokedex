import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading, deletePokemon } = props;

  return (
    <div>
      <div className="pokedex-header"></div>
      {loading ? (
        <div>Loading the beast...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <Pokemon
                  key={index}
                  pokemon={pokemon}
                  deletePokemon={deletePokemon}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
