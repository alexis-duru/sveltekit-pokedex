<script>
    //@ts-nocheck
    let username = '';
    let password = '';
    let isAuthenticated = false;
    let error = '';
    let validate = '';
    export let data;
    let users = data.user;

    const handleSignUp = async () => {
        if (!username || !password) {
            error = 'Veuillez remplir tous les champs.';
            setTimeout(() => {
                error = '';
            }, 3000);
            return;
        }

        // Vérifiez si le nom d'utilisateur est déjà pris
        if (users.some((user) => user.username === username)) {
            error = "Ce nom d'utilisateur est déjà pris.";
            setTimeout(() => {
                error = '';
            }, 3000);
            return;
        }

        // Le nom d'utilisateur est disponible, enregistrez l'utilisateur dans la base de données
        const user = { username, password };        

        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
            if (data.error) {
                error = data.error;
                setTimeout(() => {
                    error = '';
                }, 3000);
                return;
            }

            validate = 'Votre compte a bien été créé. Vous allez être redirigé vers la page de connexion.';
            setTimeout(() => {
                validate = '';
                location.href = '/signin';
            }, 3000);
        } catch (err) {
            error = 'Une erreur est survenue lors de la création de votre compte.';
            setTimeout(() => {
                error = '';
            }, 3000);
            return;
        }
    };
</script>

<svelte:head>
    <title>Sign Up</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="signup">
    <h1>Sign Up</h1>
    {#if error}
        <div class="notification-error">{error}</div>
    {/if}
    {#if validate}
        <div class="notification-validate">{validate}</div>
    {/if}
    <form on:submit|preventDefault={handleSignUp}>
        <label>
            Username:
            <input bind:value={username} />
        </label>
        <label>
            Password:
            <input type="password" bind:value={password} />
        </label>
        <button type="submit">Sign Up</button>
    </form>
</section>