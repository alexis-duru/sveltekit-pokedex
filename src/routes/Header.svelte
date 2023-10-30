<script>
    //@ts-nocheck
    let error = '';
    let validate = '';
    // let isAuthenticated = false;
    /**
	 * @type {string | any[]}
	 */


    export let data;
    const { bagData } = data;
    const { users } = data;

    // $: data;
    // $: console.log(users)

    const isAuthenticated = users.filter((user) => user.isAuthenticated === true ).slice(-1);
    const name = isAuthenticated.map((user) => user.username);

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

    const handleSignOut = () => {

    };
</script>

<header>
    <div class="authentication">
        <p>Bonjour {name} !</p>
        {#if bagData}
            {#if bagData.length > 0}
                <p>{bagData.length} pokemon{#if bagData.length > 1}s{/if} capturé{#if bagData.length > 1}s{/if}</p>
            {/if}
        {/if}
    </div>
	{#if error}
		<div class="notification-error">{error}</div>
	{/if}
    {#if validate}
        <div class="notification-validate">{validate}</div>
    {/if}
    <nav>
        <ul>
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
                    <!-- <a
                        href="/"
                        on:click={handleSignOut}
                    >
                        Sign Out
                    </a> -->
                </li>
        </ul>
    </nav>

    <div class="corner">
        <a href="https://github.com/alexis-duru/sveltekit-pokedex">
        </a>
    </div>
</header>