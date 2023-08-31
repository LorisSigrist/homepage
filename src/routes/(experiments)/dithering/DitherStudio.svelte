<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, Icon, XMark } from 'svelte-hero-icons';

	import Button from './primitives/Button.svelte';
	import { saveCanvasAsImage } from './utils';
	import SplitPanzoom from './SplitPanzoom.svelte';
	import Collapsible from './Collapsible.svelte';
	import DitheredImage, { type DitherConfig } from './DitheredImage.svelte';
	import DitherOptions from './DitherOptions.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		cancel: void;
	}>();

	let canvas_left: HTMLCanvasElement | null = null;
	let canvas_right: HTMLCanvasElement | null = null;

	let width = 300;
	$: height = Math.round(width / aspectRatio);

	export let image_data: ImageData;
	$: aspectRatio = calculateAspectRatio(image_data);

	function calculateAspectRatio(imgData: ImageData | null) {
		if (!imgData) return 1;
		return imgData.width / imgData.height;
	}

	async function save(canvas: HTMLCanvasElement) {
		if (!canvas) return;
		await saveCanvasAsImage(canvas, 'dithered', 'png');
	}

	let config_right: DitherConfig = {
		mode: 'ordered',
		width,
		height,
		thresholdMap: null,
		noiseIntensity: 0.08,
		palette: null,
		diffusionStrength: 1,
		diffusionMatrix: [[1]],
		diffusionMatrixOriginX: 0
	};

	let config_left = {
		mode: 'none',
		width: image_data.width,
		height: image_data.height,
		thresholdMap: null,
		noiseIntensity: 0.08,
		palette: null,
		diffusionStrength: 1,
		diffusionMatrix: [[1]],
		diffusionMatrixOriginX: 0
	} as DitherConfig;

	let options_left_open = false;
	let options_right_open = true;
</script>

<!--Main content-->
<section class="overflow-hidden select-none fixed inset-0">
	<div class="w-full h-full relative">
		<SplitPanzoom>
			<DitheredImage slot="left" bind:canvas={canvas_left} config={config_left} {image_data} />
			<DitheredImage slot="right" bind:canvas={canvas_right} config={config_right} {image_data} />
		</SplitPanzoom>
		<button
			class="absolute top-0 left-0 m-4 p-2 bg-black bg-opacity-40 rounded-full"
			on:click={() => dispatch('cancel')}
			title="Close Image & Reset"
		>
			<Icon src={XMark} class="w-5 h-5 text-white" />
		</button>
	</div>
</section>

<section class="gui-container touch-none pointer-events-none">
	<aside
		style="grid-area: left; align-self: end;"
		class="md:w-96 max-w-full max-h-full overflow-hidden"
	>
		<div class="p-2" style={options_left_open ? 'height: 100vh' : ''}>
			<Collapsible bind:open={options_left_open}>
				<svelte:fragment slot="header">
					<h1 class="font-bold">Options</h1>
					<Button
						on:click={() => {
							if (!canvas_left) return;
							save(canvas_left);
						}}
						disabled={!image_data}
					>
						<Icon src={ArrowDownTray} class="w-4 h-4" />
						Save
					</Button>
				</svelte:fragment>
				<DitherOptions bind:config={config_left} bind:image_data />
			</Collapsible>
		</div>
	</aside>
	<aside
		style="grid-area: right; align-self: end;"
		class="md:w-96 max-w-full max-h-full overflow-hidden"
	>
		<div class="p-2" style={options_right_open ? 'height: 100vh' : ''}>
			<Collapsible bind:open={options_right_open}>
				<svelte:fragment slot="header">
					<h1 class="font-bold">Options</h1>
					<Button
						on:click={() => {
							if (!canvas_right) return;
							save(canvas_right);
						}}
						disabled={!image_data}
					>
						<Icon src={ArrowDownTray} class="w-4 h-4" />
						Save
					</Button>
				</svelte:fragment>
				<DitherOptions bind:config={config_right} bind:image_data />
			</Collapsible>
		</div>
	</aside>
</section>

<style>
	.gui-container {
		position: fixed;
		inset: 0;

		/*
			on small screens: two rows aligned to the bottom
		*/
		display: grid;
		grid-template-areas: '.' 'left' 'right';
		grid-template-columns: 1fr;
		grid-template-rows: 1fr max-content max-content;
	}

	@media (min-width: 768px) {
		.gui-container {
			/*
				on large screens: two columns aligned to the right
			*/
			grid-template-areas: 'left . right';
			grid-template-columns: max-content 1fr max-content;
			grid-template-rows: 1fr max-content;
		}
	}
</style>
