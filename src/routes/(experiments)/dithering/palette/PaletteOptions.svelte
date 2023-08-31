<script lang="ts">
	import PaletteInput from './PaletteInput.svelte';
	import { getPalette } from './color-extraction';
	import { hexToRGB, type RGB } from '../utils';
	import { generatePaletteInWorker } from './main';
	import { browser } from '$app/environment';
	import { clamp } from '$lib/math/clamp';
	import Checkbox from '../primitives/Checkbox.svelte';

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
		},
		{
			name: 'Red',
			palette: ['#000000', '#F46842', '#AA2F0D', '#ffffff'].map(hexToRGB)
		},
		{
			name: 'RGBY',
			palette: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'].map(hexToRGB)
		},
		{
			name: 'Black, White, Red',
			palette: ['#000000', '#ffffff', '#ff0000'].map(hexToRGB)
		},
		{
			name: 'Black, White, Yellow',
			palette: ['#000000', '#ffffff', '#ffff00'].map(hexToRGB)
		},
		{
			name: 'Macintosh',
			palette: ['#33321A', '#E5FEFF'].map(hexToRGB)
		},
		{
			name: 'IBM 5151',
			palette: ['#00EB61', '#25332F'].map(hexToRGB)
		},
		{
			name: 'Zenith ZVM 1240',
			palette: ['#40291e', '#fdca55'].map(hexToRGB)
		},
		{
			name: 'Commodore 1084',
			palette: ['#423091', '#88d7de'].map(hexToRGB)
		},
		{
			name: 'IBM 8503',
			palette: ['#25332F', '#EBE5CE'].map(hexToRGB)
		},
		{
			name: 'Game Boy DMG-01',
			palette: ['#CADC9F', '#0F380F', '#306230', '#8BAC0F', '#9BBC0F'].map(hexToRGB)
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

	let generate_palette_input: HTMLInputElement | null = null;

	function potentiallyReExtractColors() {
		generate_palette = generate_palette_input?.checked ?? true;

		if (!image) return;
		if (generate_palette) {
			generatePalette(image, clamp(num_colors, MIN_EXTRACTED_COLORS, MAX_EXTRACTED_COLORS)).then(
				(generatedPalette) => (colors = generatedPalette)
			);
		}
	}

	if (browser && image) {
		potentiallyReExtractColors();
	}
</script>

<fieldset class="grid gap-4">
	<Checkbox
		bind:checked={generate_palette}
		bind:input={generate_palette_input}
		on:input={potentiallyReExtractColors}
		label="Extract Colors from Image"
	/>

	{#if generate_palette}
		<label class="flex justify-between items-center">
			<span class="font-medium text-gray-900 text-sm">Number of Colors</span>
			<input
				type="number"
				bind:value={num_colors}
				on:blur={(e) => {
					num_colors = clamp(num_colors, MIN_EXTRACTED_COLORS, MAX_EXTRACTED_COLORS);
					console.log(num_colors);
				}}
				min={MIN_EXTRACTED_COLORS}
				max={MAX_EXTRACTED_COLORS}
				on:input={potentiallyReExtractColors}
				class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		</label>
	{:else}
		<select
			on:input={onPresetInput}
			class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
		>
			<option value={-1} selected disabled> Choose a Preset </option>
			{#each presets as { name, palette: presetPalette }, i}
				<option value={i}> {name} </option>
			{/each}
		</select>
	{/if}

	<PaletteInput bind:colors />
</fieldset>
