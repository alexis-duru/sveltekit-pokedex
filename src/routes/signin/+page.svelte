<script>
    //@ts-nocheck  
    export let data;
    let users = data.user;
    let username = '';
    let password = '';
    let error = '';
    let validate = '';
    let isAuthenticated = false;
    
  
    const handleSignIn = async () => {
        const user = users.find((u) => u.username === username && u.password === password);
        if (user.username !== username || user.password !== password) {
            error = 'Le nom d\'utilisateur ou le mot de passe est incorrect.';
            setTimeout(() => {
                error = '';
            }, 3000);
            return;
        }

        if (!username || !password) {
            error = 'Veuillez remplir tous les champs.';
            setTimeout(() => {
                error = '';
            }, 3000);
            return;
        }

        if (user) {
            isAuthenticated = true;
            validate = 'Vous êtes maintenant connecté. Vous allez être redirigé vers la page d\'accueil.';
            setTimeout(() => {
                validate = '';
                location.href = '/';
            }, 3000);

            localStorage.setItem('isAuthenticated', 'true');
        } else {
            error = 'Le nom d\'utilisateur ou le mot de passe est incorrect.';
            setTimeout(() => {
                error = '';
            }, 3000);
        }
    };
</script>
  
<section class="signin">
    <h1>Sign In</h1>
    {#if error}
        <div class="notification-error">{error}</div>
    {/if}
    {#if validate}
        <div class="notification-validate">{validate}</div>
    {/if}
    <form on:submit|preventDefault={handleSignIn}>
        <label>
            Username:
            <input bind:value={username} />
        </label>
        <label>
            Password:
            <input type="password" bind:value={password} />
        </label>
        <button type="submit">Sign In</button>
    </form>
</section>