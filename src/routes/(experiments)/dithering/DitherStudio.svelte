<script lang="ts">
	import '$lib/styles/bootstrap.css';
	import { ArrowDownTray, ChevronDown, ChevronUp, Icon, XMark } from 'svelte-hero-icons';

	import Button from './primitives/Button.svelte';
	import { saveCanvasAsImage } from './utils';
	import SplitPanzoom from './SplitPanzoom.svelte';
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
	</div>
</section>

<section class="gui-container touch-none pointer-events-none">
	<header class="header">
		<button
			class="p-2 bg-black bg-opacity-40 rounded-full touch-auto pointer-events-auto"
			on:click={() => dispatch('cancel')}
			title="Close Image & Reset"
		>
			<Icon src={XMark} class="w-5 h-5 text-white" />
		</button>
	</header>

	<aside
		style="overflow: hidden;"
		class="
		options-left
		touch-auto
		pointer-events-auto
		border border-gray-200
		rounded-md
		flex flex-col max-h-full
		"
	>
		<header
			class="py-4 px-4 flex-shrink-0 shadow-sm flex gap-2 items-center justify-between bg-white z-10"
		>
			<button class="contents" on:click={() => (options_left_open = !options_left_open)}>
				<Icon src={options_left_open ? ChevronDown : ChevronUp} class="w-6 h-6 text-gray-500" />
			</button>
			<div class="flex flex-1 items-center justify-between">
				<h1 class="font-bold">Original</h1>
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
			</div>
		</header>
		<div
			class:hidden={!options_left_open}
			class="bg-gray-50 max-h-full flex-1 overflow-y-scroll p-4 py-8 grid gap-8"
		>
			<DitherOptions bind:config={config_left} bind:image_data />
		</div>
	</aside>
	<aside
		style="overflow: hidden;"
		class="
		options-right
		touch-auto
		pointer-events-auto
		border border-gray-200
		rounded-md
		flex flex-col max-h-full
		"
	>
		<header
			class="py-4 px-4 flex-shrink-0 shadow-sm flex gap-2 items-center justify-between bg-white z-10"
		>
			<button class="contents" on:click={() => (options_right_open = !options_right_open)}>
				<Icon src={options_right_open ? ChevronDown : ChevronUp} class="w-6 h-6 text-gray-500" />
			</button>
			<div class="flex flex-1 items-center justify-between">
				<h1 class="font-bold">Original</h1>
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
			</div>
		</header>
		<div
			class:hidden={!options_right_open}
			class="bg-gray-50 max-h-full flex-1 overflow-y-scroll p-4 py-8 grid gap-8"
		>
			<DitherOptions bind:config={config_right} bind:image_data />
		</div>
	</aside>
</section>

<style>
	.gui-container {
		position: fixed;
		inset: 0;
		padding: 12px;
		gap: 12px;

		/*
			on small screens: two rows aligned to the bottom
		*/
		display: grid;
		grid-template-areas:
			'header'
			'left'
			'right';
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto auto;
	}

	.options-left {
		width: 100%;

		max-height: 40vh;
	}

	.options-right {
		width: 100%;

		max-height: 40vh;
	}

	.header {
		grid-area: header;
		align-self: start;
	}

	@media (min-width: 768px) {
		.gui-container {
			grid-template-rows: max-content 1fr;
			grid-template-columns: max-content 1fr max-content;
			grid-template-areas:
				'header header header'
				'left viewportOpts right';
		}

		.options-left {
			grid-area: left;
			align-self: end;
			width: 350px;

			max-height: 100%;
		}

		.options-right {
			grid-area: right;
			align-self: end;
			width: 350px;

			max-height: 100%;
		}
	}
</style>
