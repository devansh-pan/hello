<script lang="ts">
import { compile } from 'mdsvex';
   let {data} = $props()
  const {compiledCode:meta} = $derived(data)
</script>
<svelte:head>
	<title>{meta?.data.fm?.title ?? 'Telugu18'}</title>
	<meta name="description" content="{meta.data.fm.description ?? 'Welcome to telugu18.'}" />
</svelte:head>
<span class="ml-3 p-2 block text-sm"><a href="/blog">Blog &nbsp; /</a> &nbsp;{meta?.data?.fm?.title ?? 'Post without title'}</span>
<hr class="border border-gray-600"/>
<main class="prose dark:prose-invert p-2 ">
   {@html data.compiledCode.code ?? 'No content'}
</main>
<style>
</style>
