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
 let result = $state([]);
  let searched = $state(false)
function update(event) {
  const fuse = new Fuse(posts, {
    keys:['data.title','data.description','path','data.tags','data.author']
  })
  searched = true ;
 result = fuse.search(event.target.value)
  console.log(result);
  return result, searched
}
  function change(event) {
    if(event.target.value === "") {
  searched = false;
      return searched
    }
  }
</script>
<div class="flex flex-col md:flex-row-3 lg:flex-row-4">
  
  <input class="text-inherit bg-inherit" type="text" placeholder="search.." name="hello" onchange={change} onkeyup={update}>
  {#if result.length > 0}
    {#each result as post}
     <div class="border p-2 mb-4"> <a href="{post?.item?.path}">{post?.item?.data?.title ?? "no title"}
     </a> <br/>
     {post.item.data?.description ?? "no description"}</div>
    {/each} 
  
  {:else if searched === true}
      <p>Nothing found </p>
  {/if}
  <h1 class="p-4 text-2xl text-inherit">
    Blog Archive</h1>
{#each posts as post, i }
  <div class="border border-gray-400 dark:bg-inherit {colors[i % colors.length]} rounded p-3 m-2">
{#if post?.thumbnail}
<img src={post.thumbnail} loading="lazy" alt="{post?.data?.title}" class="w-full aspect-16/9 hover:shadow h-auto rounded-md" />
{/if}
<a href="{post?.path}"><h2 class="mb-2 text-2xl">{post?.data?.title}</h2>
  <small class="text-wrap"> Updated on : {post.data?.date ?? ""} &nbsp; Author : {post.data?.author ?? "Guest"} </small><br>
  
  <p class="mt-3 mb-4">{post?.data?.description}</p></a>
    <small>
    {#if post?.data?.tags }
      tags :
   <span>{post.data.tags.join(" , ")}</span>
    {/if}</small>
</div>
{/each}
</div>