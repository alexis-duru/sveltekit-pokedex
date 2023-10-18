<script>
    //@ts-nocheck
    import { onMount } from 'svelte';

    let error = '';
    let validate = '';
    let isAuthenticated = false;
	let user = {};

    onMount(() => {
        const storedUser = localStorage.getItem('user');
        const user = JSON.parse(storedUser);

        if (user) {
            isAuthenticated = true;
        }
    });

    const handleSignOut = () => {
        localStorage.removeItem('user');
		localStorage.removeItem('bag');
		isAuthenticated = false;
        validate = 'Vous êtes maintenant déconnecté. Vous allez être redirigé vers la page d\'accueil.';
        setTimeout(() => {
            validate = '';
            location.href = '/';
        }, 3000);
    };

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

    const linksAuthenticated = [
		{
			name: 'Sign Up',
			url: '/signup'
		},
        {
            name: 'Sign In',
            url: '/signin'
        },
    ];

    const activeLink = (event) => {
        const links = [...document.querySelectorAll('nav ul li a')];
        links.forEach((link) => {
            link.classList.remove('active');
        });

        event.target.classList.add('active');
    };

	onMount(() => {
		const storedUser = localStorage.getItem('user');
		user = JSON.parse(storedUser);
	});
</script>

<header>
	<h1>{isAuthenticated ? `Bonjour ${user.username} !` : ''}</h1>
	{#if error}
		<div class="notification-error">{error}</div>
	{/if}
    {#if validate}
        <div class="notification-validate">{validate}</div>
    {/if}
    <nav>
        <ul>
            {#if !isAuthenticated}
                {#each linksAuthenticated as link}
                    <li>
                        <a
                            href={link.url}
                            on:click={e => activeLink(e)}
                        >
                            {link.name}
                        </a>
                    </li>
                {/each}
            {/if}
            {#if isAuthenticated}
				{#each linksNavigation as link}
					<li>
						<a
							href={link.url}
							on:click={e => activeLink(e)}
						>
							{link.name}
						</a>
					</li>
				{/each}
                <li>
                    <a
                        href="/"
                        on:click={handleSignOut}
                    >
                        Sign Out
                    </a>
                </li>
            {/if}
        </ul>
    </nav>

    <div class="corner">
        <a href="https://github.com/alexis-duru/sveltekit-pokedex">
        </a>
    </div>
</header>