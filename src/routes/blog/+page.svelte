<script lang="ts">
  let data = $props()
  console.log(data)
</script>

{#each data.data.posts as post}
  <div class="border border-gray-200 rounded p-3 m-2">
<a href="{post.path}"><h2>{post.data.data.fm?.title}</h2></a>
  <p>{post.data.data.fm?.description}</p>
</div>
{/each}