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

<canvas
	class="fixed inset-0 -z-50 fade-in"
	use:topology={{ width, height, background_color, line_color }}
	aria-hidden="true"
/>

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
</style>
