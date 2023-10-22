import { json } from '@sveltejs/kit';
import { _saveData } from '../../+page.server';
// import { _getData } from '../../pokedex/+page.server';
import fs from 'fs';
// @ts-nocheck

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

// export async function fallback({ params }) {
// 	try {
// 		const itemId = params.id;
// 		const filePath = 'src/lib/db/bag.json';
// 		const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// 		const itemIndex = jsonData.findIndex((item) => item.id === itemId);

// 		if (itemIndex !== -1) {
// 			jsonData.splice(itemIndex, 1);

// 			fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');

// 			return json({ message: "L'élément a été supprimé avec succès." });
// 		} else {
// 			return json({ error: "L'élément n'existe pas dans le fichier JSON." });
// 		}
// 	} catch (error) {
// 		console.error("Erreur lors de la suppression de l'élément :", error);
// 		return json({ error: "Échec de la suppression de l'élément." });
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
