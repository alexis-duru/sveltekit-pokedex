<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	
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
</script>

<header>
	<nav>
		<ul>
			{#each linksNavigation as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/alexis-duru/sveltekit-pokedex">
		</a>
	</div>
</header>