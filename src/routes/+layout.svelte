<script>
	import '$lib/bootstrap.css';

	function toggle_dark_theme() {
		document.body.classList.toggle('dark');
	}
</script>

<div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
	<header class="container mx-auto px-4">
		<button on:click={toggle_dark_theme}>Toggle dark theme</button>
	</header>

	<slot />
</div>
