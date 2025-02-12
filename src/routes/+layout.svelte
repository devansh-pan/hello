<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Sveltz</title>
	<meta name="description" content="Sveltz" />
</svelte:head>
<section class="flex min-h-dvh flex-col">
	<header class=" from-green-700 to-red-500 p-4 border-gray-500 border-b"><h1 class="text-3xl m-2 font-bold">Sveltz</h1></header>
	<main class="grow p-2 ">
	{@render children()}
	</main>
	<footer class=" p-6 text-gray-400">Sveltz &copy; 2025</footer>
</section>
