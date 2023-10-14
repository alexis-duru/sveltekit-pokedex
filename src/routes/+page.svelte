<script>
	//@ts-nocheck
  import { onMount, onDestroy } from 'svelte';
  import pokemonData from '../lib/db/pokemons.json';
  import fs from 'fs';

  let pokemon = [...pokemonData];
  let capturedPokemon = [];
  let interval;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setRandomPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const randomTop = Math.floor(Math.random() * (windowHeight - 200));
    const randomLeft = Math.floor(Math.random() * (windowWidth - 200));

    return { top: `${randomTop}px`, left: `${randomLeft}px` };
  }

  onMount(() => {
	interval = setInterval(() => {
      pokemon = shuffleArray([...pokemonData]);
      capturedPokemon = pokemon.slice(0, 1);

	//   console.log("visiblePokemon", visiblePokemon)

      const randomPosition = setRandomPosition();
      const randomContainer = document.querySelector(".random__container");

      if (randomContainer) {
        randomContainer.style.top = randomPosition.top;
        randomContainer.style.left = randomPosition.left;
      }

    }, 2000);
});

onDestroy(() => {
	clearInterval(interval);
  });


  const handleClick = () => {
    const { id, name } = capturedPokemon[0]

	const uuid = Math.floor(Math.random() * 1000000);

	const pokemon = {
		id: id,
		uuid: uuid,
		name,
		image: capturedPokemon[0].sprites.front_default,
	};

	// console.log(pokemon)

	// WriteFile()
	// const data = { name: 'John Doe', age: 34 };

	// const json = JSON.stringify(data);



	// fs.writeFile('test.json', json, (err) => {
	// 	if (err) throw err;
	// 	console.log('The file has been saved!');
	// });

    const bagData = JSON.parse(localStorage.getItem('bag')) || [];

    bagData.push(pokemon);

    localStorage.setItem('bag', JSON.stringify(bagData));
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="home">
  <h1>Attraper un pokemon</h1>
  <div class="random__container">
    {#each capturedPokemon as poke (poke.id)}
      <div
        class="item"
        role="button"
        on:click={handleClick}
        on:keypress={handleClick}
        tabindex="0"
        style={setRandomPosition()}
      >
        <p>{poke.name}</p>
        <img src={poke.sprites.front_default} alt={poke.name} />
      </div>
    {/each}
  </div>
  <!-- <p>Nombre de pokemons attrapés :
    <span>{visiblePokemon.length}</span>
  </p> -->
</section>