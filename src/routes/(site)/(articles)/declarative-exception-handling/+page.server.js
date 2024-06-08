/** @returns {import("$lib/articles/types").ArticleMetadata} */
export function load() {
	return {
		title: 'Declarative Exception Handling in JavaScript',
		description:
			'Handling many different exception types in JavaScript is a pain. In this article we will play around with a declarative approach to exception handling.',
		published: new Date('2023-10-12'),
		author: 'Loris Sigrist'
	};
}
