<script>
  import { onMount } from 'svelte';

  let isDarkMode = $state(false);

  // Load theme from localStorage
  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    isDarkMode = savedTheme === 'dark';

    // Apply the theme
    document.documentElement.classList.toggle('dark', isDarkMode);
  });

  // Toggle dark mode
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update the theme
    document.documentElement.classList.toggle('dark', isDarkMode);
  }
</script>

<button class="p-2 ml-4 border border-gray-400 dark:border-gray-100/30" onclick={toggleDarkMode}>
  {isDarkMode ? 'Light' : 'Dark'}
</button>

<style>
  /* Example styles for dark mode */
  :global(html.dark) {
    @apply bg-gray-800 text-white;
    
  }

  :global(html) {
    background-color: white;
    @apply text-gray-800;
  }
</style>
