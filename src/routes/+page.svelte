<script>
  let { data } = $props()
  let { countries } = $derived(data)
</script>

<h1>Welcome to Supabase!</h1>
<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul>

<div>
</div>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
	<a href="/login">Login</a>
<a href="/signup">Signin</a>
