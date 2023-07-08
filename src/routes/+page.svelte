<script>
	import Article from '$lib/articles/Article.svelte';
	import Topology from './Topology.svelte';
	export let data;
</script>

<Topology />

<div class="py-24 sm:py-32 scale-in">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h1 class="text-8xl font-black mb-24">Loris Sigrist</h1>

			<h2 class="text-3xl font-bold tracking-tight text-gray-90 dark:text-white sm:text-4xl">
				Articles
			</h2>
			<div class="mt-10 pt-10 space-y-5 border-t border-gray-200 dark:border-gray-700 sm:mt-8 sm:pt-8">
				{#each data.articles as article}
					<Article data={article} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.scale-in {
		animation: scale-in 1s ease-in-out;
		animation-fill-mode: backwards;
	}

	@keyframes scale-in {
		0% {
			transform: scale(0.9);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
