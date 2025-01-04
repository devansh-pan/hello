<script lang="ts">
import { compile } from 'mdsvex';
   let {data} = $props()
  const {compiledCode:meta} = $derived(data)
</script>
<svelte:head>
	<title>{meta?.data.fm?.title ?? 'Telugu18'}</title>
	<meta name="description" content="{meta.data.fm.description ?? 'Welcome to telugu18.'}" />
</svelte:head>
<main class="prose prose:headings:dark:text-white dark:bg-gray-800 dark:text-gray-100">
   {@html data.compiledCode.code}
</main>
<style>
</style>
