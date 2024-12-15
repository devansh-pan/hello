<script>
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
			<a href="/sign-in">Go to Sign in</a>
		</div>
		<div>
			<a href="/sign-up">Go to Sign up</a>
		</div>
	</SignedOut>
</div>