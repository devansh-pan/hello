<script lang=ts >
	let { data } = $props();
	let {profile} = $derived(data);
</script>
<h1 class="m-2">User : {profile.username ?? "not found"} </h1>
<div class="rounded p-2 m-2 border dark:border-gray-500 shadow ">
	<img alt="avatar" class="aspect-square w-[60px] rounded-full circle" src="https://hrcylyekxhsfiazjmeky.supabase.co/storage/v1/object/public/{profile.avatar_url}">
<p>Full name: {profile.full_name ?? "Name unavailable"}</p>
</div>
