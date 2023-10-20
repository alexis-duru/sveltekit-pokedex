import pokemons from '../../../lib/db/pokemons.json';

export const load = async () => {
	return {
		pokemons,
	};
};