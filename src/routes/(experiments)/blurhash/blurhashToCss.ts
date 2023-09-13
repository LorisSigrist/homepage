import { rgbToCompactHex, rgbToHex } from "$lib/utils/colorHex";
import { decode } from "blurhash";

export type BlurhashCSS = {
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
    backgroundRepeat: string;
    filter: string;
    transform: string;
}

export function blurhashToCss(blurhash: string, width: number, height: number): BlurhashCSS {
    const pixels = decode(blurhash, width, height, 1);
    const backgroundSize = asPercentage(1 / width) + " 100%";
    const backgroundRepeat = "no-repeat"
    const filter = "blur(24px)"
    const transform = "scale(1.2)"
    const backgroundPositions: string[] = [];
    const backgroundImages: string[] = [];

    for (let x = 0; x < width; x++) {
        const stops: string[] = [];

        for (let y = 0; y < height; y++) {
            const hex = getColor(pixels, x, y, width);
            stops.push(hex);
        }

        backgroundImages.push(`linear-gradient(${stops.join(",")})`);
        const bgPosition = x == 0 ? "0 0" : `${asPercentage(x / (width - 1))} 0`;
        backgroundPositions.push(bgPosition);
    }

    return {
        backgroundImage: backgroundImages.join(","),
        backgroundPosition: backgroundPositions.join(","),
        backgroundSize,
        backgroundRepeat,
        filter,
        transform,
    }
}

function getColor(pixels: Uint8ClampedArray, x: number, y: number, width: number): string {
    const CHANNELS = 4;
    const BYTES_PER_ROW = width * CHANNELS;

    const index = (y * BYTES_PER_ROW) + (x * CHANNELS);
    const r = pixels[index];
    const g = pixels[index + 1];
    const b = pixels[index + 2];

    return rgbToCompactHex(r, g, b);
}

/**
 * Formats a ratio as a percentage string with at most one decimal place.
 */
function asPercentage(ratio: number): string {
    const percentage = ratio * 100;
    if(percentage === Math.round(percentage)) return percentage + "%"
    const percentageString = percentage.toFixed(1);
    return percentageString + "%"
}