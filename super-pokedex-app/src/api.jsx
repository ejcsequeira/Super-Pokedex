const Pokemon_API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = async (arr) => {
  const promises = arr.map((pokemon) =>
    fetch(`${Pokemon_API_URL}/${pokemon}`).then((res) => res.json())
  );

  const pokemonData = await Promise.all(promises);
  return pokemonData;
};

export const singlePokemon = async (pokemonName) => {
  try {
    const response = await fetch(`${Pokemon_API_URL}/${pokemonName}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
