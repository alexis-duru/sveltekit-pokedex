import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';
import fs from 'fs';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const pokemon = await request.json();
		console.log('enregistrement de la donnée');
		// return json({ pokemon });
		return json(_saveData(pokemon, 'src/lib/db/seen.json'));
	} catch (error) {
		console.error('Error while parsing request body:', error);
		return json({ error: 'Failed to parse request body' });
	}
}
