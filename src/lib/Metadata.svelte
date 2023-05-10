<script lang="ts" context="module">
	export interface Metadata {
		title?: string;
		description?: string;
		author?: string;
		published?: Date;
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';

	const DEFAULT_TITLE = 'Loris Sigrist';
	const DEFAULT_AUTHOR = 'Loris Sigrist';

	$: title = $page.data.title ?? DEFAULT_TITLE;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta name="og:type" content="website" />
	<meta name="og:image" content="/og/{encodeURI(title)}.png" />

	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
	<meta name="author" content={$page.data.author ?? DEFAULT_AUTHOR} />
	{#if $page.data.published}
		<meta name="date" content={$page.data.published.toISOString()} />
	{/if}
</svelte:head>

<!-- 
	This is a hack to make the og:image prerender work.
	Remove if sveltejs/kit#5228 is fixed.
-->
<!-- svelte-ignore a11y-missing-content -->
<a href="/og/{encodeURI(title)}.png" style="display:none" aria-hidden="true" />