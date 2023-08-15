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