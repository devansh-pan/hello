<script lang="ts">
  let data = $props()
  let {session} = $derived(data)
  import {page} from "$app/state"
  import Menu from "$lib/menu.svelte"
  import Darkmode from "$lib/darkmode.svelte"
  
</script>
<header class="flex bg-[#a47864] text-white p-4 w-full border-b dark:border-gray-600 flex-row ">
  
  {#if page.url.pathname === '/'}
  <h1 class="text-3xl font-bolder text-pink-100/80 dark:text-pink-100">Telugu18</h1>
  {:else}
    <p class="text-3xl font-bold text-pink-100/80 dark:text-pink-100">Telugu18</p>
  {/if}
<Menu {session} />
<Darkmode />
</header>