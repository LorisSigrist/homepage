import type { RGB } from "../utils";

export function generatePalette(paletteColors: RGB[]): ImageData {
    if (paletteColors.length > 4096) throw new Error("Too many colors - max 4096 colors");
    else if (paletteColors.length < 1) throw new Error("No colors provided");
    

    /*
    We are trying to generate a color-lookup-texture that maps each RGB value to the closest color in the given colorPalette.
    To avoid having to generate a massive 4096x4096 texture we reduce the precision of the colors to 4 bits per channel.
    This reduces the possible colors to 4096, which nicely fits into a 64x64 image.

    We loop over all possible 4bit colors, map them to a unique xy position, 
    find the closest color in the palette, and save it in the lookup table.

    We map each 4bit color to a unique xy position by concatenating the 4bit values into a single 12bit value,
    and then using the first 6 bits as the x value, and the last 6 bits as the y value.

    For performance, we generate each 12bit number directly, instead of using a triple nested loop. 
    That's why the function is like this.
    */

    const lookupTable = new ImageData(64, 64);

    //An 8bit RGBA buffer containing all the paletteColors in order
    const colors = new Uint8ClampedArray(paletteColors.length * 4);
    for (let i = 0; i < paletteColors.length; i++) {
        const color = paletteColors[i];
        colors.set(color, i << 2);
        colors[(i << 2) | 0b11] = 0b1111_1111; //Set the alpha to 255
    }

    //Loop over all possible 12bit ints
    //This could be parallelized, but it's probably not worth it
    for (let i = 0; i <= 0b1111_1111_1111; i++) {
        const x = i >> 6;           //Leading 6 bits
        const y = i & 0b11_1111;    //Trailing 6 bits

        //Get the 4bit representation of each channel
        const r = i & 0b1111; //Get the last 4 bits
        const g = (i >> 4) & 0b1111; //Get the middle 4 bits
        const b = (i >> 8) & 0b1111; //Get the first 4 bits


        //Loop over all available colors and find the closest one
        let closestIndex = 0;
        let closestDistance = Infinity;

        for (let i = 0; i < paletteColors.length; i++) {

            const distance = Math.sqrt(
                ((r << 4) - colors[(i << 2)]) ** 2 +
                ((g << 4) - colors[(i << 2) | 0b01]) ** 2 +
                ((b << 4) - colors[(i << 2) | 0b10]) ** 2
            );

            if (distance < closestDistance) {
                closestIndex = i;
                closestDistance = distance;
            }
        }

        //Index into the RGBA texture Buffer and save the (8bit) color
        const index = 4 * (y * lookupTable.width + x);
        lookupTable.data.set(colors.slice(closestIndex << 2, (closestIndex << 2) + 4), index);
    }

    return lookupTable;
}

/**
 * Get the color from the palette, 
 * but return the array-slice directly instead of copying it into a JS array
 * 
 * @param palette The palette to sample from
 * @param rgb The RGB values of the color to sample
 * @return A Uint8ClampedArray containing the RGB (but not A) values of the color
 */
export function samplePalette(palette: ImageData, rgb: Uint8ClampedArray): Uint8ClampedArray {
    
    //Get the 4bit color value
    const r_val = rgb[0] >> 4;
    const g_val = rgb[1] >> 4;
    const b_val = rgb[2] >> 4;

    const i = r_val + (g_val << 4) + (b_val << 8); //Concatenate the 4bit values into a single 12bit value

    const x = i >> 6;           //Leading 6 bits
    const y = i & 0b11_1111;    //Trailing 6 bits

    //Get the color from the palette
    const paletteIndex = (y * palette.width + x) << 2;
    return palette.data.slice(paletteIndex, paletteIndex | 0b11); //Get the RGB values from the palette
}