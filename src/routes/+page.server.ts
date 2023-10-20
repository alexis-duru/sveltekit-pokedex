import pokemons from '../lib/db/pokemons.json';
import fs from 'fs';

export const load = async () => {
	return {
		pokemons,
	};
};

// const datas = { name: 'John TOTO', age: 34 };
// const json = JSON.stringify(datas);
// function writeJsonToFile(json, filePath) {
// 	fs.writeFile(filePath, json, (err) => {
// 		if (err) throw err;
// 		console.log('The file has been saved!');
// 	});
// }

// writeJsonToFile(json, 'test.json');

// export const saveData = async (data:any, filePath:any) => {
// 	const fullPath = resolve(__dirname, `../../lib/data/${filePath}`);
// 	try {
// 	  const json = JSON.stringify(data);
// 	  await new Promise((resolve, reject) => {
// 		fs.writeFile(fullPath, json, (err) => {
// 		  if (err) {
// 			reject(err);
// 		  } else {
// 			resolve(json);
// 		  }
// 		});
// 	  });
// 	  console.log('Les données ont été enregistrées avec succès dans', fullPath);
// 	} catch (error) {
// 	  console.error('Erreur lors de l\'enregistrement des données :', error);
// 	  throw error;
// 	}
//   };

export const _saveData = async (data:any, filePath:any) => {
	try {
	  const json = JSON.stringify(data);
	  await new Promise((resolve, reject) => {
		fs.writeFile(filePath, json, (err) => {
		  if (err) {
			reject(err);
		  } else {
			resolve(json);
		  }
		});
	  });
	  console.log('Les données ont été enregistrées avec succès dans', filePath);
	} catch (error) {
	  console.error('Erreur lors de l\'enregistrement des données :', error);
	  throw error; 
	}
  }

  _saveData({name: 'sqdsqdqd', age: 34}, 'src/lib/db/test.json');


  


