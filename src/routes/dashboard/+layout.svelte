<script lang=ts>
  import {goto} from "$app/navigation"
  let { data, children } = $props()
  let { supabase } = $derived(data)

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    goto('/auth',{invalidateAll:true})
    if (error) {
      console.error(error)
    } 

  }
</script>
  
<main>
  {@render children()}
  <button class="outline bg-white dark:bg-inherit dark:text-inherit outline-slate-400 rounded p-2 m-2 text-slate-700" popovertarget="logout">Logout</button>
  <div class="rounded-lg border border-yellow-500 *:rounded bg-slate-300 text-slate-900  p-4 w-[70%]" popover id="logout">
    <p>Please confirm your action </p>
    <button class="p-2 m-2 border  border-[3px] hover:bg-red-500 bg-inherit text-inherit border-red-400" onclick={logout}>Confirm logout</button>
  </div>
</main>