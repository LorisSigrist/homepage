<script lang="ts">
	import materialLightSrc from '$lib/styles/prism-themes/material-light.css?url';
	import materialDarkSrc from '$lib/styles/prism-themes/material-dark.css?url';
	import "$lib/styles/prose.css"

	import { theme } from '$lib/stores/theme';


	async function handleProseClick(e: MouseEvent) {
		/*
		The `rehype-autolink-headings` plugin adds anchor tags inside the headings.
		
		<h*>
			<a href="">Text</a>
		</h*>

		We want to copy the link when the user clicks on the anchor tag.
		*/
		if (e.target instanceof HTMLAnchorElement && e.target.parentElement instanceof HTMLHeadingElement) {
			e.preventDefault();
			await navigator.clipboard.writeText(e.target.href);
		}
	}

</script>

<svelte:head>
	{#if $theme === 'dark'}
		<link rel="stylesheet" href={materialDarkSrc} />
	{:else}
		<link rel="stylesheet" href={materialLightSrc} />
	{/if}
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
	class="prose prose-slate dark:prose-invert container mx-auto px-4 my-8 print:m-0 print:p-0 print:w-100"
	on:click={handleProseClick}
>
	<slot />
</article>
