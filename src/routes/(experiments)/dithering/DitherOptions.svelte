<script lang="ts">
	import type { DitherConfig } from "./DitheredImage.svelte";
	import Tabs from "./Tabs.svelte";
	import ErrorDiffusionOptions from "./errorDiffusion/ErrorDiffusionOptions.svelte";
	import PaletteOptions from "./palette/PaletteOptions.svelte";
	import OrderedDitheringOptions from "./ordered/OrderedDitheringOptions.svelte";
    import DimensionsInput from "./ImageSizeInput.svelte";

    export let image_data: ImageData;
    export let config: DitherConfig;

    $: aspectRatio = calculateAspectRatio(image_data);

	function calculateAspectRatio(imgData: ImageData | null) {
		if (!imgData) return 1;
		return imgData.width / imgData.height;
	}

    $: config.height = Math.round(config.width / aspectRatio);
</script>

<section class="grid gap-8 pt-8 px-4 safe-padding-bottom">
    <div>
        <h2 class="text-base font-semibold leading-7 text-black mb-4">Output Options</h2>

        <DimensionsInput
            bind:width={config.width}
            {aspectRatio}
            minWidth={12}
            minHeight={12}
            maxHeight={5000}
            maxWidth={5000}
        />
    </div>

    <div class="grid gap-4">
        <h2 class="text-base font-semibold leading-7 text-black mb-2">Dithering Options</h2>

        <Tabs
            tabs={[
                { label: 'None', value: 'none' },
                { label: 'Ordered', value: 'ordered' },
                { label: 'Error Diffusion', value: 'error_diffusion' }
            ]}
            bind:selected={config.mode}
        />

        <div class={config.mode === 'error_diffusion' ? 'contents' : 'hidden'}>
            <ErrorDiffusionOptions
                bind:diffusionStrength={config.diffusionStrength}
                bind:diffusionMatrix={config.diffusionMatrix}
                bind:diffusionOriginX={config.diffusionMatrixOriginX}
            />
        </div>
        <div class={config.mode === 'ordered' ? 'contents' : 'hidden'}>
            <OrderedDitheringOptions 
            bind:thresholdMap={config.thresholdMap} 
            bind:noiseIntensity={config.noiseIntensity}
        />
        </div>
    </div>

    <!--Color Palette-->
    <div class="grid gap-3" class:hidden={config.mode === 'none'}>
        <h2 class="text-base font-semibold leading-7 text-black mb-2">Palette</h2>

        <PaletteOptions bind:palette={config.palette} image={image_data} />
    </div>
</section>

<style>
	.safe-padding-bottom {
		padding-bottom: max(env(safe-area-inset-bottom), 2rem);
	}
</style>