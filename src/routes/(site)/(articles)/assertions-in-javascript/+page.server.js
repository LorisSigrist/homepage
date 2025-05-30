/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Assertions in JavaScript',
		description: "How I've integrated assertions into my workflow",
		published: new Date('2025-05-30'),
		author: 'Loris Sigrist',
		draft: false
	};
}
