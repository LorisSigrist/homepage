import type { ArticleMetadata } from '$lib/articles/types';

export function load(): ArticleMetadata {
	return {
        title: 'The better way to load data',
        description: "When loading data, we usually fetch, wait for the response and then render the page. If the fetch is slow, our page is slow. But what if we could render the page while the data is still loading? This is what this article is about.",
		published: new Date('2023-07-01'),
		author: 'Loris Sigrist'
	};
}
