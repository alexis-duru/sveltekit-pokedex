<script>
	import { onMount } from 'svelte';
  
	import pokemonData from '../lib/db/pokemons.json';
  
	let pokemon = shuffleArray([...pokemonData]);
  
	let visiblePokemon = pokemon.slice(0, 1);
  
	onMount(() => {
	  const interval = setInterval(() => {
		pokemon = shuffleArray([...pokemonData]);
		
		visiblePokemon = pokemon.slice(0, 1);
	  }, 3000);
  
	  return () => clearInterval(interval);
	});
  
	function shuffleArray(array) {
	  for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	  }
	  return array;
	}
  </script>
  
  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  <section class="home">
	<h1>Attraper un pokemon</h1>
	{#each visiblePokemon as poke}
	  <div class="item">
		<p>{poke.name}</p>
		<img src={poke.sprites.front_default} alt={poke.name} />
	  </div>
	{/each}
  </section>