<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, Icon, XMark } from 'svelte-hero-icons';
	import DimensionsInput from './ImageSizeInput.svelte';

	import { orderedDithering } from './rendering/index';
	import Button from './Button.svelte';
	import { Image2ImageData, hexToRGB, loadImageFile, saveCanvasAsImage, type RGB } from './utils';
	import SplitPanzoom from './SplitPanzoom.svelte';
	import { errorDiffusionDithering } from './errorDiffusion';
	import ErrorDiffusionOptions from './errorDiffusion/ErrorDiffusionOptions.svelte';
	import Tabs from './Tabs.svelte';
	import OrderedDitheringOptions from './rendering/OrderedDitheringOptions.svelte';
	import Collapsible from './Collapsible.svelte';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import logo_src from '$lib/assets/dither-studio-logo.png';
	import { generatePaletteInWorker } from './palette/main';
	import { browser } from '$app/environment';
	import PaletteOptions from './palette/PaletteOptions.svelte';
	import ImageSelectionScreen from './ImageSelectionScreen.svelte';
	import ImageDataCanvas from './ImageDataCanvas.svelte';
	const og_src = '/og/dither-studio.webp';

	let canvas: HTMLCanvasElement | null = null;

	let width = 300;
	$: height = Math.round(width / aspectRatio);

	let image_data: ImageData | null = null;

	$: aspectRatio =
		image_data?.width && image_data?.height ? image_data.width / image_data.height : 1;

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
			const loaded_image = await loadImageFile(file);
			image_data = Image2ImageData(loaded_image);
		} catch (e) {
			alert('Failed to load image');
			console.error(e);
		}
	}

	let mode: 'ordered' | 'error_diffusion' | 'none' = 'ordered';

	let thresholdMap: ImageData | null = null;
	let noiseIntensity = 0.3;

	let diffusionStrength = 1;
	let diffusionMatrix = [[1]];
	let diffusionMatrixOriginX = 0;

	let options_open = false;

	let colors: RGB[] = [
		'#000000',
		'#ffffff',
		'#ff0000',
		'#00ff00',
		'#0000ff',
		'#ffff00',
		'#00ffff',
		'#ff00ff'
	].map(hexToRGB);
	let palette: ImageData;

	$: if (browser) {
		generatePaletteInWorker(colors).then((generatedPalette) => (palette = generatedPalette));
	}
</script>

<Metadata icon={logo_src} og_image={og_src} />

<svelte:body on:drop|preventDefault={onDrop} on:dragover|preventDefault={() => {}} />

<main class="w-screen max-w-screen h-screen max-h-screen relative bg-gray-300">
	<!--Main content-->
	<section class="overflow-hidden select-none fixed inset-0">
		{#if image_data}
			<div class="w-full h-full relative">
				<SplitPanzoom>
					<ImageDataCanvas
						slot="left"
						data={image_data}
						bind:canvas
						{width}
						{height}
						twClass="shadow-lg"
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
							<ImageDataCanvas data={image_data} bind:canvas {width} {height} twClass="shadow-lg" />
						{/if}
					</svelte:fragment>
				</SplitPanzoom>
				<button
					class="absolute top-0 left-0 m-4 p-2 bg-black bg-opacity-40 rounded-full"
					on:click={() => (image_data = null)}
					title="Close Image & Reset"
				>
					<Icon src={XMark} class="w-5 h-5 text-white" />
				</button>
			</div>
		{:else}
			<ImageSelectionScreen on:image={(e) => (image_data = Image2ImageData(e.detail))} />
		{/if}
	</section>

	<!--GUI-->


	<!--Sidebar-->
	<aside
		class="md:w-96 w-full max-h-full absolute bottom-0 left-0 right-0 top-0 md:left-auto z-50 p-2 grid place-items-end touch-none pointer-events-none"
	>
		<Collapsible open={options_open}>
			<svelte:fragment slot="header">
				<h1 class="font-bold">Options</h1>
				<Button on:click={save} disabled={!image_data}>
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

					<PaletteOptions bind:colors image={image_data} />
				</div>
			</section>
		</Collapsible>
	</aside>
	<aside
		class="md:w-96 w-full max-h-full absolute bottom-0 left-0 right-0 top-0 md:right-auto z-50 p-2 grid place-items-end touch-none pointer-events-none"
	>
		<Collapsible open={options_open}>
			<svelte:fragment slot="header">
				<h1 class="font-bold">Options</h1>
				<Button on:click={save} disabled={!image_data}>
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

					<PaletteOptions bind:colors image={image_data} />
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
