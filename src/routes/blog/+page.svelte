<script lang="ts">
  let data = $props()
  const {data:{posts}} = $derived(data)
</script>
<div class="flex flex-col md:flex-row-3 lg:flex-row-4">
{#each posts as post}
  <div class="border border-gray-200 rounded p-3 m-2">
{#if post?.thumbnail}
<img src={post?.thumbnail} lazy-loading="true" alt="{post?.data?.title}" class="w-full rounded-md" />
{/if}
<a href="{post?.path}"><h2 class="text-2xl">{post?.data?.title}</h2></a>
  <p>{post?.data?.description}</p>
</div>
{/each}
</div>