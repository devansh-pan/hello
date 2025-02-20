<script lang="ts">
	let { data } = $props();
	console.log(data);
</script>

<h1 class="text-3xl font-bold">{data.data[0].title ?? ''}</h1>
<small>{new Date(data.data[0].posted_at)}</small>
<div class="mt-8 prose text-lg">
	{@html data.content}
</div>
