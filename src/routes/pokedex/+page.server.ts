import seenData from '../../lib/db/seen.json';
import pokemonData from '../../lib/db/pokemons.json';

export const load = async () => {
  return {
    data: {
      seenData,
      pokemonData,
    }
  };
};

// export const del = async (request) => {
// 	const { id } = request.params;
// 	const { seenData } = await load(); // Assurez-vous d'obtenir seenData à partir de la fonction load
  
// 	// Trouvez l'index de l'élément à supprimer
// 	const index = seenData.findIndex((d) => d.id === id);
  
// 	if (index !== -1) {
// 	  // Si l'élément existe, supprimez-le
// 	  seenData.splice(index, 1);
  
// 	  // Vous devrez peut-être mettre à jour le fichier JSON ici
// 	  // Assurez-vous d'enregistrer les données mises à jour dans le fichier JSON
  
// 	  // Retournez les données mises à jour en tant que réponse
// 	  return {
// 		body: seenData,
// 	  };
// 	} else {
// 	  return {
// 		status: 404,
// 		body: { error: "L'élément n'existe pas." },
// 	  };
// 	}
//   };
