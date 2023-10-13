<script>
	import Header from './Header.svelte';
	import '../style/sass/globals.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Github : <a href="https://github.com/alexis-duru/sveltekit-pokedex">SvelteKit Pokedex</a></p>
	</footer>
</div>
