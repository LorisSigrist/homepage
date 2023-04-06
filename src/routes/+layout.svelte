<script>
	import '$lib/bootstrap.css';
	import Metadata from '$lib/Metadata.svelte';
	import Header from '$lib/ui/Header.svelte';
</script>

<svelte:head>
	<!-- 
		This initializes the dark / light theme. 
		It's supposed to be inlined in the html and run blockingly
	-->
	<script>
		if ('localStorage' in window) {
			const prefers_dark = localStorage.getItem('theme') === 'dark';

			if (prefers_dark) {
				document.documentElement.classList.add('dark');
			}
		}
	</script>
</svelte:head>

<Metadata />

<Header />

<slot />
