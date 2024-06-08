/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: 'Zod Driven Development',
		description:
			"Zod is a schmea library that has become the lingua franca of a lot of libraries. This promises unprecedented interoperability, flexibility and typesafety. In this article we'll push this to the limit by generating an entire app from zod schemas. Frontend, DB and all.",
		published: new Date(2023, 6, 17),
		author: 'Loris Sigrist',
		draft: true
	};
}
