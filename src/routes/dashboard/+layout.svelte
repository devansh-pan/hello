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
  <button class="outline bg-gray-600 outline-red-600 rounded p-2 m-2 text-white" onclick={logout}>Logout</button>
</main>