<script>
    //@ts-nocheck
    let username = '';
    let password = '';
    let error = '';
    let validate = '';
  
    const handleSignUp = () => {
        if (!username || !password) {
            error = 'Veuillez remplir tous les champs.';
            setTimeout(() => {
                error = '';
            }, 3000);
            return;
        }

        if(localStorage.getItem('user')) {
            error = "Ce nom d'utilisateur est déjà pris.";
            setTimeout(() => {
                error = ''; 
            }, 3000);
            return;
        }
        
        const user = { username, password };
    
        localStorage.setItem('user', JSON.stringify(user));
        
        validate = 'Votre compte a bien été créé. Vous allez être redirigé vers la page de connexion.';
        setTimeout(() => {
            validate = ''; 
            location.href = '/signin';
        }, 3000);
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