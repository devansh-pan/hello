<script>
  import {supabase } from '$lib/supabase';
async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
</script>
<div>
  <h2 class="text-3xl">Login </h2>
  <button class="border p-2 m-4" onclick={signInWithGithub}>Login with github</button>
</div>