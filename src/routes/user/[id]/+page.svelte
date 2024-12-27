<script lang=ts >
	let { data } = $props();
	let {user} = $derived(data);
	console.log(data);
</script>

<h1>User {data.data?.username ?? "not found"} </h1>
<p>{data.data?.updated_at ?? "ago"}</p>
