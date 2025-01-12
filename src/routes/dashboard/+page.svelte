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
<h1 class="m-3 text-2xl text-bold">Welcome {profile.full_name}</h1>
  {#if profile}
  <div class="bg-white overflow-hidden shadow rounded-lg border dark:border-gray-600 m-3 dark:bg-inherit *:dark:text-white">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium dark:text-gray-100 text-gray-900">
            Profile :
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-inherit">
        
        </p>
    </div>
    <div class="border-t *:dark:text-white border-gray-200 dark:border-inherit px-4 py-5 sm:p-0">
        <dl class="sm:divide-y m:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white  sm:gap-4 sm:px-6">
              <img src={avatar} alt="avatar" class="aspect-square w-[60px] rounded-full circle" />
                <dt class="text-sm mt-3  font-medium ">
                    Full name :
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile?.full_name ?? "guest"}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.email ?? "no email"}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile?.phone ?? "no phone"}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 *:dark:text-white sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Address:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Mt. Meru<br>
                     Shambala,India
                </dd>
            </div>
        </dl>
    </div>
</div>
  {/if}
  
  <a class="text-slate-700 dark:text-white p-2 font-bold  " href="/user/{profile.username}">View public profile</a> <br>
    <button popovertarget="update" class="p-2 m-4 border border-inherit " >Update profile</button>
    {#if profile.full_name}
    <div popover id="update" class=" m-5 p-2 rounded dark:text-gray-800 w-full h-[75%]  shadow ">
<form method="POST" onsubmit={handleSubmit}>
  <label for="fullname dark:text-white">
    Update name
    <input class="block w-[75%] dark:bg-blue-100 dark: invalid:text-red-500 rounded red-500 peer" required id="fullname" minlength="5" maxlength="35" name="fullname" type="text" value={profile.full_name} />
      <small class="invisible peer-invalid:visible text-red-400">Not valid</small>
  </label>
    <button class="p-2 rounded bg-blue-950/60 dark:bg-blue-300 dark:text-gray-900 text-white" type="submit">Update </button>
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