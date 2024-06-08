<script lang="ts">
	//import '$lib/styles/prism-themes/material.css';
	import '$lib/styles/prose.css';

	async function handleProseClick(e: MouseEvent) {
		/*
		The `rehype-autolink-headings` plugin adds anchor tags inside the headings.

		<h*>
			<a href="">Text</a>
		</h*>

		We want to copy the link when the user clicks on the anchor tag.
		*/
		if (
			e.target instanceof HTMLAnchorElement &&
			e.target.parentElement instanceof HTMLHeadingElement
		) {
			await navigator.clipboard.writeText(e.target.href);
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
	class="prose max-w-[70ch] prose-slate dark:prose-invert container mx-auto px-4 my-8 print:m-0 print:p-0 print:w-100"
	on:click={handleProseClick}
>
	<slot />
</article>

<div class="progress-bar h-3 bg-blue-700" />

<style>
	.progress-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 100%;
		z-index: 1000;

		animation-name: progress;
		animation-duration: 1ms; /* Firefox requires this to apply the animation */
		animation-direction: alternate;
		animation-timeline: scroll(block nearest);
		animation-timing-function: linear;
	}

	@supports not (animation-timeline: scroll()) {
		.progress-bar {
			display: none;
		}
	}

	@keyframes progress {
		from {
			right: 100%;
		}
		to {
			right: 0;
		}
	}
</style>
