<script lang="ts">
	import { page } from '$app/state';
	import {supabase} from '$lib/supabase'
	import '../app.css';
	supabase.auth.onAuthStateChange((event, session) => {
  if (session && session.provider_token) {
    window.localStorage.setItem('oauth_provider_token', session.provider_token)
  }

  if (session && session.provider_refresh_token) {
    window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
  }

  if (event === 'SIGNED_OUT') {
    window.localStorage.removeItem('oauth_provider_token')
    window.localStorage.removeItem('oauth_provider_refresh_token')
  }
})
//	import '@fontsource-variable/open-sans/wdth-italic.css';
	let { children } = $props();
</script>

<section class="flex min-h-dvh flex-col">
	<header class=" border-b border-gray-500 from-green-700 to-red-500 p-4">
		{#if page.url.pathname === '/'}
			<h1 class="m-2 text-3xl font-bold [font-stretch:extra-expanded]">Svelty</h1>
		{:else}
			<a href="/"> <p class="m-2 text-3xl font-bold [font-stretch:extra-expanded]">Svelty</p></a>
		{/if}
	</header>
	<main class=" grow p-2">
		{@render children()}
	</main>
	<footer class="border-t border-gray-400 p-6 text-gray-700 italic">
		<div><a href="/auth/login">Login</a></div>
		Svelty &copy; 2025
	</footer>
</section>
