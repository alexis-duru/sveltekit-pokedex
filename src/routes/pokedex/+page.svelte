<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	// import pokemonData from '../../lib/db/pokemons.json';
  export let data;
  let pokemonData = data.pokemons;
	let seenData = [];

	try {
		const seenDataString = localStorage.getItem('seen');
		if (seenDataString) {
			seenData = JSON.parse(seenDataString);
		}
	} catch (error) {
		console.error('Error parsing bag data:', error);
	}

	onMount(() => {
    const pokedexItems = document.querySelectorAll('.pokedex .item');

    pokedexItems.forEach((item) => {
      const pokemonId = parseInt(item.dataset.id, 10);
      const isCaptured = seenData.some((pokemon) => pokemon.id === pokemonId);

      if (isCaptured) {
        item.classList.add('captured');
      }
    });
  });
  </script>
  
  <svelte:head>
	<title>Pokedex</title>
	<meta name="description" content="Pokedex Page" />
  </svelte:head>
  
  <section class="pokedex">
    {#each pokemonData as poke (poke.id)}
      {#if seenData.some((pokemon) => pokemon.id === poke.id)}
        <a href="/pokedex/{poke.id}">
          <div class="item" data-id={poke.id} class:captured={seenData.some((pokemon) => pokemon.id === poke.id)}>
            <p>{poke.name}</p>
            <img src={poke.sprites.front_default} alt={poke.name} />
          </div>
        </a>
      {:else}
        <div class="item" data-id={poke.id} class:captured={seenData.some((pokemon) => pokemon.id === poke.id)}>
          <p>{poke.name}</p>
          <img src={poke.sprites.front_default} alt={poke.name} />
        </div>
      {/if}
    {/each}
  </section>
