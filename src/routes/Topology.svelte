<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { topology } from 'topology-renderer';

	//some commonjs fuckery disallows named imports here
	import colors from "tailwindcss/colors"
	const { stone , sky } = colors;

	let height = 1000;
	let width = 1000;

	function set_size() {
		height = document. documentElement.clientHeight;
		width = document.documentElement.clientWidth;
	}

	onMount(set_size);

	let background_color: [number, number, number];
	let line_color: [number, number, number];

	$: line_color =  hexToRGB($theme === 'dark' ? sky[950] : sky[200]);
	$: background_color = hexToRGB($theme === 'dark' ? stone[900] : stone[50])


	function hexToRGB(hex: string) : [number, number, number] {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);

		return [r, g, b];
	}
</script>

<svelte:window on:resize={set_size} />

<canvas
	class="fixed inset-0 -z-50 fade-in print:hidden"
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
