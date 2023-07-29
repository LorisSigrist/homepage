import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkAbbr from 'remark-abbr';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md', '.mdx'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.mdx'],
			smartypants: {
				dashes: 'oldschool'
			},
			rehypePlugins: [
				// @ts-ignore It works so shut up
				[rehypeSlug, undefined],
				//@ts-ignore
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				// @ts-ignore
				[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
			],
			remarkPlugins: [
				// @ts-ignore
				remarkAbbr
			],
			layout: {
				snippet: "./src/lib/mdsvex/SnippetLayout.svelte",
			}
		})
	],

	kit: {
		adapter: adapter(),
		typescript: {
			config: (conf) => {
				conf.include.push('../plugins/**/*.d.ts');
				return conf;
			}
		}
	}
};

export default config;
