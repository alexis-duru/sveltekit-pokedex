import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const user = await request.json();
		console.log('enregistrement de la donnée');
		// return json({ pokemon });
		return json(_saveData(user, 'src/lib/db/user.json'));
	} catch (error) {
		console.error('Error while parsing request body:', error);
		return json({ error: 'Failed to parse request body' });
	}
}
