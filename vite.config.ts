import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { base64Loader } from './plugins/base64-imports';
import { colorThief } from './plugins/color-thief';
import { imageSize } from './plugins/image-size';
import { imagetools } from 'vite-imagetools'
import { blurhash } from './plugins/blurhash';
import glsl from 'vite-plugin-glsl'


export default defineConfig({
	plugins: [blurhash, base64Loader, colorThief, imageSize, imagetools(), glsl(
		{
			compress: true,
		}
	), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
