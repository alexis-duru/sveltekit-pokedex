<script>
    //@ts-nocheck
    import { onMount } from 'svelte';

    export let data;
    let pokemonData = data.pokemons;
    let bagData = [];
    let pokemonId = 0;
    let pokemon = {};

    try {
        const bagDataString = localStorage.getItem('bag');
        if (bagDataString) {
            bagData = JSON.parse(bagDataString);
        }
    } catch (error) {
        console.error('Error parsing bag data:', error);
    }

    onMount(() => {
        const pokemonIdString = window.location.pathname.split('/').pop();
        pokemonId = parseInt(pokemonIdString, 10);
        pokemon = pokemonData.find((poke) => poke.id === pokemonId);
    });

    const isCaptured = bagData.some((pokemon) => pokemon.id === pokemonId);
</script>

<svelte:head>
    <title>Pokedex</title>
    <meta name="description" content="Pokedex Page" />
</svelte:head>

<section class="">
    <div class="item" data-id={pokemon.id} class:captured={isCaptured}>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
        {#if pokemon.sprites && pokemon.sprites.front_default}
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    {:else}
        <p>L'image n'est pas disponible pour ce Pokémon.</p>
    {/if}
    </div>
</section>

