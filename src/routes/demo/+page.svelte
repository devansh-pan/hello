<script lang="ts">

interface Posts{
  id: string;
  name:string
  username: string;
  about: string 
  avatar_url: string
  created_at: Date
}
  async function getPosts() {
    const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyY3lseWVreGhzZmlhemptZWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMTczMTQsImV4cCI6MjA1MDU5MzMxNH0._x3WZN1aF33bQ3_fMQ3vthsj_bsYzMexmnExgNlqI28"
    const response = await fetch(`https://hrcylyekxhsfiazjmeky.supabase.co/rest/v1/profiles?apikey=${key}`)
    const posts: Posts[] = await response.json()
    console.log(posts)
    return posts
  }
  console.log(getPosts())
</script>

<h1>Posts</h1>

{#await getPosts()}
  <p>Loading...</p>
{:then posts}
  <p>Showing {posts?.length ?? "0"} posts.</p>

  <ul>
    {#each posts as post}
      <li>
        <a class="text-blue-500" href="/user/{post?.username}">{post?.username}</a>
      </li>
      <p>{post?.about ?? "No info"}</p>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await}
