import { generateNormalizedBayerMatrix } from './bayer';
import blue_noise_src from './blue_noise.png';
import blue_noise_size from './blue_noise.png?size';
import { loadImage } from './utils';


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

export async function generateThresholdMap(options: ThresholdMapOptions) : Promise<ImageData> {
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

let blue_noise : HTMLImageElement | null = null;

async function generateBlueNoise(): Promise<ImageData> {
    if (!blue_noise)
        blue_noise = await loadImage(blue_noise_src);

    const canvas = new OffscreenCanvas(blue_noise_size.width, blue_noise_size.height);
    const ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
    ctx.drawImage(blue_noise, 0, 0);
    return ctx.getImageData(0, 0, blue_noise_size.width, blue_noise_size.height);
}

async function generateBayer(options: BayerOptions): Promise<ImageData> {
    const canvas = new OffscreenCanvas(Math.pow(2, options.level + 1), Math.pow(2, options.level + 1));

    const bayerMatrix = generateNormalizedBayerMatrix(options.level);

    const ctx = canvas.getContext('2d')!;
    for (let y = 0; y < bayerMatrix.length; y++) {
        for (let x = 0; x < bayerMatrix[y].length; x++) {
            const value = bayerMatrix[y][x] * 255 / 4;
            ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }

    return ctx.getImageData(0, 0, canvas.width, canvas.height);
}