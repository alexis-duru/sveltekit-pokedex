<script>
	import { onMount } from 'svelte';
  
	import pokemonData from '../lib/db/pokemons.json';
  
	let pokemon = shuffleArray([...pokemonData]);
  
	let visiblePokemon = pokemon.slice(0, 1);
  
	onMount(() => {
	  const interval = setInterval(() => {
		pokemon = shuffleArray([...pokemonData]);
		
	visiblePokemon = pokemon.slice(0, 1);


    function setRandomPosition() {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const randomTop = Math.floor(Math.random() * (windowHeight - 200));
        const randomLeft = Math.floor(Math.random() * (windowWidth - 200));
    	const randomContainer = document.querySelector(".random__container");

        randomContainer.style.top = `${randomTop}px`;
        randomContainer.style.left = `${randomLeft}px`;
	}
    setRandomPosition();

    window.addEventListener("resize", setRandomPosition);

	  }, 2000);
  
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
	<div class="random__container">
		{#each visiblePokemon as poke}
		<div class="item">
			<p>{poke.name}</p>
			<img src={poke.sprites.front_default} alt={poke.name} />
		</div>
		{/each}
	</div>
  </section>