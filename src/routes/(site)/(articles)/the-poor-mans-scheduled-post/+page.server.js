/**
 * @returns {import("$lib/articles/types").ArticleMetadata}
 */
export function load() {
	return {
		title: "The poor man's scheduled post",
		description:
			"If you build your site on github pages or netlify, you don't have a server to schedule posts. This article gets around that by using a github action to periodically redeploy your site.",
		published: new Date(2023, 6, 24),
		author: 'Loris Sigrist'
	};
}
