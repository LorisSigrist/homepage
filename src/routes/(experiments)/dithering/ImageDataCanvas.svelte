<script lang="ts">
	export let data: ImageData;
	export let twClass: string = '';
	export let canvas: HTMLCanvasElement | null = null;

	export let width: number = 300;
	export let height: number = 300;


    type DisplayImageDataOptions = {
        imageData: ImageData;
        width: number;
        height: number;
    }

	function displayImageData(
		canvas: HTMLCanvasElement,
		options: DisplayImageDataOptions
	) {
		let intermediate: OffscreenCanvas;

		const loadImageIntoIntermediate = () => {
			intermediate = new OffscreenCanvas(data.width, data.height);
			const intermediateCtx = intermediate.getContext('2d');
			intermediateCtx!.putImageData(options.imageData, 0, 0);
		};

		loadImageIntoIntermediate();

		const rerender = () => {
			canvas.width = options.width;
			canvas.height = options.height;
			const ctx = canvas.getContext('2d');
			ctx!.drawImage(intermediate!, 0, 0, options.width, options.height);
		};
        rerender();

		return {
			update: (newOptions: DisplayImageDataOptions) => {
				options = newOptions;
				loadImageIntoIntermediate();
                requestAnimationFrame(rerender);
			}
		};
	}
</script>

<canvas
	use:displayImageData={{
		imageData: data,
		width,
		height
	}}
	bind:this={canvas}
	style={`width: ${width}px; height: ${height}px; image-rendering: pixelated;`}
	{width}
	{height}
	class={twClass}
/>
