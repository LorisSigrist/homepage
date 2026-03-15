import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkAbbr from 'remark-abbr';

function ensureLocalStorageShim() {
	if (
		typeof globalThis.localStorage === 'undefined' ||
		typeof globalThis.localStorage.getItem !== 'function'
	) {
		let store = {};
		globalThis.localStorage = {
			getItem(key) {
				return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
			},
			setItem(key, value) {
				store[key] = String(value);
			},
			removeItem(key) {
				delete store[key];
			},
			clear() {
				store = {};
			},
			key(index) {
				return Object.keys(store)[index] ?? null;
			},
			get length() {
				return Object.keys(store).length;
			}
		};
	}
}

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
					const { codeToHtml } = await import('shiki');
					const twoslashable = [
						'js',
						'javascript',
						'ts',
						'typescript',
						'tsx',
						'jsx',
						'json',
						'jsn'
					].includes(lang);

					let rendered = '';
					if (twoslashable) {
						try {
							ensureLocalStorageShim();
							const { transformerTwoslash } = await import('@shikijs/twoslash');
							rendered = await codeToHtml(code, {
								lang,
								theme: 'vitesse-dark',
								transformers: [transformerTwoslash()]
							});
						} catch (e) {
							throw Error('Could not transform code: \n' + code, { cause: e });
						}
					} else {
						rendered = await codeToHtml(code, { lang, theme: 'vitesse-dark' });
					}

					const html = escapeSvelte(rendered);
					return `{@html \`${html}\` }`;
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
