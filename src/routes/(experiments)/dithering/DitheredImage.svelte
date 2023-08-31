<script lang="ts" context="module">
	export type DitherMode = 'ordered' | 'error_diffusion' | 'none';

	type BaseDitherConfig = {
		width: number;
		height: number;
	};

	export type DitherConfig = (NoDitherConfig | OrderedDitherConfig | ErrorDiffusionDitherConfig) &
		BaseDitherConfig & Record<any,any>;

	type NoDitherConfig = {
		mode: 'none';
	};

	type OrderedDitherConfig = {
		mode: 'ordered';
		noiseIntensity: number;
		thresholdMap: ImageData | null;
		palette: ImageData | null;
	};

	type ErrorDiffusionDitherConfig = {
		mode: 'error_diffusion';
		palette: ImageData | null;
		diffusionStrength: number;
		diffusionMatrix: number[][];
		diffusionMatrixOriginX: number;
	};

</script>

<script lang="ts">
	import ImageDataCanvas from './ImageDataCanvas.svelte';
	import { errorDiffusionDithering } from './errorDiffusion';
	import { orderedDithering } from './ordered';

	export let canvas: HTMLCanvasElement | null = null;

	export let image_data: ImageData;
	export let config: DitherConfig;

</script>

<div 
	class="shadow-lg bg-gray-200" style="width: 80vmin; aspect-ratio: {image_data.width / image_data.height};">
	{#if config.mode === 'error_diffusion'}
		{#if config.palette}
			<canvas
				class="pixelated w-full"
				bind:this={canvas}
				use:errorDiffusionDithering={{
					image: image_data,
					output_width: config.width,
					output_height: config.height,
					palette: config.palette,
					diffusionStrength: config.diffusionStrength,
					diffusionMatrix: config.diffusionMatrix,
					diffusionMatrixOriginX: config.diffusionMatrixOriginX
				}}
				width={config.width}
				height={config.height}
			/>
		{/if}
	{:else if config.mode === 'ordered'}
		{#if config.thresholdMap && config.palette}
			<canvas
				class="pixelated w-full"
				use:orderedDithering={{
					image: image_data,
					noiseIntensity: config.noiseIntensity,
					palette: config.palette,
					output_width: config.width,
					output_height: config.height,
					thresholdMap: config.thresholdMap
				}}
				bind:this={canvas}
				width={config.width}
				height={config.height}
				aria-label="Dithered Image"
			/>
		{/if}
	{:else if config.mode === 'none'}
		<ImageDataCanvas
			data={image_data}
			bind:canvas
			width={config.width}
			height={config.height}
			twClass="w-full"
		/>
	{/if}
</div>

<style>
	.pixelated {
		image-rendering: pixelated;
	}
</style>
