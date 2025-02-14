<script lang="ts">
	import Quiz from '$lib/Quiz.svelte';
	import {invalidate} from "$app/navigation"
	import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public"
	import { supabase } from '$lib/supabase';
	import { marked } from 'marked';
	let md = $state('');
	let title = $state('');
	 let content = $derived(marked.parse(md));
	let message = $state();
	let id = $state(crypto.randomUUID())
	let posts : any[] = $state([]);
	const postsFetch = async () => {
		let { data, error } = await supabase.from('posts').select('*');
		if (!error) {
			posts = data ?? [{}]
			console.log(posts);
		}
	};
	postsFetch();
	async function post(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement } ) {
		event.preventDefault();
		if (title === '' || md === '') {
			return (message = 'Cannot be empty ');
		}
		const { data, error } = await supabase
			.from('posts')
			.upsert([{ id:id,title: title, content: md }]);
		if (error) {
			message = error.message;
			console.log(error.message);
		} else {
			message = 'Posted successfully';
			if (!posts.some(post => post.id === id)) {
				posts?.push({id,title,content:md})
			}
			title = ''; md = ''; id = crypto.randomUUID();
			setTimeout(() => {
				message = '';
			}, 9000);
			
		}
		console.log({ data});
	}

	async function deletePost(id:string) : Promise<null>{
		 // event.preventDefault()
	let {data,error} = await supabase.from('posts').delete().eq('id', id).select('*');
		if (!error){
			message = "Deleted successfully"
		}
		console.log({error,data});
		invalidate(PUBLIC_SUPABASE_URL+"/rest/v1/posts");posts = posts.filter(post => post.id !== id);
		 return null;
	}
</script>

<svelte:head>
	<title>Sveltz</title>
	<meta name="description" content="Sveltz" />
</svelte:head>
<h1 class="text-3xl font-bold">Welcome to Sveltz</h1>
<br />
{#if posts !== null}
	{#each posts as post, i}
		<div class="flex flex-col">
			<h2 class="text-2xl m-2">{post.title}</h2>
			{post.id}
			<p>{post.content}</p>
		</div>
		<button class="border p-2 m-2 " onclick={() => deletePost(post.id)}>Delete post</button>
		<button onclick={() => {title=post.title,md = post.content ,id = post.id}} class="p-2 m-2 border">Update</button>
	{/each}
{/if}
<br>
{message ?? ''}
<br />
<div class="prose p-2 m-2 min-h-25 prose-h1:text-3xl border">
{@html md}	
</div>
<form method="POST" onsubmit={post} action="/?post">
	<label for="title">
		Post title :
		<input
			required
			type="text"
			class="h-12 w-full border px-2"
			id="title"
			name="title"
			placeholder="Post title"
			bind:value={title}
		/>
	</label>
	<br />
	<br />
	<label for="content">
		Post content :
		<textarea
			rows="2"
			class="field-content [field-sizing:content] h-25 w-full border p-2"
			placeholder="Write something md supported"
			id="content"
			name="content"
			bind:value={md}
		>
		</textarea>
	</label>
	<button disabled={md === '' || title === ''} formaction="/" class="m-4 rounded-lg border p-2 text-2xl disabled:text-gray-500" type="submit">Post</button>
	<button onclick={() => {id = crypto.randomUUID(),md = '', title = ''}} class="border m-2 p-2 ">Discard</button>
</form>
