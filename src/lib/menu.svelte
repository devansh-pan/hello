<script>
    let {session} = $props();
</script>
<div class="p-2">
    <div class="group relative">
        <button class="bg-gray-100 border dark:border-gray-100/30 dark:bg-gray-800 dark:text-gray-200 text-gray-800 px-2 h-8 rounded">Menu</button>
        <nav tabindex="0" class="border border-2 bg-white invisible border-gray-400 rounded w-60 absolute left-0 top-full transition-all rounded dark:bg-gray-800 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul class="py-1">
                <li>
                    <a href="/dashboard" class="block px-2 py-1 text-sm hover:dark:bg-blue-900/20 hover:bg-blue-100"> Dashboard
                    </a>
                </li>
                <li>
                    <a href="/blog" class="block px-2 py-1 text-sm hover:dark:bg-pink-950/30 hover-bg-pink-200">Blog</a>
                </li>
                <li>
                    <a href="/about" class="block px-2 py-1 text-sm hover:dark:bg-gray-700 hover:bg-gray-100">
                        About
                    </a>
                </li>
                <li>
     {#if !session}
                           <a href="/auth" class="block px-2 py-1 text-sm hover:dark:bg-gray-700 hover:bg-gray-100">Login</a> 
                        {/if}
                </li>
            </ul>
        </nav>
    </div>
</div>
<style>
    
</style>