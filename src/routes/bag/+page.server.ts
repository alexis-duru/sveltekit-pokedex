import pokemons from '../../lib/db/bag.json';

export const load = async () => {
	return {
		pokemons,
	};
};