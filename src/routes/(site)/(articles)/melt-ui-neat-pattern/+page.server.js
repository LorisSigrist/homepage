/** @returns {import("$lib/articles/types").ArticleMetadata} */
export function load() {
	return {
		title: 'A neat Pattern for Melt UI',
		description:
			" Sometimes I want to share behavior of my Melt UI based components with their children. I've found a neat pattern to do so.",
		published: new Date('2023-09-18'),
		author: 'Loris Sigrist'
	};
}
