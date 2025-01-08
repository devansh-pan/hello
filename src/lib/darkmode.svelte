<script>
  import { onMount } from 'svelte';

  let isDarkMode = $state(false);

  // Load theme from localStorage
  onMount(() => {
    function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
    };
    const savedTheme = getCookie('theme');
    isDarkMode = savedTheme === 'dark';});
    // Apply the theme
function toggleClassById(id, className) {
  const element = document.getElementById(id);
  if (element) {
    if (element.classList.contains(className)) {
      element.classList.remove(className); isDarkMode = !isDarkMode;
      document.cookie = 'theme=light; expires=3150000;path=/;Same-site=false;';
    } else {
      element.classList.add(className);
      document.cookie = 'theme=dark;expires=31536000;path=/;Same-site=false;';
    }
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
}

  // Toggle dark mode
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.cookie = "theme=" + (!isDarkMode ? 'dark': 'light') +";path=/;max-age=31536000";

    // Update the theme
    document.getElementById('theme').classList.toggle('dark', isDarkMode);
    console.log(document?.cookie);
  };
      
</script>

<button class="text-black center m-2 p-1  h-[30px] rounded border border-gray-400 dark:border-gray-100/30" onclick={ () => toggleClassById('theme','dark')} >
  {isDarkMode ? '🌙' : '🔆'}
</button>

<style>
  /* Example styles for dark mode */
  :global(section.dark) {
    @apply bg-blue-950 text-white;
    
  }

  :global(html) {
    @apply bg-blue-50/50 text-blue-950/80;
  }
</style>
