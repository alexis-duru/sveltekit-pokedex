<script>
/** @type {import('./$types').ActionData} */
export let form;


</script>

<svelte:head>
    <title>Sign Up</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="signup">
    <h1>Sign Up</h1>
    <form 
    method="POST"
    action="/signup"
    >
    {#if form?.success}
        <p class="notification-validate">Vous êtes inscrit !</p>
    {/if}
    {#if form?.missing}<p class="notification-error">The email field is required</p>{/if}
        <label>
            Username:
            <input
                name="username"
                type="text"
            />
        </label>
        <label>
            Password:
            <input
                name="password"
                type="password"
            />
        </label>
        <button type="submit">Sign Up</button>
    </form>
</section>