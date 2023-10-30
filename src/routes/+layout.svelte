<script>
// @ts-nocheck

	import Header from './header.svelte';
	import '../style/sass/globals.scss';
	import { onMount } from 'svelte';
	/** @type {import('./$types').LayoutData} */

	export let data;
</script>

<div class="app">
	<Header
		{...data}
	 />

	<main>
		<slot />
	</main>

	<footer>
		<p>Github : <a href="https://github.com/alexis-duru/sveltekit-pokedex">SvelteKit Pokedex</a></p>
	</footer>
</div>
