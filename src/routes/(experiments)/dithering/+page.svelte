<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import img_src from './img.jpg';

	import { dithering } from './rendering/index';
	import { onMount } from 'svelte';

	let threshold = 0.33;
	let noiseIntensity = 0.3;
	let monochrome = false;
	let colorLight = '#ede6cc';
	let colorDark = '#21263f';


	let width = 600;
	let aspectRatio = 1;

	let mode : "bayer" | "blue_noise" = "blue_noise";


	$: height = width / aspectRatio;

	let loaded_image: HTMLImageElement | null = null;

	function onInput(e: any) {
		const file = e.target.files[0];
		if(!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			if (typeof reader.result !== 'string') return;

			const new_image = new Image();
			new_image.onload = () => {
				loaded_image = new_image;
				aspectRatio = loaded_image.width / loaded_image.height;
			};
			new_image.src = reader.result;
		};
		reader.readAsDataURL(file);
	}

	onMount(() => {
		const initial_image = new Image();
		initial_image.onload = () => {
			loaded_image = initial_image;
			aspectRatio = loaded_image.width / loaded_image.height;
		};
		initial_image.src = img_src;
	});


	function save() {
		const canvas = document.querySelector('canvas');
		if(!canvas) return;

		const intermediate = document.createElement('canvas');
		intermediate.width = canvas.width;
		intermediate.height = canvas.height;

		const ctx = intermediate.getContext('2d');
		if(!ctx) return;

		ctx.drawImage(canvas, 0, 0, width, height);

		const link = document.createElement('a');
		link.download = 'dithered.png';
		link.href = intermediate.toDataURL("image/png");
		link.click();
	}
</script>

<svelte:head>
	<title>Dithering</title>
</svelte:head>

<div class="max-w-xl mx-auto px-4">
	<input type="file" id="image-input" accept="image/*" on:input={onInput} />

	{#if loaded_image}
	<img src={loaded_image?.src} alt="" class="w-full pixelated" />
	<div>
		<label for="threshold" class="block text-sm font-medium leading-6 text-gray-900">Threshold {threshold}</label>
		<div class="mt-2">
			<input
				type="range"
				min="0"
				id="threshold"
				max="1"
				step="0.01"
				bind:value={threshold}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		</div>
	</div>

	<div>
		<label for="noise" class="block text-sm font-medium leading-6 text-gray-900"
			>Noise Intensity {noiseIntensity}</label
		>
		<div class="mt-2">
			<input
				type="range"
				min="0"
				id="noise"
				max="1.5"
				step="0.01"
				bind:value={noiseIntensity}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		</div>
	</div>

    <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input type="checkbox" bind:checked={monochrome} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900">Monochrome</label>
          <p id="comments-description" class="text-gray-500">If the dither should be monochrome, or in color</p>
        </div>
      </div>

    {#if monochrome}
        <input type="color" bind:value={colorLight} />
        <input type="color" bind:value={colorDark} />
    {/if}

	<div>
		<label for="width" class="block text-sm font-medium leading-6 text-gray-900"
			>Width</label
		>
		<div class="mt-2">
			<input
				type="number"
				min="10"
				id="width"
				step="1"
				bind:value={width}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		</div>
	</div>

	<select bind:value={mode}>
		<option value="bayer">Bayer</option>
		<option value="blue_noise">Blue Noise</option>
	</select>
	

	<canvas
		class="w-full pixelated"
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

		width={width}
		height={height}
	/>

	<button on:click={save} class=""> Save </button>
	{/if}
</div>


<style>
	.pixelated {
		image-rendering: pixelated;
	}
</style>