<!-- @component
    An MDSVEX layout for code snippets.
-->
<script>
	import '$lib/styles/prism-themes/material.css';
</script>

<div class="snippet">
	<slot />
</div>

<style>
	.snippet :global(pre) {
		display: contents;
	}
	.snippet :global(code) {
		background: none;
	}
</style>
