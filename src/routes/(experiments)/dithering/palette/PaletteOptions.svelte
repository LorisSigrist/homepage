<script lang="ts">
	import PaletteInput from './PaletteInput.svelte';
	import { getPalette } from './color-extraction';
	import { hexToRGB, type RGB } from '../utils';
	import { generatePaletteInWorker } from './main';
	import { browser } from '$app/environment';
	import { clamp } from '$lib/math/clamp';

	const MAX_EXTRACTED_COLORS = 256;
	const MIN_EXTRACTED_COLORS = 2;

	export let image: ImageData | null = null;
	export let palette: ImageData | null = null;

	let colors: RGB[] = ['#000000', '#ffffff'].map(hexToRGB);

	const presets = [
		{
			name: 'Black and White',
			palette: ['#000000', '#ffffff'].map(hexToRGB)
		},
		{
			name: '3Bit',
			palette: [
				'#000000',
				'#ffffff',
				'#ff0000',
				'#00ff00',
				'#0000ff',
				'#ffff00',
				'#00ffff',
				'#ff00ff'
			].map(hexToRGB)
		},
		{
			name: 'Grayscale',
			palette: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff'].map(hexToRGB)
		}
	];

	async function generatePalette(imgData: ImageData, numColors: number): Promise<RGB[]> {
		const colors = getPalette(imgData, numColors, 5);
		if (!colors) throw new Error('Failed to generate palette');
		return colors;
	}

	$: if (browser) {
		generatePaletteInWorker(colors).then((generatedPalette) => (palette = generatedPalette));
	}

	let generate_palette = true;
	let num_colors = 16;

	function onPresetInput(e: Event) {
		const target = e.target as HTMLInputElement;
		const value = target.value;
		colors = presets[Number(value)].palette;

		target.value = '-1';
	}


	let generate_palette_input : HTMLInputElement | null = null;

	function potentiallyReExtractColors() {
		generate_palette = generate_palette_input?.checked ?? true;

		if(!image) return;
		if (generate_palette) {
			generatePalette(image, clamp(num_colors, MIN_EXTRACTED_COLORS, MAX_EXTRACTED_COLORS)).then(
				(generatedPalette) => (colors = generatedPalette)
			);
		}
	}

	if(browser && image) {
		potentiallyReExtractColors();
	}
</script>

<label>
	<input type="checkbox" bind:checked={generate_palette} bind:this={generate_palette_input} on:input={potentiallyReExtractColors} />
	Extract Colors from Image
</label>

{#if generate_palette}
	<label class="flex justify-between items-center">
		<span>Number of Colors ({clamp(num_colors, MIN_EXTRACTED_COLORS, MAX_EXTRACTED_COLORS)})</span>
		<input 
			type="number" 
			bind:value={num_colors} 
			on:blur={e => {
				num_colors = clamp(num_colors, MIN_EXTRACTED_COLORS, MAX_EXTRACTED_COLORS)
				console.log(num_colors)
			}}
			min={MIN_EXTRACTED_COLORS} 
			max={MAX_EXTRACTED_COLORS}
			on:input={potentiallyReExtractColors}
		/>
	</label>
{:else}
	<select on:input={onPresetInput}>
		<option value={-1} selected disabled> Choose a Preset </option>
		{#each presets as { name, palette: presetPalette }, i}
			<option value={i}> {name} </option>
		{/each}
	</select>
{/if}

<PaletteInput bind:colors />
