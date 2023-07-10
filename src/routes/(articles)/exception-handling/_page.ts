import type { ArticleMetadata } from '$lib/articles/types';

export function load(): ArticleMetadata {
	return {
		title: 'Exception Handling',
		description: `This article explores advanced patterns for exception handling, 
        Why you should create custom exceptions, and how to properly catch and throw them.`,
		published: new Date('2023-04-07'),
		author: 'Loris Sigrist',
		draft: true
	};
}
