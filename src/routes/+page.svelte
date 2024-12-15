<script>
	import { useClerkContext } from 'svelte-clerk';

	// Do not destructure context or you'll lose reactivity!
	const ctx = useClerkContext();
	const userId = $derived(ctx.auth.userId);

	const fetchDataFromExternalResource = async () => {
		const token = await ctx.session.getToken();
		// Add logic to fetch your data
		return data;
	};
	import { SignedIn, SignedOut, UserButton, SignOutButton } from 'svelte-clerk';
</script>

<div>
	<h1>Index Route</h1>
	<SignedIn>
		<p>You are signed in!</p>
		<div>
			<p>View your profile here 👇</p>
			<UserButton />
		</div>
		<div>
			<SignOutButton />
		</div>
	</SignedIn>
	<SignedOut>
		<p>You are signed out</p>
		<div>
			<a href="/signin">Go to Sign in</a>
		</div>
		<div>
			<a href="/login">Go to Sign up</a>
		</div>
	</SignedOut>
</div>
{#if userId === undefined}
	<p>Loading...</p>
{:else if userId === null}
	<p>Sign in to view this page</p>
{:else}
	<div>...</div>
{/if}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
