<script>
    //@ts-nocheck
    import { onMount } from 'svelte';

    export let data;
    let pokemonData = data.pokemons;
    let bagData = [];
    let pokemonId = 0;
    let pokemon = {};

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

<section class="pokedex__item">
    <div class="item" data-id={pokemon.id} class:captured={isCaptured}>
        {#if pokemon.sprites && pokemon.sprites.front_default && pokemon.sprites.back_default}
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <p class="name">{pokemon.name}</p>
        <p class="number">N° {pokemon.id}</p>
    {:else}
        <p>L'image n'est pas disponible pour ce Pokémon.</p>
    {/if}
    </div>
</section>

