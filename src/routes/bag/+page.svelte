<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	// let bagData = [];

  export let data;
  let bagData = data.pokemons;

  console.log('Données récupérées depuis la route GET :', data);
  

	// const fetchData = async () => {
  //   try {
  //     const response = await fetch('/api/bag');
  //     const data = await response.json();
  //     bagData = data;
	//   console.log('Données récupérées depuis la route GET :', data);	
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des données depuis la route GET :', error);
  //   }
  // };

  // onMount(() => {
  //   fetchData();
  // });


// 	const handleDelete = (uuid) => {
//     bagData = bagData.filter((pokemon) => pokemon.uuid !== uuid);

//     localStorage.setItem('bag', JSON.stringify(bagData));
//   };

  const handleDelete = async (uuid) => {
    try {
      const response = await fetch(`/api/bag`, {
        method: 'DELETE',
      });

	  console.log('Données supprimées depuis la route DELETE :', response)

      if (response.ok) {
        bagData = bagData.filter((pokemon) => pokemon.uuid !== uuid);
      } else {
        console.error('Échec de la suppression des données depuis la route DELETE');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression des données depuis la route DELETE :', error);
    }
  };

  onMount(() => {
	handleDelete();
  });

</script>

<svelte:head>
	<title>Bag</title>
	<meta name="description" content="Pokedex Page" />
</svelte:head>

<section class="bag">
	<div>
		<p>Nombre de pokemon capturés : {bagData.length}</p>
	</div>
	<div class="container">
		{#if bagData.length > 0}
			{#each bagData as poke (poke.uuid)}
				<div class="item">
					<p>{poke.name}</p>
					<img src={poke.image} alt={poke.name} />
					<a href="/pokedex/{poke.id}">Voir Détails</a>
					<button on:click={() => handleDelete(poke.uuid)}>Libérer</button>
				</div>
			{/each}
		{:else}
			<p>Vous n'avez pas encore de pokemon dans votre sac</p>
		{/if}
	</div>
</section>