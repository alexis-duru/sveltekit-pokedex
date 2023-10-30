<script>
    /** @type {import('./$types').ActionData} */
        export let form; 

        // const handleClick = () => {
        //     localStorage.setItem('isAuthenticated', true);
        // }
</script>
  
<section class="signin">
    <h1>Sign In</h1>
    <form
    method="POST"
    action="/signin"
    >
        {#if form?.success}
            <p class="notification-validate">Vous êtes connecté !</p>
        {/if}
        {#if form?.missing}<p class="notification-error">L'adresse email et le mot de passe sont requise</p>{/if}
	    {#if form?.invalid}<p class="notification-error">Informations incorrects</p>{/if}
        <label>
            Username:
            <input 
                type="text" 
                name="username"
            />
        </label>
        <label>
            Password:
            <input 
            type="password" 
            name="password"
             />
        </label>
        <button 
        type="submit"
        >Sign In</button>
    </form>
</section>