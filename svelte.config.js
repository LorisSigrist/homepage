import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md', '.mdx'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.svx', '.mdx'],
		smartypants: {
			dashes: 'oldschool'
		},
	})],

	kit: {
		adapter: adapter(),
		typescript: {
			config: (conf) => {
				conf.include.push("../plugins/**/*.d.ts")
				return conf
			}
		}
	},
};

export default config;
