<script lang="ts">
   let {data} = $props()
  const {html} = $derived(data)
</script>
<svelte:head>
	<title>{data?.data?.title ?? 'Telugu18'}</title>
	<meta name="description" content="{data?.data?.description ?? 'Welcome to telugu18.'}" />
</svelte:head>
<span class="ml-3 p-2 block text-sm"><a href="/blog">Blog &nbsp; /</a> &nbsp;{data?.data?.title ?? 'Post without title'}</span>
<hr class="border border-gray-600"/>
<main class="prose dark:prose-invert p-2 ">
   {@html html ?? 'No content'}
</main>
<style>
</style>
