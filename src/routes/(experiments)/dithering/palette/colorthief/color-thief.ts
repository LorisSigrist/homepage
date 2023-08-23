import quantize from './quantize';
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

    //Down-sample pixel data to decrease pixel count
    const numPixels = Math.floor(imageData.data.length / 4);
    const newNumPixels = Math.max(1, Math.round(numPixels / quality));
    const pixelData = new Uint8ClampedArray(newNumPixels * 4);

    for (let i = 0; i < newNumPixels; i++) {
        const j = Math.round(i * numPixels / newNumPixels);

        pixelData[i * 4 + 0] = imageData.data[j * 4 + 0];
        pixelData[i * 4 + 1] = imageData.data[j * 4 + 1];
        pixelData[i * 4 + 2] = imageData.data[j * 4 + 2];
        pixelData[i * 4 + 3] = imageData.data[j * 4 + 3];
    }


    const color_map = quantize(pixelData, colorCount);
    const palette: RGB[] | null = color_map ? color_map.palette() : null;

    return palette;
};

export {
    getColor,
    getPalette
}