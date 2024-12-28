<script lang=ts >
	let { data } = $props();
	let {profile} = $derived(data);
	console.log(data);
</script>
<h1>User {profile.username ?? "not found"} </h1>
<p>{profile.updated_at ?? "ago"}</p>
