<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import img_src from './img.jpg';
	import size from './img.jpg?size';

	import { bayerDithering } from './bayer/index';
	import { tick } from 'svelte';

	let threshold = 0.33;
	let noiseIntensity = 0.3;
	let monochrome = false;
	let colorLight = '#ede6cc';
	let colorDark = '#21263f';

	let image: HTMLImageElement;

	function onInput(e: any) {
		const file = e.target.files[0];
		if(!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {

			image = new Image();
			tick().then(() => {
				console.log(image);

				if (typeof reader.result !== 'string') return;
				image.src = reader.result;
			});
			console.log(image);
		};
		reader.readAsDataURL(file);
	}
</script>

<div class="max-w-full px-96">
	<input type="file" id="image-input" accept="image/*" on:input={onInput} />

	{#if image}
	<img src={image?.src} alt="" />
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


	<canvas
		class="max-w-full"
		style:width={size.width}
		style:height={size.height}
		use:bayerDithering={{
			image,
			threshold,
			noiseIntensity,
			monochrome,
			colorLight,
			colorDark
		}}
	/>

	<p>
		Right click and save the image to download it.
	</p>
	{/if}
</div>
