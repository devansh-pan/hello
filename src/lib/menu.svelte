<script>
    let {session} = $props();
</script>
<div class="p-4">
    <div class="group relative">
        <button class="bg-gray-100 border dark:border-gray-100/30 dark:bg-gray-600 dark:text-gray-200 text-gray-800 px-4 h-10 rounded">Menu</button>
        <nav tabindex="0" class="border border-2 bg-white invisible border-gray-400 rounded w-60 absolute left-0 top-full transition-all rounded dark:bg-gray-600 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul class="py-1">
                <li>
                    <a href="/dashboard" class="block px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-100"> Dashboard
                    </a>
                </li>
                <li>
                    <a href="/about" class="block px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-100">
                        About
                    </a>
                </li>
                <li>
     {#if !session}
                           <a href="/auth" class="block px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-100">Login</a> 
                        {/if}
                </li>
            </ul>
        </nav>
    </div>
</div>
<style>
    
</style>