import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';
import fs from 'fs';

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

// export async function GET() {
// 	try {
// 		const jsonData = fs.readFileSync('src/lib/db/bag.json', 'utf8');
// 		const data = JSON.parse(jsonData);

// 		return json(data);
// 	} catch (error) {
// 		console.error('Erreur lors de la récupération des données JSON :', error);
// 		return json({ error: 'Échec de la récupération des données' });
// 	}
// }

// // @ts-ignore
// export async function DELETE({ params }) {
// 	try {
// 		const uuid = params.uuid;
// 		const jsonData = fs.readFileSync('src/lib/db/bag.json', 'utf8');
// 		const data = JSON.parse(jsonData);

// 		// Recherchez l'élément à supprimer en fonction de l'UUID
// 		// @ts-ignore
// 		const index = data.findIndex((item) => item.uuid === uuid);

// 		if (index !== -1) {
// 			data.splice(index, 1);
// 			fs.writeFileSync('src/lib/db/bag.json', JSON.stringify(data, null, 2), 'utf8');
// 			return json({ message: 'Donnée supprimée avec succès' });
// 		} else {
// 			return json({ error: 'Donnée non trouvée' });
// 		}
// 	} catch (error) {
// 		console.error('Erreur lors de la suppression des données :', error);
// 		return json({ error: 'Échec de la suppression des données' });
// 	}
// }
