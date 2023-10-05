/**
 * @returns {import("$lib/articles/types").ArticleMetadata} Article metadata
 */
export function load() {
	return {
		title: 'Building Bachtel',
		description: `Bachtel is a time- and performance tracking app built for Youth-Workers.`,
		published: new Date('2021-08-01'),
		author: 'Loris Sigrist',
		draft: true
	};
}
