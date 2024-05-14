import React from "react";


const Pokemon =(props) => {
    const{pokemon} = props;
    /* console.log("pokemon", pokemon) */

    return(
        <div className="pokemon-card">
            <div className="poke-img-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            {pokemon.name};
        </div>
    )
}

export default Pokemon;