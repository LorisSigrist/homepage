<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import img_src from './img.jpg';
	import size from './img.jpg?size';
	import { bayerDithering } from './bayer/index';

	let threshold = 0.5;
	let noiseIntensity = 0.5;
	let monochrome = false;

	let canvasWidth = size.width / ('window' in globalThis ? window.devicePixelRatio : 1);
	let canvasHeight = size.height / ('window' in globalThis ? window.devicePixelRatio : 1);
</script>

<div class="max-w-full px-96">
	<img src={img_src} alt="" width={size.width} height={size.height} />

	<input type="range" min="0" max="1" step="0.01" bind:value={threshold} />
	<input type="range" min="0" max="4" step="0.01" bind:value={noiseIntensity} />

	<input type="checkbox" bind:checked={monochrome} />

	<canvas
		class="max-w-full"
		style:width={size.width}
		style:height={size.height}
		use:bayerDithering={{
			image: {
				src: img_src,
				width: size.width,
				height: size.height
			},
			threshold,
			noiseIntensity,
			monochrome
		}}
		width={canvasWidth}
		height={canvasHeight}
	/>
</div>
