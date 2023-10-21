import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';
import { error } from '@sveltejs/kit';
import fs from 'fs';

/** @type {import('./$types').RequestHandler} */

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const pokemon = await request.json();
		console.log('enregistrement de la donnée');
		// return json({ pokemon });
		return json(_saveData(pokemon, 'src/lib/db/bag.json'));
	} catch (error) {
		console.error('Error while parsing request body:', error);
		return json({ error: 'Failed to parse request body' });
	}
}

export async function GET() {
	try {
		const jsonData = fs.readFileSync('src/lib/db/bag.json', 'utf8');
		const data = JSON.parse(jsonData);

		return json(data);
	} catch (error) {
		console.error('Erreur lors de la récupération des données JSON :', error);
		return json({ error: 'Échec de la récupération des données' });
	}
}
