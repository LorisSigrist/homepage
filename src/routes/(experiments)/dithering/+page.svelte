<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, Icon } from 'svelte-hero-icons';
	import ImageSizeInput from './ImageSizeInput.svelte';
	import Select from './Select.svelte';
	import Slider from './Slider.svelte';
	import panzoom from 'panzoom';

	import { dithering } from './rendering/index';
	import { onMount } from 'svelte';
	import ImageInput from './ImageInput.svelte';

	let threshold = 0.33;
	let noiseIntensity = 0.3;
	let monochrome = false;
	let colorLight = '#ede6cc';
	let colorDark = '#21263f';

	let css_image_rendering_pixelated = true;

	let width = 600;

	let mode: 'bayer' | 'blue_noise' | 'white_noise' = 'blue_noise';

	$: height = width / aspectRatio;

	let loaded_image: HTMLImageElement | null = null;
	$: aspectRatio =
		loaded_image?.width && loaded_image?.height ? loaded_image.width / loaded_image.height : 1;

	onMount(() => {
		css_image_rendering_pixelated = Number.isInteger(window.devicePixelRatio);
	});

	function save() {
		const canvas = document.querySelector('canvas');
		if (!canvas) return;

		const intermediate = document.createElement('canvas');
		intermediate.width = canvas.width;
		intermediate.height = canvas.height;

		const ctx = intermediate.getContext('2d');
		if (!ctx) return;

		ctx.drawImage(canvas, 0, 0, width, height);

		const link = document.createElement('a');
		link.download = 'dithered.png';
		link.href = intermediate.toDataURL('image/png');
		link.click();
	}


	function panzoomAction(element : HTMLElement)  {
		const pz = panzoom(element);
		return {
			destroy: () => pz.dispose()
		}
	}
</script>

<svelte:head>
	<title>Dithering</title>
</svelte:head>

<main class="w-screen max-w-screen h-screen max-h-screen flex">
	<section
		class="bg-white px-4 w-full max-w-md py-8 border-r border-gray-100 overflow-y-auto grid gap-4 shadow-md"
	>
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

		<button
			type="button"
			class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-2"
			on:click={save}
		>
			<Icon src={ArrowDownTray} class="w-4 h-4" />
			Save
		</button>
	</section>
	<section
		class="bg-gray-300 flex-1 overflow-hidden touch-manipulation select-none"
	>
		{#if loaded_image}
			<div use:panzoomAction class="w-full h-full grid place-items-center">
				<canvas
					class:pixelated={css_image_rendering_pixelated}
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
