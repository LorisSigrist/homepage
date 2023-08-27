import quantize from './quantize';
import type { RGB } from '../../utils';


function getColor(imageData: ImageData, downSamplingFactor = 10): RGB | null {
    const palette = getPalette(imageData, 5, downSamplingFactor);
    if (!palette) return null;
    return palette[0];
};


function getPalette(imageData: ImageData, colorCount: number, downSamplingFactor: number = 10): RGB[] | null {
    const pixelData = downSamplePixelData(imageData.data, downSamplingFactor);
    const color_map = quantize(pixelData, colorCount);

    const palette: RGB[] | null = color_map ? color_map.palette() : null;

    return palette;
};

export {
    getColor,
    getPalette
}


function downSamplePixelData(ogPixelData: Uint8ClampedArray, factor: number): Uint8ClampedArray {
    //Down-sample pixel data to decrease pixel count
    const numPixels = Math.floor(ogPixelData.length / 4);
    const newNumPixels = Math.max(1, Math.round(numPixels / factor));
    const pixelData = new Uint8ClampedArray(newNumPixels * 4);

    for (let i = 0; i < newNumPixels; i++) {
        const j = Math.round(i * numPixels / newNumPixels);

        pixelData[i * 4 + 0] = ogPixelData[j * 4 + 0];
        pixelData[i * 4 + 1] = ogPixelData[j * 4 + 1];
        pixelData[i * 4 + 2] = ogPixelData[j * 4 + 2];
        pixelData[i * 4 + 3] = ogPixelData[j * 4 + 3];
    }

    return pixelData;
}