import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';
import fs from 'fs/promises';

// @ts-nocheck

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const user = await request.json();
		console.log('enregistrement de la donnée');
		return json(_saveData(user, 'src/lib/db/user.json'));
	} catch (error) {
		console.error('Error while parsing request body:', error);
		return json({ error: 'Failed to parse request body' });
	}
}

export async function GET() {
	try {
		const data = await fs.readFile('src/lib/db/user.json', 'utf-8');
		const users = JSON.parse(data);
		return json({ users });
	} catch (error) {
		console.error('Error while reading user data:', error);
		return json({ error: 'Failed to read user data' });
	}
}

export async function DELETE({ request }) {
	try {
		const body = await request.json();
		const id = body.id;
		console.log('id :', id);
		const jsonData = await fs.readFile('src/lib/db/user.json', 'utf8');
		const data = JSON.parse(jsonData);
		const index = data.findIndex((item) => item.id === id);

		if (index !== -1) {
			data.splice(index, 1);
			await fs.writeFile('src/lib/db/user.json', JSON.stringify(data, null, 2), 'utf8');
			return json({ message: 'Donnée supprimée avec succès' });
		} else {
			return json({ error: 'Donnée non trouvée' });
		}
	} catch (error) {
		console.error('Erreur lors de la suppression des données :', error);
		return json({ error: 'Échec de la suppression des données' });
	}
}
