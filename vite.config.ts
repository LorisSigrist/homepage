import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { base64Loader } from './plugins/base64-imports';
import { colorThief } from './plugins/color-thief';
import { imageSize } from './plugins/image-size';


export default defineConfig({
	plugins: [base64Loader, colorThief, imageSize, sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
