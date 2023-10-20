import pokemons from '../../lib/db/pokemons.json';
import fs from 'fs';

export const load = async () => {
	return {
		pokemons,
	};
};