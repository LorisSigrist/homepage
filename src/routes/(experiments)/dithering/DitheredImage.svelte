<script lang="ts" context="module">
	export type DitherMode = 'ordered' | 'error_diffusion' | 'none';
</script>

<script lang="ts">
	import ImageDataCanvas from './ImageDataCanvas.svelte';
	import { errorDiffusionDithering } from './errorDiffusion';
	import { orderedDithering } from './rendering';

	export let image_data: ImageData;

	export let width: number;
	export let height: number;

	export let palette: ImageData | null = null;

	export let mode: DitherMode;

	export let canvas: HTMLCanvasElement | null = null;

	export let noiseIntensity: number;
	export let diffusionStrength: number;
	export let diffusionMatrix: number[][];
	export let diffusionMatrixOriginX: number;

	export let thresholdMap: ImageData | null = null;
</script>

<div 
    class="shadow-lg bg-gray-200"
    style="width: 80vmin;"
>
	{#if mode === 'error_diffusion'}
		{#if palette}
			<canvas
				class="pixelated w-full"
				bind:this={canvas}
				use:errorDiffusionDithering={{
					image: image_data,
					output_width: width,
					output_height: height,
					palette,
					diffusionStrength,
					diffusionMatrix,
					diffusionMatrixOriginX
				}}
				{width}
				{height}
			/>
		{/if}
	{:else if mode === 'ordered'}
		{#if thresholdMap && palette}
			<canvas
				class="pixelated w-full"
				use:orderedDithering={{
					image: image_data,
					noiseIntensity,
					palette,
					output_width: width,
					output_height: height,
					thresholdMap
				}}
				bind:this={canvas}
				{width}
				{height}
				aria-label="Dithered Image"
			/>
		{/if}
	{:else if mode === 'none'}
		<ImageDataCanvas data={image_data} bind:canvas {width} {height} twClass="w-full" />
	{/if}
</div>

<style>
	.pixelated {
		image-rendering: pixelated;
	}
</style>
