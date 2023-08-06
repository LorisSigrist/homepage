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