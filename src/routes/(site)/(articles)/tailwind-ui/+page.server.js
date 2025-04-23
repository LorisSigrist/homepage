/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Is Tailwind UI worth it?',
		description: `Tailwind UI is a collection of high-quality components and templates built by the creators of Tailwind CSS. It's 300$ price-tag seems quite steep considering all the free alternatives. Could it really be worth it? Here are my thoughts after a few months of use`,
		published: new Date('2023-07-31'),
		author: 'Loris Sigrist',
		draft: true
	};
}
