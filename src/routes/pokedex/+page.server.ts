import seenData from '../../lib/db/seen.json';
import pokemonData from '../../lib/db/pokemons.json';

export const load = async () => {
  return {
    data: {
      seenData,
      pokemonData,
    }
  };
};