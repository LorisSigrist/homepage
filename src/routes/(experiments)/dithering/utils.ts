export async function saveCanvasAsImage(canvas: HTMLCanvasElement, name: string, format: "png" | "jpeg" | "webp" = "png") {
    const intermediate = new OffscreenCanvas(canvas.width, canvas.height);

    const ctx = intermediate.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

    const link = document.createElement('a');
    link.download = `${name}.${format}`;
    const blob = await intermediate.convertToBlob({
        type: 'image/' + format,
        quality: 1
    });

    link.href = URL.createObjectURL(blob);
    console.log(link.href);
    link.click();

    URL.revokeObjectURL(link.href);
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
