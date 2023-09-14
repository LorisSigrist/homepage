<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import { decode, isBlurhashValid } from 'blurhash';
	import { blurhashToCss } from './blurhashToCss.js';
	import { reactStylesToCss } from '$lib/utils/react-styles';


	let blurhashInput = 'LKO2:N%2Tw=w]~RBVZRi};RPxuwH';

	$: blurhash = isBlurhashValid(blurhashInput).result ? blurhashInput : null
	$: blurhashCss = blurhash ? blurhashToCss(blurhash) : null;

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

<input type="text" bind:value={blurhashInput} />

{#if blurhash}
	<canvas use:blurhashDisplay={blurhash} class="w-96" />
{/if}

<br />

{#if blurhashCss}
	<div class="w-96 h-96" style={reactStylesToCss(blurhashCss)} />
	<p>
		{reactStylesToCss(blurhashCss)}
	</p>
{/if}
