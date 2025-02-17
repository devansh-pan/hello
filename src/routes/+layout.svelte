<script lang="ts">
	import {page} from '$app/state';
	import '../app.css';
	import '@fontsource-variable/open-sans/wdth-italic.css';
	let { children } = $props();
</script>

<section class="flex min-h-dvh flex-col">
	<header class=" border-b border-gray-500 from-green-700 to-red-500 p-4">
		{#if page.url.pathname === '/'}
		<h1 class="[font-stretch:extra-expanded] m-2 text-3xl font-bold">Svelty</h1>
		{:else}
		<a href="/">	<p class="font-bold text-3xl m-2 [font-stretch:extra-expanded]">Svelty</p></a>
		{/if}
	</header>
	<main class=" grow p-2">
		{@render children()}
	</main>
	<footer class="italic border-t border-gray-400 p-6 text-gray-700">Svelty &copy; 2025</footer>
</section>
