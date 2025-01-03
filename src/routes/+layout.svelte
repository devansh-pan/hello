<script lang="ts">
	import '../app.css';
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import {browser} from "$app/environment"
  import Darkmode from "$lib/darkmode.svelte"
  import Footer from "$lib/footer.svelte"
  import Menu from "$lib/menu.svelte"

  let { data, children } = $props()
  let { session, supabase } = $derived(data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  });
</script>
<header class="flex border-b flex-row ">
  <h1 class="text-3xl font-bolder text-pink-900/80 dark:text-pink-400">Telugu18</h1>
<Menu {session} />
<Darkmode />
</header>
{@render children()}
<Footer />