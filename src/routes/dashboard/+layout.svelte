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
  <button class="outline bg-white  rounded p-2 m-2 text-gray-700" popovertarget="logout">Logout</button>
  <div class="rounded border bg-yellow-100 border-yellow-500 *:rounded p-4 w-[78%]" popover id="logout">
    <p>Please confirm your action </p>
    <button class="p-2 m-2 border  border-[3px] hover:bg-red-500 border-red-400" onclick={logout}>Confirm logout</button>
  </div>
</main>