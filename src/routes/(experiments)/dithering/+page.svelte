<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, Icon, Plus, XMark } from 'svelte-hero-icons';
	import DimensionsInput from './ImageSizeInput.svelte';

	import { orderedDithering } from './rendering/index';
	import Button from './Button.svelte';
	import { Image2ImageData, loadImageFile, saveCanvasAsImage } from './utils';
	import SplitPanzoom from './SplitPanzoom.svelte';
	import cat_img_src from './images/cat.jpg';
	import gradient_img_src from './images/gradient.avif';
	import david_img_src from './images/david.png';
	import { errorDiffusionDithering } from './errorDiffusion';
	import ErrorDiffusionOptions from './ErrorDiffusionOptions.svelte';
	import Tabs from './Tabs.svelte';
	import OrderedDitheringOptions from './OrderedDitheringOptions.svelte';

	const imagePresets = [cat_img_src, gradient_img_src, david_img_src];

	let monochrome = false;
	let colorLight = '#ede6cc';
	let colorDark = '#21263f';

	let canvas: HTMLCanvasElement | null = null;

	let width = 300;
	$: height = Math.round(width / aspectRatio);

	let loaded_image: HTMLImageElement | null = null;
	let image_data: ImageData | null = null;

	$: {
		if (loaded_image) image_data = Image2ImageData(loaded_image);
		else image_data = null;
	}

	$: aspectRatio =
		loaded_image?.width && loaded_image?.height ? loaded_image.width / loaded_image.height : 1;

	async function save() {
		if (!canvas) return;
		await saveCanvasAsImage(canvas, 'dithered', 'png');
	}

	async function onDrop(e: DragEvent) {
		const file = e.dataTransfer?.files[0];
		if (!file) return;

		if (!file.type.startsWith('image/')) {
			alert('Please drop an image file');
			return;
		}

		try {
			loaded_image = await loadImageFile(file);
		} catch (e) {
			alert('Failed to load image');
			console.error(e);
		}
	}

	async function onInput(e: any) {
		const file = e.target.files[0];
		if (!file) return;

		try {
			loaded_image = await loadImageFile(file);
		} catch (e) {
			alert('Failed to load image');
			console.error(e);
		}
	}

	async function loadFromSrc(url: string) {
		const new_image = new Image();
		new_image.onload = () => {
			loaded_image = new_image;
		};
		new_image.src = url;
	}

	let mode: 'ordered' | 'error_diffusion' = 'ordered';

	let thresholdMap: ImageData | null = null;
	let threshold = 0.5;
	let noiseIntensity = 0.3;

	let diffusionStrength = 1;
	let diffusionMatrix = [[1]];
	let diffusionMatrixOriginX = 0;
</script>

<svelte:head>
	<title>Dithering</title>
</svelte:head>

<svelte:body on:drop|preventDefault={onDrop} on:dragover|preventDefault={() => {}} />

<main class="w-screen max-w-screen h-screen max-h-screen flex md:flex-row flex-col bg-gray-300">
	<!--Main content-->
	<section class="flex-1 overflow-hidden select-none">
		{#if image_data && loaded_image}
			<div class="w-full h-full relative">
				<SplitPanzoom>
					<img
						slot="left"
						src={loaded_image.src}
						alt=""
						style={`width: ${width}px; height: ${height}px`}
						class="pixelated max-w-none shadow-lg"
					/>

					<svelte:fragment slot="right">
						{#if mode === 'error_diffusion'}
							<canvas
								class="pixelated shadow-lg"
								style={`width: ${width}px; height: ${height}px`}
								bind:this={canvas}
								use:errorDiffusionDithering={{
									image: image_data,
									output_width: width,
									output_height: height,
									monochrome,
									colorLight,
									colorDark,
									diffusionStrength,
									diffusionMatrix,
									diffusionMatrixOriginX
								}}
								{width}
								{height}
							/>
						{:else if thresholdMap}
							<canvas
								class="pixelated shadow-lg"
								style={`width: ${width}px; height: ${height}px`}
								use:orderedDithering={{
									image: image_data,
									threshold,
									noiseIntensity,
									monochrome,
									colorLight,
									colorDark,
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
					</svelte:fragment>
				</SplitPanzoom>
				<button
					class="absolute top-0 left-0 m-4 p-2 bg-black bg-opacity-40 rounded-full"
					on:click={() => (loaded_image = null)}
					title="Close Image & Reset"
				>
					<Icon src={XMark} class="w-5 h-5 text-white" />
				</button>
			</div>
		{:else}
			<div class="w-full h-full grid place-items-center px-8">
				<div class="grid gap-4">
					<p class="text-2xl text-gray-500 text-center">Select or Drop an Image to Start</p>

					<div class="flex gap-3 justify-center flex-wrap">
						{#each imagePresets as url}
							<button on:click={() => loadFromSrc(url)} class="hover:opacity-75 transition-opacity">
								<img
									class="aspect-square h-24 w-24 object-cover rounded-md shadow-md border-2 border-white"
									src={url}
									alt=""
								/>
							</button>
						{/each}

						<label
							for="image-input"
							class="block spect-square h-24 w-24 object-cover rounded-md shadow-md border-2 border-white bg-white hover:bg-gray-100"
						>
							<div class="grid place-items-center h-full w-full">
								<Icon src={Plus} class="w-12 h-12 text-gray-400" />
							</div>

							<span class="sr-only">Choose an Image</span>

							<input
								type="file"
								class="sr-only"
								id="image-input"
								accept="image/*"
								on:input={onInput}
							/>
						</label>
					</div>
				</div>
			</div>
		{/if}
	</section>
	<!--Sidebar-->
	<aside
		class="bg-white w-full md:max-w-md border-t md:border-t-0 md:border-l border-l-0 border-gray-100 z-50 overflow-y-hidden md:h-full flex-1 shadow-lg flex flex-col divide-y divide-gray-200 justify-start"
	>
		<header class="py-4 px-4 flex-shrink-0 shadow-sm z-10 flex gap-2 items-center justify-between">
			<h1 class="font-bold">Dither Studio</h1>
			<Button on:click={save} disabled={!loaded_image}>
				<Icon src={ArrowDownTray} class="w-4 h-4" />
				Save
			</Button>
		</header>
		<section class="grid gap-5 overflow-y-auto overflow-x-visible pt-8 px-4 safe-padding-bottom">
			<div>
				<h2 class="text-base font-semibold leading-7 text-black mb-4">Output Options</h2>

				<DimensionsInput
					bind:width
					bind:aspectRatio
					minWidth={12}
					minHeight={12}
					maxHeight={5000}
					maxWidth={5000}
				/>
			</div>

			<Tabs
				tabs={[
					{ label: 'Ordered', value: 'ordered' },
					{ label: 'Error Diffusion', value: 'error_diffusion' }
				]}
				bind:selected={mode}
			/>

			{#if mode === 'error_diffusion'}
				<ErrorDiffusionOptions
					bind:diffusionStrength
					bind:diffusionMatrix
					bind:diffusionOriginX={diffusionMatrixOriginX}
				/>
			{:else if mode === 'ordered'}
				<OrderedDitheringOptions bind:thresholdMap bind:noiseIntensity bind:threshold />
			{/if}

			<div class="grid gap-3">
				<h2 class="text-base font-semibold leading-7 text-black mb-2">Dithering Options</h2>

				<div class="relative flex items-start">
					<div class="flex h-6 items-center">
						<input
							type="checkbox"
							id="monochrome"
							bind:checked={monochrome}
							class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
					</div>
					<div class="ml-3 text-sm leading-6">
						<label for="monochrome" class="font-medium text-gray-900">Monochrome</label>
					</div>
				</div>

				{#if monochrome}
					<fieldset>
						<div class="flex gap-3">
							<input type="color" name="color-light" id="color-light" bind:value={colorLight} />
							<label for="color-light" class="font-medium text-gray-900">Light</label>
						</div>
						<div class="flex gap-3">
							<input type="color" name="color-dark" id="color-dark" bind:value={colorDark} />
							<label for="color-dark" class="font-medium text-gray-900">Dark</label>
						</div>
					</fieldset>
				{/if}
			</div>
		</section>
	</aside>
</main>

<style>
	.pixelated {
		image-rendering: pixelated;
	}

	.safe-padding-bottom {
		padding-bottom: max(env(safe-area-inset-bottom), 2rem);
	}
</style>
