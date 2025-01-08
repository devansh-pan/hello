<script>
    import {onMount} from "svelte"
    
    let year = new Date().getFullYear();
    onMount(() => {
    const dtf = new Intl.DateTimeFormat( navigator.language ?? 'en', {dateStyle: 'long', timeStyle: 'short'});
const date = dtf.format(new Date());
    let el = document.getElementById("date").innerText = "Date now:" + date;})
</script>

<footer class="bottom-[1px] bg-white rounded-sm shadow m-2 dark:bg-blue-900 dark:border dark:border-gray-100/40">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="/" class="hover:underline">Telugu18 @  {year} .</a>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/license" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="/returns" class="hover:underline">Returns & cancellations</a>
        </li>
    </ul>
    </div>
    <small id="date"> </small>
</footer>
