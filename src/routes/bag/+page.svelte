<script>
// @ts-nocheck	
  export let data;
  let bagData = data.pokemons;


  const handleDelete = async (id) => {
  try {
    const response = await fetch(`/api/bag`, {
      method: 'DELETE',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ id }),
    });

    if (response.ok) {
      bagData = bagData.filter((pokemon) => pokemon.id !== id);
    } else {
      console.error('Échec de la suppression des données depuis la route DELETE');
    }
  } catch (error) {
    console.error('Erreur lors de la suppression des données depuis la route DELETE :', error);
  }
};

</script>

<svelte:head>
	<title>Bag</title>
	<meta name="description" content="Pokedex Page" />
</svelte:head>

<section class="bag">
	<div class="container">
		{#if bagData.length > 0}
			{#each bagData as poke (poke.uuid)}
				<div class="item">
					<p>{poke.name}</p>
					<a href="/pokedex/{poke.id}">
						<img src={poke.image} alt={poke.name} />
					</a>
					<button on:click={() => handleDelete(poke.id)}>Libérer</button>
				</div>
			{/each}
		{:else}
			<p>Vous n'avez pas encore de pokemon dans votre sac</p>
		{/if}
	</div>
</section>