<script>
	import Article from '$lib/articles/Article.svelte';
	import Topology from './Topology.svelte';
	export let data;
</script>

<Topology />

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl print:mx-0 print:max-w-none">
			<hgroup class="mb-8">
				<h1 class="text-8xl font-black mb-4">Loris Sigrist</h1>
				<p class="text-xl">
					Building fun stuff on the Internet. Occasional blogger, Frequent Nerd.
				</p>
			</hgroup>

			<div class="mt-10 pt-10 space-y-5 print:space-y-10 sm:mt-8 sm:pt-8 max-w-2xl"  >
				{#each data.articles as article}
					<Article data={article} />
				{/each}
			</div>
		</div>
	</div>
</div>
