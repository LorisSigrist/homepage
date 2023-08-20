<script lang="ts">
	import { ArrowsRightLeft, Icon } from 'svelte-hero-icons';
	import { Panzoom, type TransformChangeEvent } from '$lib/interactions/panzoom';
	import { clamp } from '$lib/math/clamp';

	export let direction: 'horizontal' | 'vertical' = 'horizontal';

	let container: HTMLDivElement | null = null;

	//The percentage of the screen that the split is at
	export let split = 50;

	function drag(element: HTMLElement) {
		element.addEventListener('pointerdown', (event) => {
			
			const startPx = direction === "vertical" ? event.clientY : event.clientX;
			const startSplit = split;

			const previousCursor = document.body.style.cursor;
			document.body.style.cursor = direction === "vertical" ? "ns-resize" : 'ew-resize';

			const pointermove = (event: PointerEvent) => {
				const containerWidth = container ? container.clientWidth : window.innerWidth;
				const containerHeight = container ? container.clientHeight : window.innerHeight;

				const containerSize = direction === "vertical" ? containerHeight : containerWidth;

				const newPx = direction === "vertical" ? event.clientY : event.clientX;

				const d = newPx- startPx;
				const inherentSplit = startSplit + (d / containerSize) * 100;
				split = clamp(inherentSplit, 0, 100);
			};

			const pointerup = () => {
				document.body.style.cursor = previousCursor; //reset cursor
				window.removeEventListener('pointermove', pointermove);
				window.removeEventListener('pointerup', pointerup);
				window.removeEventListener('pointercancel', pointerup);
			};

			window.addEventListener('pointermove', pointermove);
			window.addEventListener('pointerup', pointerup);
			window.addEventListener('pointercancel', pointerup);
		});

		return {
			destroy() {
				element.removeEventListener('pointerdown', () => {});
			}
		}
	}

	let pzTransform: string = 'transform: none;';

	function panzoomAction(element: HTMLElement) {
		const pz = new Panzoom(element);

		function panzoomChange(e: TransformChangeEvent) {
			const { matrix } = e.detail;
			pzTransform = `transform: ${matrix.toString()};` //matrix(${scale}, 0, 0, ${scale}, ${x}, ${y});`
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

<div class="pz-container" class:vertical={direction === "vertical"} style:--split-point={split + '%'} bind:this={container}>
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
			class="w-12 h-12 rounded-full bg-black grid place-items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			class:rotate-90={direction === 'vertical'}
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

	.vertical .mask-left {
		clip-path: inset(0 0 calc(100% - var(--split-point)) 0);
	}

	.mask-right {
		position: absolute;
		inset: 0;
		clip-path: inset(0 0 0 var(--split-point));
	}

	.vertical .mask-right {
		clip-path: inset(calc(var(--split-point)) 0 0 0);
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

		cursor: ew-resize;
	}

	.vertical .handle {
		top: var(--split-point);
		left: 0;
		right: 0;
		width: unset;
		transform: translateY(-50%);
		height: 4px;

		cursor: ns-resize;
	}

</style>
