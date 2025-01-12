<script lang="ts">
  import {page} from "$app/state"
  
	import '../app.css';
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import {browser} from "$app/environment"
  import Footer from "$lib/footer.svelte"
import Header from "$lib/Header.svelte"

  let { data, children } = $props()
  let { session, supabase} = $derived(data)
  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  });
</script>
<section id="theme" class="{data?.data?.theme}">
<Header {session} />
{@render children()}
<Footer />
</section>