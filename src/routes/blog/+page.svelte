<script lang="ts">
  import Fuse from "fuse.js" 
  
  let data = $props();
  const {data:{posts}} = $derived(data);
console.log(posts);
  const colors = $state([
    'bg-red-200',
    'bg-orange-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-slate-200',
    'bg-amber-200',
    'bg-emerald-200',
    'bg-sky-200',
    'bg-rose-200',
    'bg-lime-200',
    'bg-teal-200',
    'bg-violet-200',
    
  ]);
 let result = $state([])
function update(event) {
  const fuse = new Fuse(posts, {
    keys:['data.title','data.description','path']
  })
 result = fuse.search(event.target.value)
  console.log(result);
  return result
}
</script>
<div class="flex flex-col md:flex-row-3 lg:flex-row-4">
  
  <input type="text" name="hello" onchange={update}>
  {#if result !== null}
    {#each result as post}
     <div class="border p-2 mb-4"> <a href="{post?.item?.path}">{post?.item?.data?.title ?? "no title"}
     </a> <br/>
     {post.item.data?.description ?? "no description"}</div>
    {/each}
  {/if}
  
{#each posts as post, i }
  <h1 class="p-4 text-inherit">
      Blog Archive
  </h1>
  <div class="border border-gray-400 dark:bg-inherit {colors[i % colors.length]} rounded p-3 m-2">
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