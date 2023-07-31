import type { ArticleMetadata } from '$lib/articles/types';

export function load(): ArticleMetadata {
	return {
		title: 'Building Bachtel',
		description: `Bachtel is a time- and performance tracking app built for Youth-Workers.`,
		published: new Date('2021-08-01'),
		author: 'Loris Sigrist',
		draft: true
	};
}
