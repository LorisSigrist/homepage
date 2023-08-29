<script lang="ts">
	import PaletteInput from './PaletteInput.svelte';
	import { getPalette } from './color-extraction';
	import { hexToRGB, type RGB } from '../utils';
	import { Cog6Tooth, Icon } from 'svelte-hero-icons';

	export let colors: RGB[];
	export let image: ImageData | null = null;

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

	async function generatePalette(imgData: ImageData): Promise<RGB[]> {
		const colors = getPalette(imgData, 16, 10);
		if (!colors) throw new Error('Failed to generate palette');
		return colors;
	}
</script>

<select on:input={(e) => (colors = presets[Number(e.target?.value ?? 0)].palette)}>
	{#each presets as { name, palette: presetPalette }, i}
		<option value={i}> {name} </option>
	{/each}
</select>

<button
	disabled={!image}
	on:click={async () => {
		if (image) colors = await generatePalette(image);
	}}
	class="flex items-center justify-center gap-1 w-full h-10 bg-gray-200 text-gray-800 rounded-md"
>
	<Icon src={Cog6Tooth} class="w-4 h-4" />
	Generate Palette
</button>


<PaletteInput bind:colors />
