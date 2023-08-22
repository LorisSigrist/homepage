export async function saveCanvasAsImage(canvas: HTMLCanvasElement, name: string, format: "png" | "jpeg" | "webp" = "png") {
    const intermediate = new OffscreenCanvas(canvas.width, canvas.height);

    const ctx = intermediate.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    const blob = await intermediate.convertToBlob({
        type: 'image/' + format,
        quality: 1
    });

    const objectURL = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.download = `${name}.${format}`;
    link.href = objectURL;
    link.click();
    link.remove();

    URL.revokeObjectURL(objectURL);
}

/**
 * Reads & Loads an image file into an HTMLImageElement that has been fully loaded
 * @param file The image file to load
 * @returns A promise that resolves to the loaded image
 */
export function loadImageFile(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith('image/')) {
            reject(new Error('Not an image file'));
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            if (typeof reader.result !== 'string') return;

            const new_image = new Image();
            new_image.onload = () => {
                resolve(new_image);
            };

            new_image.onerror = (e) => {
                reject(e);
            };

            new_image.src = reader.result;
        };
        reader.onerror = (e) => {
            reject(e);
        };

        reader.readAsDataURL(file);
    });
}

export async function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const new_image = new Image();
        new_image.onload = () => {
            resolve(new_image);
        };

        new_image.onerror = (e) => {
            reject(e);
        };

        new_image.src = src;
    });
}



export function Image2ImageData(image: HTMLImageElement): ImageData {
    const canvas = new OffscreenCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, image.width, image.height);
}

export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type RGB = [number, number, number];
export type HSL = [number, number, number];

export function hexToRGB(hex: string): RGB {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
}


export function rgbToHex([r, g, b]: RGB): string {
    const hex = (n: number) => {
        const hex = n.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    return '#' + hex(r) + hex(g) + hex(b);
}

export function rgbToHsl([r, g, b]: RGB): HSL {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);

    let avg = (max + min) / 2;

    let h = avg, s = avg, l = avg;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

export function hslToRgb([h, s, l]: HSL): RGB {
    let r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
}