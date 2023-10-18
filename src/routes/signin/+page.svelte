<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
  
    let username = '';
    let password = '';
    let error = '';
    let validate = '';
    
  
    const handleSignIn = () => {
        const storedUser = localStorage.getItem('user');
        const user = JSON.parse(storedUser);

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

        validate = 'Vous êtes maintenant connecté. Vous allez être redirigé vers la page d\'accueil.';
        setTimeout(() => {
            validate = '';
            location.href = '/';
        }, 3000);
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