import { ArticleMetadataSchema } from '$lib/articles/types';
import { dev } from '$app/environment';
import * as v from 'valibot';


export async function load() {
	return {
		articles: await getArticles()
	};
}

/**
 * @returns {Promise<import('$lib/articles/types').Article[]>}
 */
async function getArticles() {
	//Vite glob imports only work with string literals, so we can't generate these paths dynamically
	const modules = {
		//We need to double escape the braces, once for the glob and once for the string literal
		...import.meta.glob('./\\(articles\\)/*/+page.ts', { eager: true }),
		...import.meta.glob('./\\(articles\\)/*/+page.server.ts', { eager: true }),
		...import.meta.glob('./\\(articles\\)/*/+page.js', { eager: true }),
		...import.meta.glob('./\\(articles\\)/*/+page.server.js', { eager: true })
	};

	/**
	 * @type {import('$lib/articles/types').Article[]}
	 */
	const articles = [];

	for (const [path, module] of Object.entries(modules)) {
		if (
			typeof module !== 'object' ||
			module === null ||
			!('load' in module) ||
			typeof module.load !== 'function'
		) {
			throw new Error('Failed to load module' + path);
		}

		const data = await module.load();
		const metadata = v.parse(ArticleMetadataSchema, data);

		//Skip unpublished articles in production
		if (!dev) {
			if (metadata.draft === true) continue;
			if (!metadata.published || metadata.published > new Date()) continue;
		}

		const slug = path
			.replace('./(articles)/', '')
			.replace('/+page.ts', '')
			.replace('/+page.server.ts', '')
			.replace('/+page.js', '')
			.replace('/+page.server.js', '');

		const link = '/' + slug;

		articles.push({
			metadata,
			link
		});
	}

	articles.sort(
		(a, b) =>
			(b.metadata.published?.getTime() ?? Infinity) - (a.metadata.published?.getTime() ?? Infinity)
	);
	return articles;
}
