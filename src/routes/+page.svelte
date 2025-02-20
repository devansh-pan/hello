<script lang="ts">
	//import Quiz from '$lib/Quiz.svelte';
	let { data } = $props();
	let { posts } = $derived(data);
	let posts_ = $state(posts.data ?? []);
	import slugify from 'slugify';
	import { invalidate } from '$app/navigation';
	import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
	import { supabase } from '$lib/supabase';
	import { marked } from 'marked';
	let epost = $state({ id: crypto.randomUUID(), md: '', title: '', slug: '' });
	let status = $state({ message: '', type: '' });
	
	// let posts: any[] = $state([]);
	const postsFetch = async () => {
		let { data, error } = await supabase
			.from('posts')
			.select('*')
			.neq('deleted', true)
			.order('posted_at', { ascending: false });
		if (!error) {
			posts_ = data ?? [{}];
			//	console.log(posts);
		}
	};
	async function post(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		event.preventDefault();
		if (epost.title === '' || epost.md === '') {
			status.type = 'error';
			return (status.message = 'Cannot be empty ');
		}
		const { data, error } = await supabase
			.from('posts')
			.upsert([
				{ id: epost.id, title: epost.title, content: epost.md, slug: slugify(epost.title) }
			]);
		if (error) {
			status.message = error.message;
			status.type = 'error';
			console.log(error.message);
		} else {
			status.message = 'Posted successfully';
			status.type = 'success';
			const existingPostIndex = posts_.findIndex((post) => post.id === epost.id);
			if (existingPostIndex !== -1) {
				posts_[existingPostIndex] = {
					id: epost.id,
					title: epost.title,
					content: epost.md,
					slug: epost.slug
				};
			} else {
				posts_.push(epost);
			}
			epost = { title: '', md: '', slug: '', id: crypto.randomUUID() };
			setTimeout(() => {
				message = '';
				value = null;
			}, 3000);
		}
		console.log({ data });
	}

	async function deletePost(id: string): Promise<null> {
		// event.preventDefault()
		let { data, error } = await supabase
			.from('posts')
			.update([{ deleted: true }])
			.eq('id', id)
			.select('*');
		if (!error) {
			status.type = 'success';
			status.message = 'Deleted successfully';
			posts_ = posts_.filter((post) => post.id !== id);
		} else if (error) {
			status.type = 'error';
			status.message = error.message;
		}
		console.log({ error, data });
		invalidate(PUBLIC_SUPABASE_URL + '/rest/v1/posts');

		return null;
	}
</script>

<svelte:head>
	<title>Svelty</title>
	<meta name="description" content="Sveltz" />
</svelte:head>

<br />
{#if posts !== null}<div class="flex flex-col">
		{#each posts_ as post, i}
			<div class="flex flex-col">
				<div class="border p-2">
					<a href="/post/{post.slug}"> <h2 class="m-2 text-2xl font-bold">{post.title}</h2></a>

					<div class="prose">{@html marked.parse(post.content)}</div>
					<button class="m-2 w-25 border p-2" onclick={() => deletePost(post.id)}
						>Delete post</button
					>
					<button
						onclick={() => {
							(epost.title = post.title),
								(epost.md = post.content),
								(epost.id = post.id),
								(epost.slug = post.slug);
						}}
						class="m-2 w-25 border p-2">Update</button
					>
				</div>
			</div>
		{/each}
	</div>
{/if}
<br />
<p
	data-status={status.type}
	class="border p-2 text-gray-50 data-[status]:border-none data-[status=error]:bg-red-500 data-[status=success]:bg-green-500"
>
	{status.message ?? ''}
</p>
<br />

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
			bind:value={epost.title}
		/>
	</label>
	<br />

	Preview:
	<div class="prose min-h-25 border p-2">
		{@html marked.parse(epost.md)}
	</div>
	<label for="content">
		Post content : MD supported
		<textarea
			rows="2"
			class="field-content [field-sizing:content] min-h-25 w-full border p-2"
			placeholder="Write something"
			id="content"
			name="content"
			bind:value={epost.md}
		>
		</textarea>
	</label>
	<button
		disabled={epost.md === '' || epost.title === ''}
		onclick={() => {
			(epost.id = crypto.randomUUID()), (epost.md = ''), (epost.title = '');
		}}
		class="m-2 border p-2 disabled:text-gray-900/50">Discard</button
	>
	<button
		disabled={epost.md === '' || epost.title === ''}
		formaction="/"
		class="m-4 ml-50 rounded border p-2 text-xl disabled:text-gray-400"
		type="submit">Post</button
	>
</form>
