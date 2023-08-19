<script lang="ts" context="module">
	export type { Metadata } from './types';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import default_favicon from '$lib/assets/favicon.png';

	export let icon: string = default_favicon;
	export let og_image: string | undefined = undefined;

	const DEFAULT_TITLE = 'Loris Sigrist';
	const DEFAULT_AUTHOR = 'Loris Sigrist';

	$: title = $page.data.title ?? DEFAULT_TITLE;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta name="og:type" content="website" />

	{#if og_image}
		<meta name="og:image" content={og_image} />
	{:else}
		<!--Use Generated Image if no custom image is provided-->
		<meta name="og:image" content="/og/{encodeURI(title)}.png" />
	{/if}

	<link rel="icon" href={icon} />

	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}

	<meta name="author" content={$page.data.author ?? DEFAULT_AUTHOR} />
	{#if $page.data.published}
		<meta name="date" content={$page.data.published.toISOString()} />
	{/if}
</svelte:head>
