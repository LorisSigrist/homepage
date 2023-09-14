<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import { decode, isBlurhashValid } from 'blurhash';
	import { blurhashAsGradients } from 'blurhash-gradients';
	import { reactStylesToCss } from '$lib/utils/react-styles';

	import big_image from './big.jpeg';
	import big_image_size from './big.jpeg?size';
	import hash from './big.jpeg?blurhash';

	let blurhashInput = hash;

	$: blurhash = isBlurhashValid(blurhashInput).result ? blurhashInput : null;
	$: blurhashCss = blurhash
		? blurhashAsGradients(blurhash, { blur: 60, width: 8, height: 8 })
		: null;

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

{#if blurhashCss}
	<div class="relative">
		<div style={reactStylesToCss(blurhashCss)} class="absolute inset-0 -z-10" />
		<img src={big_image} width={big_image_size.width} height={big_image_size.height} alt="big" />
	</div>
	<p>
		{reactStylesToCss(blurhashCss)}
	</p>
{/if}

{#if blurhash}
	<canvas use:blurhashDisplay={blurhash} class="w-96" />
{/if}