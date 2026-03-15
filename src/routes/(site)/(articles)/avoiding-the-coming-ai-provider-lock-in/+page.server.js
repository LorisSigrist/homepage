/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Avoiding the Coming AI Provider Lock-In',
		description:
			'Enterprise AI providers will try to lock in pricing power by controlling your business context.',
		published: new Date('2026-03-15'),
		author: 'Loris Sigrist',
		draft: false
	};
}
