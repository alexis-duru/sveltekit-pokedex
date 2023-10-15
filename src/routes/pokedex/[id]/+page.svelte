<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import pokemonData from '../../../lib/db/pokemons.json';
    let bagData = [];

    try {
        const bagDataString = localStorage.getItem('bag');
        if (bagDataString) {
            bagData = JSON.parse(bagDataString);
        }
    } catch (error) {
        console.error('Error parsing bag data:', error);
    }

    let pokemonId = 0;
    let pokemon = {};

    onMount(() => {
        const { subscribe } = page;
        const unsubscribe = subscribe((value) => {
            pokemonId = parseInt(value.params.id, 10);
            pokemon = pokemonData.find((poke) => poke.id === pokemonId);
        });
    });

    const isCaptured = bagData.some((pokemon) => pokemon.id === pokemonId);
</script>

<svelte:head>
    <title>Pokedex</title>
    <meta name="description" content="Pokedex Page" />
</svelte:head>

<section class="pokedex">
    <div class="item" data-id={pokemon.id} class:captured={isCaptured}>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
    </div>
</section>

