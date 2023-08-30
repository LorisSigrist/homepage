<script lang="ts">
	import '$lib/styles/bootstrap.css';

	import { Image2ImageData, loadImageFile, saveCanvasAsImage } from './utils';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import logo_src from '$lib/assets/dither-studio-logo.png';
	import ImageSelectionScreen from './ImageSelectionScreen.svelte';
	import DitherStudio from './DitherStudio.svelte';
	const og_src = '/og/dither-studio.webp';

	let canvas: HTMLCanvasElement | null = null;

	let image_data: ImageData | null = null;

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
</script>

<Metadata icon={logo_src} og_image={og_src} />

<svelte:body on:drop|preventDefault={onDrop} on:dragover|preventDefault={() => {}} />

<main class="w-screen max-w-screen h-screen max-h-screen relative bg-gray-300">
	{#if image_data}
		<DitherStudio {image_data} on:cancel={() => (image_data = null)} />
	{:else}
		<ImageSelectionScreen on:image={(e) => (image_data = Image2ImageData(e.detail))} />
	{/if}
</main>

