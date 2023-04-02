<script>
	import '$lib/bootstrap.css';
	import Metadata from '$lib/Metadata.svelte';

	function toggle_dark_theme() {
		document.body.classList.toggle('dark');
	}
</script>

<Metadata />

<div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
	<header class="container mx-auto px-4 py-4">
		<button class="hover:bg-gray-100 hover:dark:bg-gray-800 p-1 px-4 rounded-md" on:click={toggle_dark_theme}>Toggle dark theme</button>
	</header>

	<slot />
</div>
