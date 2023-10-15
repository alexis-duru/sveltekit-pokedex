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

	const activeLink = () => {
		const links = document.querySelectorAll('nav ul li a');
		links.forEach((link) => {
			link.addEventListener('click', () => {
				links.forEach((link) => {
					link.classList.remove('active');
				});

				link.classList.add('active');
			});

		});
	};
</script>

<header>
	<nav>
		<ul>
			{#each linksNavigation as link}
				<li>
					<a
					 href={link.url} 
					 on:click={activeLink}
					 >
					 {link.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/alexis-duru/sveltekit-pokedex">
		</a>
	</div>
</header>