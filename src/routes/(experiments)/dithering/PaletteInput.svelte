<script lang="ts">
	import { Icon, Plus, XMark } from 'svelte-hero-icons';
	import { rgbToHex, type RGB, hexToRGB } from './utils';

	export let colors: RGB[];

	function addColor() {
		colors = [...colors, randomColor()];
	}

	function removeColor(index: number) {
		colors = colors.filter((_, i) => i !== index);
	}

	function onInput(e: Event, index: number) {
		const target = e.target as HTMLInputElement;
		const value = target.value;
		colors[index] = hexToRGB(value);
	}

	function randomColor() : RGB {
		return [Math.random() * 255, Math.random() * 255, Math.random() * 255].map(Math.round) as RGB;
	}
</script>

<ul class="grid gap-2 grid-cols-2">
	{#each colors as color, index}
        {@const hex = rgbToHex(color)}
		<li style="background-color: {hex}" class="relative rounded-md border h-10">
			<input
				type="color"
				value={hex}
				on:input={(e) => onInput(e, index)}
				class="absolute inset-0 w-full h-full opacity-0"
			/>

			<button
				on:click={() => removeColor(index)}
				class="absolute top-1/2 -translate-y-1/2 right-2 p-1 bg-black bg-opacity-40 rounded-full"
			>
				<Icon src={XMark} class="w-4 h-4 text-white" />
			</button>
		</li>
	{/each}
	<li>
		<button
			on:click={addColor}
			class="flex items-center justify-center gap-2 w-full h-10 bg-emerald-500 text-white rounded-md"
		>
			<Icon src={Plus} class="w-4 h-4" />
			<span>Add Color</span>
		</button>
	</li>
</ul>
