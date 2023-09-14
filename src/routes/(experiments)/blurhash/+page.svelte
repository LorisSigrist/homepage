<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import { decode, encode } from 'blurhash';
	import { getImageData, loadImageFile } from '$lib/utils/loadImage';
	import { blurhashToCss } from './blurhashToCss.js';
	import { reactStylesToCss } from '$lib/utils/react-styles';

	let blurhash: string | null = 'L4D]rR?b3s58CiD#D4rDELtl;Kx^';
	$: blurhashCss = blurhash ? blurhashToCss(blurhash) : null;

	async function onImageInput(e: any) {
		const file = e.target.files[0];
		if (!file) return;

		const image = await loadImageFile(file);
		const imageData = getImageData(image);
		blurhash = encode(imageData.data, imageData.width, imageData.height, 4, 3);
	}

	function blurhashDisplay(canvas: HTMLCanvasElement, blurhash: string) {
		const ctx = canvas.getContext('2d')!;

		const width = 32;
		const height = 32;

		canvas.width = width;
		canvas.height = height;

		const display = () => {
			const pixels = decode(blurhash, width, height);
			const imageData = ctx.createImageData(width, height);
			imageData.data.set(pixels);
			ctx.putImageData(imageData, 0, 0);
		};

		display();

		return {
			update(newBlurhash: string) {
				blurhash = newBlurhash;
				display();
			}
		};
	}
</script>

<Metadata />

<input type="file" accept="image/*" on:input={onImageInput} />

{#if blurhash}
	<p>
		{blurhash}
	</p>
	<canvas use:blurhashDisplay={blurhash} class="w-96" />
{/if}

<br />

{#if blurhashCss}
	<div class="w-96 h-96" style={reactStylesToCss(blurhashCss)} />
	<p>
		{reactStylesToCss(blurhashCss)}
	</p>
{/if}
