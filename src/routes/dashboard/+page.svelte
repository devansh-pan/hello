<script lang="ts">
  import { invalidate } from '$app/navigation'
  import type { EventHandler } from 'svelte/elements'

  import type { PageData } from './$types'

  let { data } = $props()
  let { profile, supabase, user } = $derived(data)
console.log(data)
  const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (evt) => {
    evt.preventDefault()
    if (!evt.target) return

    const form = evt.target as HTMLFormElement

    const note = (new FormData(form).get('note') ?? '') as string
    if (!note) return

    const { error } = await supabase.from('notes').insert({ note })
    if (error) console.error(error)

    invalidate('supabase:db:notes')
    form.reset()
  }
</script>
{#if user}
<h1>Welcome {user?.username}</h1>
<ul class="list text-blue-500 text-md">
  {#if profile}
    <li>User name: {profile.username}</li>
    <li>Email: {user.email}</li>
  {/if}
</ul>
  <a href="/user/{profile.username}">View public profile</a>
<form onsubmit={handleSubmit}>
  <label>
    Add a note
    <input name="note" type="text" />
  </label>
</form>
{/if}