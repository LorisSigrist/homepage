<script>
	import Article from '$lib/articles/Article.svelte';
	import Topology from './Topology.svelte';
	export let data;
</script>

<Topology />

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<hgroup class="mb-8">
				<h1 class="text-8xl font-black mb-4">Loris Sigrist</h1>
				<p class="text-xl">
					Unleashing Innovation with Curiocity and Passion. Welcome to my personal website, where I
					explore the intricacies of Fullstack Web engineering.
				</p>
			</hgroup>

			<div class="mt-10 pt-10 space-y-5 sm:mt-8 sm:pt-8">
				{#each data.articles as article}
					<Article data={article} />
				{/each}
			</div>
		</div>
	</div>
</div>
