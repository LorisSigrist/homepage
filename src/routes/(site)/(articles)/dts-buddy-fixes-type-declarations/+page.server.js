/**
 * @returns {import("$lib/articles/types").ArticleMetadata} Article metadata
 */
export function load() {
	return {
		title: 'dts-buddy fixes type declarations',
		description:
			'dts-buddy is a bundler for type-definitions. It helps sidestep the most common issues with type definitions.',
		published: new Date(2023, 6, 18),
		author: 'Loris Sigrist',
		draft: false
	};
}
