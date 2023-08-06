<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, Icon } from 'svelte-hero-icons';
	import ImageSizeInput from './ImageSizeInput.svelte';
	import Select from './Select.svelte';
	import Slider from './Slider.svelte';
	import panzoom, { type PanZoomOptions } from 'panzoom';

	import { dithering } from './rendering/index';
	import ImageInput from './ImageInput.svelte';
	import Button from './Button.svelte';

	let threshold = 0.33;
	let noiseIntensity = 0.3;
	let monochrome = false;
	let colorLight = '#ede6cc';
	let colorDark = '#21263f';

	let canvas: HTMLCanvasElement | null = null;

	let width = 600;

	let mode: 'bayer' | 'blue_noise' | 'white_noise' = 'blue_noise';

	$: height = width / aspectRatio;

	let loaded_image: HTMLImageElement | null = null;
	$: aspectRatio =
		loaded_image?.width && loaded_image?.height ? loaded_image.width / loaded_image.height : 1;

	async function save() {
		if (!canvas) return;

		const intermediate = new OffscreenCanvas(canvas.width, canvas.height);

		const ctx = intermediate.getContext('2d');
		if (!ctx) return;

		ctx.drawImage(canvas, 0, 0, width, height);

		const link = document.createElement('a');
		link.download = 'dithered.png';
		const blob = await intermediate.convertToBlob({
			type: 'image/png',
			quality: 1
		});

		link.href = URL.createObjectURL(blob);
		console.log(link.href);
		link.click();

		URL.revokeObjectURL(link.href);
	}

	function panzoomAction(element: HTMLElement, options?: PanZoomOptions) {
		const pz = panzoom(element, options);
		return {
			destroy: () => pz.dispose()
		};
	}
</script>

<svelte:head>
	<title>Dithering</title>
</svelte:head>

<main class="w-screen max-w-screen h-screen max-h-screen flex">
	<!--Sidebar-->
	<aside
		class="bg-white w-full max-w-md border-r border-gray-100 z-50 overflow-y-hidden h-full shadow-lg flex flex-col divide-y divide-gray-200 justify-between"
	>
		<section class="grid gap-4 overflow-y-auto overflow-x-visible py-8 px-4">
			<ImageInput bind:image={loaded_image} />

			<Select
				label="Dither Mode"
				options={[
					{
						name: 'Bayer',
						value: 'bayer'
					},
					{
						name: 'Blue Noise',
						value: 'blue_noise'
					},
					{
						name: 'White Noise',
						value: 'white_noise'
					}
				]}
				bind:selected={mode}
			/>

			<Slider label="Threshold ({threshold})" min={0} max={1} step={0.01} bind:value={threshold} />

			<Slider
				label="Noise Intensity ({noiseIntensity})"
				min={0}
				max={1.5}
				step={0.01}
				bind:value={noiseIntensity}
			/>

			<div class="relative flex items-start">
				<div class="flex h-6 items-center">
					<input
						type="checkbox"
						bind:checked={monochrome}
						class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
				</div>
				<div class="ml-3 text-sm leading-6">
					<label for="comments" class="font-medium text-gray-900">Monochrome</label>
					<p id="comments-description" class="text-gray-500">
						If the dither should be monochrome, or in color
					</p>
				</div>
			</div>

			{#if monochrome}
				<fieldset>
					<input type="color" name="color-light" bind:value={colorLight} />
					<input type="color" name="color-dark" bind:value={colorDark} />
				</fieldset>
			{/if}

			<ImageSizeInput bind:width bind:aspectRatio />
		</section>
		<footer class="py-4 px-4 flex-shrink-0">
			<Button on:click={save} disabled={!loaded_image}>
				<Icon src={ArrowDownTray} class="w-4 h-4" />
				Save
			</Button>
		</footer>
	</aside>

	<!--Main content-->
	<section class="bg-gray-300 flex-1 overflow-hidden touch-manipulation select-none">
		{#if loaded_image}
			<div use:panzoomAction class="w-full h-full grid place-items-center">
				<canvas
					class="pixelated"
					use:dithering={{
						image: loaded_image,
						threshold,
						noiseIntensity,
						monochrome,
						colorLight,
						colorDark,
						mode,
						width,
						height
					}}
					bind:this={canvas}
					{width}
					{height}
					aria-label="Dithered Image"
				/>
			</div>
		{/if}
	</section>
</main>

<style>
	.pixelated {
		image-rendering: pixelated;
	}
</style>
