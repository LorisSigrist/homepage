<script>
	import materialLightSrc from '$lib/styles/prism-themes/material-light.css?url';
	import materialDarkSrc from '$lib/styles/prism-themes/material-dark.css?url';
	import "$lib/styles/prose.css"

	import { theme } from '$lib/stores/theme';
</script>

<svelte:head>
	{#if $theme === 'dark'}
		<link rel="stylesheet" href={materialDarkSrc} />
	{:else}
		<link rel="stylesheet" href={materialLightSrc} />
	{/if}
</svelte:head>

<article
	class="prose prose-slate dark:prose-invert container mx-auto px-4 my-8 print:m-0 print:p-0 print:w-100"
>
	<slot />
</article>
