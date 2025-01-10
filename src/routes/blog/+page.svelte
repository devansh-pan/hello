<script lang="ts">
  let data = $props()
  const {data:{posts}} = $derived(data)
</script>
<div class="flex flex-col md:flex-row-3 lg:flex-row-4">
{#each posts as post}
  <div class="border border-gray-200 rounded p-3 m-2">
{#if post?.thumbnail}
<img src={post.thumbnail} loading="lazy" alt="{post?.data?.title}" class="w-full aspect-16/9 hover:shadow rounded-md" />
{/if}
<a href="{post?.path}"><h2 class="mb-4 text-2xl">{post?.data?.title}</h2>
  <small class="text-sm"> Updated on : {post.data?.date ?? ""} &nbsp; Author : {post.data?.author ?? "guest"} </small>
  <p>{post?.data?.description}</p></a>
</div>
{/each}
</div>