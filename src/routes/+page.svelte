<script>
  let { data } = $props()
  let { notes } = $derived(data)
</script>
<ul>
  {#if notes}
  {#each notes as note}
    <li>{note.note}</li>
  {/each}
  {/if}
</ul>

<div>
</div>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
	<a href="/private">Dash</a>
<a href="/auth">Signin</a>

