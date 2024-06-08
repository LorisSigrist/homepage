import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkAbbr from 'remark-abbr';
import { getHighlighter } from 'shiki'



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
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getHighlighter({
						themes: ['poimandres'],
						langs: ['javascript', 'typescript', 'rust', 'json', 'svelte', 'bash', 'yaml']
					})
					await highlighter.loadLanguage('javascript', 'typescript')
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
					return `{@html \`${html}\` }`
				}
			},
			rehypePlugins: [
				[rehypeSlug, undefined],
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
			],
			remarkPlugins: [remarkAbbr]
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
