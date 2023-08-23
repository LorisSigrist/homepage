import quantize from './quantize';
import { validateOptions } from './core';
import type { RGB } from '../../utils';


/*
 * Use the median cut algorithm provided by quantize.js to cluster similar
 * colors and return the base color from the largest cluster.
 *
 * Quality is an optional argument. It needs to be an integer. 1 is the highest quality settings.
 * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
 * faster a color will be returned but the greater the likelihood that it will not be the visually
 * most dominant color.
 *
 * */
function getColor(imageData: ImageData, quality = 10): RGB | null {
    const palette = getPalette(imageData, 5, quality);
    if (!palette) return null;
    return palette[0];
};


/*
 * Use the median cut algorithm provided by quantize.js to cluster similar colors.
 *
 * colorCount determines the size of the palette; the number of colors returned. If not set, it
 * defaults to 10.
 *
 * quality is an optional argument. It needs to be an integer. 1 is the highest quality settings.
 * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
 * faster the palette generation but the greater the likelihood that colors will be missed.
 */
function getPalette(imageData: ImageData, colorCount: number, quality: number): RGB[] | null {
    const options = validateOptions({
        colorCount,
        quality
    });

    const color_map = quantize(imageData.data, options.colorCount);
    const palette: RGB[] | null = color_map ? color_map.palette() : null;

    return palette;
};

export {
    getColor,
    getPalette
}