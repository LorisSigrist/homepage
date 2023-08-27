<script lang="ts">
	import PaletteInput from './PaletteInput.svelte';
	import { getPalette } from './palette/color-extraction';
	import { hexToRGB, type RGB } from './utils';

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

<ul>
	{#each presets as { name, palette: presetPalette }}
		<li>
			<button on:click={() => (colors = presetPalette)}> {name} </button>
		</li>
	{/each}

	<li>
		<button
			disabled={!image}
			on:click={async () => {
				if (image) colors = await generatePalette(image);
			}}
		>
			Generate
		</button>
	</li>
</ul>

<PaletteInput bind:colors />
