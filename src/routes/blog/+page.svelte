<script lang="ts">
  let data = $props()
  const {data:{posts}} = $derived(data)
  console.log(posts)
</script>
<div class="flex flex-col md:flex-row-3 lg:flex-row-4">
{#each posts as post}
  <div class="border border-gray-200 rounded p-3 m-2">
{#if post.thumbnail}
<img src={post?.thumbnail} alt="{post.post.data.fm?.title}" class="w-full rounded-md" />
{/if}
<a href="{post?.path}"><h2 class="text-2xl">{post.post.data.fm?.title}</h2></a>
  <p>{post.post.data.fm?.description}</p>
</div>
{/each}
</div>