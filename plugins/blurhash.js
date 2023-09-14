import getPixels from "get-pixels"
import { encode } from "blurhash";
import { blurhashAsGradients } from "blurhash-gradients";


/** @type {import('vite').Plugin} */
export const blurhash = {
    name: 'blurhash',
    async transform(code, id) {
        const [path, query] = id.split('?');
        if (query != 'blurhash')
            return null;

        let imageData = await getPixelsAsync(path);
        if(imageData.width > 200) imageData = downsize(imageData, 160)
        const blurhash = encode(imageData.data, imageData.width, imageData.height, 8, 8);

        return `export default "${blurhash}";`;
    }
};

/**
 * @typedef {{
 *    width:number,
 *    height:number,
 *    data: Uint8ClampedArray
 * }} Image
 */


/**
 * @param {string} path 
 * @returns {Promise<Image>}
 */
function getPixelsAsync(path) {
    return new Promise((resolve, reject) => {
        getPixels(path, (err, pixels) => {
            if (err) reject(err);
            
            const clamped = new Uint8ClampedArray(pixels.data);

            resolve({
                width: pixels.shape[0],
                height: pixels.shape[1],
                data: clamped
            })
        });
    });
}


/**
 * @param {Image} image 
 * @param {number} newWidth
 * @returns {Image}
 */
function downsize(image, newWidth) {

    const newHeight = Math.round(image.height * newWidth / image.width);
    const newPixels = new Uint8ClampedArray(newWidth * newHeight * 4);

    for (let y = 0; y < newHeight; y++) {
        for (let x = 0; x < newWidth; x++) {
            const oldX = Math.floor(x * image.width / newWidth);
            const oldY = Math.floor(y * image.height / newHeight);

            const newI = (y * newWidth + x) * 4;
            const oldI = (oldY * image.width + oldX) * 4;

            newPixels[newI] = image.data[oldI];
            newPixels[newI + 1] = image.data[oldI + 1];
            newPixels[newI + 2] = image.data[oldI + 2];
            newPixels[newI + 3] = image.data[oldI + 3];
        }
    }

    return {
        width: newWidth,
        height: newHeight,
        data: newPixels
    };
}