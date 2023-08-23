import type { RGB } from "../utils";

export function generatePalette(colors: RGB[]): ImageData {

    //Loop over a bunch of shades, and choose the color from the palette that is closest to it
    //Then save that color in the palette at the position of the shade

    const palette = new ImageData(64, 64);

    for (let r = 0; r < 16; r++) {
        for(let g = 0; g < 16; g ++) {
            for (let b = 0; b < 16; b++) {
                const og_color : RGB = [r * 16, g * 16 , b * 16];
                const [x, y] = rgb2xy(og_color);
                const color = closestColor(og_color, colors);

                const index = 4 * (y * palette.width + x);

                palette.data[index] = color[0];
                palette.data[index + 1] = color[1];
                palette.data[index + 2] = color[2];
                palette.data[index + 3] = 255;
            }
        }
    }

    return palette;
}

export function samplePalette(palette: ImageData, og_color: RGB): RGB {
    og_color = og_color.map(color => Math.floor(color / 16) * 16) as RGB; //Reduce the color to the nearest 16

    const [x, y] = rgb2xy(og_color);

    const index = 4 * (y * palette.width + x);

    const r = palette.data[index];
    const g = palette.data[index + 1];
    const b = palette.data[index + 2];

    return [r, g, b];
}


//Each chanel ranges from 0 to 255, in 16 steps
function rgb2xy(rgb: RGB): [number, number] {
    const [r, g, b] = rgb;
    const i = Math.floor((r + (g * 16) + (b * 16 * 16)) / 16);

    const x = Math.floor(i / 64);
    const y = Math.floor(i % 64);

    return [x, y];
}


function closestColor(og_color: RGB, palette: RGB[]): RGB {
    let closest: RGB = [0, 0, 0];
    let closest_distance = Infinity;

    for (const color of palette) {
        const distance = colorDistance(og_color, color);

        if (distance < closest_distance) {
            closest = color;
            closest_distance = distance;
        }
    }

    return closest;
}


function colorDistance(color1: RGB, color2: RGB): number {
    return Math.sqrt(
        Math.pow(color1[0] - color2[0], 2) +
        Math.pow(color1[1] - color2[1], 2) +
        Math.pow(color1[2] - color2[2], 2)
    );
}
