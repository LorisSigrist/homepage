<script lang="ts">
	import "$lib/styles/prism-themes/material.css"
	import "$lib/styles/prose.css"

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


<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
	class="prose prose-slate dark:prose-invert container mx-auto px-4 my-8 print:m-0 print:p-0 print:w-100"
	on:click={handleProseClick}
>
	<slot />
</article>
