<script>
  // @ts-nocheck
  import { onMount, onDestroy } from 'svelte';

  export let data;
  let pokemon = data.data.pokemons;
  let user = data.data.users;
  let capturedPokemon = [];
  let interval;
  let isAuthenticated = false;
  let error = '';

  onMount(() => {
        // const storedUser = localStorage.getItem('user');
        // const user = JSON.parse(storedUser);

        // if (user) {
        //     isAuthenticated = true;
        // }
  });


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
      shuffleArray(pokemon);
      capturedPokemon = pokemon.slice(0, 1);
      // console.log("captured pokemon", capturedPokemon)
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


  const handleClick = async () => {
    // if (!isAuthenticated) {
    //   error = 'Vous devez vous inscrire ou être connecté pour attraper un pokemon.';
    //   return
    // }
  const { id, name } = capturedPokemon[0]

	const uuid = Math.floor(Math.random() * 1000000);

	const pokemon = {
		id: id,
		uuid: uuid,
		name,
		image: capturedPokemon[0].sprites.front_default,
	};

    try {
      const response = await fetch('/api/bag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemon),
      });
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch('/api/seen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemon),
      });
    } catch (error) {
      console.log(error);
    }


    const homeSection = document.querySelector('.home');
    const div = document.createElement('div');
    div.classList.add('catched');
    div.innerHTML = `<p>${pokemon.name} attrapé !</p>`;
    homeSection.appendChild(div);

    const img = document.querySelector('.item');
    img.classList.add('catched__item');

    if (window.location.pathname === '/') {
      setTimeout(() => {
        const catched = document.querySelector('.catched');
        if (catched) {
          catched.remove();
        }
    }, 2000);
    };
  };  
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="home">
  {#if error}
    <div class="notification-error">{error}</div>
  {/if}
  <!-- <h1>Attraper un pokemon</h1> -->
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
</section>