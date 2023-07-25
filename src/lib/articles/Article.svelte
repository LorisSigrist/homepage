<script lang="ts">
	import { dev } from '$app/environment';
	import type { Article } from './types';
	export let data: Article;

	function slugify(str: string) {
		return str
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)+/g, '');
	}
</script>

<article
	class="flex w-full flex-col items-start justify-between bg-white dark:bg-gray-950 p-10 print:p-0 rounded-md relative shadow-sm print:shadow-none print:break-inside-avoid"
	id={slugify(data.title)}
>
	<div class="flex items-center gap-x-3 text-xs">
		<time datetime="2020-03-16" class="text-gray-500 dark:text-gray-400">
			{data.published.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</time>

		{#if dev}
			{#if data.draft}
				<span
					class="relative z-10 rounded-full bg-gray-50 dark:bg-gray-900 dark:text-gray-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					>Draft</span
				>
			{/if}

			{#if data.published > new Date()}
				<span
					class="relative z-10 rounded-full bg-gray-50 dark:bg-gray-900 dark:text-gray-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
				>
					Scheduled
				</span>
			{/if}
		{/if}

		<!--Link-->
		<span class="hidden print:block text-gray-500 dark:text-gray-400">
			{data.link}
		</span>
	</div>
	<div class="group">
		<h3
			class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white dark:group-hover:text-gray-300 group-hover:text-gray-600 capitalize"
		>
			<a href={data.link}>
				<!--This makes the link clickable on the whole card-->
				<span class="absolute inset-0" />
				{data.title}
			</a>
		</h3>
		<p class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
			{data.description}
		</p>
	</div>
</article>