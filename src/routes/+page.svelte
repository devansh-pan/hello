<script lang="ts">
  let data = $props();
const {data: meta} = $derived(data)
  const {user} = $derived(meta)
</script>
<svelte:head>
  <title>Telugu1</title>
  <meta name="description" content="Welcome to Telugu1 " >
  </svelte:head>
<h2 class="h1 text-xl m-1 mt-3">Welcome {user?.user_metadata?.full_name}</h2>
<section class="flex dark:bg-blue-950 dark:text-white flex-row border-b shadow p-1 m-1 rounded">
{#if !user}
<a class="border rounded m-3 p-3" href="/auth" >Login</a>
{/if}
</section>

