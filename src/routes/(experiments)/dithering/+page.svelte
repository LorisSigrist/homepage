<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, Icon, Plus, XMark } from 'svelte-hero-icons';
	import DimensionsInput from './ImageSizeInput.svelte';

	import { orderedDithering } from './rendering/index';
	import Button from './Button.svelte';
	import { Image2ImageData, hexToRGB, loadImageFile, saveCanvasAsImage } from './utils';
	import SplitPanzoom from './SplitPanzoom.svelte';
	import cat_img_src from './images/cat.jpg';
	import gradient_img_src from './images/gradient.avif';
	import david_img_src from './images/david.png';
	import { errorDiffusionDithering } from './errorDiffusion';
	import ErrorDiffusionOptions from './ErrorDiffusionOptions.svelte';
	import Tabs from './Tabs.svelte';
	import OrderedDitheringOptions from './OrderedDitheringOptions.svelte';
	import { onMount } from 'svelte';
	import Collapsible from './Collapsible.svelte';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import logo_src from '$lib/assets/dither-studio-logo.png';
	import { generatePaletteInWorker } from './palette/main';
	import { browser } from '$app/environment';
	import PaletteOptions from './PaletteOptions.svelte';
	const og_src = '/og/dither-studio.webp';

	const imagePresets = [cat_img_src, gradient_img_src, david_img_src];
	let canvas: HTMLCanvasElement | null = null;

	let width = 300;
	$: height = Math.round(width / aspectRatio);

	let loaded_image: HTMLImageElement | null = null;
	let image_data: ImageData | null = null;

	$: {
		image_data = loaded_image ? Image2ImageData(loaded_image) : null;
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

	let mode: 'ordered' | 'error_diffusion' | 'none' = 'ordered';

	let thresholdMap: ImageData | null = null;
	let noiseIntensity = 0.3;

	let diffusionStrength = 1;
	let diffusionMatrix = [[1]];
	let diffusionMatrixOriginX = 0;

	let splitDirection: 'horizontal' | 'vertical' = 'horizontal';
	let options_open = false;

	let colors = ['#000000', '#ffffff'];
	let palette: ImageData;

	$: if (browser) {
		generatePaletteInWorker(colors.map(hexToRGB)).then(
			(generatedPalette) => (palette = generatedPalette)
		);
	}

	onMount(async () => {
		const mediaQuery = window.matchMedia('(min-width: 768px)');

		function handleOrientationChange(e: MediaQueryListEvent | MediaQueryList) {
			//Change split direction on mobile
			splitDirection = e.matches ? 'horizontal' : 'vertical';

			//Automatically open options on desktop
			options_open = mediaQuery.matches;
		}

		mediaQuery.addEventListener('change', handleOrientationChange);
		handleOrientationChange(mediaQuery);
		return () => mediaQuery.removeEventListener('change', handleOrientationChange);
	});
</script>

<Metadata icon={logo_src} og_image={og_src} />

<svelte:body on:drop|preventDefault={onDrop} on:dragover|preventDefault={() => {}} />

<main class="w-screen max-w-screen h-screen max-h-screen relative bg-gray-300">
	<!--Main content-->
	<section class="overflow-hidden select-none fixed inset-0">
		{#if image_data && loaded_image}
			<div class="w-full h-full relative">
				<SplitPanzoom direction={splitDirection}>
					<img
						slot="left"
						src={loaded_image.src}
						alt=""
						style={`width: ${width}px; height: ${height}px`}
						class="pixelated max-w-none shadow-lg bg-gray-200"
					/>

					<svelte:fragment slot="right">
						{#if mode === 'error_diffusion'}
							{#if palette}
								<canvas
									class="pixelated shadow-lg bg-gray-200"
									style={`width: ${width}px; height: ${height}px`}
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
									class="pixelated shadow-lg bg-gray-200"
									style={`width: ${width}px; height: ${height}px`}
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
							<img
								src={loaded_image.src}
								alt=""
								style={`width: ${width}px; height: ${height}px`}
								class="pixelated max-w-none shadow-lg"
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
		class="md:w-96 w-full max-h-full absolute bottom-0 left-0 right-0 top-0 md:left-auto z-50 p-2 grid place-items-end touch-none pointer-events-none"
	>
		<Collapsible open={options_open}>
			<svelte:fragment slot="header">
				<h1 class="font-bold">Options</h1>
				<Button on:click={save} disabled={!loaded_image}>
					<Icon src={ArrowDownTray} class="w-4 h-4" />
					Save
				</Button>
			</svelte:fragment>
			<section class="grid gap-8 pt-8 px-4 safe-padding-bottom">
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

				<div class="grid gap-4">
					<h2 class="text-base font-semibold leading-7 text-black mb-2">Dithering Options</h2>

					<Tabs
						tabs={[
							{ label: 'None', value: 'none' },
							{ label: 'Ordered', value: 'ordered' },
							{ label: 'Error Diffusion', value: 'error_diffusion' }
						]}
						bind:selected={mode}
					/>

					<div class={mode === 'error_diffusion' ? 'contents' : 'hidden'}>
						<ErrorDiffusionOptions
							bind:diffusionStrength
							bind:diffusionMatrix
							bind:diffusionOriginX={diffusionMatrixOriginX}
						/>
					</div>
					<div class={mode === 'ordered' ? 'contents' : 'hidden'}>
						<OrderedDitheringOptions bind:thresholdMap bind:noiseIntensity />
					</div>
				</div>

				<!--Color Palette-->
				<div class="grid gap-3" class:hidden={mode === 'none'}>
					<h2 class="text-base font-semibold leading-7 text-black mb-2">Palette</h2>

					<PaletteOptions bind:palette={colors} />
				</div>
			</section>
		</Collapsible>
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
