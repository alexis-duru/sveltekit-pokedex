<script>
		//@ts-nocheck
	import { onMount } from 'svelte';

	const linksNavigation = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'Pokedex',
			url: '/pokedex',
		},
		{
			name: 'Bag',
			url: '/bag',
		},
	];

	let currentPath = '';
  onMount(() => {
    currentPath = window.location.pathname;
  });
</script>

<header>
	<nav>
		<ul>
			{#each linksNavigation as link}
				<li>
					<a href={link.url} class:active={link.url === currentPath}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/alexis-duru/sveltekit-pokedex">
		</a>
	</div>
</header>