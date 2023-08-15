
export type ErrorDiffusionDitheringOptions = {
    image: ImageData,
    output_width: number,
    output_height: number,
    monochrome: boolean;
    colorLight: string;
    colorDark: string;
}

export function errorDiffusionDithering(canvas: HTMLCanvasElement, options: ErrorDiffusionDitheringOptions) {

    let frame : number | null = null;

    let image: OffscreenCanvas;

    const loadImage = () => {
        image = new OffscreenCanvas(options.image.width, options.image.height);
        const image_ctx = image.getContext('2d')!;
        image_ctx.putImageData(options.image, 0, 0);
    }

    loadImage();

    const ctx = canvas.getContext('2d')!;

    const render = () => {

        ctx.drawImage(image, 0, 0, options.output_width, options.output_height);

        const dithered = ctx.getImageData(0, 0, options.output_width, options.output_height);

        let error_r = 0;
        let error_g = 0;
        let error_b = 0;

        for (let y = 0; y < options.output_height; y++) {
            for (let x = 0; x < options.output_width; x++) {
                const index = (y * options.output_width + x) * 4;

                const r = dithered.data[index + 0];
                const g = dithered.data[index + 1];
                const b = dithered.data[index + 2];

                const r2 = r + error_r;
                const g2 = g + error_g;
                const b2 = b + error_b;

                const r3 = r2 > 127 ? 255 : 0;
                const g3 = g2 > 127 ? 255 : 0;
                const b3 = b2 > 127 ? 255 : 0;

                error_r = r2 - r3;
                error_g = g2 - g3;
                error_b = b2 - b3;

                dithered.data[index + 0] = r3;
                dithered.data[index + 1] = g3;
                dithered.data[index + 2] = b3;
            }

            error_r = 0;
            error_g = 0;
            error_b = 0;
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

    return {
        update(newOptions: ErrorDiffusionDitheringOptions) {
            const imageChanged = newOptions.image !== options.image;
            options = newOptions;

            if(imageChanged)
                loadImage();

            invalidate();
        },
        destroy() {
            if(frame !== null)
                cancelAnimationFrame(frame!);
        }
    }
}


function hexToRGB(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
}