/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Reliably Avoiding Theme flashes',
		description:
			"On sites with a theme-toggle, flashing the default theme before the user's choice is loaded is a common problem. Here's how to avoid it client-side only.",
		published: new Date('2023-07-10'),
		author: 'Loris Sigrist'
	};
}
