<script lang="ts">
  let data = $props()
  let {session} = $derived(data)
  import {page} from "$app/state"
  import Menu from "$lib/menu.svelte"
  import Darkmode from "$lib/darkmode.svelte"
  
</script>
<header class="flex w-full border-b dark:border-gray-600 flex-row ">
  <img class="w-[50px]" src="/image.svg" alt="logo" />
  {#if page.url.pathname === '/'}
  <h1 class="text-3xl font-bolder text-pink-900/80 dark:text-pink-400">Telugu18</h1>
  {:else}
    <p class="text-3xl font-bold text-pink-900/80 dark:text-pink-400">Telugu18</p>
  {/if}
<Menu {session} />
<Darkmode />
</header>