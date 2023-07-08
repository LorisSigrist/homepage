<script>
	import '$lib/bootstrap.css';
	import Metadata from '$lib/metadata/Metadata.svelte';
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
			const prefers_light = localStorage.getItem('theme') === 'light';
			const prefers_nothing = !prefers_dark && !prefers_light;
			if (prefers_dark) {
				document.documentElement.classList.add('dark');
			} else if (prefers_light) {
				document.documentElement.classList.remove('dark');
			} else if (prefers_nothing) {
				const media_query = window.matchMedia('(prefers-color-scheme: dark)');
				if (media_query.matches) {
					document.documentElement.classList.add('dark');
					localStorage.setItem('theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('theme', 'light');
				}
			}
		}
	</script>
</svelte:head>

<Metadata />

<Header />

<slot />
