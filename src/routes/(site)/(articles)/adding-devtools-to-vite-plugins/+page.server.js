
/**
 * @returns {import("$lib/articles/types").ArticleMetadata} Article metadata
 */
export function load() {
	return {
		title: 'Adding Devtools to Vite plugins',
		description: `Many frontend frameworks and tools come in the form of Vite-plugins. Here is how plugin authors can inject devtools into the browser during development.`,
		published: new Date('2023-10-05'),
		author: 'Loris Sigrist',
	};
}
