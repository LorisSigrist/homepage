import { generateNormalizedBayerMatrix } from './bayer';
import blue_noise_src from './blue_noise.png';

export type ThresholdMapOptions = BayerOptions | BlueNoiseOptions | WhiteNoiseOptions

type BayerOptions = {
    mode: "bayer",
    level: number
}

type BlueNoiseOptions = {
    mode: "blue_noise"
}

type WhiteNoiseOptions = {
    mode: "white_noise"
    width: number,
    height: number
}

export async function generateThresholdMapImageData(options: ThresholdMapOptions) : Promise<ImageData> {
    switch (options.mode) {
        case "bayer":
            return await generateBayer(options);
        case "blue_noise":
            return await generateBlueNoise();
        case "white_noise":
            return await generateWhiteNoise(options);
    }
}

async function generateWhiteNoise(options: WhiteNoiseOptions): Promise<ImageData> {
    const imageData = new ImageData(options.width, options.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const intensity = Math.random() * 255;
        data[i] = intensity;
        data[i + 1] = intensity;
        data[i + 2] = intensity;
        data[i + 3] = 255;
    }
    return imageData;
}

let blue_noise : ImageBitmap | null = null;

async function generateBlueNoise(): Promise<ImageData> {
    if (!blue_noise) {
        const response = await fetch(blue_noise_src);
        const blue_noise_blob = await response.blob();
        blue_noise = await createImageBitmap(blue_noise_blob);
    }

    const canvas = new OffscreenCanvas(blue_noise.width, blue_noise.height);
    const ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
    ctx.drawImage(blue_noise, 0, 0);

    return ctx.getImageData(0, 0, blue_noise.width, blue_noise.height);
}

async function generateBayer(options: BayerOptions): Promise<ImageData> {
    const size = Math.pow(2, options.level + 1);
    const bayerMatrix = generateNormalizedBayerMatrix(options.level);

    const imageData = new ImageData(size, size)

    for (let y = 0; y < bayerMatrix.length; y++) {
        for (let x = 0; x < bayerMatrix[y].length; x++) {
            const value = bayerMatrix[y][x] * 255;
            const index = (y * imageData.width + x) * 4;
            imageData.data[index] = value;
            imageData.data[index + 1] = value;
            imageData.data[index + 2] = value;
            imageData.data[index + 3] = 255;
        }
    }

    return imageData;
}
