<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/open-sans/wdth-italic.css';
	let { children } = $props();
</script>

<section class="flex min-h-dvh flex-col">
	<header class=" border-b border-gray-500 from-green-700 to-red-500 p-4">
		<a href="/"><h1 class="m-2 text-3xl font-bold">Sveltz</h1></a>
	</header>
	<main class="grow font-open p-2">
		{@render children()}
	</main>
	<footer class=" p-6 border-t border-gray-400 text-gray-700">Sveltz &copy; 2025</footer>
</section>
