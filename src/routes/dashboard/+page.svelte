<script lang="ts">
  import { invalidate , goto, invalidateAll} from '$app/navigation'
  import type { EventHandler } from 'svelte/elements'

  import type { PageData } from './$types'
 let message = $state("");
  let { data, form } = $props()
  let { profile, supabase, user } = $derived(data);
    const { data:url } = supabase.storage.from('avatars').getPublicUrl(profile.username)
const avatar = url.publicUrl
  const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (evt) => {
    evt.preventDefault()
    if (!evt.target) return

    const form = evt.target as HTMLFormElement

    const file = (new FormData(form).get('avatar')) as string
    const fullname = (new FormData(form).get('fullname') ?? profile.full_name) as string
    if (fullname) {
 const { data, error} = await supabase.from('profiles').upsert({id:profile.id,full_name: fullname}).eq('id', profile.id).select('*').single();
      if (error) {
        console.log(error)
          return message = error.message
      } 
        await invalidate('supabase:db:profiles');
        console.log(data)
      return { profile:data , message: "Updated"}
    } 
    
  }
</script>
{#if user}
<h1>Welcome {profile.full_name}</h1>
  {#if profile}
  <div class="bg-white overflow-hidden shadow rounded-lg border m-3 dark:bg-blue-900/90 *:dark:text-white">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium dark:text-gray-100 text-gray-900">
            Profile :
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-100">
            This is some information about the you.
        </p>
    </div>
    <div class="border-t *:dark:text-white border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y m:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white  sm:gap-4 sm:px-6">
              <img src={avatar} alt="avatar" class="aspect-square w-[60px] rounded-full circle" />
                <dt class="text-sm font-medium ">
                    Full name :
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile.full_name}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.email}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Address:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St<br>
                     Shambala,India
                </dd>
            </div>
        </dl>
    </div>
</div>
  {/if}
  
  <a class="text-gray-700 dark:text-white p-2 font-bold border block" href="/user/{profile.username}">View public profile</a>
    {#if profile.full_name}
    <div class="bg-white p-2 rounded dark:text-gray-800 dark:bg-teal-700 shadow ">
<form method="POST" onsubmit={handleSubmit}>
  <label for="fullname dark:text-white">
    Update name
    <input class="block dark:bg-blue-200/40 dark:text-white invalid:text-red-500 red-500 peer" required id="fullname" minlength="5" maxlength="35" name="fullname" type="text" value={profile.full_name} />
      <small class="invisible peer-invalid:visible text-red-400">Not valid</small>
  </label>
    <button class="p-2 rounded bg-blue-950/60 dark:bg-blue-300 dark:text-gray-900 text-white" type="submit">Submit </button>
</form>
    </div>
    {/if}
  <p>{message}</p>
{/if}
<style>
input , textarea {
    field-sizing: content;
} 
</style>