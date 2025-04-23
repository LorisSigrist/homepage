import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { base64Loader } from './plugins/base64-imports';
import { colorThief } from './plugins/color-thief';
import { imageSize } from './plugins/image-size';
import { blurhash } from './plugins/blurhash';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [blurhash, base64Loader, colorThief, imageSize, enhancedImages(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		minify: false,
	}
});
