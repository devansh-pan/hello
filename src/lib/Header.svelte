<script lang="ts">
  let data = $props()
  let {session} = $derived(data)
  import {page} from "$app/state"
  import Menu from "$lib/menu.svelte"
  import Darkmode from "$lib/darkmode.svelte"
  
</script>
<header class="flex bg-orange-700 text-white p-4 w-full border-b dark:bg-orange-900/70 dark:border-gray-600 flex-row ">
  <a href="/">
  {#if page.url.pathname === '/'}
  <h1 class="text-3xl mt-[10px] font-bolder text-white dark:text-pink-100">Prabha</h1>
  {:else}
    <p class="text-3xl mt-[10px] font-bold text-white dark:text-pink-100">Prabha</p>
  {/if}
  </a>
  <Darkmode />
<Menu {session} />
</header>