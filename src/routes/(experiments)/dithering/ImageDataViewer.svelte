<script lang="ts">
    export let imageData: ImageData;


    function showImageData(canvas: HTMLCanvasElement, imageData: ImageData) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const draw = () => {
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            ctx.putImageData(imageData, 0, 0);
        }

        let frame: number | null = null;

        const invalidate = () => {
            if (frame) return;
            frame = requestAnimationFrame(()=>{
                frame = null;
                draw();
            });
        }

        invalidate();

        return {
            destroy() {
                if (frame) cancelAnimationFrame(frame);
            },
            update: (newImageData: ImageData) => {
                imageData = newImageData;
                invalidate();
            }
        }
    }
</script>


<canvas use:showImageData={imageData} class="w-full max-h-96 object-contain shadow-lg" style="image-rendering: pixelated;" />