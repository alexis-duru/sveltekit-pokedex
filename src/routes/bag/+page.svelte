<script>
	//@ts-nocheck
	let bagData = [];

	try {
	const bagDataString = localStorage.getItem('bag');
		if (bagDataString) {
			bagData = JSON.parse(bagDataString);
		}
	} catch (error) {
		console.error('Error parsing bag data:', error);
	}

	const handleDelete = (uuid) => {
    bagData = bagData.filter((pokemon) => pokemon.uuid !== uuid);

    localStorage.setItem('bag', JSON.stringify(bagData));
  };

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