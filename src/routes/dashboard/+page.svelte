<script lang="ts">
  import { invalidate } from '$app/navigation'
  import type { EventHandler } from 'svelte/elements'

  import type { PageData } from './$types'
 let message = $state("");
  let { data } = $props()
  let { profile, supabase, user } = $derived(data)
console.log(data)
  const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (evt) => {
    evt.preventDefault()
    if (!evt.target) return

    const form = evt.target as HTMLFormElement

    const file = (new FormData(form).get('avatar') ?? '') as string
    const fullname = (new FormData(form).get('fullname') ?? profile.full_name) as string
    if (fullname && file) {
      const {data:path ,error:fileError} = await supabase.storage.from('avatars').upload(profile.username,file,{upsert: true})
      if (fileError) {
        return message = fileError.message
      }
 const { data , error} = await supabase.from('profiles').upsert({id:profile.id,full_name: fullname,avatar_url:path.fullPath}).eq('id', profile.id);
      if (error) {
        console.log(error)
      }
      return message = "Profile updated"
      form.reset()
    } 
    if (note) {
const { error } = await supabase.from('notes').insert({ note })
    if (error) console.error(error)

    invalidate('supabase:db:profiles')
    form.reset() }
  }
  const {data:url} = supabase.storage.from('avatars').getPublicUrl(profile.username)
const avatar = url.publicUrl
console.log(url.publicUrl)
  
</script>
{#if user}
<h1>Welcome {user?.id}</h1>
<ul class="list text-blue-500 text-md">
  {#if profile}
    <li>User name: {profile.username}</li>
    <li>Full name: {profile.full_name}</li>
    <li>Email: {user.email}</li>
  {/if}
</ul>
  <img src={avatar} alt="avatar" class="aspect-square w-[60px] rounded circle" />
  <a href="/user/{profile.username}">View public profile</a>
<form onsubmit={handleSubmit}>
  <label for="fullname">
    Update name
    <input id="fullname" name="fullname" type="text" value={profile.full_name} />
  </label>
  <label for="avatar" >Avatar</label>
  <input id="avatar" name="avatar" type="file" accept="image/*" >
</form>
  <p>{message}</p>
{/if}