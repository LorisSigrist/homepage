<script lang="ts">
	import Select, { type Options } from './Select.svelte';
	import Slider from './Slider.svelte';
	import DimensionsInput from './ImageSizeInput.svelte';
	import ImageDataViewer from './ImageDataViewer.svelte';
	import { generateThresholdMap } from './thresholdMapGeneration/main';
	import type { ThresholdMapOptions } from './thresholdMapGeneration/generation';

	export let thresholdMap: ImageData | null;
	export let noiseIntensity: number;

	type ThresholdMapMode = `bayer` | 'blue_noise' | 'white_noise';
	let thresholdMode: ThresholdMapMode = "bayer"

	const thresholdMapOptions: Options<ThresholdMapMode> = [
		{
			name: 'Bayer',
			value: 'bayer'
		},
		{
			name: 'Blue Noise',
			value: 'blue_noise'
		},
		{
			name: 'White Noise',
			value: 'white_noise'
		}
	];

	let bayer_level = 3;
	let white_noise_width = 256;
	$: white_noise_height = white_noise_width;

	$: {
		if ('ImageData' in globalThis) {
			let options: ThresholdMapOptions;

			switch (thresholdMode) {
				case 'bayer':
					options = {
						mode: 'bayer',
						level: bayer_level
					};
					break;
				case 'blue_noise':
					options = {
						mode: 'blue_noise'
					};
					break;
				case 'white_noise':
					options = {
						mode: 'white_noise',
						width: white_noise_width,
						height: white_noise_height
					};
					break;
			}

			generateThresholdMap(options).then((map) => (thresholdMap = map));
		}
	}
</script>

<Select label="Threshold Map" options={thresholdMapOptions} bind:selected={thresholdMode} />

{#if thresholdMode === 'bayer'}
	<Slider label="Bayer Level ({bayer_level})" min={0} max={5} step={1} bind:value={bayer_level} />
{/if}

{#if thresholdMode === 'white_noise'}
	<DimensionsInput
		bind:width={white_noise_width}
		aspectRatio={1}
		minWidth={1}
		minHeight={1}
		maxHeight={3000}
		maxWidth={3000}
	/>
{/if}

<ImageDataViewer imageData={thresholdMap}>
	<span slot="placeholder">Loading Threshold Map</span>
</ImageDataViewer>

<Slider
	label="Noise Intensity ({noiseIntensity})"
	min={0}
	max={1.5}
	step={0.01}
	bind:value={noiseIntensity}
/>
