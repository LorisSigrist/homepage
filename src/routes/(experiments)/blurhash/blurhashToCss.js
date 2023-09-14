import { rgbToCompactHex } from '$lib/utils/colorHex';
import { decode } from 'blurhash';

/**
 * @typedef {{
 *  backgroundImage: string;
 *  backgroundSize: string;
 *  backgroundPosition: string;
 *  backgroundRepeat: string;
 *  boxShadow: string;
 *  filter: string;
 *  clipPath: string;
 * }} BlurhashCSS
 */

/**
 * Approximates the appearance of a blurhash using CSS gradients.
 *
 * @param {string} blurhash A blurhash string.
 * @param {number} width The horizontal resolution of the approximation. 
 * @param {number} height The vertical resolution of the approximation.
 * @returns {BlurhashCSS} An object representing the CSS properties needed to display the blurhash.
 */
export function blurhashToCss(blurhash, width = 8, height = 8) {
	const pixels = decode(blurhash, width, height, 1);

	const backgroundSize = asPercentage(1 / width) + ' 100%';
	const backgroundRepeat = 'no-repeat';

	/** @type {string[]} */
	const backgroundPositions = [];
	/** @type {string[]} */
	const backgroundImages = [];

	for (let x = 0; x < width; x++) {
		/** @type {string[]} */
		const stops = [];

		for (let y = 0; y < height; y++) {
			const hex = getColor(pixels, x, y, width);
			stops.push(hex);
		}

		backgroundImages.push(`linear-gradient(${stops.join(',')})`);
		const bgPosition = x == 0 ? '0 0' : `${asPercentage(x / (width - 1))} 0`;
		backgroundPositions.push(bgPosition);
	}

	//Needed to avoid blurry edges
	const bgCol = getColor(pixels, 0, 0, width);
	const boxShadow = '0 0 0 20px ' + bgCol;

	return {
		backgroundImage: backgroundImages.join(','),
		backgroundPosition: backgroundPositions.join(','),
		backgroundSize,
		backgroundRepeat,
		boxShadow,
		filter: 'blur(20px)',
		clipPath: 'inset(0)'
	};
}

/**
 * Returns the color of a pixel in a Uint8ClampedArray representing an image as a compact hex string.
 * @param {Uint8ClampedArray} pixels The pixels of an image.
 * @param {number} x
 * @param {number} y
 * @param {number} width The width of the image in pixels.
 * @returns {string}
 */
function getColor(pixels, x, y, width) {
	const CHANNELS = 4;
	const BYTES_PER_ROW = width * CHANNELS;

	const index = y * BYTES_PER_ROW + x * CHANNELS;
	const r = pixels[index];
	const g = pixels[index + 1];
	const b = pixels[index + 2];

	return rgbToCompactHex(r, g, b);
}

/**
 * Formats a ratio as a percentage string with at most one decimal place.
 * @param {number} ratio
 * @returns {string}
 */
function asPercentage(ratio) {
	const percentage = ratio * 100;
	if (percentage === Math.round(percentage)) return percentage + '%';
	const percentageString = percentage.toFixed(1);
	return percentageString + '%';
}
