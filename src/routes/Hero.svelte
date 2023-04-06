<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { topology } from 'topology-renderer';

	let height = 1000;
	let width = 1000;

	function set_size() {
		height = document.documentElement.clientHeight;
		width = document.documentElement.clientWidth;
	}

	onMount(set_size);

	let background_color: [number, number, number];
	let line_color: [number, number, number];

	$: background_color = $theme === 'dark' ? [28, 25, 23] : [249, 250, 251];
	$: line_color = $theme === 'dark' ? [50, 50, 80] : [220, 220, 250];
</script>

<svelte:window on:resize={set_size} />

<section id="header" class="w-screen" style="height: calc(100vh - 4.5rem);">
	<canvas
		class="absolute inset-0 -z-50 fade-in"
		use:topology={{ width, height, background_color, line_color }}
	/>
	<div class="w-100 min-h-full container mx-auto px-4 grid place-items-center">
		<hgroup class="scale-in">
			<h1 class="text-6xl md:text-9xl font-black">Loris Sigrist</h1>
		</hgroup>
	</div>
</section>

<style>
	.fade-in {
		animation: fade-in 3s ease-in-out;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}

        50% {
            opacity: 0.75;
        }

		100% {
			opacity: 1;
		}
	}

    .scale-in {
        animation: scale-in 1.5s ease-in-out;
    }

    @keyframes scale-in {
        0% {
            transform: scale(0.9);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
