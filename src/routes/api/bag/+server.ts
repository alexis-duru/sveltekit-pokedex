import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';
import fs from 'fs';


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }:any) {
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

export async function DELETE({ request }:any) {
	try {
		const body = await request.json();
		const id = body.id;
		const jsonData = fs.readFileSync('src/lib/db/bag.json', 'utf8');
		const data = JSON.parse(jsonData);
		const index = data.findIndex((item:any) => item.id === id);

		if (index !== -1) {
			data.splice(index, 1);
			fs.writeFileSync('src/lib/db/bag.json', JSON.stringify(data, null, 2), 'utf8');
			return json({ message: 'Donnée supprimée avec succès' });
		} else {
			return json({ error: 'Donnée non trouvée' });
		}
	} catch (error) {
		console.error('Erreur lors de la suppression des données :', error);
		return json({ error: 'Échec de la suppression des données' });
	}
}
