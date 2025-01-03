<script lang="ts">
  let data = $props();
  const {data:{user}} = $derived(data)
 console.log(user?.user_metadata)
</script>

<h2 class="h1 text-xl m-1 mt-3">Welcome {user?.user?.user_metadata?.full_name}</h2>
<section class="flex dark:bg-gray-800 dark:text-white flex-row border-b shadow p-1 m-1 rounded">
{#if !user}
<a class="border rounded m-3 p-3" href="/auth" >Login</a>
{/if}
<a class="border hover:bg-gray-200 rounded m-2 p-3 text-gray-600 dark:border-gray-200/50 dark:text-gray-100 dark:hover:bg-gray-700 border-blue-900/30" href="/dashboard">Dashboard</a>
</section>

