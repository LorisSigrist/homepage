import { clamp } from "$lib/math/clamp";
import type { ErrorDiffusionDitheringOptions } from ".";
import * as Comlink from "comlink";

function errorDiffusionDithering(canvas: OffscreenCanvas, options: ErrorDiffusionDitheringOptions) {

    let frame: number | null = null;

    let image: OffscreenCanvas;

    const loadImage = () => {
        image = new OffscreenCanvas(options.image.width, options.image.height);
        const image_ctx = image.getContext('2d')!;
        image_ctx.putImageData(options.image, 0, 0);
    }

    loadImage();

    let colorLight = hexToRGB(options.colorLight);
    let colorDark = hexToRGB(options.colorDark);

    const ctx = canvas.getContext('2d')!;

    const render = () => {
        ctx.drawImage(image, 0, 0, options.output_width, options.output_height);

        const dithered = ctx.getImageData(0, 0, options.output_width, options.output_height);


        for (let y = 0; y < options.output_height; y++) {
            for (let x = 0; x < options.output_width; x++) {
                const index = (y * options.output_width + x) * 4;

                const r = dithered.data[index + 0];
                const g = dithered.data[index + 1];
                const b = dithered.data[index + 2];

                let r3;
                let g3;
                let b3;

                if (options.monochrome) {
                    const gray = (r + g + b) / 3;
                    
                    r3 = gray > 127 ? colorLight[0] : colorDark[0];
                    g3 = gray > 127 ? colorLight[1] : colorDark[1];
                    b3 = gray > 127 ? colorLight[2] : colorDark[2];
                } else {
                    r3 = r > 127 ? 255 : 0;
                    g3 = g > 127 ? 255 : 0;
                    b3 = b > 127 ? 255 : 0;
                }

                const error_r = (r - r3) * options.diffusionStrength / 2;
                const error_g = (g - g3) * options.diffusionStrength / 2;
                const error_b = (b - b3) * options.diffusionStrength / 2

                dithered.data[index + 0] = r3;
                dithered.data[index + 1] = g3;
                dithered.data[index + 2] = b3;


                //Spread the error to the surrounding pixels (making sure to stay within the bounds of the image)
                for (let matrixY = 0; matrixY < options.diffusionMatrix.length; matrixY++) {
                    for (let matrixX = 0; matrixX < options.diffusionMatrix[0].length; matrixX++) {

                        const errorPixelX = x + matrixX - options.diffusionMatrixOriginX;
                        const errorPixelY = y + matrixY;

                        //Skip pixels that are outside the image
                        if (errorPixelX < 0 || errorPixelX >= options.output_width || errorPixelY < 0 || errorPixelY >= options.output_height)
                            continue;

                        const errorIndex = (errorPixelY * dithered.width + errorPixelX) * 4;

                        const errorMultiplier = options.diffusionMatrix[matrixY][matrixX];

                        dithered.data[errorIndex + 0] = clamp(dithered.data[errorIndex + 0] + error_r * errorMultiplier * options.diffusionStrength, 0, 255);
                        dithered.data[errorIndex + 1] = clamp(dithered.data[errorIndex + 1] + error_g * errorMultiplier * options.diffusionStrength, 0, 255);
                        dithered.data[errorIndex + 2] = clamp(dithered.data[errorIndex + 2] + error_b * errorMultiplier * options.diffusionStrength, 0, 255);
                    }
                }
            }
        }


        ctx.putImageData(dithered, 0, 0);
    }


    const invalidate = () => {
        if (frame !== null) return;
        frame = requestAnimationFrame(() => {
            frame = null;
            render();
        }
        );
    }

    invalidate();


    const update = (newOptions: ErrorDiffusionDitheringOptions) => {
        const imageChanged = newOptions.image !== options.image;
        options = newOptions;

        canvas.width = options.output_width;
        canvas.height = options.output_height;

        colorLight = hexToRGB(options.colorLight);
        colorDark = hexToRGB(options.colorDark);

        if (imageChanged)
            loadImage();

        invalidate();
    }

    const destroy = () => {
        if (frame !== null)
            cancelAnimationFrame(frame!);
    }

    return Comlink.proxy({
        update,
        destroy
    })
}

export const ErrorDiffusionWorker = {
    errorDiffusionDithering: errorDiffusionDithering
}

Comlink.expose(ErrorDiffusionWorker);

function hexToRGB(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
}