/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Fluent Inputs',
		description: 'TODO',
		published: new Date('2023-08-10'),
		author: 'Loris Sigrist',
		draft: true
	};
}
