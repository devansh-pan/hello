
<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page?.status ?? "Error"} {page?.error?.message ?? "Error"}</h1>
<span style="font-size: 10em">
	
</span>