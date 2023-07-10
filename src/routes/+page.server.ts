import { ArticleMetadataSchema, type Article, type ArticleMetadata } from '$lib/articles/types';
import { dev } from '$app/environment';

export async function load() {
	return {
		articles: await getArticles()
	}
}

async function getArticles(): Promise<Article[]> {

	//Vite glob imports only work with string literals, so we can't generate these paths dynamically
	let modules = {
		//We need to double escape the braces, once for the glob and once for the string literal
		...import.meta.glob('./\\(articles\\)/*/+page.ts', { eager: true }),
		...import.meta.glob('./\\(articles\\)/*/+page.server.ts', { eager: true }),
		...import.meta.glob('./\\(articles\\)/*/+page.js', { eager: true }),
		...import.meta.glob('./\\(articles\\)/*/+page.server.js', { eager: true }),
	};


	const articles: Article[] = [];

	for (const [path, module] of Object.entries(modules)) {
		if (typeof module !== 'object' || module === null || !('load' in module) || typeof module.load !== 'function') {
			throw new Error('Failed to load module' + path);
		}

		const data = await module.load();
		const metadata = ArticleMetadataSchema.parse(data);

		//Skip unpublished articles in production
		if (!dev) {
			if (metadata.draft === true) continue;
			if (metadata.published > new Date()) continue;
		}

		const slug = path.replace('./(articles)/', '')
			.replace('/+page.ts', '')
			.replace('/+page.server.ts', '')
			.replace('/+page.js', '')
			.replace('/+page.server.js', '');
		
		const link = "/" + slug;

		articles.push({
			...metadata,
			link
		});
	}

	articles.sort((a, b) => b.published.getTime() - a.published.getTime());

	return articles;
}