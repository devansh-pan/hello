<script lang="ts">
	//import Quiz from '$lib/Quiz.svelte';
	let {data} = $props();
	let {posts} = $derived(data);
	let posts_ = $state(posts.data ?? [])
	console.log(data.posts)
	import slugify from 'slugify'
	import { invalidate } from '$app/navigation';
	import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
	import { supabase } from '$lib/supabase';
	import { marked } from 'marked';
	let md = $state('');
	let title = $state('');
	let slug = $state('');
	let content = $derived(marked.parse(md));
	let message = $state();
	let id = $state(crypto.randomUUID());
	// let posts: any[] = $state([]);
	const postsFetch = async () => {
		let { data, error } = await supabase.from('posts').select('*').neq('deleted',true).order('posted_at',{ascending:false});
		if (!error) {
			posts_ = data ?? [{}];
		//	console.log(posts);
		}
	};
	async function post(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		event.preventDefault();
		if (title === '' || md === '') {
			return (message = 'Cannot be empty ');
		}
		const { data, error } = await supabase
			.from('posts')
			.upsert([{ id: id, title: title, content: md , slug: slugify(title)}]);
		if (error) {
			message = error.message;
			console.log(error.message);
		} else {
			message = 'Posted successfully';
			const existingPostIndex = posts_.findIndex((post) => post.id === id);
			if (existingPostIndex !== -1) {
				posts_[existingPostIndex] = { id, title, content: md ,slug};
			} else {
				posts_.push({ id, title, content: md });
			}
			title = '';
			md = '';
			slug = '';
			id = crypto.randomUUID();
			setTimeout(() => {
				message = '';
			}, 3000);
		}
		console.log({ data });
	}

	async function deletePost(id: string): Promise<null> {
		// event.preventDefault()
		let { data, error } = await supabase.from('posts').update([{deleted:true}]).eq('id', id).select('*');
		if (!error) {
			message = 'Deleted successfully';
		}
		console.log({ error, data });
		invalidate(PUBLIC_SUPABASE_URL + '/rest/v1/posts');
		posts_ = posts_.filter((post) => post.id !== id);
		return null;
	}
</script>

<svelte:head>
	<title>Sveltz</title>
	<meta name="description" content="Sveltz" />
</svelte:head>
<h1 class="text-3xl font-bold">Welcome to Sveltz</h1>
<br />
{#if posts !== null}<div class="flex flex-col">
		{#each posts_ as post, i}
			<div class="flex flex-col">
				<div class="border p-2">
				<a href="/post/{post.slug}">	<h2 class="m-2 text-2xl">{post.title}</h2></a>
					
					<p class="**:appearence-none">{@html marked.parse(post.content)}</p>
					<button class="m-2 w-25 border p-2" onclick={() => deletePost(post.id)}
						>Delete post</button
					>
					<button
						onclick={() => {
							(title = post.title), (md = post.content), (id = post.id),(slug = post.slug);
						}}
						class="m-2 w-25 border p-2">Update</button
					>
				</div>
			</div>
		{/each}
	</div>
{/if}
<br />
{message ?? ''}
<br />
<div class="prose prose-h1:text-3xl m-2 min-h-25 border p-2">
	{@html marked.parse(md)}
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
		Post content : MD supported
		<textarea
			rows="2"
			class="field-content [field-sizing:content] min-h-25 w-full border p-2"
			placeholder="Write something"
			id="content"
			name="content"
			bind:value={md}
		>
		</textarea>
	</label>

	<button
		disabled={md === '' || title === ''}
		formaction="/"
		class="m-4 rounded-lg border p-2 text-2xl disabled:text-gray-500"
		type="submit">Post</button
	>
	<button
		onclick={() => {
			(id = crypto.randomUUID()), (md = ''), (title = '');
		}}
		class="m-2 border p-2">Discard</button
	>
</form>
