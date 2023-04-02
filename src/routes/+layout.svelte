<script>
	import '$lib/bootstrap.css';
	import Metadata from '$lib/Metadata.svelte';

	function toggle_dark_theme() {
		document.getElementsByTagName('html')[0].classList.toggle('dark');
	}
</script>

<Metadata />

<header class="container mx-auto px-4 py-4 print:hidden">
	<button
		class="hover:bg-gray-100 hover:dark:bg-gray-800 p-1 px-4 rounded-md"
		on:click={toggle_dark_theme}>Toggle dark theme</button
	>
</header>

<slot />
