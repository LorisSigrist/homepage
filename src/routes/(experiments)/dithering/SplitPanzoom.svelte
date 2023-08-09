<script lang="ts">
	import panzoom from 'panzoom';
	import { ArrowsRightLeft, Icon } from 'svelte-hero-icons';

	let container : HTMLDivElement | null = null;

	//The percentage of the screen that the split is at
	let split = 50;

    function clamp(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }

	function drag(element: HTMLElement) {
		element.addEventListener('pointerdown', (event: MouseEvent) => {
			const startX = event.clientX;
			const startSplit = split;

			const previousCursor = document.body.style.cursor;
			document.body.style.cursor = 'col-resize';

			const mousemove = (event: MouseEvent) => {
				const containerWidth = container ? container.clientWidth : window.innerWidth;
				const dx = event.clientX - startX;
                const inherentSplit = startSplit + (dx / containerWidth) * 100;
				split = clamp(inherentSplit, 0, 100);
			};

			const mouseup = () => {
				document.body.style.cursor = previousCursor;
				window.removeEventListener('pointermove', mousemove);
				window.removeEventListener('pointerup', mouseup);
			};

			window.addEventListener('pointermove', mousemove);
			window.addEventListener('pointerup', mouseup);
		});
	}

	let transformCss = '';

	function panzoomAction(element: HTMLElement) {

		const pz = panzoom(element, {
			controller: {
				applyTransform: (transform) => {
					transformCss = `transform: translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`;
				},
				getOwner: () => element
			},
		});

		return {
			destroy: () => pz.dispose()
		};
	}
</script>

<div class="container" style:--split-point={split + '%'} bind:this={container}>
	<div class="w-full h-full grid place-items-center" use:panzoomAction>
		<div class="left">
			<div style={transformCss}>
				<slot name="left" />
			</div>
		</div>

		<div class="right">
			<div style={transformCss}>
				<slot name="right" />
			</div>
		</div>
	</div>
	<div class="handle relative shadow-lg" use:drag on:pointercancel|preventDefault={()=>{}}>
        <div class="w-12 h-12 rounded-full bg-black  absolute top-1/2 -translate-x-1/2 left-1/2 grid place-items-center">
            <Icon src={ArrowsRightLeft} class="w-6 h-6 text-white" />
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        height: 100%;
    }

	.left {
		position: absolute;
		inset: 0;
        display: grid;
        place-items: center;
		clip-path: inset(0 calc(100% - var(--split-point)) 0 0);
	}

	.right {
		position: absolute;
		inset: 0;
        display: grid;
        place-items: center;
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
