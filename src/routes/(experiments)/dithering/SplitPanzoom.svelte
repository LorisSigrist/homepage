<script lang="ts">
	import { ArrowsRightLeft, Icon } from 'svelte-hero-icons';
	import { Panzoom, type TransformChangeEvent } from '$lib/interactions/panzoom';

	let container: HTMLDivElement | null = null;

	//The percentage of the screen that the split is at
	let split = 50;

	function clamp(value: number, min: number, max: number) {
		return Math.min(Math.max(value, min), max);
	}

	function drag(element: HTMLElement) {
		element.addEventListener('pointerdown', (event) => {
			const startX = event.clientX;
			const startSplit = split;

			const previousCursor = document.body.style.cursor;
			document.body.style.cursor = 'col-resize';

			const pointermove = (event: PointerEvent) => {
				const containerWidth = container ? container.clientWidth : window.innerWidth;
				const dx = event.clientX - startX;
				const inherentSplit = startSplit + (dx / containerWidth) * 100;
				split = clamp(inherentSplit, 0, 100);
			};

			const pointerup = () => {
				document.body.style.cursor = previousCursor;
				window.removeEventListener('pointermove', pointermove);
				window.removeEventListener('pointerup', pointerup);
				window.removeEventListener('pointercancel', pointerup);
			};

			window.addEventListener('pointermove', pointermove);
			window.addEventListener('pointerup', pointerup);
			window.addEventListener('pointercancel', pointerup);
		});
	}

	let pzTransform: string = 'transform: none;';

	function panzoomAction(element: HTMLElement) {
		const pz = new Panzoom(element);

		function panzoomChange(e: TransformChangeEvent) {
			const { x, y, scale, matrix } = e.detail;
			pzTransform = `transform: translate(${x}px, ${y}px) scale(${scale})`;
		}

		pz.addEventListener("panzoom:change", panzoomChange)

		return {
			destroy() {
				pz.removeEventListener("panzoom:change", panzoomChange);
				pz.destroy();
			}
		}
	}
</script>

<div class="pz-container" style:--split-point={split + '%'} bind:this={container}>
	<div class="w-full h-full grid place-items-center" use:panzoomAction>
		<div class="mask-left">
			<div style="{pzTransform}" class="w-full h-full origin-top-left grid place-items-center">
				<slot name="left" />
			</div>
		</div>

		<div class="mask-right">
			<div style="{pzTransform}" class="w-full h-full origin-top-left grid place-items-center">
				<slot name="right" />
			</div>
		</div>
	</div>
	<div class="handle relative shadow-lg" use:drag on:pointercancel|preventDefault={() => {}}>
		<div
			class="w-12 h-12 rounded-full bg-black absolute top-1/2 -translate-x-1/2 left-1/2 grid place-items-center"
		>
			<Icon src={ArrowsRightLeft} class="w-6 h-6 text-white" />
		</div>
	</div>
</div>

<style>
	.pz-container {
		position: relative;
		width: 100%;
		height: 100%;
		touch-action: none;
	}

	.mask-left {
		position: absolute;
		inset: 0;
		clip-path: inset(0 calc(100% - var(--split-point)) 0 0);
	}

	.mask-right {
		position: absolute;
		inset: 0;
		clip-path: inset(0 0 0 var(--split-point));
	}


	.handle {
		position: absolute;
		touch-action: none;
		top: 0;
		bottom: 0;
		left: var(--split-point);
		transform: translateX(-50%);
		width: 4px;
		background: rgba(0, 0, 0, 1);

		cursor: col-resize;
	}
</style>
