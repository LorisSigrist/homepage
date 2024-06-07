import { minify } from 'html-minifier';
import { building } from '$app/environment';

/** @type {import("html-minifier").Options} */
const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: false, // some hydration code needs comments, so leave them in
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

export async function handle({ event, resolve }) {
	return resolve(event, {
		transformPageChunk: ({ html, done }) => {
			const shouldMinify = done && building;
			return shouldMinify ? minify(html, minification_options) : html;
		}
	});
}
