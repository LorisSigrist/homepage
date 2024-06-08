/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Never write Mock Data again, with Zocker',
		description:
			"Over tha last couple weeks I've been building a library to generate mock data for my projects. Today I'm happy to announce the first stable release of Zocker, a Schema first Mock Data Generator.",
		published: new Date('2023-05-09'),
		author: 'Loris Sigrist',
		draft: false
	};
}
