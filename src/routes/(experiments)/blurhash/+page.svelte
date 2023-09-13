<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import Metadata from '$lib/metadata/Metadata.svelte';

	import { decode, encode } from 'blurhash';
	import { getImageData, loadImageFile } from '$lib/utils/loadImage';

	let blurhash: string | null = null;
	async function onImageInput(e: any) {
		const file = e.target.files[0];
		if (!file) return;

		console.log('File dropped');
		const image = await loadImageFile(file);
		const imageData = getImageData(image);
		blurhash = encode(imageData.data, imageData.width, imageData.height, 4, 3);
		console.log('Blurhash encoded');
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

	const css = {
		backgroundImage:
			'linear-gradient(90deg,rgb(98,1,34) 10%,rgb(104,16,37) 10% 20%,rgb(120,48,45) 20% 30%,rgb(136,73,54) 30% 40%,rgb(150,94,62) 40% 50%,rgb(158,107,67) 50% 60%,rgb(161,111,69) 60% 70%,rgb(159,103,68) 70% 80%,rgb(155,86,65) 80% 90%,rgb(150,65,61) 90% 100%),linear-gradient(90deg,rgb(106,30,36) 10%,rgb(111,37,39) 10% 20%,rgb(123,55,45) 20% 30%,rgb(138,76,53) 30% 40%,rgb(150,95,61) 40% 50%,rgb(159,108,67) 50% 60%,rgb(163,113,69) 60% 70%,rgb(163,109,69) 70% 80%,rgb(160,95,66) 80% 90%,rgb(157,78,63) 90% 100%),linear-gradient(90deg,rgb(124,65,42) 10%,rgb(126,66,43) 10% 20%,rgb(132,70,46) 20% 30%,rgb(141,81,52) 30% 40%,rgb(151,97,59) 40% 50%,rgb(161,111,65) 50% 60%,rgb(169,120,69) 60% 70%,rgb(173,121,70) 70% 80%,rgb(174,114,68) 80% 90%,rgb(174,105,66) 90% 100%),linear-gradient(90deg,rgb(143,90,48) 10%,rgb(142,88,48) 10% 20%,rgb(141,85,48) 20% 30%,rgb(143,87,50) 30% 40%,rgb(150,98,56) 40% 50%,rgb(161,114,64) 50% 60%,rgb(173,127,69) 60% 70%,rgb(183,133,72) 70% 80%,rgb(189,133,72) 80% 90%,rgb(192,130,70) 90% 100%),linear-gradient(90deg,rgb(155,106,54) 10%,rgb(152,102,52) 10% 20%,rgb(145,94,48) 20% 30%,rgb(142,90,48) 30% 40%,rgb(146,98,53) 40% 50%,rgb(158,114,62) 50% 60%,rgb(174,131,70) 60% 70%,rgb(188,141,75) 70% 80%,rgb(198,146,75) 80% 90%,rgb(203,146,74) 90% 100%),linear-gradient(90deg,rgb(157,112,59) 10%,rgb(153,107,56) 10% 20%,rgb(143,96,48) 20% 30%,rgb(135,88,44) 30% 40%,rgb(137,93,50) 40% 50%,rgb(150,110,62) 50% 60%,rgb(168,129,72) 60% 70%,rgb(185,143,78) 70% 80%,rgb(197,150,78) 80% 90%,rgb(204,152,76) 90% 100%),linear-gradient(90deg,rgb(149,109,62) 10%,rgb(145,104,58) 10% 20%,rgb(133,91,48) 20% 30%,rgb(122,80,41) 30% 40%,rgb(122,84,47) 40% 50%,rgb(135,102,62) 50% 60%,rgb(154,122,75) 60% 70%,rgb(173,137,81) 70% 80%,rgb(186,144,80) 80% 90%,rgb(194,147,76) 90% 100%),linear-gradient(90deg,rgb(131,97,64) 10%,rgb(126,91,59) 10% 20%,rgb(114,78,46) 20% 30%,rgb(102,66,37) 30% 40%,rgb(100,70,46) 40% 50%,rgb(112,89,64) 50% 60%,rgb(132,109,78) 60% 70%,rgb(150,123,84) 70% 80%,rgb(164,130,81) 80% 90%,rgb(172,132,75) 90% 100%),linear-gradient(90deg,rgb(104,78,65) 10%,rgb(100,72,59) 10% 20%,rgb(88,58,45) 20% 30%,rgb(76,45,34) 30% 40%,rgb(72,51,45) 40% 50%,rgb(83,72,65) 50% 60%,rgb(102,92,80) 60% 70%,rgb(120,104,86) 70% 80%,rgb(133,108,82) 80% 90%,rgb(142,108,74) 90% 100%),linear-gradient(90deg,rgb(74,56,65) 10%,rgb(70,50,59) 10% 20%,rgb(59,32,43) 20% 30%,rgb(45,14,31) 30% 40%,rgb(39,31,44) 40% 50%,rgb(49,56,67) 50% 60%,rgb(69,75,82) 60% 70%,rgb(87,85,87) 70% 80%,rgb(101,86,82) 80% 90%,rgb(110,83,72) 90% 100%)',
		backgroundPosition: '0 0,0 11%,0 22%,0 33%,0 44%,0 56%,0 67%,0 78%,0 89%,0 100%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 10%',
		filter: 'blur(24px)',
		transform: 'scale(1.2)'
	};
</script>

<Metadata />

<input type="file" accept="image/*" on:input={onImageInput} />

{#if blurhash}
	<p>
		{blurhash}
	</p>
	<canvas use:blurhashDisplay={blurhash} class="w-96" />
{/if}


<br/>

<div class="overflow-hidden w-96 h-96">
    <div class="w-96 h-96" style="
        background-image: {css.backgroundImage};
        background-position: {css.backgroundPosition};
        background-repeat: {css.backgroundRepeat};
        background-size: {css.backgroundSize};
        filter: {css.filter};
        transform: {css.transform};
    "></div>
</div>
