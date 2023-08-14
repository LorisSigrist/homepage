<script lang="ts">
	import '$lib/styles/bootstrap.css';

	let canvas: HTMLCanvasElement | null = null;

	let matrixWidth = 4;
	let matrixHeight = 4;

	type Matrix = number[][];


	function generateMatrix() {

        let maxDimension = Math.max(matrixWidth, matrixHeight);
        let level = Math.ceil(Math.log2(maxDimension)) ;


        const bayer = generateUnnormalizedBayerLevel(level - 1);

        const view = new Array(matrixHeight).fill(0).map(() => new Array(matrixWidth).fill(0));
        for(let y = 0; y < matrixHeight; y++) {
            for(let x = 0; x < matrixWidth; x++) {
                view[y][x] = bayer[y][x];
            }
        }

		//all the shades
		const shades = Array(matrixWidth * matrixHeight).fill(0).map((_, i) => i);

		const valuesInView = view.flat().flat().sort((a,b) => a - b);
		const matrix = new Array(matrixHeight).fill(0).map(() => new Array(matrixWidth).fill(0));

		for(let y = 0; y < matrixHeight; y++) {
			for(let x = 0; x < matrixWidth; x++) {
				const viewValue = view[y][x];
				const index = valuesInView.findIndex((value) => value === viewValue);
				const shade = shades[index];
				matrix[y][x] = shade;
			}
		}


		drawToCanvas(matrix);
	}

	function drawToCanvas(matrix: Matrix) {
		if (!canvas) {
			alert('Canvas not found');
			return;
		}
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			alert('Canvas context not found');
			return;
		}

		const normalized = normalize(matrix);

		for(let y = 0; y < matrixHeight; y++) {
            for(let x = 0; x < matrixWidth; x++) {
				const value = normalized[y][x] * 255;
				ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
				ctx.fillRect(x, y, 1, 1);
            }
        }
	}

	function normalize(matrix: Matrix): Matrix {
		const max = Math.max(...matrix.flat());
		const min = Math.min(...matrix.flat());

		return matrix.map((row) => row.map((cell) => (cell - min) / (max - min)));
	}

	function generateUnnormalizedBayerLevel(level: number): number[][] {
		if (level === 0)
			return [
				[0, 2],
				[3, 1]
			];

		const prev = generateUnnormalizedBayerLevel(level - 1);
		const next = new Array(prev.length * 2).fill(0).map(() => new Array(prev.length * 2).fill(0));

		for (let y = 0; y < prev.length; y++) {
			for (let x = 0; x < prev[y].length; x++) {
				next[y][x] = prev[y][x] * 4;
				next[y][x + prev.length] = prev[y][x] * 4 + 2;
				next[y + prev.length][x] = prev[y][x] * 4 + 3;
				next[y + prev.length][x + prev.length] = prev[y][x] * 4 + 1;
			}
		}

		return next;
	}
</script>

<label>
	<span>X</span>
	<input type="number" min="1" max="100" bind:value={matrixWidth} step="1" />
</label>

<label>
	<span>Y</span>
	<input type="number" min="1" max="100" bind:value={matrixHeight} step="1" />
</label>

<button on:click={generateMatrix}>Generate Matrix</button>

<canvas width={matrixWidth} height={matrixHeight} bind:this={canvas} />

<style>
	canvas {
		border: 1px solid black;
		height: 200px;
		image-rendering: pixelated;
	}
</style>
