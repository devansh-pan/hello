<script>
    let {session} = $props();
</script>
<!--<button popovertarget="menu">menu</button>
<div class="top-0" popover id="menu">Heloo</div> -->
<div class="pl-[20px]">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <div class="group  *:text-gray-950 relative">
        <button popovertarget="menu" class=" dark:border-gray-100/30 text-gray-100  center rounded"><i class="bi text-white text-[40px] bi-list hover:bi-three-dots-vertical group-focus-within:rotate-90 hover:text-gray-200 focus:invisible"></i></button>
        <nav popover id="menu" tabindex="0" class="border border-2 bg-white *:dark:text-gray-50 dark:bg-blue-950 invisible border-gray-400 rounded w-60 absolute left-0  top-full top-[0px] transition-all rounded  opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul class="py-1 *:dark:text-gray-100 *:hover:dark:bg-blue-700 *:text-[16px]">
                <li>
                    <a href="/dashboard" class="block px-2 py-1 "> Dashboard
                    </a>
                </li>
                <li>
                    <a href="/blog" class="block px-2 py-1  hover:dark:bg-pink-950/30 hover-bg-pink-200">Blog</a>
                </li>
                <li>
                    <a href="/about" class="block px-2 py-1 hover:dark:bg-gray-700 hover:bg-gray-100">
                        About
                    </a>
                </li>
                <li>
     {#if !session}
                           <a href="/auth" class="block px-2 py-1 hover:dark:bg-gray-700 hover:bg-gray-100">Login</a> 
                        {/if}
                </li>
            </ul>
        </nav>
    </div>
</div>
<style>
    
</style>