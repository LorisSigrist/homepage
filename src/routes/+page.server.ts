import { ArticleMetadataSchema, type Article, type ArticleMetadata } from '$lib/articles/types';

export async function load() {
	return {
		articles: await getArticles()
	}
}

async function getArticles(): Promise<Article[]> {

	//We need to double escape the braces, once for the glob and once for the string literal
	const modules = import.meta.glob('./\\(articles\\)/*/+page.ts', { eager: true });

	const articles: Article[] = [];
	
	for (const [path, module] of Object.entries(modules)) {
		if (typeof module !== 'object' || module === null || !('load' in module) || typeof module.load !== 'function') {
			throw new Error('Failed to load module' + path);
		}

		const data = await module.load();
		const metadata = ArticleMetadataSchema.parse(data);

		const slug = path.replace('./(articles)/', '').replace('/+page.ts', '');
		const link = "/" + slug;

		articles.push({
			...metadata,
			link
		});
	}

	articles.sort((a, b) => b.published.getTime() - a.published.getTime());

	return articles; 
}