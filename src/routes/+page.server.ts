import pokemons from '../lib/db/pokemons.json';
import users from '../lib/db/user.json';
import fs from 'fs';


export const load = async () => {
	return {
		data : {
            pokemons,
            users,
        }
	};
};

export const _saveData = async (data:any, filePath:any) => {
	try {
        let existingData = [];
        try {
            const rawData = await fs.promises.readFile(filePath, 'utf-8');
            existingData = JSON.parse(rawData);
            if (!Array.isArray(existingData)) {
                existingData = [];
            }
        } catch (readError) {
			console.log('Le fichier', filePath, "n'existe pas. Il va être créé.");
        }
        existingData.push(data);
        await fs.promises.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf-8');
        console.log('Les données ont été enregistrées avec succès dans', filePath);
    } catch (error) {
        console.error("Erreur lors de l'enregistrement des données :", error);
        throw error;
    }
};


  


