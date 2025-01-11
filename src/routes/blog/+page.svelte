<script lang="ts">
 /* import Fuse from "fuse.js" */
  
  let data = $props();
  const {data:{posts}} = $derived(data);
console.log(posts);
</script>
<div class="flex flex-col md:flex-row-3 lg:flex-row-4">
{#each posts as post}
  <div class="border border-gray-400 bg-white dark:bg-inherit rounded p-3 m-2">
{#if post?.thumbnail}
<img src={post.thumbnail} loading="lazy" alt="{post?.data?.title}" class="w-full aspect-16/9 hover:shadow rounded-md" />
{/if}
<a href="{post?.path}"><h2 class="mb-2 text-2xl">{post?.data?.title}</h2>
  <small class=""> Updated on : {post.data?.date ?? ""} &nbsp; Author : {post.data?.author ?? "guest"} </small>
  <p>{post?.data?.description}</p></a>
    <small>tags: {#if post?.data?.tags}
   <span>{post.data.tags.join("  ")}</span>
    {/if}</small>
</div>
{/each}
</div>