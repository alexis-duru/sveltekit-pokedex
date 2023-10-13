<script>
	import { onMount } from 'svelte';
	import pokemonData from '../../lib/db/pokemons.json';
  </script>
  
  <svelte:head>
	<title>Pokedex</title>
	<meta name="description" content="Pokedex Page" />
  </svelte:head>
  
  <section class="pokedex">
	{#each pokemonData as poke}
	  <div class="item">
		<p>{poke.name}</p>
		<img src={poke.sprites.front_default} alt={poke.name} />
	  </div>
	{/each}
  </section>
